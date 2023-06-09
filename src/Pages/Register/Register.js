import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import {  Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/Context.js";

const Register = () => {
  const { createUserWithEmailAndPass } = useContext(AuthContext);
  const [error, setError] = useState();
 const location = useLocation();
 const navigate = useNavigate();
 const from = location.state?.from?.pathaname || '/';
  const handlelogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    createUserWithEmailAndPass(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError('');
        form.reset();
        navigate(from,{replace: true});
        
      })
      .catch((error) => {
        console.log(error);
        setError(error.message)
      });
  };

  return (
    <div className="login-div">
      <h2>Register</h2>
      <Form onSubmit={handlelogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" required/>
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" required/>
        </Form.Group>
        
        <p>
          Already have an account? <Link  className="text-warning" to="/login">Login</Link>
        </p>
        <p className="text-danger">{error}</p>
        <Button variant="warning" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
