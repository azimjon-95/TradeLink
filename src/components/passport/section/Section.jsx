import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./Section.css";
import { useNavigate } from "react-router-dom";
import section_img from "../../../assets/section_img.png";
import supporters from "../../../assets/banner/supporters.png";
import { setModalType } from "../../../context/modalType";

function Section() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let token = localStorage.getItem("access_token");

  useEffect(() => {
    if (token) {
      navigate("/trader-cabinet/dashboard");
    }
  }, [token, navigate]);

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
        {
          !token &&
          <button onClick={() => dispatch(setModalType("signUp"))}>Start building your trading Portfolio for free</button>
        }
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
