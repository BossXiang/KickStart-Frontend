import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Shop from './pages/Shop'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
