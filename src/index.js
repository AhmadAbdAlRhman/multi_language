import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import "./i18n.js";
// import * as serciveWorker from './serviceWorker';
const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
