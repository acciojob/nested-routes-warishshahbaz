import React, { useEffect } from "react";
import "./../styles/App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import CategoryList from "./CategoryList ";
import ItemList from "./ItemList ";
import Layout from "./Layout";

const App = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<CategoryList category="men" />} />
          <Route path="/categories/:category" element={<CategoryList />}>
            <Route path="items/:itemId" element={<ItemList />} />
          </Route>
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
