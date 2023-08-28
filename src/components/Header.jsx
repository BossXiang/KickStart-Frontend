import React, { useState } from 'react'
import '../styles/Header.scss'
import { Navbar, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Cart from './Cart'

const Header = () => {
  const [showModal, setShowModal] = useState(false)
  const handleClose = () => setShowModal(false)
  const handleShow = () => setShowModal(true)
  return (
    <Navbar className="clearPadding" bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="headerContainer" id="basic-navbar-nav">
        <div className="header">
          <Navbar.Brand className="headerLogo" as={Link} to="/">
            <div class="cube-container">
              <div class="cube">
                <div class="face front">
                  <img
                    src="/assets/img/logo.png"
                    alt="Logo"
                    className="logoImage"
                  />
                </div>
                <div class="face back">
                  <img
                    src="/assets/img/logo.png"
                    alt="Logo"
                    className="logoImage"
                  />
                </div>
                <div class="face top">
                  <img
                    src="/assets/img/logo.png"
                    alt="Logo"
                    className="logoImage"
                  />
                </div>
                <div class="face bottom">
                  <img
                    src="/assets/img/logo.png"
                    alt="Logo"
                    className="logoImage"
                  />
                </div>
                <div class="face left">
                  <img
                    src="/assets/img/logo.png"
                    alt="Logo"
                    className="logoImage"
                  />
                </div>
                <div class="face right">
                  <img
                    src="/assets/img/logo.png"
                    alt="Logo"
                    className="logoImage"
                  />
                </div>
              </div>
            </div>
          </Navbar.Brand>
          THE ART OF ET
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
        <Nav className="ml-auto headerIcon">
          <Nav.Link>
            <FontAwesomeIcon icon={faCartShopping} onClick={handleShow} />
            {showModal && <div className="overlay" onClick={handleClose} />}
            <Cart show={showModal} handleClose={handleClose} />
          </Nav.Link>
          <Nav.Link as={Link} to="/login">
            <FontAwesomeIcon icon={faUser} />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
