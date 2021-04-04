import Cart from '../../types/cart'
import { Product } from '../../types/product'

export type Action = 
      | {type:  ACTIONS.ADD_TO_CART, payload: {product: Product, quantity: number, price: number}}
      | {type:  ACTIONS.DECREASE |  ACTIONS.INCREASE | ACTIONS.REMOVE_FROM_CART , payload: {id: string}}
      | {type:  ACTIONS.RETRIEVE_FROM_STORAGE, payload: Cart}
      

enum ACTIONS {
      ADD_TO_CART = 'ADD_TO_CART',
      REMOVE_FROM_CART = 'REMOVE_FROM_CART',
      INCREASE = 'INCREASE',
      DECREASE = 'DECREASE',
      RETRIEVE_FROM_STORAGE = 'RETRIEVE_FROM_STORAGE',
}

export default ACTIONS

