import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import "./RevenueChart.css";


const chartData = {
  yearly: [
    { label: "Jan", impressions: 15000, revenue: 8000 },
    { label: "Feb", impressions: 20000, revenue: 10000 },
    { label: "Mar", impressions: 7000, revenue: 4000 },
    { label: "Apr", impressions: 17000, revenue: 9000 },
    { label: "May", impressions: 25000, revenue: 14000 },
    { label: "Jun", impressions: 13000, revenue: 7000 },
  ],
  monthly: [
    { label: "Week 1", impressions: 4000, revenue: 1800 },
    { label: "Week 2", impressions: 5000, revenue: 2200 },
    { label: "Week 3", impressions: 3000, revenue: 1400 },
    { label: "Week 4", impressions: 6000, revenue: 2800 },
  ],
  weekly: [
    { label: "Mon", impressions: 800, revenue: 400 },
    { label: "Tue", impressions: 1200, revenue: 500 },
    { label: "Wed", impressions: 700, revenue: 350 },
    { label: "Thu", impressions: 1500, revenue: 600 },
    { label: "Fri", impressions: 1800, revenue: 750 },
    { label: "Sat", impressions: 900, revenue: 420 },
    { label: "Sun", impressions: 1000, revenue: 460 },
  ],
};

const RevenueCharts = () => {
  const [range, setRange] = useState("yearly");
  const [metric, setMetric] = useState("both");

  return (
    <div className="chart-container">
      
      <div className="button-row">
        <div className="toggle-group">
          {["yearly", "monthly", "weekly"].map((r) => (
            <button
              key={r}
              onClick={() => setRange(r)}
              className={range === r ? "active" : ""}
            >
              {r.charAt(0).toUpperCase() + r.slice(1)}
            </button>
          ))}
        </div>
        <div className="toggle-group">
          {["impressions", "revenue", "both"].map((m) => (
            <button
              key={m}
              onClick={() => setMetric(m)}
              className={metric === m ? "active" : ""}
            >
              {m.charAt(0).toUpperCase() + m.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={chartData[range]}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Legend />
          {(metric === "impressions" || metric === "both") && (
            <Line
              type="monotone"
              dataKey="impressions"
              stroke="#8884d8"
              strokeWidth={2}
              name="Impressions"
            />
          )}
          {(metric === "revenue" || metric === "both") && (
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#82ca9d"
              strokeWidth={2}
              name="Revenue"
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueCharts;
