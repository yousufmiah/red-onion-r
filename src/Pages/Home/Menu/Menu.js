import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-center">
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="/"
        >
          Breakfast
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="lunch"
        >
          Lunch
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="dinner"
        >
          Dinner
        </NavLink>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Menu;
