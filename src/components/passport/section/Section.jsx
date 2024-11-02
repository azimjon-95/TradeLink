import React from "react";
import "./Section.css";
import section_img from "../../../assets/section_img.png";
import supporters from "../../../assets/supporters.png";

function Section() {
  return (
    <section>
      <div className="section_container">
        <h1 className="section_title">
          The Definitive Global Benchmark <br /> for Crypto Traders
        </h1>
        <h3>
          Authenticate your trading success with unalterable data from <br />
          trusted exchanges.
        </h3>
        <button>Start building your trading Portfolio for free</button>
        <img src={section_img} alt="passport page img" />

        <div className="section_support">
          <h2>We support</h2>
          <img src={supporters} alt="supporters" />
        </div>
      </div>
    </section>
  );
}

export default Section;
