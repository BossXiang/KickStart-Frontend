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
          <h2 className=''></h2>
        </div>
        <div className='newArrivalContainer'>

        </div>
        <div className='productContainer'>

        </div>
      </Container>
      <Footer />
    </div>
  )
}

export default Shop