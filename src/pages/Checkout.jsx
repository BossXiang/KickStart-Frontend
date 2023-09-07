import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import RadioSelector from '../components/RadioSelector'
import CreditCard from '../components/CreditCard'
import { useCart } from '../contexts/CartContext'
import '../styles/Checkout.scss'
import {ValidateEmail} from '../utils/helper.js'

const DeliveryDetail = ({ submitHandle }) => {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [country, setCountry] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [zip, setZip] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = {
      email, firstName, lastName, phone, country, address, city, zip
    }
    submitHandle(formData) // Call the parent's onSubmit callback with the form data
  }

  return (
    <div className='deliveryContainer'>
      <h2>Delivery details</h2>
      <form onSubmit={handleSubmit}>
        <label>Email for order confirmation*</label>
        <input type="text" name="email" value={email} required onChange={(e) => setEmail(e.target.value)}/>
        <label>First name*</label>
        <input type="text" name="firstName" value={firstName} required onChange={(e) => setFirstName(e.target.value)}/>
        <label>Last name*</label>
        <input type="text" name="lastName" value={lastName} required onChange={(e) => setLastName(e.target.value)}/>
        <label>Phone*</label>
        <input type="text" name="phone" value={phone} required pattern="[0-9]{10}" onChange={(e) => setPhone(e.target.value)}/>
        <label>Country*</label>
        <input type="text" name="country" value={country} required onChange={(e) => setCountry(e.target.value)}/>
        <label>Address*</label>
        <input type="text" name="address" value={address} required onChange={(e) => setAddress(e.target.value)}/>
        <label>City*</label>
        <input type="text" name="city" value={city} required onChange={(e) => setCity(e.target.value)}/>
        <label>Zip / Postal code*</label>
        <input type="text" name="zip" value={zip} required onChange={(e) => setZip(e.target.value)}/>
        <button className="continueBtn" type="submit">Continue</button>
      </form>
    </div>
  )
}

const DeliveryMethod = ({ submitHandle }) => {
  const shippingOptions = ["Bulgaria", "European", "USA"]
  const pickUpOptions = ["The Art of ET", "ET Museum"]
  const [selectedDelivery, setSelectedDelivery] = useState(shippingOptions[0])
  
  return (
    <div>
      <h2>Delivery Method</h2>
      <label>Shipping & delivery</label>
      <RadioSelector setOption={setSelectedDelivery} selectedOption={selectedDelivery} options={shippingOptions}/>
      <label>Pickup</label>
      <RadioSelector setOption={setSelectedDelivery} selectedOption={selectedDelivery} options={pickUpOptions}/>
      <button className="continueBtn" type="button" onClick={(e) => submitHandle(null)}>Continue</button>
    </div>
  )
}

const Payment = ({ submitHandle }) => {
  const paymentOptions = ["Credit/Debit Cards", "PayPal", "Cash on Delivery"]
  const [selectedPayment, setSelectedPayment] = useState("Credit/Debit Cards")

  const PayPal = () => {
    return (
      <div className='paypalContainer'>
        <label>Once you click to proceed, you will be redirected to PayPal</label>
      </div>
    )
  }

  const Cash = () => {
    return (
      <div className='cashContainer'>
        <label>Please pay on the delivery</label>
      </div>
    )
  }

  return (
    <div>
      <h2>Payment</h2>
      <RadioSelector setOption={setSelectedPayment} selectedOption={selectedPayment} options={paymentOptions}/>
      { selectedPayment === "Credit/Debit Cards" ? <CreditCard /> : <div/> }
      { selectedPayment === "PayPal" ? <PayPal /> : <div/> }
      { selectedPayment === "Cash on Delivery" ? <Cash /> : <div/> }
      <button className="continueBtn" type="button" onClick={(e) => submitHandle(null)}>Continue</button>
    </div>
  )
}

const Review = ({ submitHandle }) => {
  return (
    <div>
      <h2>Review</h2>
      <label>Review the order details above, and place your order when you’re ready.</label>
      <div className='checkboxContainer'>
        <input
          type="checkbox"
          name="terms"
          id="TandC"
        />
        <label htmlFor="TandC">I agree to the Terms & Conditions</label>
      </div>
      <div className='checkboxContainer'>
        <input
          type="checkbox"
          name="terms"
          id="EandS"
        />
        <label htmlFor="EandS">I agree to receive marketing communications via email and/or SMS to any emails and phone numbers added above.</label>
      </div>
      <button className="continueBtn" type="button" onClick={(e) => submitHandle(null)}>Continue</button>
    </div>
  )
}

const Checkout = () => {
  const { cartItems } = useCart()
  const cartTotal = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0)
  // const [status, setStatus] = useState("DeliveryDetail")
  const [status, setStatus] = useState("Payment")
  const [editableProcedures, setEditableProcedures] = useState(["DeliveryDetail"])

  function curatedProcedure(procedureTitle) {
    if(!editableProcedures.includes(procedureTitle)) {
      const updatedProcedures = [...editableProcedures, procedureTitle]
      setEditableProcedures(updatedProcedures)
    }
  }

  function setToStatus(newStatus) {
    if(newStatus != null) {
      setStatus(newStatus)
      return
    }
    switch (status) {
      case "DeliveryDetail":
        setStatus("DeliveryMethod")
        curatedProcedure("DeliveryMethod")
        break
      case "DeliveryMethod":
        setStatus("Payment")
        curatedProcedure("Payment")
        break
      case "Payment":
        setStatus("Review")
        curatedProcedure("Review")
        break
      case "Review":
        alert("Placed the order!")
        break
      default:
        break
    }
  }

  function validateFormData(formData) {
    console.log(ValidateEmail(formData.email))
  }

  function handleSubmit(formData) {
    if(status === "DeliveryDetail") {
      console.log('Form Data:', formData)
      validateFormData(formData)
    }
    setToStatus(null)
  }

  const ProcedureTitle = ({title}) => {
    const handleClick = setToStatus.bind(null, title)

    return (
      <div className='procedureTitle'>
        <p className="title">{title}</p>
        { editableProcedures.includes(title) ? <p className="edit" onClick={handleClick}>Edit</p> : <div/>}
      </div>
    )
  }

  return (
    <div>
      <Header />
      <div className="checkoutContainer">
        <div className="procedureContainer">
          { status === "DeliveryDetail" ? <DeliveryDetail submitHandle={handleSubmit} /> : <ProcedureTitle title={"DeliveryDetail"} /> }
          <div className="separator"></div>
          { status === "DeliveryMethod" ? <DeliveryMethod submitHandle={handleSubmit} /> : <ProcedureTitle title={"DeliveryMethod"} /> }
          <div className="separator"></div>
          { status === "Payment" ? <Payment submitHandle={handleSubmit} /> : <ProcedureTitle title={"Payment"} /> }
          <div className="separator"></div>
          { status === "Review" ? <Review submitHandle={handleSubmit} /> : <ProcedureTitle title={"Review"} /> }
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
