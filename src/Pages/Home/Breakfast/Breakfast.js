import React from "react";
import breakfast1 from "../../../images/breakfast/breakfast1.png";
import breakfast2 from "../../../images/breakfast/breakfast2.png";
import breakfast3 from "../../../images/breakfast/breakfast3.png";
import breakfast4 from "../../../images/breakfast/breakfast4.png";
import breakfast5 from "../../../images/breakfast/breakfast5.png";
import breakfast6 from "../../../images/breakfast/breakfast6.png";
import SingleItems from "../../Shared/SingleItems/SingleItems";
const Breakfast = () => {
  const breakfasts = [
    {
      id: 1,
      name: "Bagel and cream cheese",
      price: 6.99,
      desc: "How we dream bout our future",
      img: breakfast1,
    },
    {
      id: 2,
      name: "Bagel and cream cheese",
      price: 6.99,
      desc: "How we dream bout our future",
      img: breakfast2,
    },
    {
      id: 3,
      name: "Bagel and cream cheese",
      price: 6.99,
      desc: "How we dream bout our future",
      img: breakfast3,
    },
    {
      id: 4,
      name: "Bagel and cream cheese",
      price: 6.99,
      desc: "How we dream bout our future",
      img: breakfast4,
    },
    {
      id: 5,
      name: "Bagel and cream cheese",
      price: 6.99,
      desc: "How we dream bout our future",
      img: breakfast5,
    },
    {
      id: 6,
      name: "Bagel and cream cheese",
      price: 6.99,
      desc: "How we dream bout our future",
      img: breakfast6,
    },
  ];
  return (
    <div className="container mt-5">
      <div className="row g-4">
        {breakfasts.map((item) => (
          <SingleItems key={item.id} item={item}></SingleItems>
        ))}
      </div>
    </div>
  );
};

export default Breakfast;
