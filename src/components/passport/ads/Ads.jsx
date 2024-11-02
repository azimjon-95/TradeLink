import React from "react";
import "./Ads.css";

function Ads({ ads_title, ads_text, ads_button, extra_class }) {
  return (
    <div className="ads">
      <div className={`ads_container ${extra_class}`}>
        <h1 className="ads_title">{ads_title}</h1>
        <p className="ads_text">{ads_text}</p>
        <button className="add_button">
          {extra_class === "ads_1" ? (
            <>
              <b>Review us on </b>
              <span>{String.fromCharCode(9733) + " Trustpilot"}</span>
            </>
          ) : (
            ads_button
          )}
        </button>
      </div>
    </div>
  );
}

export default Ads;
