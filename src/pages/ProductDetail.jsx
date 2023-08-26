import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Button, Dropdown, DropdownButton } from 'react-bootstrap'
import QuantitySelector from '../components/QuantitySelector'
import '../styles/ProductDetail.scss'
import '../styles/Shop.scss'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  const { productId } = useParams();
  const sizes = ['XS', 'S', 'M', 'L', 'XL']
  const [selectedSize, setSelectedSize] = useState('Size')
  const handleSizeSelect = (size) => {
    setSelectedSize(size)
  }
  return (
    <>
      <Header></Header>
      <div className="detailContainer">
        <div className="detailImg">
          <img src="/assets/samples/sample1.jpg" alt={productId} />
        </div>
        <div className="detailContent">
          <div className="detailName">A delicate cup</div>
          <div className="detailPrice">$50,0</div>
          <div className="detailContent">This is an object that allows you to drink the water of life</div>
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
      </div>
      <Footer></Footer>
    </>
  )
}

export default ProductDetail
