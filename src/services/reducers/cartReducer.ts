import  ACTIONS, {Action} from '../actionTypes/cartActions'

import { omitKey, twoDecimalsFormatter } from '../../util/utility'
import { QUANTITY_STEP } from '../../lib/config'

import Cart from '../../types/cart'




const addProduct = (state:Cart, action) => {

      const {product: {_id: id, image_url, name, price_per_kilo}, quantity, price} = action.payload

      const updatedQuantity = state.products[id] ? twoDecimalsFormatter(state.products[id].quantity + quantity): quantity
      const updatedPrice = twoDecimalsFormatter(updatedQuantity * price_per_kilo)

      const updatedCart:Cart = {
            products: {...state.products,
                        [id]: {
                              quantity: updatedQuantity,
                              imageUrl: image_url,
                              name: name,
                              pricePerKilo: price_per_kilo,
                              price: updatedPrice
                        }
                        
                  },
            totalPrice: twoDecimalsFormatter(state.totalPrice + price)
      }

    
      return updatedCart
}

const removeProduct = (state:Cart, action) => {

      const { id } = action.payload
      const newProducts = omitKey(id, state.products)

      const updatedCart:Cart = {
            products: newProducts,
            totalPrice: twoDecimalsFormatter(state.totalPrice - state.products[id].price)
      }

      return updatedCart
}


const increaseQuantity = (state:Cart, action)=> {
      const { id } = action.payload
      
      const currentProduct = state.products[id]
      const updatedQuantity = currentProduct.quantity + QUANTITY_STEP
      const updatedPrice = updatedQuantity * currentProduct.pricePerKilo

      const updatedCart:Cart = {
            products: {...state.products,
                  [id]: {
                              ...currentProduct,
                              quantity: updatedQuantity,
                              price: updatedPrice
                        }
                  },
            totalPrice: twoDecimalsFormatter(state.totalPrice + currentProduct.pricePerKilo * QUANTITY_STEP)
      }

      return updatedCart

}

const decreaseQuantity = (state:Cart, action)=> {

      const { id } = action.payload
  
      const currentProduct = state.products[id]
      const { quantity } = currentProduct

      if (quantity === QUANTITY_STEP) return removeProduct(state, action)

      const updatedQuantity = quantity - QUANTITY_STEP
      const updatedPrice = updatedQuantity * currentProduct.pricePerKilo


      const updatedCart:Cart = {
            products: {...state.products,
                  [id]: {
                              ...currentProduct,
                              quantity: updatedQuantity,
                              price: updatedPrice
                        }
                  },
            totalPrice: twoDecimalsFormatter(state.totalPrice - currentProduct.pricePerKilo * QUANTITY_STEP)
      }

      return updatedCart
}

const retrieveCart = (state:Cart, action)=> {
      return action.payload 
}

const reducer = (state:Cart, action:Action): Cart => {

      switch (action.type) {
            case ACTIONS.ADD_TO_CART: return addProduct(state, action);
            case ACTIONS.REMOVE_FROM_CART: return removeProduct(state, action);
            case ACTIONS.INCREASE: return increaseQuantity(state, action);
            case ACTIONS.DECREASE: return decreaseQuantity(state, action);
            case ACTIONS.RETRIEVE_FROM_STORAGE: return retrieveCart(state, action);
            default:  return state
      }
}

export default reducer