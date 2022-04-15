import React, { useEffect, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../Firebase/firebase.init";
import logo from "../../../images/logo2.png";
// import Loading from "../../Shared/Loading/Loading";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  /*  if (loading) {
    <Loading></Loading>;
  } */

  useEffect(() => {
    if (user) {
      toast.success("Successfully Logged In");
      navigate("/");
    }
  }, [user, navigate]);

  const handleFormInput = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div className="login-container">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-10 mx-auto mt-5">
          <div className="w-75 mx-auto my-5">
            <img className="w-75 mx-auto" src={logo} alt="" />
          </div>
          <div>
            <Form onSubmit={handleFormInput}>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Control
                  ref={emailRef}
                  className="input-form"
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Control
                  ref={passwordRef}
                  className="input-form"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <p className="text-center text-danger">
                {error?.message.includes("user-not-found")
                  ? "User Not Found"
                  : ""}
              </p>
              <p className="text-center text-danger">
                {error?.message.includes("wrong-password")
                  ? "Wrong Password"
                  : ""}
              </p>
              <Button
                variant=""
                className="text-white btn-lg w-100 signup-btn input-form"
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
