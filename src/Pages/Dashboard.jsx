import React from "react";
import Cards from "../Components/Cards"; 
import "./Dashboard.css";
import RevenueCharts from "../Components/RevenueCharts";
import Publishers from "../Components/Publishers";

const Dashboard = () => {
  const stats = [
    { title: "Total Revenue", value: "$121,580", note: "12.8% vs last period" },
    { title: "Fill Rate", value: "84.2%", note: "8% vs last period" },
    { title: "Average CPM", value: "$3.42", note: "4% vs last period" },
    { title: "Active Publishers", value: "32", note: "6.7% vs last period" },
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
