import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Container, DropdownButton, Dropdown, Button } from 'react-bootstrap'
import '../styles/Shop.scss'
import QuantitySelector from '../components/QuantitySelector'

const Shop = () => {
  const sizes = ['XS', 'S', 'M', 'L', 'XL']
  const [selectedSize, setSelectedSize] = useState('Size')

  const handleSizeSelect = (size) => {
    setSelectedSize(size)
  }

  return (
    <>
      <Header />
      <div className="shopContainer">
        <Container className="my-5">
          <div className="newArrivalContainer">
            <h2 className="title">New Arrival</h2>
            <div className="productContainer">
              <div className="product">
                <div className="productImg"></div>
                <div className="productName">Greeting Card</div>
                <div className="productPrice">$5.00</div>
                <DropdownButton id="size-dropdown" title={selectedSize}>
                  {sizes.map((size, index) => (
                    <Dropdown.Item
                      key={index}
                      eventKey={size}
                      onClick={() => handleSizeSelect(size)}>
                      {size}
                    </Dropdown.Item>
                  ))}
                </DropdownButton>
                <QuantitySelector />
                <Button className="buyBtn">Add to Cart</Button>
              </div>
              <div className="product"></div>
              <div className="product"></div>
            </div>
          </div>
          <div className="allProductContainer">
            <h2 className="title">Products</h2>
            <div className="productContainer">
              <div className="product"></div>
              <div className="product"></div>
              <div className="product"></div>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  )
}

export default Shop
