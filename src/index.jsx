import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home/Home";
import Announcers from "./pages/Announcers/Announcers";
import Contact from "./pages/ContactUs/Contact";
import Programmes from "./pages/programmes/Programmes";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/announcers",
        element: <Announcers />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Programmes",
        element: <Programmes />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
