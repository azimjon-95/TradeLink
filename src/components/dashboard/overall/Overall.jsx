import React from "react";
import "./Overall.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { langText } from "./lang";

function Overall() {
  const lang = useSelector((state) => state.language.currentLanguage);
  return (
    <div className="overall">
      <div className="top">
        <h1>{langText[lang].title}</h1>
        <Link to={"/"}>
          <button>{langText[lang].view_btn}</button>
        </Link>
      </div>
      <div className="overal-statistics-cards">
        <div className="statistics-card">
          <span>{langText[lang].total_pending_success_fee}</span>
          <div className="statistics">
            <b>${0}</b>
          </div>
        </div>
        <div className="statistics-card">
          <span>{langText[lang].total_earned_success_fee}</span>
          <div className="statistics">
            <b>${0}</b>
          </div>
        </div>
        <div className="statistics-card">
          <span>{langText[lang].total_aum}</span>
          <div className="statistics">
            <b>${0}</b>
          </div>
        </div>
        <div className="statistics-card">
          <span>{langText[lang].total_investors}</span>
          <div className="statistics">
            <b>{0}</b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overall;
