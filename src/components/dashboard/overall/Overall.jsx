import React from "react";
import "./Overall.css";
import { Link } from "react-router-dom";

function Overall() {
  return (
    <div className="overall">
      <div className="top">
        <h1>Overall statistics</h1>
        <Link to={"/landing"}>
          <button>View landing</button>
        </Link>
      </div>
      <div className="overal-statistics-cards">
        <div className="statistics-card">
          <span>Total pending Success Fee</span>
          <div className="statistics">
            <b>${0}</b>
          </div>
        </div>
        <div className="statistics-card">
          <span>Total earned Success Fee</span>
          <div className="statistics">
            <b>${0}</b>
          </div>
        </div>
        <div className="statistics-card">
          <span>Total AUM</span>
          <div className="statistics">
            <b>${0}</b>
          </div>
        </div>
        <div className="statistics-card">
          <span>Total Investors</span>
          <div className="statistics">
            <b>{0}</b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overall;
