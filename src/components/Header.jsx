import React, { useState } from 'react'
import '../styles/Header.scss'
import { Navbar, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCartShopping,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation } from 'react-router-dom'
import Cart from './Cart'

const Header = () => {
  const [showModal, setShowModal] = useState(false)
  const location = useLocation()
  const handleClose = () => setShowModal(false)
  const handleShow = () => setShowModal(true)
  return (
    <Navbar className="clearPadding" bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="headerContainer" id="basic-navbar-nav">
        <div className="header">
          TailorBliss
          <Nav className="ml-auto headerPage">
            <Nav.Link as={Link} to="/">
              home
            </Nav.Link>
            <Nav.Link as={Link} to="/shop">
              shop
            </Nav.Link>
            <Nav.Link as={Link} to="/ourWork">
              our work
            </Nav.Link>
            <Nav.Link as={Link} to="/aboutUs">
              about us
            </Nav.Link>
          </Nav>
        </div>
      </Navbar.Collapse>
      <Nav className="ml-auto headerCart">
        <Nav.Link>
          {location.pathname !== '/checkout' && (
            <FontAwesomeIcon icon={faCartShopping} onClick={handleShow} />
          )}
        </Nav.Link>
      </Nav>
      {showModal && <div className="overlay" onClick={handleClose} />}
      <Cart show={showModal} handleClose={handleClose} />
      <Nav className="ml-auto headerSearch">
        <Nav.Link as={Link} to="/searchOrder">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default Header
