import React from "react";
import { Outlet } from "react-router-dom";
import UpBar from "../Components/UpBar";
import Navbar from "../Components/Navbar";

const Root = () => {
  return (
    <>
      <div className="the-after"></div>
      <UpBar />
      <Navbar />

      <Outlet />
    </>
  );
};
export default Root;
