import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import App from "./app";
import "./index.css";

export const routes = [
  {
    path: "/",
    element: <Navigate to="/step/0" replace />,
  },
  {
    path: "/step/:step",
    element: <App />,
  },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
