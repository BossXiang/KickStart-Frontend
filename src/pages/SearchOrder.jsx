import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/SearchOrder.scss'
import { Form, Button } from 'react-bootstrap'
import { searchOrder } from '../plugins/api/api_service.ts'

const SearchOrder = () => {
  const [searchText, setSearchText] = useState('')

  const handleSearchChange = (event) => {
    setSearchText(event.target.value)
  }

  const [searchResult, setSearchResult] = useState({})

  const handleSearchClick = async () => {
    try {
const result = await searchOrder(searchText)
      setSearchResult(result)
    } catch (error) {
      console.error('Error searching order:', error)
    }
  }
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
              <div className="example">For example: 123456789</div>
            </div>
            <Button
              id="searchBtn"
              variant="primary"
              onClick={handleSearchClick}>
              Search
            </Button>
<<<<<<< HEAD
=======
            <div className="orderDetail">
              <p>Order Id: {searchResult.id}</p>
              <p>Status: {searchResult.status}</p>
              <p>Items</p>
              <div>
                <p>item list</p>
              </div>
            </div>
>>>>>>> 7ea2f79216fda2a7d08283b92eacd37296dc534a
          </Form>
          <div className="outputGroup">
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
                <p>Items</p>
                <div>
                  <p>item list</p>
                </div>
              </div>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SearchOrder
