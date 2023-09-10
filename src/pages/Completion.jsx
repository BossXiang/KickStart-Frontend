import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/Completion.scss'
import { useParams } from 'react-router-dom'

const Completion = () => {
  const { orderId } = useParams();
  
  return (
    <div>
      <Header />
      <div className='completionContainer'>
        <div className='transaction'>
          <h1>Transaction completed!</h1>
          <p>Order ID : {orderId}</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Completion
