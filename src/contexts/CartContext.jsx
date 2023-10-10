import React, { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    const existingCartItems =
      JSON.parse(localStorage.getItem('cartItems')) || []
    setCartItems(existingCartItems)
  }, [])

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => {
      return (
        (cartItem.id === item.id &&
          cartItem.size === item.size &&
          cartItem.prompt === item.prompt) ||
        (cartItem.id === item.id &&
          cartItem.color === item.color &&
          cartItem.prompt === item.prompt)
      )
    })

    if (existingItem) {
      const updatedCartItems = cartItems.map((cartItem) => {
        if (
          (cartItem.id === item.id &&
            cartItem.size === item.size &&
            cartItem.prompt === item.prompt) ||
          (cartItem.id === item.id &&
            cartItem.color === item.color &&
            cartItem.prompt === item.prompt)
        ) {
          return { ...cartItem, quantity: cartItem.quantity + item.quantity }
        }
        return cartItem
      })
      setCartItems(updatedCartItems)
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
    } else {
      const updatedCartItems = [...cartItems, item]
      setCartItems(updatedCartItems)
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
    }
  }

  const removeFromCart = (itemId, size, color, prompt) => {
    const updatedCartItems = cartItems.filter((item) => {
      return (
        item.id !== itemId ||
        item.size !== size ||
        item.color !== color ||
        item.prompt !== prompt
      )
    })
    setCartItems(updatedCartItems)
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
  }

  const clearCart = () => {
    const updatedCartItems = []
    setCartItems(updatedCartItems)
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
  }

  const handleQuantityChange = (itemId, itemSize, newQuantity) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId && item.size === itemSize) {
        return { ...item, quantity: newQuantity }
      }
      return item
    })
    setCartItems(updatedCartItems)
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        handleQuantityChange,
      }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
