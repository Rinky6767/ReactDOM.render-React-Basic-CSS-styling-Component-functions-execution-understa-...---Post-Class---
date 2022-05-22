import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

const rootElement = document.getElementById("root");
const ReactDOM = createRoot(rootElement);

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>
);
