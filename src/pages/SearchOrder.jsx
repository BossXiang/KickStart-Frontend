import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/SearchOrder.scss'
import { Form, Button } from 'react-bootstrap'
import { searchOrder } from '../plugins/api/api_service.ts'
import StepBar from '../components/StepBar'

const Items = ({ item }) => {
  return (
    <div className="product">
      <div className="productImg">
        <img src={item.product.imgSource} alt="pic" />
      </div>
      <div className="infoDetail">
        <div className="productInfo">
          <div className="productTitle">{item.product.title}</div>
          <div className="productPrice">${item.product.price}</div>
        </div>
        <div className="productInfo">
          <div className="itemComment">{item.comment}</div>
          <div className="itemNumber">x{item.number}</div>
        </div>
        <div className="total">${item.number * item.product.price}</div>
      </div>
    </div>
  )
}
const SearchOrder = () => {
  const [searchText, setSearchText] = useState('')
  const [itemList, setItemList] = useState([])
  const handleSearchChange = (event) => {
    setSearchText(event.target.value)
  }
  const [searchResult, setSearchResult] = useState({})
  const handleSearchClick = async () => {
    try {
      const result = await searchOrder(searchText)
      setSearchResult(result)
    } catch (error) {
      setSearchResult({ statusCode: 404 })
      console.error('Error searching order:', error)
    }
  }
  const handleSearch = async (id) => {
    try {
      const result = await searchOrder(id)
      setSearchResult(result)
    } catch (error) {
      setSearchResult({ statusCode: 404 })
      console.error('Error searching order:', error)
    }
  }
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const id = urlParams.get('id')
    if (id) {
      setSearchText(id)
      handleSearch(id)
    }
  }, [])
  useEffect(() => {
    if (searchResult.item) {
      const items = searchResult.item.map((item, idx) => (
        <Items key={idx} item={item} />
      ))
      setItemList(items)
    }
  }, [searchResult])

  const stepData = [
    { title: 'Paid', completed: true, time: '2023-09-16' },
    { title: 'In Transit', completed: true, time: '2023-09-18' },
    { title: 'Received', completed: false },
  ]
  return (
    <div className="searchContainer">
      <Header />
      <div className="searchPage">
        <div className="searchContent">
          <div className="searchTitle">Order Query</div>
          <Form className="inputGroup">
            <div id="searchInput">
              <Form.Control
                type="text"
                placeholder="Enter order number"
                value={searchText}
                onChange={handleSearchChange}
              />
              <div className="example">For example: 3a2c50ff-cca7-425c-8e1e-a95a47a2e461</div>
            </div>
            <Button
              id="searchBtn"
              variant="primary"
              onClick={handleSearchClick}>
              Search
            </Button>
          </Form>
          {searchResult.statusCode === 404 && (
            <div className="notFound">The order number was not found</div>
          )}
          {searchResult.id && 
          <div className={`outputGroup ${searchResult.id ? 'expanded' : ''}`}>
            <div className="orderDetail">
              <p>
                <b>Order Id:</b> {searchResult.id}
              </p>
              <p>
                <b>Status:</b> {searchResult.status}
              </p>
              <p>
                <b>PayTime:</b> {searchResult.payTime}
              </p>
              <p>
                <b>DeliveryTime:</b> {searchResult.deliveryTime}
              </p>
              <p>
                <b>TransactionTime:</b> {searchResult.transactionTime}
              </p>
              <p>
                <b>Comment:</b> {searchResult.comment}
              </p>
              <p>
                <b>FirstName:</b> {searchResult.deliveryinfo.firstName}
              </p>
              <p>
                <b>LastName:</b> {searchResult.deliveryinfo.lastName}
              </p>
              <p>
                <b>Email:</b> {searchResult.deliveryinfo.email}
              </p>
              <p>
                <b>Address:</b> {searchResult.deliveryinfo.address}
              </p>
              <p>
                <b>Country:</b> {searchResult.deliveryinfo.country}
              </p>
            </div>
            <div className="itemList">
              <p>{itemList}</p>
            </div>
          </div>}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SearchOrder
