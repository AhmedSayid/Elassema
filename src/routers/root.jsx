import React from "react";
import { Outlet } from "react-router-dom";
import "../index.css";

const Root = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
export default Root;
