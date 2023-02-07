/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../assets/img/شعار_العاصمة_لوغو.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  let links = [
    {
      title: "الرئيسية",
      link: "/",
      id: "menu-item-102",
    },
    {
      title: "المذيعون",
      link: "/",
      id: "menu-item-153",
    },
    {
      title: "برامج اليوم",
      link: "/",
      id: "menu-item-111",
    },
    {
      title: "الدقيقة الاولى",
      link: "/",
      id: "menu-item-119",
    },
    {
      title: "اخبار العاصمة",
      link: "/",
      id: "menu-item-153",
    },
    {
      title: "تسجيلات",
      link: "/",
      id: "menu-item-153",
    },
    {
      title: "صور",
      link: "/",
      id: "menu-item-153",
    },
    {
      title: "اتصل بنا",
      link: "/",
      id: "menu-item-153",
    },
  ];
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-sm-3 col-md-3 col-xs-6">
              <div className="logo">
                <Link to="/">
                  <img src={Logo} alt="" />
                </Link>
              </div>
            </div>
            <div className="col-sm-9 col-md-9 col-xs-6">
              <div className="menu">
                <ul className="main-menu">
                  {links.map((link, index) => (
                    <li id={link.id} key={index}>
                      <Link to={link.link} className="mx-3">
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="hidden-xx">
                <i onClick={() => setOpenNav(true)}>
                  <svg
                    style={{ width: "50px", height: "100px" }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-list"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                    />
                  </svg>
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="sidenav"
        style={openNav ? { width: "100%" } : { width: "0%" }}
      >
        <div className="col-xs-12">
          <a
            href="javascript:void(0)"
            className="closebtn"
            onClick={() => setOpenNav(false)}
          >
            <i aria-hidden="true">
              <svg
                style={{ width: "50px", height: "50px" }}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-arrow-right-short text-light"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                />
              </svg>
            </i>
          </a>
        </div>
        <div className="col-xs-12">
          <img style={{ width: "150px" }} src={Logo} alt="" />
        </div>

        <div className="sidenav-menu ">
          <ul className="menu-nav">
            {links.map((link, index) => (
              <li id={link.id} key={index} className="text-center">
                <Link to={link.link}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
