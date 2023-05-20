import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BookingResult = () => {
    return (
        <div style={{marginTop:'200px', marginRight:'100px'}}>
            <h2 className='text-danger'>Booking is successfull</h2>
            <Link to='/'><Button className='button-success'>Return to Home</Button></Link>
        </div>
    );
};

export default BookingResult;