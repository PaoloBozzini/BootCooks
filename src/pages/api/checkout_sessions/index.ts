import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import {validateCartItems} from '../../../util/stripeHelpers'
import { fetchGetJSON } from '../../../util/apiHelpers';
import {SERVER} from '../../../lib/config'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27',
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method === 'POST') {
    const cart = req.body.cart;
    try {
      const responseDB = await fetchGetJSON(SERVER + '/api/products')
      if(!responseDB.success) throw new Error('DB access failed')
      const line_items = validateCartItems(responseDB.data, cart.products, 'eur');
     
      // Validate the amount that was passed from the client.
      if (cart.totalPrice <= 0) {
        throw new Error('Invalid amount.');
      }

      const params: Stripe.Checkout.SessionCreateParams = {
        submit_type: 'pay',
        mode: 'payment',
        payment_method_types: ['card'],
        billing_address_collection: 'required',
        success_url: `${req.headers.origin}/shop/result?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/shop`,
        line_items
      };

      const checkoutSession: Stripe.Checkout.Session = await stripe.checkout.sessions.create(
        params
      );

      res.status(200).json(checkoutSession);
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}