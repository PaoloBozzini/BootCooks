import React from 'react'
import { useColor } from 'color-thief-react'


import Button from '../Button/Button'

import styles from './ProductCard.module.scss'

import {shade, twoDecimalsFormatter} from '../../util/utility'

import  { Product } from '../../types/product'

interface ProductCardProps {
      product: Product;
      quantity: number;
      onIncrease: (id:number, action:any) => void;
      onDecrease: (id:number, action:any) => void;
      onAddToCart: React.Dispatch<{type: string, payload: {product:any, quantity:number, price:number}}>;
}


const ProductCard:React.FC<ProductCardProps> = ({product, quantity, onIncrease, onDecrease, onAddToCart}) => {
      const { data, loading, error } = useColor(product.image_url, 'hex', {quality: 5000})
      const lightenColor = loading || error? '#FFEACF' : shade(data, .45)
      const color = loading || error? '#8C1F33' : data
      const price = twoDecimalsFormatter(quantity * product.price_per_kilo)

      return (
            <div className={styles.container}>
                  <img src={product.image_url} alt={product.name}/>        
                  <div className={styles.card} style={{backgroundColor: color, border: `1px solid ${color}`}}>
                        <div className={styles.title}>
                              <h3>{product.name}</h3>
                              <p>{product.price_per_kilo.toFixed(2)}€/Kg</p>
                              <p>Farmer: {product.farmer}</p> 
                        </div>
      
                        <div className={styles.price}>
                              <p>Quantity: <b>{quantity}Kg</b></p>
                              <div>
                                          <Button onClick={onDecrease} disabled={quantity === 0} white hover={lightenColor}>&#45;</Button>
                                          <Button onClick={onIncrease} white hover={lightenColor}>&#43;</Button>
                              </div>
                              <p>Price: <b>{price.toFixed(2)}€</b></p>
                             
                        </div>
                        <Button onClick={onAddToCart} disabled={quantity === 0} white hover={lightenColor}>Add to cart</Button>
                  </div>
            </div>
      )
}

export default ProductCard
