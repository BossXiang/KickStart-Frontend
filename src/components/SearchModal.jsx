import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

const SearchModal = ({ show, handleClose }) => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = () => {
    console.log('Search Query:', searchQuery)
    handleClose()
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Search</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="searchForm">
          <Form.Control
            type="text"
            placeholder="Enter your search query"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSearch}>
          Search
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default SearchModal;