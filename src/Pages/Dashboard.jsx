import React from "react";
import Cards from "../Components/Cards"; 
import "./Dashboard.css";
import RevenueCharts from "../Components/RevenueCharts";
import Publishers from "../Components/Publishers";

const Dashboard = () => {
  const stats = [
    { title: "Total Revenue", value: "$121,580", note: <span><span className="positive">12.8%</span> vs last period</span> },
    { title: "Fill Rate", value: "84.2%", note: <span><span className="positive">8%</span> vs last period</span> },
    { title: "Average CPM", value: "$3.42", note: <span><span className="negative">4%</span> vs last period</span> },
    { title: "Active Publishers", value: "32", note: <span><span className="positive">6.7%</span> vs last period</span> },
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-cards">
        {stats.map((item, index) => (
          <Cards
            key={index}
            title={item.title}
            value={item.value}
            note={item.note}
          />
        ))}
      </div>

      <div className="charts">
        <RevenueCharts />
      </div>

      <div className="publishers-container">
        <Publishers />
      </div>
    </div>
  );
};

export default Dashboard;
