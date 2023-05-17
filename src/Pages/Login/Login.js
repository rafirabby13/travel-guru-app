import React from "react";
import { Button, Form } from "react-bootstrap";

const Login = () => {
  return (
    <div>
      <h2>login</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" required/>
          
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" required/>
        </Form.Group>
        
        <Button variant="warning" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
