import React from "react";
import { Outlet } from "react-router-dom";
import UpBar from "../Components/UpBar";
import Navbar from "../Components/Navbar";
import LatestNews from "../Components/LatestNews";

const Root = () => {
  return (
    <>
      <div className="the-after"></div>
      <UpBar />
      <Navbar />
      <LatestNews />
      <Outlet />
    </>
  );
};
export default Root;
