import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import "./BookingForm.css";
import { AuthContext } from "../../Context/Context.js";
import { useNavigate } from "react-router-dom";

const BookingForm = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleClick = (event) => {
    event.preventDefault();
    navigate('/bookingSuccess');

   
  };
  return (
    <div className="para-card booking-form">
      <Form onSubmit={handleClick} style={{ textAlign: "start" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Origin</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your Starting Point"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Destination</Form.Label>
          <Form.Control type="text" placeholder="Your Destination" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>From</Form.Label>
          <div className="form">
            <Form.Control type="date" placeholder="Start date"  required />
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>To</Form.Label>
          <div className="form">
            <Form.Control type="date" placeholder="End date" required />
          </div>
        </Form.Group>

        <Button style={{width: "100%", fontWeight: "bolder"}} variant="primary" type="submit">
          Book
        </Button>
      </Form>
    </div>
  );
};

export default BookingForm;
