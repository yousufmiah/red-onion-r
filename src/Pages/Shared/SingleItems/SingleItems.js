import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ItemsContext } from "../../../App";
import "./SingleItems.css";
const SingleItems = ({ item }) => {
  const [items, setItems] = useContext(ItemsContext);

  const navigate = useNavigate();
  const { name, img, des, price } = item || {};
  const handleItems = (item) => {
    navigate("/itemdetails");
    const newItem = [item];
    setItems(newItem);
  };

  return (
    <>
      <div
        onClick={() => handleItems(item)}
        className="col-lg-4 col-md-6 col-12 text-decoration-none text-black"
      >
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
