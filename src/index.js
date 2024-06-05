import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot from react-dom/client
import "./reset.css";
import "./index.css";
import App from "./components/App/App";
import * as serviceWorker from "./serviceWorker";

// Use createRoot to render your App component
createRoot(document.getElementById('root')).render(<App />);
console.log("index.js loaded");

serviceWorker.unregister();
