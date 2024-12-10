import React, { useState } from "react";
import "./style.css";
import { useSelector } from "react-redux";
import { BsCheck2 } from "react-icons/bs";
import { langText } from "./lang";

function AllInOne() {
  const [activeTab, setActiveTab] = useState(0);
  const lang = useSelector((state) => state.language.currentLanguage);
  const t = langText[lang];

  return (
    <div className="forPaspport_All">
      <h1>{t.title}</h1>
      <div className="forBtn_all_box">
        {t.tabs.map((tab, index) => (
          <button
            key={index}
            className={`${activeTab === index ? "forBtn_all_btn_active" : "forBtn_all_btn"}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.icon} {tab.text}
          </button>
        ))}
      </div>

      <div className="allInOne_contents_box">
        <div className="contents_box_ones">
          <div className="contents_box_ones_img">
            <img src={t.content[activeTab].img} alt="" />
          </div>
          <div className="contents_box_ones_text">
            <h1>{t.content[activeTab].title}</h1>
            <p>{t.content[activeTab].description}</p>
            <span>
              <div className="all___right_box">
                {t.content[activeTab].features.map((feature, index) => (
                  <div key={index}>
                    <div><BsCheck2 /></div>
                    <p>{feature}</p>
                  </div>
                ))}
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllInOne;

