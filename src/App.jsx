import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Shop from './pages/Shop'
import MyWork from './pages/MyWork'
import AboutUs from './pages/AboutUs'
import Item from './pages/Item'
import Checkout from './pages/Checkout'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProductDetail from './pages/ProductDetail'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mywork" element={<MyWork />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/item" element={<Item />} />
		<Route path="/checkout" element={<Checkout />} />
		<Route path="/product/:productId" element={<ProductDetail />} /> 
      </Routes>
    </Router>
  )
}

export default App
