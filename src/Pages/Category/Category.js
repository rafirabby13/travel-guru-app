import React from "react";
import { useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Category.css";
import { BsArrowRight } from "react-icons/bs";

const Category = () => {
  const data = useLoaderData();
  const {  name, description } = data;
  console.log("category", data);
  return (
    <div className="para-card">
      <p className="card-name"> {name}</p>
      {
      description.length > 200?
      <p style={{ textAlign: "justify" }}> {description.slice(0,232) + ' ...'}</p>
        :
        <p>{description}</p>
      
      }
      <Button variant="warning">Booking  <BsArrowRight></BsArrowRight></Button>
    </div>
  );
};

export default Category;
