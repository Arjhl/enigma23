import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/events",
    element: <h1>Event</h1>,
  },
  {
    path: "/workshops",
    element: <h1>Workshops</h1>,
  },
  {
    path: "/team",
    element: <h1>Team</h1>,
  },
  {
    path: "/gallery",
    element: <h1>Gallery</h1>,
  },
  {
    path: "/contact",
    element: <h1>Contact</h1>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
