import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/Completion.scss'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Completion = () => {
  const { orderId } = useParams();
  const navigate = useNavigate()
  
  const handleViewOrder = () => {
    navigate(`/searchOrder?id=${orderId}`)
  }

  return (
    <div>
      <Header />
      <div className='completionContainer'>
        <div className='transaction'>
          <h1>Transaction completed!</h1>
          <p><strong>Order ID : {orderId}</strong></p>
          <button onClick={handleViewOrder} class="viewOrder">View order</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Completion
