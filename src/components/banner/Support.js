import React from "react";
import okx from "../../assets/newBanners/okx.png";
import binance from "../../assets/newBanners/binance.png";
import byb from "../../assets/newBanners/byb.png";
import bing from "../../assets/newBanners/bing.png";
import bitget from "../../assets/newBanners/bitget.png";
import htx from "../../assets/newBanners/htx.png";
import { useSelector } from "react-redux";
import { translate } from "./Lang";
import "./media.css";
import "./style.css";

const Support = () => {
  const currentLanguage = useSelector(
    (state) => state.language.currentLanguage
  );
  const t = translate[currentLanguage];
  return (
    <div className="weSupport_container">
      <div className="weSupport__main_container">
        <h1>{t.weSupport}</h1>
        <div>
          <img width={70} src={okx} alt="" />
          <img width={120} src={binance} alt="" />
          <img width={70} src={byb} alt="" />
          <img width={70} src={bing} alt="" />
          <img width={70} src={bitget} alt="" />
          <img width={70} src={htx} alt="" />
        </div>
        <button>{t.registration}</button>
      </div>
    </div>
  );
};

export default Support;
