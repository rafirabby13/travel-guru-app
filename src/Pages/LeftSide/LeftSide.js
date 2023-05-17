import React, { useEffect, useState } from "react";
import Categories from "../categories/Categories.js";

const LeftSide = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <div>
      <h1>left side</h1>
      {data?.map((data) => (
        <Categories data={data}></Categories>
      ))}
    </div>
  );
};

export default LeftSide;
