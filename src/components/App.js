import React, { useEffect } from "react";
import "./../styles/App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./home";
import WomenSection from "./womenSection";

const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    console.log("=====================================");
    navigate("/");
  }, []);
  return (
    <div>
      {/* Do not remove the main div */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/women" element={<WomenSection />}>
          <Route path="Grooming" element={<p>Grooming</p>} />
          <Route path="Shirt" element={<p>Shirt</p>} />
          <Route path="Trouser" element={<p>Trouser</p>} />
          <Route path="Jwellery" element={<p>Jwellery</p>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
