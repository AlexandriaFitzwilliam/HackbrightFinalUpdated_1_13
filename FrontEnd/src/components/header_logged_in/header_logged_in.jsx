import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter as Router, Routes, Route, Link,  } from 'react-router-dom';

const HeaderLoggedIn = () => {


    return (
        <div>
          <Navbar className="navbar" id='navbar'>
            <Container fluid>
              <Navbar.Brand href="/home"><span id='dark'>My Home</span></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="mr-auto">
                  {/* <Nav.Link as={Link} to={"/home"} > My Home</Nav.Link> */}
                  {/* <Nav.Link href="/home"><span id='dark'>My Home</span></Nav.Link> */}
                  <Nav.Link as={Link} to={"/search_books"} ><span id='dark'>Search Books</span></Nav.Link>
                  <Nav.Link as={Link} to={"/search_users"} ><span id='dark'>Search Users</span></Nav.Link>
                  <Nav.Link as={Link} to={"/create_shelf"} ><span id='dark'>Create New Shelf</span></Nav.Link>
                  <Nav.Link as={Link} to={"/users"} ><span id='dark'>All Users</span></Nav.Link>
                  {/* <Nav.Link as={Link} to={"/login"} > Login</Nav.Link> */}
                  {/* <Nav.Link as={Link} to={"/home"} > My Home</Nav.Link> */}
                  {/* <Nav.Link as={Link} to={"/create_account"} > Create Account</Nav.Link> */}
                  {/* <Nav.Link as={Link} to={"/create_shelf"} > Create New Shelf</Nav.Link> */}
                  {/* <Nav.Link as={Link} to={"book/create_rating/1"} > Create Rating</Nav.Link> */}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          </div>
    )
}

export default HeaderLoggedIn

