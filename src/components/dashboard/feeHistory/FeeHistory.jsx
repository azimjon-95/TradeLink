import React from "react";
import "./FeeHistory.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Overall from "../overall/Overall";
import { langText } from "../products/lang";

function FeeHistory() {
  const lang = useSelector((state) => state.language.currentLanguage);

  return (
    <div className="fee-history">
      <Overall />
      <div className="fee-history-container">
        <div className="top-links">
          <Link to={"/trader-cabinet/dashboard"}>{langText[lang].tabs_1}</Link>
          <Link className="active" to={"/dashboard/success-fee"}>
            {langText[lang].tabs_2}
          </Link>
        </div>
        <div className="success-fee-container">
          <h2>{langText[lang].boldText}</h2>
          <p>{langText[lang].normalText}</p>
        </div>
      </div>
    </div>
  );
}

export default FeeHistory;
