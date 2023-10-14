import React, { useEffect, useState } from 'react'
import { Button, Dropdown, DropdownButton, Form } from 'react-bootstrap'

import Header from '../components/Header'
import Footer from '../components/Footer'
import QuantitySelector from '../components/QuantitySelector'
import ImageUploader from '../components/ImageUploader'
import ColorSelector from '../components/ColorSelector'
import Loading from '../components/Loading'

import '../styles/ProductDetail.scss'
import '../styles/Shop.scss'

import { useParams } from 'react-router-dom'
import { useCart } from '../contexts/CartContext'
import { getProduct } from '../plugins/api/api_service.ts'

const ProductDetail = () => {
  const { productId } = useParams()
  const [loaded, setLoaded] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const sizes = ['XS', 'S', 'M', 'L', 'XL']
  const [product, setProduct] = useState({})
  const [selectedSize, setSelectedSize] = useState('Size')
  const [selectedColor, setSelectedColor] = useState('')
  const [selectedNumPage, setSelectedNumPage] = useState(0)
  const [isFocused, setIsFocused] = useState(false)

  const numPageOptions = [ 6, 8, 14, 25 ]

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
  }

  const handleInputChange = (e) => {
    const value = e.target.value
    setInputValue(value)
    const newlineCount = (value.match(/\n/g) || []).length
    const minRows = 1
    const maxRows = 3
    const calculatedRows = Math.min(
      Math.max(newlineCount + 1, minRows),
      maxRows
    )
    e.target.rows = calculatedRows
  }

  const handleSizeSelect = (size) => {
    setSelectedSize(size)
  }
  
  const handleNumPageChange = (event) => {
    setSelectedNumPage(event.target.value)
  }

  const [quantity, setQuantity] = useState(1)
  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity)
  }

  useEffect(() => {
    const getProductById = async () => {
      const data = await getProduct(productId)
      setProduct(data)
      setLoaded(true)
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
    if (
      selectedSize === 'Size' &&
      product.spec &&
      product.spec.includes('size')
    ) {
      window.alert('Please select a size before adding to cart.')
      return
    }
    if (
      selectedColor === '' &&
      product.spec &&
      product.spec.includes('color')
    ) {
      window.alert('Please select a color before adding to cart.')
      return
    }
    if (
      selectedNumPage === 0 &&
      product.spec &&
      product.spec.includes('#pages')
    ) {
      window.alert('Please select the number of pages.')
      return
    }
    if (inputValue === '') {
      window.alert(
        'Please input the prompt of your bliss before adding to cart.'
      )
      return
    }
    const cartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      size: selectedSize,
      color: selectedColor,
      numPages: selectedNumPage,
      prompt: inputValue,
      images: [],
      image: product.images[0],
      quantity: quantity,
      comment: 'Comment',
    }
    addToCart(cartItem)
  }

  return (
    <>
      <Header></Header>
      {!loaded ? (
        <Loading />
      ) : (
        <div className="detailBackground">
          <div className="detailContainer">
            <div className="detailImg">
              <img
                src={
                  product && product.images && product.images[0]
                    ? product.images[0]
                    : ''
                }
                alt={`product-${productId}`}
              />
              <div className="sideImg">
                <img
                  src={
                    product && product.images && product.images[0]
                      ? product.images[0]
                      : ''
                  }
                  alt="sidePic"
                />
                <img
                  src={
                    product && product.images && product.images[0]
                      ? product.images[0]
                      : ''
                  }
                  alt="sidePic"
                />
                <img
                  src={
                    product && product.images && product.images[0]
                      ? product.images[0]
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
              {product.spec && product.spec.includes('color') && (
                <ColorSelector
                  selectedColor={selectedColor}
                  onColorChange={setSelectedColor}
                />
              )}
              {product.spec && product.spec.includes('size') && (
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
              )}
              {product.spec && product.spec.includes('#pages') && (
                <div className='numPageContainer'> 
                  {numPageOptions.map((numPage, index) => (
                    <label key={index} className='numPageItem'>
                      {numPage} Pages
                      <input type="radio" value={numPage} checked={selectedNumPage === numPage} onChange={handleNumPageChange} className='numPageRadio'/>
                    </label>
                  ))}
                </div>
              )}
              <QuantitySelector onChange={handleQuantityChange} />
              <Form onSubmit={handleSubmit}>
                <Form.Group
                  className={`${
                    isFocused ? 'promptCard' : 'promptCardWithoutAnimation'
                  }`}>
                  <Form.Control
                    as="textarea"
                    rows={1}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Your Prompt"
                  />
                </Form.Group>
              </Form>
              <ImageUploader></ImageUploader>
              <Button className="buyBtn" onClick={handleAddToCart}>
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      )}

      <Footer></Footer>
    </>
  )
}

export default ProductDetail
