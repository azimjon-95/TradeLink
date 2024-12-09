import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Section.css";
import "../../banner/style.css";
import { useNavigate } from "react-router-dom";
import section_img from "../../../assets/banner/passport.png";
import Support from "../../banner/Support";
import supporters from "../../../assets/passport/macbook.png";
import { setModalType } from "../../../context/modalType";
import { langText } from "./lang";
import ForPassprt from "../../forPassprt/ForPassprt";

function Section() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.language.currentLanguage);
  let token = localStorage.getItem("access_token");

  useEffect(() => {
    if (token) {
      navigate("/trader-cabinet/dashboard");
    }
  }, [token, navigate]);

  return (
    <section>
      <div className="homePage">
        <header className="PassportPage__header">
          <div className="homePage__texts">
            <h1 className="homePage__title">{langText[lang].title}</h1>
            <h1
              style={{ color: "#7241d3" }}
              className="homePage__title homePage__title_x"
            >
              {langText[lang].crypto}
            </h1>
            <p className="homePage__subtitle">{langText[lang].subtitle}</p>
          </div>

          <div className="PassportPage__images">
            <img src={supporters} alt="" />
          </div>
        </header>
      </div>

      {/* Support */}
      <Support />




      <ForPassprt />













      <div className="section_container">
        <h1 className="section_title">{langText[lang].title}</h1>
        <h3>{langText[lang].subtitle}</h3>
        {!token && (
          <button onClick={() => dispatch(setModalType("signUp"))}>
            {langText[lang].buttonText}
          </button>
        )}
        <img src={section_img} alt="passport page img" />

        <div className="section_support">
          <h2>{langText[lang].supportTitle}</h2>
          <img src={supporters} alt="supporters" />
        </div>
      </div>
    </section>
  );
}

export default Section;
