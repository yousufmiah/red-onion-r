import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import auth from "../../../Firebase/firebase.init";
import logo from "../../../images/logo2.png";
import "./Header.css";
const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <Navbar
      collapseOnSelect
      // sticky="top"
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
            {user ? (
              <Link
                to="/login"
                onClick={() => signOut(auth)}
                className="nav-items"
              >
                LogOut
              </Link>
            ) : (
              <Link to="/login" className="nav-items">
                Login
              </Link>
            )}
            {user?.displayName ? (
              <Link to="/" className="nav-items">
                {user.displayName}
              </Link>
            ) : (
              <Link to="/signup" className="nav-items">
                <button className="input-form btn btn-danger rounded-pill signup-btn border-0">
                  Sign up
                </button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
