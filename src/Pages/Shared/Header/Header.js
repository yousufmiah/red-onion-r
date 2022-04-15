import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../images/logo2.png";
import "./Header.css";
const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      sticky="top"
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <Link to="/">
          <img width={150} src={logo} alt="" />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/cart" className="nav-items">
              <FaShoppingCart />
            </Link>
            <Link to="/login" className="nav-items">
              Login
            </Link>
            <Link to="/signup" className="nav-items">
              <button className="btn btn-danger rounded-pill signup-btn border-0">
                Sign up
              </button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
