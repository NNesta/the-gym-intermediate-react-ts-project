import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ReduxProvider from "./store";
import "./index.css";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(
  <StrictMode>
    <BrowserRouter>
      <ReduxProvider>
        <App />
      </ReduxProvider>
    </BrowserRouter>
  </StrictMode>
);
