import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Container } from 'react-bootstrap'
import '../styles/Home.scss'

const Shop = () => {
  return (
    <div className='homeContainer'>
      <Header />
      <Container className="my-5">
        <h1>Shop page</h1>
        <p>some items</p>
      </Container>
      <Footer />
    </div>
  )
}

export default Shop