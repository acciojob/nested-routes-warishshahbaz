import React from "react";
import { useParams } from "react-router-dom";

const ItemList = () => {
  const { category } = useParams();
  return (
    <div>
      <h3>{category} Items</h3>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  );
};

export default ItemList;
