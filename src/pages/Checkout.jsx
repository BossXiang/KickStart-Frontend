import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useCart } from '../contexts/CartContext'
import '../styles/Checkout.scss'

const Checkout = () => {
  const { cartItems } = useCart()
  const cartTotal = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0)
  return (
    <div>
      <Header />
      <div className="checkoutContainer">
        <div className="deliveryContainer">
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
          <p className="steps">Delivery Method</p>
          <div className="separator"></div>
          <p className="steps">Payment</p>
          <div className="separator"></div>
          <p className="steps">Review & Place order</p>
        </div>
        <aside className="summaryContainer">
          <div className="summary">
            <div className="summaryTitle">Order Summary</div>
            {cartItems.map((item, index) => (
              <div className="item" key={index}>
                <div className="imgContainer">
                  <img src={item.imgSource} alt="Product" />
                </div>
                <div className="itemInfo">
                  <div className="name">{item.title}</div>
                  <div className="info">
                    <div>Qty:{item.quantity}</div>
                    <div>Size:{item.size}</div>
                  </div>
                </div>
                <div className="price">
                  <div>Price:${item.quantity * item.price}</div>
                </div>
              </div>
            ))}
            <div className="paymentDetails">
              <div>
                <div>Items</div>
                <div>${cartTotal}</div>
              </div>
              <div>
                <div>Delivery</div>
                <div>Free</div>
              </div>
              <div>
                <div>Sales Tax</div>
                <div>$0</div>
              </div>
            </div>
            <div className="total">
              <div>Total</div>
              <div>${cartTotal}</div>
            </div>
          </div>
        </aside>
      </div>
      <Footer />
    </div>
  )
}

export default Checkout
