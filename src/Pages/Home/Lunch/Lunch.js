import React from "react";
import useData from "../../../Hook/useData";
import SingleItems from "../../Shared/SingleItems/SingleItems";

const Lunch = () => {
  const [, lunch] = useData();
  return (
    <div className="container mt-5">
      <div className="row g-4">
        {lunch.map((item) => (
          <SingleItems key={item.id} item={item}></SingleItems>
        ))}
      </div>
    </div>
  );
};

export default Lunch;
