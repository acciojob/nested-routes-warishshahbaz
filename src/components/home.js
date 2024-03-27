import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/women"}>Women</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
