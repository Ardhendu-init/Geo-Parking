import React from "react";
import ReactDOM from "react-dom";
import { AppProvider } from "./Components/context";
import App from "./Components/App";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
