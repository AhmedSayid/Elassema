import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <section className="sidebar">
      <h3>Dash</h3>

      <h4>Home</h4>
      <ul>
        <li>
          <NavLink to="/dashboard/latestNews">
            <span>Latest News</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/carousel">
            <span>Carousel</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/broadcast">
            <span>Broadcast</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/now">
            <span>Now</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/news">
            <span>News</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/schedule">
            <span>Program Schedule</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/recordings">
            <span>Recordings</span>
          </NavLink>
        </li>
      </ul>
      <h4>Announcers</h4>
      <ul>
        <li>
          <NavLink to="/dashboard/announcers">
            <span>Announcers</span>
          </NavLink>
        </li>
      </ul>
      <h4>Programmes</h4>
      <ul>
        <li>
          <NavLink to="/dashboard/programmes">
            <span>Programmes</span>
          </NavLink>
        </li>
      </ul>
      <h4>First Muinte</h4>
      <ul>
        <li>
          <NavLink to="/dashboard/firstmuinte/news">
            <span>News</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/firstmuinte/object">
            <span>Topics</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/firstmuinte/announcers">
            <span>Announcers</span>
          </NavLink>
        </li>
      </ul>
      <h4>ELassema News</h4>
      <ul>
        <li>
          <NavLink to="/dashboard/eLassemanews/news">
            <span>News</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/eLassemanews/object">
            <span>Topics</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/eLassemanews/announcers">
            <span>Announcers</span>
          </NavLink>
        </li>
      </ul>
    </section>
  );
};

export default Sidebar;
