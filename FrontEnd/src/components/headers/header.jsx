import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter as Router, Routes, Route, Link,  } from 'react-router-dom';

const Header = () => {

    return (
      <div className="navbar container-fluid sticky-top" id="navbar">
        <Navbar className="navbar" expand="lg">
          <Container fluid>
            <Navbar.Brand href="/login">BookMark</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
              <Nav className="mr-auto">
                <Nav.Link as={Link} to={"/users"} > Users</Nav.Link>
                <NavDropdown title="Login" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                  <NavDropdown.Item href="/create_account">
                    Create Account
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </div>
  )
  }

export default Header