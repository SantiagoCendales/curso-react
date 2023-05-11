import { createContext, useReducer } from "react";
import { cartReducer, cartInitialState, ACTION_TYPES } from "../components/reducers/cart";

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, cartInitialState)

  const addCart = product => dispatch({
    type: ACTION_TYPES.ADD_TO_CART,
    payload: product
  })

  const removeFromCart = product => dispatch({
    type: ACTION_TYPES.REMOVE_CART,
    payload: product
  })

  const clearCart = () => dispatch({
    type: ACTION_TYPES.CLEAR_CART
  })

  return (
    <CartContext.Provider value={{
      cart,
      addCart,
      clearCart,
      removeFromCart
    }}>
      {children}
    </CartContext.Provider>
  )
}