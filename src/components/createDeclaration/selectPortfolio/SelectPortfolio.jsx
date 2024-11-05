import React from "react";
import "./SelektPortfolio.css";
import { Link } from "react-router-dom";

function SelectPortfolio({ selectPortfolio, setSelectPortfolio }) {
  return (
    <div>
      {selectPortfolio && (
        <div className="select-portfolio-dropdown">
          <p>
            You don't have any available portfolios. <br /> You can create
            portfolio
            <Link to={"/passport/dashboard"}> in dashboard</Link>
          </p>
        </div>
      )}
    </div>
  );
}

export default SelectPortfolio;
