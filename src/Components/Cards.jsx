
import React from "react";
import "./Cards.css";

const StatCard = ({ title, value, note }) => {
  return (
    <div className="card-container">
    <div className="card">
      <h7>{title}</h7>
      <h1>{value}</h1>
      <p>{note}</p>
      </div>
    </div>
  );
};

export default StatCard;
