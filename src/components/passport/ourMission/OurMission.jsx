import React from "react";
import "./OurMission.css";
import { useSelector } from "react-redux";
import { langText } from "./lang";

function OurMission() {
  const lang = useSelector((state) => state.language.currentLanguage);
  return (
    <div className="ourMission">
      <div className="outMission_container">
        <div className="outMission_container_img">
          <p>{langText[lang].title}</p>
          <h2>{langText[lang].description}</h2>
        </div>
        <div className="steps">
          <h1>{langText[lang].step_title}</h1>
          <p>{langText[lang].step_subtitle}</p>
          <div className="steps_wrap">
            <div className="steps_wrap_item">
              <h1 className="steps_wrap_item_order">1</h1>
              <h2>{langText[lang].step_1}</h2>
              <p>{langText[lang].step_1_description}</p>
              <button>{langText[lang].step_1_button}</button>
            </div>
            <div className="steps_wrap_item">
              <h1 className="steps_wrap_item_order">2</h1>
              <h2>{langText[lang].step_2}:</h2>
              <p>{langText[lang].step_2_description}</p>
            </div>
            <div className="steps_wrap_item">
              <h1 className="steps_wrap_item_order">3</h1>
              <h2>{langText[lang].step_3}:</h2>
              <p>{langText[lang].step_3_description}</p>
            </div>
            <div className="steps_wrap_item">
              <h1 className="steps_wrap_item_order">4</h1>
              <h2>{langText[lang].step_4}:</h2>
              <p>{langText[lang].step_4_description}</p>
            </div>
            <div className="steps_wrap_item">
              <h1 className="steps_wrap_item_order">5</h1>
              <h2>{langText[lang].step_5}:</h2>
              <p>{langText[lang].step_5_description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurMission;
