import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import Categories from "../categories/Categories.js";
import Category from "../Category/Category.js";
import './RightSide.css'

const RightSide = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
   
      <div className="rightNav">
      
      {data?.map((data) => (
        <Categories data={data} ></Categories>
      ))}
      </div>
    
  );
};

export default RightSide;
