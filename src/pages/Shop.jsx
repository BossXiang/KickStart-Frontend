import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Container } from 'react-bootstrap'
import '../styles/Shop.scss'
import '../styles/QuantitySelector.scss'
import { Link } from 'react-router-dom'
import { getProducts } from '../plugins/api/api_service.ts'
import Loading from '../components/Loading'

const Product = ({ product }) => {
  return (
    <div className="product">
      <Link to={`/product/${product.id}`}>
        <div className="productImg">
          <img src={product.images[0]} alt="product" />
        </div>
      </Link>
      <div className="productName">{product.title}</div>
      <div className="productPrice">${product.price}</div>
    </div>
  )
}

const Shop = () => {
  const [loaded, setLoaded] = useState(false)
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProductList = async () => {
      const data = await getProducts()
      setProducts(data)
      setLoaded(true)
    }
    try {
      getProductList()
    } catch (error) {
      console.error('Error fetching Products data:', error)
    }
  }, [])
  const productList = products.map((product, idx) => (
    <Product key={idx} product={product} />
  ))

  return (
    <>
      <div className="shopContainer">
        <Header />
        {!loaded ? (
          <Loading />
        ) : (
          <div className="shopContent">
            <Container className="my-5">
              <div className="allProductContainer">
                <div className="productContainer">{productList}</div>
              </div>
            </Container>
          </div>
        )}
        <Footer />
      </div>
    </>
  )
}

export default Shop
