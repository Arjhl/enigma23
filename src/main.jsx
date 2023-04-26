import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Event from "../components/Event";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CtxProvider from "./store/event-context";
import Team from "../components/Team";
import SingleEvent from "../components/SingleEvent";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Error from "../components/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/home",
    element: <App />,
  },

  {
    path: "/events",
    element: <Event />,
  },
  {
    path: "/events/:id",
    element: <SingleEvent />,
  },
  {
    path: "/workshops",
    element: <Error />,
  },
  {
    path: "/team",
    element: <Team />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CtxProvider>
      <RouterProvider router={router} />
    </CtxProvider>
  </React.StrictMode>
);
