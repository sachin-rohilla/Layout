import ReactDom from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import React from "react";


ReactDom.render(
  <React.StrictMode>
      <App />
  
  </React.StrictMode>,

  document.getElementById("root")
);
