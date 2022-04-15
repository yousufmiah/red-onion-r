import React, { useContext } from "react";
import { ItemsContext } from "../../App";

const ItemsDetails = () => {
  const [items] = useContext(ItemsContext);
  console.log(items);
  return (
    <div>
      <h2>Details: {items?.name}</h2>
    </div>
  );
};

export default ItemsDetails;
