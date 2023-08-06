import React from 'react'
import Home from './pages/home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Shop from './pages/shop'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </Router>
  )
}

export default App
