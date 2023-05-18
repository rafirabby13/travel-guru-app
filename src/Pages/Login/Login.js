import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import "./Login.css";
import { AuthContext } from "../../Context/Context.js";
import { Link } from "react-router-dom";

const Login = () => {
  const { user, loginWithEmailPass } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    loginWithEmailPass(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
      })
      .catch((error) => {
        console.log(error);
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
        <Button variant="warning" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
