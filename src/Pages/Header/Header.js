import React from "react";
import {
  Button,
  Container,
  Image,
  Nav,
  Navbar,
} from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import logo from "../../assets/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="backgorund-banner">
      <Navbar  expand="lg">
        <Container className="navbar-container">
          <div>
          <Navbar.Brand href="#home">
            <Image style={{ height: "56px" }} src={logo}></Image>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
        
            
          <button className="search-bar"><FaSearch className="icon" style={{color:'white'}}></FaSearch> <input type="text" placeholder="Search your destination" /></button>
          
          </div>
          <div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto nav-element">
              <Nav.Link className="element-links"  href="#home">News</Nav.Link>
              <Nav.Link className="element-links" href="#link">Destination</Nav.Link>
              <Nav.Link className="element-links" href="#link">Blog</Nav.Link>
              <Nav.Link className="element-links" href="#link">Contact</Nav.Link>
              <Link to='/login'>
              <Button className="element-links" variant="warning">Login</Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
      
    </div>
  );
};

export default Header;
