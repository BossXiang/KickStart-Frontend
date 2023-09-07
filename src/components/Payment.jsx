import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const Payment = () => {
  const [stripePromise, setStripePromimse] = useState(null)

  useEffect(() => {

  }, [])

  return (
    <div>
      <h1>Payment</h1>

    </div>
  )
}
export default Payment


