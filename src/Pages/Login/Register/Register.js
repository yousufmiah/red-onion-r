import React, { useEffect, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../Firebase/firebase.init";
import logo from "../../../images/logo2.png";
import Loading from "../../Shared/Loading/Loading";

const Register = () => {
  const [passwordError, setPassswordError] = useState("");

  const navigate = useNavigate();

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating] = useUpdateProfile(auth);

  if (loading || updating) {
    <Loading></Loading>;
  }
  useEffect(() => {
    if (user) {
      toast.success("User Created And Logged In Successfully!");
      navigate("/");
    }
  }, [user, navigate]);

  const handleFormInput = async (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    if (password !== confirmPassword) {
      setPassswordError("Password does not match");
    }
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
  };

  return (
    <>
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
                    ref={nameRef}
                    className="input-form"
                    type="text"
                    placeholder="Enter name"
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicEmail">
                  <Form.Control
                    required
                    className="input-form"
                    ref={emailRef}
                    type="email"
                    placeholder="Enter email"
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                  <Form.Control
                    className="input-form"
                    ref={passwordRef}
                    type="password"
                    placeholder="Password"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                  <Form.Control
                    required
                    className="input-form"
                    ref={confirmPasswordRef}
                    type="password"
                    placeholder="Confirm Password"
                  />
                </Form.Group>
                <p className="text-center text-danger">{passwordError}</p>
                <p className="text-center text-danger">
                  {error?.message.includes("email-already-in-use")
                    ? "Email Already in use"
                    : ""}
                </p>

                <Button
                  variant=""
                  className="text-white btn-lg w-100 signup-btn input-form"
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
    </>
  );
};

export default Register;
