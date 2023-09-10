import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { stripeConfig, stripeCreatePaymentIntent } from '../plugins/api/api_service.ts'
import CheckoutForm from './CheckoutForm.jsx';
// import RadioSelector from './RadioSelector.jsx';

const Payment = ({ submitHandle, totalCost = 0 }) => {
  Payment.propTypes = {
    totalCost: PropTypes.number.isRequired, // Adjust the type as needed
  };

  // const paymentOptions = ["Credit/Debit Cards", "PayPal", "Cash on Delivery"]
  // const [selectedPayment, setSelectedPayment] = useState("Credit/Debit Cards")

  // Config -> set up
  const [stripePromise, setStripePromise] = useState(null)
  const [clientSecret, setClientSecret] = useState("")

  const CreditCard = () => {
    const handleSubmit = (error, paymentIntent) => {
      if (error) {
        alert(error.message)
      } else if (paymentIntent && paymentIntent.status === "succeeded") {
        // setMessage("Payment status: " + paymentIntent.status + "!!")
        submitHandle(null)
      } else {
        alert("Unexpected state")
      }
    }

    return <div className='creditCard'>
      { stripePromise && clientSecret && (
        <Elements stripe={ stripePromise } options={{ clientSecret }}>
          <CheckoutForm submitHandle={handleSubmit}/>
        </Elements>
      )}
    </div>
  }

  // const PayPal = () => {
  //   return (
  //     <>
  //       <div className='paypalContainer'>
  //         <label>Once you click to proceed, you will be redirected to PayPal</label>
  //       </div>
  //       <button className="continueBtn" type="button" onClick={(e) => submitHandle(null)}>Continue</button>
  //     </>
  //   )
  // }

  // const Cash = () => {
  //   return (
  //     <>
  //       <div className='cashContainer'>
  //         <label>Please pay on the delivery</label>
  //       </div>
  //       <button className="continueBtn" type="button" onClick={(e) => submitHandle(null)}>Continue</button>
  //     </>
      
  //   )
  // }

  async function getConfig() {
    const { publishableKey } = await stripeConfig()
    setStripePromise(loadStripe(publishableKey))
  };

  async function getPaymentIntent(cost) {
    const data = await stripeCreatePaymentIntent(cost)
    const { clientSecret } = data
    setClientSecret(clientSecret)
  };

  useEffect(() => {
    getConfig()
  }, [])

  useEffect(() => {
    if (totalCost !== 0) getPaymentIntent(totalCost)
  }, [totalCost])

  return (
    <div>
      <h2>Payment</h2>
      <CreditCard />
      {/* <RadioSelector setOption={setSelectedPayment} selectedOption={selectedPayment} options={paymentOptions}/>
      { selectedPayment === "Credit/Debit Cards" ? <CreditCard /> : <div/> }
      { selectedPayment === "PayPal" ? <PayPal /> : <div/> }
      { selectedPayment === "Cash on Delivery" ? <Cash /> : <div/> } */}
    </div>
  );
};

export default Payment;