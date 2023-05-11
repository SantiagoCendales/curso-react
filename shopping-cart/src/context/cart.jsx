import { createContext, useState } from "react";

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const [cart, setCart] = useState([])
  
  const addCart = product => {
    // Check if the product is already in the cart
    const productInCartIndex = cart.findIndex(item => item.id === product.id)
    if(productInCartIndex >= 0) {
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity += 1
      return setCart(newCart)
    }
    // Product is not in cart
    setCart(value => ([...value, {...product, quantity: 1}]))
  }

  const clearCart = () => {
    setCart([])
  }
  return (
    <CartContext.Provider value={{
      cart,
      addCart,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  )
}