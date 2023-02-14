import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "routers/root";
import DashBoard from "routers/DashBoard";
import LatestNews from "components/dashboard/LatestNews/LatestNews";
import Carousel from "components/dashboard/Carousel/Carousel";
import Broadcast from "components/dashboard/Broadcast/Broadcast";
import Now from "components/dashboard/now/Now";
import News from "components/dashboard/news/news";
import Table from "components/dashboard/table/table";
import Recordings from "components/dashboard/recordings/recordings";
import Announcers from "components/dashboard/Announcers/Announcers";
import Programmes from "components/dashboard/programmes/programmes";
import Firstmuinte from "components/dashboard/firstmuinte/firstmuinte";
import ObjectCom from "components/dashboard/Object/Object";
import AnnouncersFirst from "components/dashboard/announcersFirst/announcersFirst";
import ELassemanews from "components/dashboard/eLassemanews/eLassemanews";
import ObjectNews from "components/dashboard/ObjectNews/ObjectNews";
import AnnouncersNews from "components/dashboard/announcersNews/announcersNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <DashBoard />,
        children: [
          { path: "/dashboard/latestNews", element: <LatestNews /> },
          { path: "/dashboard/carousel", element: <Carousel /> },
          { path: "/dashboard/broadcast", element: <Broadcast /> },
          { path: "/dashboard/now", element: <Now /> },
          { path: "/dashboard/news", element: <News /> },
          { path: "/dashboard/schedule", element: <Table /> },
          { path: "/dashboard/recordings", element: <Recordings /> },
          { path: "/dashboard/announcers", element: <Announcers /> },
          { path: "/dashboard/programmes", element: <Programmes /> },
          { path: "/dashboard/firstmuinte/news", element: <Firstmuinte /> },
          { path: "/dashboard/firstmuinte/object", element: <ObjectCom /> },
          {
            path: "/dashboard/firstmuinte/announcers",
            element: <AnnouncersFirst />,
          },
          { path: "/dashboard/eLassemanews/news", element: <ELassemanews /> },
          { path: "/dashboard/eLassemanews/object", element: <ObjectNews /> },
          {
            path: "/dashboard/eLassemanews/announcers",
            element: <AnnouncersNews />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
