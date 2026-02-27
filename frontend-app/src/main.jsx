import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const rootNode = document.getElementById("arcano-frontend-app") || document.getElementById("root");

if (rootNode) {
  createRoot(rootNode).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
