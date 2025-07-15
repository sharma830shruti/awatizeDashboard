import React from "react";
import "./CustomTable.css"; 

const CustomTable = ({ columns, data }) => {
  return (
   
    <div className="table-container">
      <div className="table-head">
         <h3>Top Publishers</h3>
    <p>Publishers that performed well in the last week</p>
      </div>
      <table className="custom-table">
        <thead>
          <tr>
            {columns.map((col, idx) => (
              <th key={idx}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rIdx) => (
            <tr key={rIdx}>
              {columns.map((col, cIdx) => (
                <td key={cIdx}>{row[col]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
