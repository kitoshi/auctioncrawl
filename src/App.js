import React from "react";
import Content from "./components/Content.js";
import Landing from "./components/Landing.js";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ul className="navBorder">
          <li>
            <Link to="/content" className="navitem" style={{ float: "right" }}>
              Auctions
            </Link>
          </li>
          <li>
            <Link to="/" className="navitem" style={{ float: "right" }}>
              Home
            </Link>
          </li>
        </ul>
        <Route exact path="/" component={Landing} />
        <Route path="/content" component={Content} />
      </div>
    </BrowserRouter>
  );
}

export default App;
