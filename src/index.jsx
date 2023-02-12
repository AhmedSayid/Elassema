import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./pages/Root";
import Home from "./pages/Home/Home";
import Announcers from "./pages/Announcers/Announcers";
import Contact from "./pages/ContactUs/Contact";
import Programmes from "./pages/programmes/Programmes";
import FirstMuinte from "./pages/FirstMuinte/FirstMuinte";
import News from "./pages/News/News";

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
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/programmes",
        element: <Programmes />,
      },
      {
        path: "/firstmuinte",
        element: <FirstMuinte />,
      },
      {
        path: "/news",
        element: <News />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
