import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./styles/global";
import { UserProvider } from "./providers/UserContexts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TechProvider } from "./providers/TechContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles></GlobalStyles>
      <UserProvider>
        <TechProvider>
          <App />
        </TechProvider>
      </UserProvider>
      <ToastContainer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
