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

  const [searchResult, setSearchResult] = useState(null)

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
          </Form>
          <div>
            <p>Order id: {searchResult.comment}</p>
            <p>Status: {searchResult.status}</p>
            <p>Items</p>
            <div>
              <p>item list</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SearchOrder
