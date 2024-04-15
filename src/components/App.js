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

const App = () => {
  return (
    <div>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<CategoryList category="men" />} />
            <Route path="/categories/:category" element={<CategoryList />}>
              <Route path="items/:itemId" element={<ItemList />} />
            </Route>
          </Routes>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
