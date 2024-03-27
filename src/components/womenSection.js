import React from "react";
import { Link, Outlet } from "react-router-dom";
import Home from "./home";

function WomenSection() {
  const navigate = useNavigate();
  useEffect(() => {
    console.log("=====================================");
    navigate("/");
  }, []);
  return (
    <div>
      <Home />
      <p>Women Items</p>
      <ul>
        <li>
          <Link to={"Grooming"}>Grooming</Link>
        </li>
        <li>
          <Link to={"Shirt"}>Shirt</Link>
        </li>
        <li>
          <Link to={"Trouser"}>Trouser</Link>
        </li>
        <li>
          <Link to={"Jwellery"}>Jwellery</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default WomenSection;
