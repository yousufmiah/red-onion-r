import React from "react";
import "./SingleItems.css";
const SingleItems = ({ item }) => {
  const { name, img, des, price } = item || {};
  return (
    <>
      <div className="col-lg-4 col-md-6 col-12">
        <div className="text-center p-4 py-5 single-container">
          <img className="w-50 mx-auto" src={img} alt="" />
          <h5>{name}</h5>
          <p className="opacity-75">{des}</p>
          <p className="fw-bold">${price}</p>
        </div>
      </div>
    </>
  );
};

export default SingleItems;
