import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import cardsJSON from "./cards.json";
// import cards from "./db.json";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App props={cardsJSON} />
  </React.StrictMode>
);
