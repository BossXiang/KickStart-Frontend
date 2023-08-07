import React from 'react'
import '../styles/Header.scss'
import { Navbar, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'



const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">LOGO</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="header" id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/shop">
            Shop
          </Nav.Link>
        </Nav>
        <Nav className="ml-auto headerIcon">
          <Nav.Link>
            <FontAwesomeIcon icon={faCartShopping} />
          </Nav.Link>
          <Nav.Link as={Link} to="/login">
            <FontAwesomeIcon icon={faUser} />
          </Nav.Link>
          <Nav.Link>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
