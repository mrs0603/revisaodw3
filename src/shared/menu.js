import React from 'react'
import PropTypes from 'prop-types'
import { Link, NavLink } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap'

function Menu(props) {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
       <Nav.Link as={NavLink} to={'home'}>Home</Nav.Link>
       <Nav.Link as={NavLink} to={'login'}>Login</Nav.Link>
       <Nav.Link as={NavLink} to={'account'}>Account</Nav.Link>
       <Nav.Link as={NavLink} to={'checkout'}>Checkout</Nav.Link>

      </Nav>
    </Container>
  </Navbar>
  )
}

Menu.propTypes = {}

export default Menu
