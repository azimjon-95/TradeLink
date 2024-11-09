import React from "react";
import "./FeeHistory.css";
import { Link } from "react-router-dom";
import Overall from "../overall/Overall";

function FeeHistory() {
  return (
    <div className="fee-history">
      <Overall />
      <div className="fee-history-container">
        <div className="top-links">
          <Link to={"/trader-cabinet/dashboard"}>Products</Link>
          <Link className="active" to={"/dashboard/success-fee"}>
            Earned Success Fee history
          </Link>
        </div>
        <div className="success-fee-container">
          <h2>There's nothing yet</h2>
          <p>Add your first product to the Marketplace to get started.</p>
        </div>
      </div>
    </div>
  );
}

export default FeeHistory;
