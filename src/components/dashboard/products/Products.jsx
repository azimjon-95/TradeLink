import React from "react";
import "./Products.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { langText } from "./lang";

function Products() {
  const lang = useSelector((state) => state.language.currentLanguage);
  return (
    <div className="dashboard-product-container">
      <div className="top-links">
        <Link className="active" to={"/dashboard"}>
          {langText[lang].tabs_1}
        </Link>
        <Link to={"/dashboard/success-fee"}>{langText[lang].tabs_2}</Link>
      </div>
      <div className="products-container">
        <h2>{langText[lang].boldText}</h2>
        <p>{langText[lang].normalText}</p>
        <Link to={"/dashboard&ctx=product"}>{langText[lang].btn}</Link>
      </div>
    </div>
  );
}

export default Products;
