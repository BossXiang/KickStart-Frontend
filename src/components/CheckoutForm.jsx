import React, { useState } from 'react';
import { useStripe, useElements } from '@stripe/react-stripe-js';
import { PaymentElement } from '@stripe/react-stripe-js';
import '../styles/Payment.scss'

const CheckoutForm = ({submitHandle}) => {
  const stripe = useStripe()
  const elements = useElements()

  const [ isProcessing, setIsProcessing ] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:3000",
      },
      redirect: "if_required"
    })

    submitHandle(error, paymentIntent)
    setIsProcessing(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button className="continueBtn mt12p" disabled={!stripe || isProcessing}>
        <span id="button-text">
          { isProcessing ? "Processing..." : "Pay now" }
        </span>
      </button>
    </form>
  );
};

export default CheckoutForm;