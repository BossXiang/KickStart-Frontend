import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/Checkout.scss'

const Checkout = () => {

  return (
    <div>
      <Header />
      <div className='checkoutContainer'>
        <div className='deliveryContainer'>
          <h2>Delivery details</h2>
          <form action="">
            <label>Email for order confirmation*</label>
            <input type="text" />
            <label>First name*</label>
            <input type="text" />
            <label>Last name*</label>
            <input type="text" />
            <label>Phone*</label>
            <input type="text" />
            <label>Country*</label>
            <input type="text" />
            <label>Address*</label>
            <input type="text" />
            <label>City*</label>
            <input type="text" />
            <label>Zip / Postal code*</label>
            <input type="text" />
            <button className="continueBtn">Continue</button>
          </form>
          <p className='steps'>Delivery Method</p>
          <div className='separator'></div>
          <p className='steps'>Payment</p>
          <div className='separator'></div>
          <p className='steps'>Review & Place order</p>
        </div>
        <aside className='summaryContainer'>
          <p>Order Summary</p>

        </aside>
        
      </div>
      <Footer />
    </div>
  )
}

export default Checkout
