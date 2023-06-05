import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/app.scss";
import { BrowserRouter } from "react-router-dom";
import AppContextProvider from "./components/AppContextProvider.jsx";

export const serverLink = "https://nodejs-todoapp-gdb9.onrender.com/api/v1";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppContextProvider>
);
