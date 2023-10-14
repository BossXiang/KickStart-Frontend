import React from 'react'
import '../styles/Cart.scss'
import { Button, Modal } from 'react-bootstrap'
import QuantitySelector from './QuantitySelector'
import { Link } from 'react-router-dom'
import { useCart } from '../contexts/CartContext'
import { useNavigate } from 'react-router-dom'

const Cart = ({ show, handleClose }) => {
  const { cartItems, removeFromCart, handleQuantityChange } = useCart()
  const navigate = useNavigate()

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      window.alert('Your cart is empty. Please add items before checking out.')
    } else {
      navigate('/checkout')
    }
  }

  const totalAmount = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0)

  return (
    <div className={`shopping-cart-modal ${show ? 'show' : ''}`}>
      <div className="modal-content">
        <Modal.Header className="cartHeader">
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body className="itemContainer">
          {cartItems.map((item, index) => (
            <div className="item" key={index}>
              <Button
                className="removeBtn"
                onClick={() => removeFromCart(item.id, item.size,item.color,item.prompt)}>
                -
              </Button>
              <Link to={`/product/${item.id}`}>
                <div className="imgContainer">
                  <img src={item.image} alt="Product" />
                </div>
              </Link>
              <div className="itemInfo">
                <div className="name">{item.title}</div>
                <div className="info">
                  <div className="infoLine">
                    <div>${item.price}</div>
                    {item.size !== 'Size' && <div>{item.size}</div>}
                    {item.color !== '' && <div>{item.color}</div>}
                  </div>
                  <div>
                    {item.prompt.length >= 28
                      ? item.prompt.substring(0, 25) + '...'
                      : item.prompt}
                  </div>
                </div>
                <QuantitySelector
                  newQuantity={item.quantity}
                  onChange={(newQuantity) =>
                    handleQuantityChange(item.id, item.size, newQuantity)
                  }
                />
              </div>
            </div>
          ))}
        </Modal.Body>
        <div className="subtotal">
          Subtotal:
          <br />${totalAmount.toFixed(2)}
        </div>
        <Modal.Footer className="cartFooter">
          <Button
            className="closeBtn"
            variant="secondary"
            onClick={handleClose}>
            Close
          </Button>
          <Button className="buyBtn" variant="primary" onClick={handleCheckout}>
            Checkout
          </Button>
        </Modal.Footer>
      </div>
    </div>
  )
}

export default Cart
