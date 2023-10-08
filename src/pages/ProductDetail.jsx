import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Button, Dropdown, DropdownButton, Form } from 'react-bootstrap'
import QuantitySelector from '../components/QuantitySelector'
import '../styles/ProductDetail.scss'
import '../styles/Shop.scss'
import { useParams } from 'react-router-dom'
import { useCart } from '../contexts/CartContext'
import { getProduct } from '../plugins/api/api_service.ts'

const ProductDetail = () => {
  const { productId } = useParams()
  const sizes = ['XS', 'S', 'M', 'L', 'XL']
  const [product, setProduct] = useState({})
  const [selectedSize, setSelectedSize] = useState('Size')
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
  }
  const handleSizeSelect = (size) => {
    setSelectedSize(size)
  }

  const [quantity, setQuantity] = useState(1)
  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity)
  }

  // Load product
  useEffect(() => {
    const getProductById = async () => {
      const data = await getProduct(productId)
      setProduct(data)
    }
    try {
      getProductById()
    } catch (error) {
      console.error('Error fetching Product data:', error)
    }
  }, [productId])

  // Shopping cart
  const { addToCart } = useCart()
  const handleAddToCart = () => {
    if (selectedSize === 'Size') {
      window.alert('Please select a size before adding to cart.')
      return
    }
    const cartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      size: selectedSize,
      imgSource: product.imgSource[0],
      quantity: quantity,
    }
    addToCart(cartItem)
  }

  return (
    <>
      <Header></Header>
      <div className="detailBackground">
        <div className="detailContainer">
          <div className="detailImg">
            <img
              src={
                product && product.imgSource && product.imgSource[0]
                  ? product.imgSource[0]
                  : ''
              }
              alt={`product-${productId}`}
            />
            <div className="sideImg">
              <img
                src={
                  product && product.imgSource && product.imgSource[0]
                    ? product.imgSource[0]
                    : ''
                }
                alt="sidePic"
              />
              <img
                src={
                  product && product.imgSource && product.imgSource[0]
                    ? product.imgSource[0]
                    : ''
                }
                alt="sidePic"
              />
              <img
                src={
                  product && product.imgSource && product.imgSource[0]
                    ? product.imgSource[0]
                    : ''
                }
                alt="sidePic"
              />
            </div>
          </div>
          <div className="detailContent">
            <div className="detailName">{product.title}</div>
            <div className="detailPrice">${product.price}</div>
            <div className="detailInfo">{product.description}</div>
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
            <QuantitySelector onChange={handleQuantityChange} />
            <Form>
              <Form.Group className={`${isFocused ? 'promptCard' : 'promptCardWithoutAnimation'}`}>
                <Form.Control
                  type="text"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  placeholder="Your Prompt"
                />
              </Form.Group>
            </Form>
            {/* <Input className="promptCart"></Input> */}
            <Button className="buyBtn" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  )
}

export default ProductDetail
