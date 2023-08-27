import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Container, DropdownButton, Dropdown, Button } from 'react-bootstrap'
import { useCart } from '../contexts/CartContext';
import '../styles/Shop.scss'
import '../styles/QuantitySelector.scss'
import QuantitySelector from '../components/QuantitySelector'
import { Link } from 'react-router-dom'
import { getProducts } from '../plugins/api/api_service.ts'

const Product = ({ product }) => {
  const sizes = ['XS', 'S', 'M', 'L', 'XL']
  const [selectedSize, setSelectedSize] = useState('Size')
  const handleSizeSelect = (size) => {
    setSelectedSize(size)
  }

  const [quantity, setQuantity] = useState(1);
  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const { addToCart } = useCart();
  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      size: selectedSize,
      imgSource:product.imgSource[0],
      quantity:quantity
    }
    addToCart(cartItem);
  }
  return (
    <div className="product">
      <Link to={`/product/${product.title}`}>
        <img src={product.imgSource[0]} alt="product" className="productImg" />
      </Link>
      <div className="productName">{product.title}</div>
      <div className="productPrice">${product.price}</div>
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
      <QuantitySelector onChange={handleQuantityChange}/>
      <Button className="buyBtn" onClick={handleAddToCart}>
        Add to Cart
      </Button>
    </div>
  )
}

const Shop = () => {
  const [products, setProducts] = useState([])
  const getProductList = async () => {
    const data = await getProducts()
    setProducts(data)
  }
  useEffect(() => {
    try {
      getProductList()
    } catch (error) {
      console.error('Error fetching Products data:', error)
    }
  }, [])

  /* Dummy data (for testing purpose) */
  const newArrivalProducts = [
    {
      title: 'Product A',
      description: 'Description of product A',
      imgSrc: ['assets/samples/sample1.jpg'],
      price: 5.0,
    },
    {
      title: 'Product B',
      description: 'Description of product B',
      imgSrc: ['assets/samples/sample2.jpg'],
      price: 8.0,
    },
    {
      title: 'Product C',
      description: 'Description of product C',
      imgSrc: ['assets/samples/sample3.jpg'],
      price: 10.0,
    },
  ]

  // const arrivalList = newArrivalProducts.map((product, idx) => (
  //   <Product key={idx} product={product} />
  // ))

  const productList = products.map((product, idx) => (
    <Product key={idx} product={product} />
  ))

  return (
    <div>
      <Header />
      <div className="shopContainer">
        <Container className="my-5">
          <div className="newArrivalContainer">
            <h2 className="title">New Arrival</h2>
            {/* <div className="productContainer">{arrivalList}</div> */}
          </div>
          <div className="allProductContainer">
            <h2 className="title">Products</h2>
            <div className="productContainer">{productList}</div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  )
}

export default Shop
