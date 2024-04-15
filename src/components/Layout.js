import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div>
      <h1>Nested Routes</h1>
      <nav>
        <ul>
          <li>
            <Link to="/categories/men">Men</Link>
          </li>
          <li>
            <Link to="/categories/women">Women</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
};

export default Layout;
