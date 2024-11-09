import React from "react";
import "./Dashboard.css";
import Overall from "./overall/Overall";
import Products from "./products/Products";

function Dashboard() {
  return (
    <div className="dashbord-components-container">
      <Overall />
      <Products />
    </div>
  );
}

export default Dashboard;
