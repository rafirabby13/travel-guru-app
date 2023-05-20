import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Login.css";
import { AuthContext } from "../../Context/Context.js";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Toaster, toast } from 'react-hot-toast';

const Login = () => {
  const { user, loginWithEmailPass } = useContext(AuthContext);
  const [error, seterror] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || '/';

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    loginWithEmailPass(email, password)
      .then((result) => {
        const user = result.user;
        toast('Successfully Logged In')
        form.reset();
        seterror('');
        navigate(from, {replace: true});
      })
      .catch((error) => {
        console.log(error);
        seterror(error.message);
      });
  };
  return (
    <div className="login-div">
      <h2>Login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            required
          />
        </Form.Group>
        <p>
          Don't have an account? <Link  className="text-warning" to="/register"> Register</Link>
        </p>
        <p className="text-danger">{error}</p>
        <Button variant="warning" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
