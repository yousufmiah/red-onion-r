import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../images/logo2.png";
import "./Login.css";
const Login = () => {
  return (
    <div className="login-container">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-10 mx-auto mt-5">
          <div className="w-75 mx-auto my-5">
            <img className="w-75 mx-auto" src={logo} alt="" />
          </div>
          <div>
            <Form>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button
                variant=""
                className="text-white btn-lg w-100 signup-btn"
                type="submit"
              >
                Sign in
              </Button>
            </Form>
          </div>
          <div className="text-center mt-3">
            <Link to="/signup" className="text-decoration-none text-danger">
              Need an account?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
