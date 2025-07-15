import React from "react";
import CustomTable from "./CustomTable"; 
import "./Publishers.css"; 

const Publishers = () => {
  const columns = ["Publisher", "Revenue", "Growth", "Fill Rate"];

  const data = [
    {
      Publisher: "TechNews Media",
      Revenue: "98K",
      Growth: "30%",
      "Fill Rate": "30%"
    },
    {
      Publisher: "Lifestyle Magazine",
      Revenue: "$1.4M",
      Growth: "30%",
      "Fill Rate": "30%"
    },
    {
      Publisher: "Finance Insider",
      Revenue: "$1200",
      Growth: "30%",
      "Fill Rate": "30%"
    }
  ];

  return (
    <div className="publishers-section">
  
      <CustomTable columns={columns} data={data} />
    </div>
  );
};

export default Publishers;
