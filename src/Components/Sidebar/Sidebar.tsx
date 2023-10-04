import React from "react";
import "./style.scss";
import ICONS from "../../Assets/icons";
import { Link, NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar-component">
      <div className="branding">
        <img
          style={{
            width: "100%",
          }}
          src="favicon.png"
          alt="logo"
        />
      </div>
      <div className="clearfix-50"></div>
      <div className="journeys-area">
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : "link"
          }
          to="/"
        >
          <ICONS.HOME />
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "link active" : "link"
          }
          to="/table"
        >
          <ICONS.TABLE />
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "link active" : "link"
          }
          to="/orders"
        >
          <ICONS.PRINTER />
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "link active" : "link"
          }
          to="/bookings"
        >
          <ICONS.TIMING />
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "link pending" : isActive ? "link active" : "link"
          }
          to="/catalogue"
        >
          <ICONS.BREIFCASE />
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "link active" : "link"
          }
          to="/offers"
        >
          <ICONS.TROPHY />
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "link pending" : isActive ? "link active" : "link"
          }
          to="/settings"
        >
          <ICONS.SETTINGS />
        </NavLink>
      </div>
      <div className="sidebar-slider"></div>
    </div>
  );
}

export default Sidebar;
