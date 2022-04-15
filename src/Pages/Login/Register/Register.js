import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../images/logo2.png";

const Register = () => {
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
                <Form.Control type="text" placeholder="Enter name" />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Confirm Password" />
              </Form.Group>

              <Button
                variant=""
                className="text-white btn-lg w-100 signup-btn"
                type="submit"
              >
                Sign up
              </Button>
            </Form>
          </div>
          <div className="text-center mt-3">
            <Link to="/login" className="text-decoration-none text-danger">
              Already have an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
