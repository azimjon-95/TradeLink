import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./Section.css";
import "../../banner/style.css";
import { useNavigate } from "react-router-dom";
import { Collapse } from 'antd';
import Support from "../../banner/Support";
import supporters from "../../../assets/passport/macbook.png";
import { langText, translate } from "./lang";
import ForPassprt from "../../forPassprt/ForPassprt";
import AllInOne from "../../all_in_one/AllInOne";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

function Section() {
  const navigate = useNavigate();
  const lang = useSelector((state) => state.language.currentLanguage);
  let token = localStorage.getItem("access_token");
  const currentLanguage = useSelector(
    (state) => state.language.currentLanguage
  );
  const t = translate[currentLanguage];
  useEffect(() => {
    if (token) {
      navigate("/trader-cabinet/dashboard");
    }
  }, [token, navigate]);


  const customIcons = ({ isActive }) =>
    isActive ? <MinusOutlined style={{ fontSize: "22px" }} /> : <PlusOutlined style={{ fontSize: "22px" }} />;
  return (
    <section>
      <div className="homePage">
        <header className="PassportPage__header">
          <div className="PaspportPage__texts">
            <h1 className="PaspportPage__title">{langText[lang].title}</h1>
            <h1
              style={{ color: "#7241d3" }}
              className="PaspportPage__title PaspportPage__title_x"
            >
              {langText[lang].crypto}
            </h1>
            <p className="PaspportPage__subtitle">{langText[lang].subtitle}</p>
          </div>

          <div className="PassportPage__images">
            <img src={supporters} alt="" />
          </div>
        </header>
      </div>

      {/* Support */}
      <Support />

      <ForPassprt />

      <AllInOne />

      {/* FAQ */}
      <div className="FAQ_containerPs" >
        <h1>{t.faq_title}</h1>
        <Collapse
          size="middle"
          expandIcon={customIcons}
          expandIconPosition="end"
          items={t.open_info.map((info, index) => ({
            key: `${index + 1}`,
            label: [
              t.WhatIsKYT,
              t.KYT_passport,
              t.what_benefits,
            ][index],
            children: (
              <div className="open_info">
                <p style={{ fontSize: "14px" }}>{info}</p>
              </div>
            ),
          }))}
        />
      </div >
    </section>
  );
}

export default Section;
