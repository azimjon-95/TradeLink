import React from "react";
import "./Products.css";
import { Link } from "react-router-dom";

function Products() {
  return (
    <div className="dashboard-product-container">
      <div className="top-links">
        <Link className="active" to={"/dashboard"}>
          Products
        </Link>
        <Link to={"/dashboard/success-fee"}>Earned Success Fee history</Link>
      </div>
      <div className="products-container">
        <h2>There's nothing yet</h2>
        <p>Add your first product to the Marketplace to get started.</p>
        <Link to={"/dashboard&ctx=product"}>Apply New</Link>
      </div>
    </div>
  );
}

export default Products;
