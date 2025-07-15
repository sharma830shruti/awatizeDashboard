import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  MdDashboard,
  MdInventory,
  MdPeople,
  MdAssessment,
  MdPerson,
} from "react-icons/md";
import "./Sidebar.css";

const Sidebar = () => {
  const location = useLocation();

  const tabs = [
    { name: "Dashboard", path: "/", icon: <MdDashboard /> },
    { name: "Inventory", path: "/inventory", icon: <MdInventory /> },
    { name: "Publishers", path: "/publishers", icon: <MdPeople /> },
    { name: "Reports", path: "/reports", icon: <MdAssessment /> },
    { name: "Users", path: "/users", icon: <MdPerson /> },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src="./src/assets/screenshot_8-YZ9bO8jXO1F5z2Wg.jpg" alt="Logo" />
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
              <span className="sidebar-icon">{tab.icon}</span>
              <span className="sidebar-text">{tab.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
