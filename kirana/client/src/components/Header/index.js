import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, Button, Container } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <Navbar bg="light" variant="dark" style={{ height: '65px' }}>
        <Container>
          <NavLink
            exact to="/"
            className="navbar-item"
            activeClassName="is-active"
          >Admin Dashboard</NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">

            </Nav>

            <Nav>
              <li className="nav-item">
                <NavLink to='/signin'>Signin</NavLink>
              </li>

              <li className="nav-item">
                <NavLink to='/signup'>Signup</NavLink>
              </li>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}
