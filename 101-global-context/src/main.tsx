import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { AppContext } from "./context.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppContext>
      <App />
    </AppContext>
  </React.StrictMode>
);
