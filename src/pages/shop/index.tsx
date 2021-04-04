import React, { useState, useEffect, useReducer } from 'react'
import Head from 'next/head'

import Section from '../../components/Section/Section'
import Loader from '../../components/Loader/Loader'
import Modal from '../../components/Modal/Modal'
import Button from '../../components/Button/Button'
import ProductCard from '../../components/ProductCard/ProductCard'

import reducer from '../../services/reducers/cartReducer'


import { SERVER, QUANTITY_STEP } from '../../lib/config'
import {fetchGetJSON, fetchPostJSON} from '../../util/apiHelpers'
import {twoDecimalsFormatter} from '../../util/utility'
import getStripe from '../../util/getStripe'
import CART_ACTIONS from '../../services/actionTypes/cartActions'

import { Product } from '../../types/product'
import  Cart  from '../../types/cart'

import styles from '../../styles/pages/Shop.module.scss'

const cartInitialState:Cart = {
      products: {},
      totalPrice: 0
}

enum QUANTITY_ACTIONS {
      DECREASE = 'DECREASE',
      INCREASE = 'INCREASE',
}



const Shop = () => {

      const [cart, dispatchCart] = useReducer(reducer, cartInitialState)
      const [products, setProducts] = useState<Product[]>([])
      const [quantity, setQuantity] = useState({})
      const [loading, setLoading] = useState(true)
      const [error, setError] = useState(false)
      const [showCart, setShowCart] = useState(false)
      const [initialized, setInitialized] = useState(false)
      const [checkoutLoading, setCheckoutLoading] = useState(false)

      //GET PRODUCTS FROM DB AND, IF PRESENT, THE CART FROM LOCAL STORAGE
      useEffect(() => {
            fetchGetJSON(SERVER + '/api/products')
            .then(response => {
                  if(!response.success) return setError(true)
                  setProducts(response.data)
                  setLoading(false)
            })
            setInitialized(true)
            const localCart = localStorage.getItem("cart")
            if(!localCart) return
            dispatchCart({type: CART_ACTIONS.RETRIEVE_FROM_STORAGE, payload: JSON.parse(localCart)})
      
      }, [])

      //ASSIGN AN ARBITRARY QUANTITY FOR EACH PRODUCT (I SHOULD UPDATE THE DB MODEL USING UNITS AND PRICE PER UNIT INSTEAD OF KILOS, AND THEN UPDATE STRIPE LINE_ITEMS TOO)
      useEffect(()=>{
            let quantityInitialState = {}
            products.forEach(product => {

                  quantityInitialState = {
                        ...quantityInitialState,
                        [product._id]: 1
                  }
            })
            setQuantity(quantityInitialState)

      },[products])

      //SAVE CART
      useEffect(() => {
            if(!initialized) return
            localStorage.setItem("cart",  JSON.stringify(cart))
      },[dispatchCart, cart])
      

      //HANDLE QUANTITY FROM THE PRODUCT CARD (NOT CART)
     const handleQuantity = (id:string, action:string): void => {
           
            switch (action) {
                  case QUANTITY_ACTIONS.DECREASE:
                        if (quantity[id] === 0) break
                        setQuantity({
                              ...quantity,
                              [id] : twoDecimalsFormatter(quantity[id] - QUANTITY_STEP)
                        });
                        break
                  case QUANTITY_ACTIONS.INCREASE:
                        setQuantity({
                              ...quantity,
                              [id] : twoDecimalsFormatter(quantity[id] + QUANTITY_STEP)
                        })
                        break
            }
     }

     //SUBMIT THE CART AND CALL STRIPE
     const handleSubmitCart: React.FormEventHandler<HTMLFormElement> = async (e) => {
            e.preventDefault();
            setCheckoutLoading(true)
            
            const response = await fetchPostJSON('/api/checkout_sessions', {
            cart: cart,
            });
      
            if (response.statusCode === 500) {
            console.error(response.message);
            return;
            }
            const stripe = await getStripe();
            const { error } = await stripe!.redirectToCheckout({sessionId: response.id});
            console.warn(error.message);
            setCheckoutLoading(false)
    };
     
  
    
      return (
            <>
            <Head>
                  <title>Shop - BootCooks</title>
            </Head>
           <main>
                 <Section 
                 title="Shop">
                       <div className={styles.cartIcon} onClick={() => setShowCart(true)}>
                              <img src="/SVG/cart.svg" alt="Cart icon" />
                              <div>{Object.keys(cart.products).length}</div>
                       </div>

                       {products.length > 0 && 
                              <div className={styles.container}>
                                                {
                                                      products.map(product => { 
                                                                  const curQuantity = quantity[product._id]
                                                                  return (
                                                                        <ProductCard 
                                                                        key={product._id}
                                                                        product={product}
                                                                        quantity={curQuantity}
                                                                        onDecrease={() => handleQuantity(product._id, QUANTITY_ACTIONS.DECREASE)}
                                                                        onIncrease={() => handleQuantity(product._id, QUANTITY_ACTIONS.INCREASE)}
                                                                        onAddToCart={() => dispatchCart({type: CART_ACTIONS.ADD_TO_CART, payload: {product: product, quantity: curQuantity, price: curQuantity * product.price_per_kilo}})}/>
                                                                  )
                                                            }
                                                      )
                                                }
                              </div>
                       }

                        {(loading && !error)&& <Loader color='black' size='8vw'/>}
                        {error && <div className={styles.message}><h2>An error occurred. Please try again.</h2></div>}



                       {/* CART */}
                        <Modal show={showCart} close={()=>setShowCart(false)}>
                              <div className={styles.cart}>
                                    <h2>Cart</h2>
                                    {
                                          Object.keys(cart.products).map(id => {
                                                const currentProduct = cart.products[id]
                                                return (
                                                      <div key={id} className={styles.cartItem}>
                                                            <div className={styles.left}>
                                                                  <img src={currentProduct.imageUrl} alt={currentProduct.name}/>
                                                                  <div>
                                                                        <h3>{currentProduct.name}</h3>
                                                                        <p>Quantity: {currentProduct.quantity}Kg</p>
                                                                        <div>
                                                                              <Button onClick={()=>{dispatchCart({type: CART_ACTIONS.DECREASE, payload: {id: id}})}}>&#45;</Button>
                                                                              <Button onClick={()=>{dispatchCart({type: CART_ACTIONS.INCREASE, payload: {id: id} })}}>&#43;</Button>
                                                                              <Button onClick={()=>{dispatchCart({type: CART_ACTIONS.REMOVE_FROM_CART, payload: {id: id} })}}>Delete</Button>
                                                                        </div>
                                                                        
                                                                  </div>                                                                      
                                                            </div>
                                                            <div>
                                                                  <p>{currentProduct.price.toFixed(2)}€</p>
                                                            </div>
                                                      </div>  
                                                )
                                          })  
                                    }
                                    <div className={styles.total}>
                                          <h3>TotalPrice: {cart.totalPrice.toFixed(2)}€</h3>
                                          <Button disabled={cart.totalPrice === 0} onClick={handleSubmitCart}>Checkout</Button>
                                    </div>
                                    {checkoutLoading && <Loader color='black' size='8vw'/>}
                              </div>
                        </Modal>
                 </Section>
           </main>
           </>
      )
}

export default Shop
