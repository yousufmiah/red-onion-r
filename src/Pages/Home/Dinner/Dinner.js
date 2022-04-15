import React from "react";
import useData from "../../../Hook/useData";
import SingleItems from "../../Shared/SingleItems/SingleItems";

const Dinner = () => {
  const [, , dinner] = useData();
  return (
    <>
      <div className="container mt-5">
        <div className="row g-4">
          {dinner.map((item) => (
            <SingleItems key={item.id} item={item}></SingleItems>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dinner;
