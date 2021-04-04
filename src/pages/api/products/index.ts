import { NextApiRequest, NextApiResponse } from 'next';


import dbConnect from "../../../util/dbConnect";
import Product from "../../../model/Product";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const products = await Product.find();
        res.status(200).json({ success: true, data: products });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const product = await Product.insertMany(
          req.body
        );
        res.status(201).json({ success: true, data: product });
      } catch (error) {
            console.log(error);
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
