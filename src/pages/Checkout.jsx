import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import RadioSelector from '../components/RadioSelector'
import { useCart } from '../contexts/CartContext'
import '../styles/Checkout.scss'
import {ValidateEmail} from '../utils/helper.js'
import Payment from '../components/Payment'
import { createOrder } from '../plugins/api/api_service.ts'
import { useNavigate } from 'react-router-dom';

const DeliveryDetail = ({ submitHandle, deliveryInfo }) => {
  const [email, setEmail] = useState(deliveryInfo.email || '')
  const [firstName, setFirstName] = useState(deliveryInfo.firstName || '')
  const [lastName, setLastName] = useState(deliveryInfo.lastName || '')
  const [phone, setPhone] = useState(deliveryInfo.phone || '')
  const [country, setCountry] = useState(deliveryInfo.country || '')
  const [address, setAddress] = useState(deliveryInfo.address || '')
  const [city, setCity] = useState(deliveryInfo.city || '')
  const [zip, setZip] = useState(deliveryInfo.zip || '')

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
        <input type="text" name="phone" value={phone} required onChange={(e) => setPhone(e.target.value)}/>
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

const DeliveryMethod = ({ submitHandle, deliveryMethod }) => {
  const shippingOptions = ["Home delivery"]
  // const shippingOptions = ["Bulgaria", "European", "USA"]
  // const pickUpOptions = ["The Art of ET", "ET Museum"]
  const [selectedDelivery, setSelectedDelivery] = useState(deliveryMethod || shippingOptions[0])
  return (
    <div>
      <h2>Delivery Method</h2>
      <label>Shipping & delivery</label>
      <RadioSelector setOption={setSelectedDelivery} selectedOption={selectedDelivery} options={shippingOptions}/>
      {/* <label>Pickup</label>
      <RadioSelector setOption={setSelectedDelivery} selectedOption={selectedDelivery} options={pickUpOptions}/> */}
      <button className="continueBtn" type="button" onClick={(e) => submitHandle(selectedDelivery)}>Continue</button>
    </div>
  )
}

const Review = ({ formData, deliveryMethod, reviewChecks, submitHandle }) => {
  const [isTCChecked, setIsTCChecked] = useState(reviewChecks.isTCChecked || false)
  const [isESChecked, setIsESChecked] = useState(reviewChecks.isESChecked || false)
  const handleTCCheckboxChange = (event) => {
    setIsTCChecked(event.target.checked);
  }; 
  const handleESCheckboxChange = (event) => {
    setIsESChecked(event.target.checked);
  };

  return (
    <div>
      <h2>Review</h2>
      <label>Review the order details above, and place your order when you’re ready.</label>
      <div className='review_deliveryContainer'>
        <label className='review_deliveryTitle'>Delivery Details</label>
        <div className="separator"></div>
        <p>Email: {formData.email}</p>
        <p>Name: {formData.firstName} {formData.lastName}</p>
        <p>Phone: {formData.phone}</p>
        <p>Address: {formData.address}, {formData.city}, ({formData.zip}), {formData.country}</p>
        <p>Delivery Method: {deliveryMethod}</p>
      </div>
      <div className='checkboxContainer'>
        <input
          type="checkbox"
          name="terms"
          id="TandC"
          checked={isTCChecked}
          onChange={handleTCCheckboxChange}
        />
        <label htmlFor="TandC">I agree to the Terms & Conditions</label>
      </div>
      <div className='checkboxContainer'>
        <input
          type="checkbox"
          name="terms"
          id="EandS"
          checked={isESChecked}
          onChange={handleESCheckboxChange}
        />
        <label htmlFor="EandS">I agree to receive marketing communications via email and/or SMS to any emails and phone numbers added above.</label>
      </div>
      <button className="continueBtn" type="button" onClick={(e) => { if(isTCChecked) { submitHandle({ isTCChecked, isESChecked }) } else { alert('Please read and check the terms and conditions') } }}>Continue</button>
    </div>
  )
}

const Checkout = () => {
  const navigate = useNavigate()
  const { cartItems, clearCart } = useCart()
  const cartTotal = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0)
  const [status, setStatus] = useState("DeliveryDetail")
  const [editableProcedures, setEditableProcedures] = useState(["DeliveryDetail"])
  const [deliveryInfo, setDeliveryInfo] = useState({})
  const [deliveryMethod, setDeliveryMethod] = useState("Home delivery")
  const [reviewChecks, setReviewChecks] = useState({})

  function curatedProcedure(procedureTitle) {
    if(!editableProcedures.includes(procedureTitle)) {
      const updatedProcedures = [...editableProcedures, procedureTitle]
      setEditableProcedures(updatedProcedures)
    }
  }

  async function sendOrder() {
    console.log('Creating order...')
    const orderData = {
      payTime: new Date(),
      transactionTime: new Date(),
      comment: "None",
      item: cartItems.map((e) => {
        return {
          product: e.id,
          number: e.quantity,
          content: e.content,
          prompt: e.prompt,
          images: e.images,
          comment: e.comment,
        }
      }),
      deliveryinfo: deliveryInfo
    }
    const res = await createOrder(orderData)
    // Redirect to completion page!
    clearCart()
    navigate(`/completion/${res.id}`)
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
        setStatus("Review")
        curatedProcedure("Review")
        break
      case "Review":
        setStatus("Payment")
        curatedProcedure("Payment")
        break
      case "Payment":
        // Create order
        sendOrder()
        break
      default:
        break
    }
  }

  function validateFormData(formData) {
    console.log(ValidateEmail(formData.email))
  }

  function handleSubmit(data) {
    if(status === "DeliveryDetail") {
      validateFormData(data)
      setDeliveryInfo(data)
    }
    else if(status === "DeliveryMethod") {
      setDeliveryMethod(data)
    }
    else if(status === "Review") {
      setReviewChecks(data)
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
          { status === "DeliveryDetail" ? <DeliveryDetail submitHandle={handleSubmit} deliveryInfo={deliveryInfo}/> : <ProcedureTitle title={"DeliveryDetail"} /> }
          <div className="separator"></div>
          { status === "DeliveryMethod" ? <DeliveryMethod submitHandle={handleSubmit} /> : <ProcedureTitle title={"DeliveryMethod"} /> }
          <div className="separator"></div>
          { status === "Review" ? <Review formData={deliveryInfo} deliveryMethod={deliveryMethod} reviewChecks={reviewChecks} submitHandle={handleSubmit} /> : <ProcedureTitle title={"Review"} /> }
          <div className="separator"></div>
          { status === "Payment" ? <Payment submitHandle={handleSubmit} totalCost={cartTotal} /> : <ProcedureTitle title={"Payment"} /> }
        </div>
        <aside className="summaryContainer">
          <div className="summary">
            <div className="summaryTitle">Order Summary</div>
            {cartItems.map((item, index) => (
              <div className="item" key={index}>
                <div className="imgContainer">
                  <img src={item.image} alt="Product" />
                </div>
                <div className="itemInfo">
                  <div className="name">{item.title}</div>
                  <div className="info">
                    <div>Qty:{item.quantity}</div>
                    <div>Size:{item.size}</div>
                  </div>
                </div>
                <div className="price">
                  <div>Price:${(item.quantity * item.price).toFixed(2)}</div>
                </div>
              </div>
            ))}
            <div className="paymentDetails">
              <div>
                <div>Items</div>
                <div>${(cartTotal).toFixed(2)}</div>
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
              <div>${(cartTotal).toFixed(2)}</div>
            </div>
          </div>
        </aside>
      </div>
      <Footer />
    </div>
  )
}

export default Checkout
