import React from "react";
import "../styles/App.css";

import {
  Link,
  unstable_HistoryRouter as HistoryRouter,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import { createBrowserHistory } from "history";

function Layout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/women">Women</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

function Index() {
  return <div>Index</div>;
}

function Women() {
  return (
    <div>
      Women Items:
      <ul>
        <li>
          <Link to="Grooming">Grooming</Link>
        </li>
        <li>
          <Link to="Shirt">Shirt</Link>
        </li>
        <li>
          <Link to="Trouser">Trouser</Link>
        </li>
        <li>
          <Link to="Jewellery">Jewellery</Link>
        </li>
      </ul>
      <Routes>
        <Route path="Grooming" element={<div>Grooming</div>} />
        <Route path="Shirt" element={<div>Shirt</div>} />
        <Route path="Trouser" element={<div>Trouser</div>} />
        <Route path="Jewellery" element={<div>Jewellery</div>} />
      </Routes>
    </div>
  );
}

export default function App() {
  const history = createBrowserHistory();

  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="/women/*" element={<Women />} />
        </Route>
      </Routes>
    </HistoryRouter>
  );
}
