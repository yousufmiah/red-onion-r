import React from "react";
import "./SingleItems.css";
const SingleItems = ({ item }) => {
  const { name, img, desc, price } = item || {};
  return (
    <div className="col-lg-4 ">
      <div className="text-center p-4 py-5 single-container">
        <img className="w-50 mx-auto" src={img} alt="" />
        <h4>{name}</h4>
        <p className="opacity-75">{desc}</p>
        <p className="fw-bold">${price}</p>
      </div>
    </div>
  );
};

export default SingleItems;
