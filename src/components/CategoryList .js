import React from "react";
import { Link } from "react-router-dom";

const CategoryList = ({ category }) => {
  return (
    <div>
      <h2>{category} Categories</h2>
      <ul>
        <li>
          <Link to={`/categories/${category}/items/item1`}>Item 1</Link>
        </li>
        <li>
          <Link to={`/categories/${category}/items/item2`}>Item 2</Link>
        </li>
        <li>
          <Link to={`/categories/${category}/items/item3`}>Item 3</Link>
        </li>
      </ul>
    </div>
  );
};

export default CategoryList;
