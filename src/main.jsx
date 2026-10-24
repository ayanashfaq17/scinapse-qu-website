/** Entry: global CSS then App. Routes and shell live in App.jsx. */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./CSS/index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
