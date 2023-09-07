import React from "react";
import "../styles/Checkout.scss";

const CreditCard = () => {
  // const [payment, setPayment] = useState({
  //   number: "",
  //   name: "",
  //   expiry: "",
  //   cvc: "",
  //   issuer: "",
  //   focused: "",
  //   formData: null,
  // });
  // function handleCallback({ issuer }, isValid) {
  //   if (isValid) {
  //     setPayment({ issuer });
  //   }
  // }
  // function onInputFocus({ target }) {}
  // function onInputUpdate({ target }) {
  //   console.log({ [target.name]: target.value });
  // }
  // function handleSubmit(e) {}
  // const { name, number, expiry, cvc, focused, issuer } = payment;

  return (
    <div className="creditCardContainer" key="Payment">
      <form>
        <label>Card number*</label>
        <input
          type="tel"
          placeholder="Enter card number"
          pattern="[\d| ]{16,22}"
          className="longInput"
          // onChange={onInputUpdate}
          // onFocus={onInputFocus}
        />
        <label>Expiration date*</label>
        <input
          type="text"
          placeholder="MM / YY"
          required
          pattern="\d\d/\d\d"
          className="shortInput"
          // onChange={onInputUpdate}
          // onFocus={onInputFocus}
        />
        <label>Security code (CVV)*</label>
        <input
          type="tel"
          placeholder="XXX"
          required
          pattern="\d{3,4}"
          className="shortInput"
          // onChange={onInputUpdate}
          // onFocus={onInputFocus}
        />
        <label>Cardholder name*</label>
        <input
          type="tel"
          required
          className="longInput"
          // onChange={onInputUpdate}
          // onFocus={onInputFocus}
        />
        {/* <input type="hidden" name="issuer" value={issuer} /> */}
      </form>
    </div>
  );
};
export default CreditCard;
