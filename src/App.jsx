import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Shop from './pages/Shop'
import OurWork from './pages/OurWork'
import AboutUs from './pages/AboutUs'
import Item from './pages/Item'
import Checkout from './pages/Checkout'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { CartProvider } from './contexts/CartContext'
import ProductDetail from './pages/ProductDetail'
import Completion from './pages/Completion'

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ourwork" element={<OurWork />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/item" element={<Item />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/completion/:orderId" element={<Completion />} />
        </Routes>
      </Router>
    </CartProvider>
  )
}

export default App
