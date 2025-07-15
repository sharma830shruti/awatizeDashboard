import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const location = useLocation();

  const tabs = [
    { name: "Dashboard", path: "/" },
    { name: "Inventory", path: "/inventory" },
    { name: "Publishers", path: "/publishers" },
    { name: "Reports", path: "/reports" },
    { name: "Users", path: "/users" },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src="./src/assets/screenshot_8-YZ9bO8jXO1F5z2Wg.jpg"  />
      </div>
      <ul className="sidebar-menu">
        {tabs.map((tab) => (
          <li key={tab.name}>
            <Link
              to={tab.path}
              className={`sidebar-link ${
                location.pathname === tab.path ? "active" : ""
              }`}
            >
              {tab.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
