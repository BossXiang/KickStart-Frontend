import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Container, DropdownButton, Dropdown, Button } from 'react-bootstrap'
import '../styles/Shop.scss'
import QuantitySelector from '../components/QuantitySelector'

const Product = ({ product }) => {
  const sizes = ['XS', 'S', 'M', 'L', 'XL']
  const [selectedSize, setSelectedSize] = useState('Size');
  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="product">
      <img src={product.imgSrc.length > 0 ? product.imgSrc[0] : ''} alt="product" className="productImg" />
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
      <QuantitySelector />
      <Button className="buyBtn">Add to Cart</Button>
    </div>
  );
};

const Shop = () => {

  /* Dummy data (for testing purpose) */
  const newArrivalProducts = [
    { title: "Product A", description: "Description of product A", imgSrc: ['assets/samples/sample1.jpg'], price: 5.00 }, 
    { title: "Product B", description: "Description of product B", imgSrc: ['assets/samples/sample2.jpg'], price: 8.00 }, 
    { title: "Product C", description: "Description of product C", imgSrc: ['assets/samples/sample3.jpg'], price: 10.00 }, 
  ]
  const products = [
    { title: "Product D", description: "Description of product D", imgSrc: ['assets/samples/sample4.jpg'], price: 5.00 }, 
    { title: "Product E", description: "Description of product E", imgSrc: ['assets/samples/sample5.jpg'], price: 8.00 }, 
    { title: "Product F", description: "Description of product F", imgSrc: ['assets/samples/sample6.jpg'], price: 10.00 }, 
  ]
  /* ... */

  const arrivalList = newArrivalProducts.map((product, idx) => (
    <Product key={idx} product={product} />
  ));

  const productList = products.map((product, idx) => (
    <Product key={idx} product={product} />
  ));

  return (
    <div>
      <Header />
      <div className="shopContainer">
        <Container className="my-5">
          <div className="newArrivalContainer">
            <h2 className="title">New Arrival</h2>
            <div className="productContainer">
              {arrivalList}
            </div>
          </div>
          <div className="allProductContainer">
            <h2 className="title">Products</h2>
            <div className="productContainer">
              {productList}
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  )
}

export default Shop
