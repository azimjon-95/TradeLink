import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./Section.css";
import "../../banner/style.css";
import { useNavigate } from "react-router-dom";
import { Collapse } from 'antd';
import Support from "../../banner/Support";
import supporters from "../../../assets/passport/macbook.png";
// import pas__bg_image from "../../../assets/newBanners/bgBanner.svg"
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
    <>
      <div className="passport__main">
        <div className="passport__media">
          <header className="PassportPage__header">
            <div className="PaspportPage__texts">
              <h1 className="Paspport__title">{langText[lang].title}</h1>
              <h1
                style={{ color: "#7241d3" }}
                className="Paspport__title Paspport__title_x"
              >
                {langText[lang].crypto}
              </h1>
              <p className="Paspport__subtitle">{langText[lang].subtitle}</p>
            </div>

            <div className="PassportPage__images">
              <img src={supporters} alt="" />
            </div>


          </header>
        </div>
      </div>

      {/* Support */}
      <Support />

      <ForPassprt />

      <AllInOne />

      {/* FAQ */}
      <div className="FAQ_containerPs_media">
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
      </div>
    </>
  );
}

export default Section;
