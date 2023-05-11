export const cartInitialState = JSON.parse(localStorage.getItem('cart')) || []

export const ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_CART: 'REMOVE_CART',
  CLEAR_CART: 'CLEAR_CART'
}

const updateLocalStorage = cart => {
  localStorage.setItem('cart', JSON.stringify(cart))
}

export const cartReducer = (state, action ) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TO_CART: {
        // Check if the product is already in the cart
        const productInCartIndex = state.findIndex(item => item.id === action.payload.id)
        if(productInCartIndex >= 0) {
          const newState = structuredClone(state)
          newState[productInCartIndex].quantity += 1
          updateLocalStorage(newState)
          return newState
        }
        // Product is not in cart
        const newCartState = [...state, {...action.payload, quantity: 1}]
        updateLocalStorage(newCartState)
        return newCartState
      }
    case ACTION_TYPES.REMOVE_CART: {
        const productInCartIndex = state.findIndex(item => item.id === action.payload.id)
        if(productInCartIndex === -1) return
        const newCart = structuredClone(state)
        if(newCart[productInCartIndex].quantity <= 1) {
          newCart.splice(productInCartIndex, 1)
        } else {
          newCart[productInCartIndex].quantity -= 1
        }
        const newState = newCart
        return newState
      }
    case ACTION_TYPES.CLEAR_CART:
      updateLocalStorage([])
      return []
    default:
      return state
  }
}