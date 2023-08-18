import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Container } from 'react-bootstrap'
import '../styles/Shop.scss'

const Shop = () => {
  return (
    <div className='shopContainer'>
      <Header />
      <Container className="my-5">
        <div className='bestSellerContainer'>
          <h2 className='title'>Best Sellers</h2>
          <div className='productContainer'>
            <div className='product'></div>
            <div className='product'></div>
            <div className='product'></div>
            <div className='product'></div>
            <div className='product'></div>
          </div>
        </div>
        <div className='newArrivalContainer'>
          <h2 className='title'>New Arrival</h2>
          <div className='productContainer'>
            <div className='product'></div>
            <div className='product'></div>
            <div className='product'></div>
            <div className='product'></div>
            <div className='product'></div>
          </div>
        </div>
        <div className='allProductContainer'>
          <h2 className='title'>Products</h2>
          <div className='productContainer'>
            <div className='product'></div>
            <div className='product'></div>
            <div className='product'></div>
            <div className='product'></div>
            <div className='product'></div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  )
}

export default Shop