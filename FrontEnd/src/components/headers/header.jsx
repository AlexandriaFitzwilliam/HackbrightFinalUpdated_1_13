import React from 'react';
import './header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter as Router, Routes, Route, Link,  } from 'react-router-dom';

const Header = () => {

    return (
      <div>
        <Navbar bg="dark" expand="lg" variant={"dark"}>
          <Container>
            <Navbar.Brand href="#home">My Library</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
              <Nav className="mr-auto">
                {/* <Nav.Link as={Link} to={"/home"} > My Home</Nav.Link> */}
                <Nav.Link as={Link} to={"/users"} > Users</Nav.Link>
                {/* <Nav.Link as={Link} to={"/login"} > Login</Nav.Link> */}
                {/* <Nav.Link as={Link} to={"/home"} > My Home</Nav.Link> */}
                {/* <Nav.Link as={Link} to={"/create_account"} > Create Account</Nav.Link> */}
                {/* <Nav.Link as={Link} to={"/search"} > Search</Nav.Link> */}
                {/* <Nav.Link as={Link} to={"/create_shelf"} > Create New Shelf</Nav.Link> */}
                {/* <Nav.Link as={Link} to={"book/create_rating/1"} > Create Rating</Nav.Link> */}
                <NavDropdown title="Login" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                  <NavDropdown.Item href="/create_account">
                    Create Account
                  </NavDropdown.Item>
                  {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Log Out - Need to implement
                  </NavDropdown.Item> */}
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </div>
  )
  }

export default Header