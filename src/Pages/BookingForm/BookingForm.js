import React from "react";
import { Button, Form } from "react-bootstrap";
import "./BookingForm.css";

const BookingForm = () => {

    const handleClick=(event)=>{
        event.preventDefault();
        let date = new Date();
        let time = date.toLocaleDateString().slice(0,10);
        // const month = date.getUTCMonth();
        // const day = date.getUTCDay();
        // const year = date.getFullYear();
        console.log(time);
        console.log(time.slice(0,5));
        
    }
  return (
    <div className="para-card booking-form">
      <Form style={{ textAlign: "start" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Origin</Form.Label>
          <Form.Control type="text" placeholder="Your Starting Point" />
        </Form.Group>

        <Form.Group className="mb-3"              controlId="formBasicPassword">
         <Form.Label>Destination</Form.Label>
          <Form.Control type="text" placeholder="Your Destination" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>From</Form.Label>
          <Form.Control type="text" placeholder="Your Destination" />
          <button onClick={handleClick}>Date</button>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>To</Form.Label>
          <Form.Control type="text" placeholder="Your Destination" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Start Booking
        </Button>
      </Form>
    </div>
  );
};

export default BookingForm;
