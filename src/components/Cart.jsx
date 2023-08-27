import React, { useEffect, useState } from 'react'
import '../styles/Cart.scss'
import { Button, Modal } from 'react-bootstrap'
import QuantitySelector from './QuantitySelector'
import { useCart } from '../contexts/CartContext'

const Cart = ({ show, handleClose }) => {
  const { cartItems, removeFromCart, handleQuantityChange } = useCart()
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
                onClick={() => removeFromCart(item.id)}>
                -
              </Button>
              <div className="imgContainer">
                <img src={item.imgSource} alt="Product" />
              </div>
              <div className="itemInfo">
                <div className="name">{item.title}</div>
                <div className="info">
                  <div>${item.price}</div>
                  <div>{item.size}</div>
                </div>
                <QuantitySelector
                  quantity={item.quantity}
                  onChange={(newQuantity) =>
                    handleQuantityChange(item.id, newQuantity)
                  }
                />
              </div>
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer className="cartFooter">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className="buyBtn" variant="primary">
            Checkout
          </Button>
        </Modal.Footer>
      </div>
    </div>
  )
}

export default Cart
