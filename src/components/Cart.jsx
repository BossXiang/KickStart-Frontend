import React from 'react'
import '../styles/Cart.scss'
import { Button, Modal } from 'react-bootstrap'
import QuantitySelector from './QuantitySelector'

const Cart = ({ show, handleClose }) => {
  return (
    <div className={`shopping-cart-modal ${show ? 'show' : ''}`}>
      <div className="modal-content">
        <Modal.Header className='cartHeader'>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body className='itemContainer'>
          <div className="item">
            <div className="imgContainer">
              <img src="/assets/samples/sample1.jpg" alt="a cup" />
            </div>
            <div className="itemInfo">
              <div className="name">A cup</div>
              <div className="info">
                <div>$50,0</div>
                <div>xl</div>
              </div>
              <QuantitySelector />
            </div>
          </div>
          <div className="item">
            <div className="imgContainer">
              <img src="/assets/samples/sample1.jpg" alt="a cup" />
            </div>
            <div className="itemInfo">
              <div className="name">A cup</div>
              <div className="info">
                <div>$50,0</div>
                <div>xl</div>
              </div>
              <QuantitySelector />
            </div>
          </div>
          <div className="item">
            <div className="imgContainer">
              <img src="/assets/samples/sample1.jpg" alt="a cup" />
            </div>
            <div className="itemInfo">
              <div className="name">A cup</div>
              <div className="info">
                <div>$50,0</div>
                <div>xl</div>
              </div>
              <QuantitySelector />
            </div>
          </div>
          <div className="item">
            <div className="imgContainer">
              <img src="/assets/samples/sample1.jpg" alt="a cup" />
            </div>
            <div className="itemInfo">
              <div className="name">A cup</div>
              <div className="info">
                <div>$50,0</div>
                <div>xl</div>
              </div>
              <QuantitySelector />
            </div>
          </div>
          <div className="item">
            <div className="imgContainer">
              <img src="/assets/samples/sample1.jpg" alt="a cup" />
            </div>
            <div className="itemInfo">
              <div className="name">A cup</div>
              <div className="info">
                <div>$50,0</div>
                <div>xl</div>
              </div>
              <QuantitySelector />
            </div>
          </div>
          <div className="item">
            <div className="imgContainer">
              <img src="/assets/samples/sample1.jpg" alt="a cup" />
            </div>
            <div className="itemInfo">
              <div className="name">A cup</div>
              <div className="info">
                <div>$50,0</div>
                <div>xl</div>
              </div>
              <QuantitySelector />
            </div>
          </div>
          <div className="item">
            <div className="imgContainer">
              <img src="/assets/samples/sample1.jpg" alt="a cup" />
            </div>
            <div className="itemInfo">
              <div className="name">A cup</div>
              <div className="info">
                <div>$50,0</div>
                <div>xl</div>
              </div>
              <QuantitySelector />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className='cartFooter'>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className='buyBtn' variant="primary">Checkout</Button>
        </Modal.Footer>
      </div>
    </div>
  )
}

export default Cart
