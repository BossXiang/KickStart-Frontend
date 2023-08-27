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
    const existingItem = cartItems.find(
      (cartItem) => cartItem.id === item.id && cartItem.size === item.size
    )

    if (existingItem) {
      const updatedCartItems = cartItems.map((cartItem) => {
        if (cartItem.id === item.id && cartItem.size === item.size) {
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

  const removeFromCart = (itemId, size) => {
    const updatedCartItems = cartItems.filter(
      (item) => item.id !== itemId || item.size !== size
    )

    setCartItems(updatedCartItems)
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
  }
  const handleQuantityChange = (itemId, itemSize, newQuantity) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId && item.size == itemSize) {
        return { ...item, quantity: newQuantity }
      }
      return item
    })
    setCartItems(updatedCartItems)
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
  }

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, handleQuantityChange }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
