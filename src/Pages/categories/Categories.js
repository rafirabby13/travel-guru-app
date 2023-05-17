import React from "react";
import Card from "react-bootstrap/Card";
// import Rectangle_1 from '../../assets/images/Rectangle_1.png';
// import Sreemongol from '../../assets/images/Sreemongol.png';
// import sundorbon from '../../assets/images/sundorbon.png';
import "./Categories.css";
import { Link } from "react-router-dom";

const Categories = ({ data }) => {
  const { id, img, name } = data;
  console.log(data);
  return (
    <div className="category ">
      <Link to={`/categories/${id}`}>
        <img className="img" src={img} alt="cox's Bazar" />
      </Link>
      <p className="name" style={{ textDecoration: "none" }}>
        {name}
      </p>

      {/* <Card className="category ">
        <Card.Img className="img" variant="top" src={img} />
        {/* <Card.Body>
          <Link to={`/categories/${id}`}>{name}</Link>
        </Card.Body> */}
      {/* </Card> */}
    </div>
  );
};

export default Categories;
