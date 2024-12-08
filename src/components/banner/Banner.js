import React, { useEffect } from "react";
import "./style.css";
import "./media.css";
import AOS from "aos";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { BsQuestionCircle } from "react-icons/bs";
import Frame1 from "../../assets/newBanners/Frame1.png";
import Frame2 from "../../assets/newBanners/Frame2.png";
import Frame3 from "../../assets/newBanners/Frame3.png";
import Frame4 from "../../assets/newBanners/Frame4.png";
import Frame5 from "../../assets/newBanners/Frame5.png";

import okx from "../../assets/newBanners/okx.png";
import binance from "../../assets/newBanners/binance.png";
import byb from "../../assets/newBanners/byb.png";
import bing from "../../assets/newBanners/bing.png";
import bitget from "../../assets/newBanners/bitget.png";
import htx from "../../assets/newBanners/htx.png";

import ret from "../../assets/newBanners/Frame6.png";
import bt_binance from "../../assets/banner/supporters.png";
import bigX from "../../assets/banner/bigX.png";
import BitGet from "../../assets/banner/BitGet.png";
import Ellipse from "./image2.png";

import { translations } from "./Lang";
import "aos/dist/aos.css"; // AOS uslublarini import qilish










const translate = {
  en: {
    registration: "Registration",
    weSupport: "We support",
    addMod1: "How to add your portfolio to the rating?",
    addMod2: "How do we measure the rating?",
    kytreat: "Rating by",
    monthlyTop: "Monthly Top",
    quarterlyTop: "Quarterly Top",
    howToAdd: "How to add your portfolio to the ranking?",
    howWeCalculate: "How do we calculate the ranking?",
    rank: "Rank",
    by: "by",
  },
  ru: {
    registration: "Регистрация",
    weSupport: "Мы поддерживаем",
    addMod1: "Как добавить свой портфель в рейтинг?",
    addMod2: "Как мы измеряем рейтинг?",
    addModal: 'Как добавить свой портфель в рейтинг?',
    kytreat: "Рейтинг по",
    monthlyTop: "Ежемесячный топ",
    quarterlyTop: "Квартальный топ",
    howToAdd: "Как добавить свой портфель в рейтинг?",
    howWeCalculate: "Как мы измеряем рейтинг?",
    rank: "Рейтинг",
    by: "по",

  },
  es: {
    registration: "Registro",
    weSupport: "Apoyamos",
    addMod1: "¿Cómo agregar su portafolio al ranking?",
    addMod2: "¿Cómo medimos el ranking?",
    kytreat: "Clasificación por",
    monthlyTop: "Top Mensual",
    quarterlyTop: "Top Trimestral",
    howToAdd: "¿Cómo agregar tu portafolio al ranking?",
    howWeCalculate: "¿Cómo calculamos el ranking?",
    rank: "Clasificación",
    by: "por",
  },
  de: {
    registration: "Registrierung",
    weSupport: "Wir unterstützen",
    addMod1: "Wie füge ich mein Portfolio zum Ranking hinzu?",
    addMod2: "Wie messen wir das Ranking?",
    kytreat: "Bewertung nach",
    monthlyTop: "Monatliches Top",
    quarterlyTop: "Vierteljährliches Top",
    howToAdd: "Wie füge ich mein Portfolio dem Ranking hinzu?",
    howWeCalculate: "Wie berechnen wir das Ranking?",
    rank: "Rang",
    by: "von",
  },
};


const Banner = () => {
  const location = useLocation();

  useEffect(() => {
    const new_token = new URLSearchParams(location.search).get("token");
    if (new_token) {
      localStorage.setItem("access_token", new_token);
    }
  }, [location]);


  const currentLanguage = useSelector(
    (state) => state.language.currentLanguage
  );
  const subTitle = translations[currentLanguage];
  const t = translate[currentLanguage];


  useEffect(() => {
    AOS.init({
      duration: 900, // Animatsiya davomiyligi (ms)
      easing: "ease-in-out", // Animatsiya harakati
      once: true, // Faqat bir marta animatsiya ishlashi
    });
  }, []);



  const data = {
    monthly: [
      { rank: 1, name: "A", icons: Frame1, reting: ret, org: "Kazier", score: 52.05 },
      { rank: 2, name: "T1", icons: Frame2, reting: ret, org: "Kazier", score: 51.92 },
      { rank: 3, name: "B7", icons: Frame3, reting: ret, org: "Kazier", score: 51.20 },
      { rank: 4, name: "M", icons: Frame4, reting: ret, org: "Kazier", score: 40.98 },
      { rank: 5, name: "AINATA", icons: Frame5, reting: ret, org: "MACROSMATIC", score: 39.88 },
    ],
    quarterly: [
      { rank: 1, name: "A", icons: Frame1, reting: ret, org: "Kazier", score: 53.02 },
      { rank: 2, name: "T1", icons: Frame2, reting: ret, org: "Kazier", score: 52.88 },
      { rank: 3, name: "B7", icons: Frame3, reting: ret, org: "Kazier", score: 52.27 },
      { rank: 4, name: "M", icons: Frame4, reting: ret, org: "Kazier", score: 41.94 },
      { rank: 5, name: "AINATA", icons: Frame5, reting: ret, org: "MACROSMATIC", score: 38.81 },
    ],
  };
  return (
    <>
      <div className="homePage">
        <header className="homePage__header">



          <div className="homePage__texts">
            <h1 className="homePage__title">Самая мощная международная платформа по</h1>
            <h1 style={{ color: "#7241d3" }} className="homePage__title">крипто-мониторингу</h1>
            <p className="homePage__subtitle">Глобальный стандарт для независимой оценки трейдеров и инвестиций в лучшие стратегии.</p>
          </div>
          <div className="homePage__images">
            <img src={Ellipse} alt="" />
          </div>




          {/* <h1 className="homePage__title">{subTitle.title}</h1>
          <p className="homePage__subtitle">{subTitle.subtitle}</p>
          {token ? (
            <button
              style={{ background: "transparent", color: "transparent" }}
              className="homePage__signUpButton"
            ></button>
          ) : (
            <button
              onClick={() => dispatch(setModalType("signUp"))}
              className="homePage__signUpButton"
            >
              {subTitle.signUp}
            </button>
          )} */}


        </header>
        <p className="homePage__subtitle-bottom">{subTitle.support}</p>
        <div className="homePage__support">
          <img src={bt_binance} alt="" />
        </div>

        <div className="homePage__supportLogos">
          <div className="homePage__support-img">
            <img src={bigX} alt="" />
          </div>
          <div style={{ margin: "0 20px" }} className="homePage__support-img">
            <img src={BitGet} alt="" />
          </div>
          {/* <div className="homePage__support-img">
            <img src={htx} alt="" />
          </div> */}
        </div>
      </div>

      {/* passport */}
      <div className="marketplace">
        <h1 className="marketplace-subtitle_pass">
          {t.kytreat} <p>KYT</p>
        </h1>

        <div className="reting_btns-banner">
          <button>< BsQuestionCircle /> {t.addMod1}</button>
          <button><BsQuestionCircle /> {t.addMod2}</button>
        </div>

        <div className="reating_banner_conts">
          <div className="reating_banner_box">
            <span>
              <strong className="reating_banner_box_title">{t.monthlyTop}</strong>
              <p>NOV 05 - DEC 05</p>
            </span>
            <div className="reting_banner_cards">
              {data.monthly.map((item) => (
                <div className="card_ret-bann" key={item.rank} >
                  <span>
                    <p className={`${item.rank === 1 ? "item-rank" : "item-rank-circle"}`}>{item.rank}</p>
                    <img width={28} src={item.icons} alt="" />
                    <div className="name_reting_user">{item.name} <br /> <p>{t.by} {item.org}</p></div>
                  </span>

                  <span className="name_reting_res" >
                    <img width={28} src={item.reting} alt="" />
                    <p> {item.score}</p>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="reating_banner_box">
            <span>
              <strong className="reating_banner_box_title">{t.quarterlyTop}</strong>
              <p>NOV 05 - DEC 05</p>
            </span>
            <div className="reting_banner_cards">
              {data.quarterly.map((item) => (
                <div className="card_ret-bann" key={item.rank} >
                  <span>
                    <p className={`${item.rank === 1 ? "item-rank" : "item-rank-circle"}`}>{item.rank}</p>
                    <img width={28} src={item.icons} alt="" />
                    <div className="name_reting_user">{item.name} <br /> <p>{t.by} {item.org}</p></div>
                  </span>

                  <span className="name_reting_res" >
                    <img width={28} src={item.reting} alt="" />
                    <p> {item.score}</p>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div >


      {/* Как начать */}
      <div className=""></div>


      {/* Мы поддерживаем */}
      <div className="weSupport_container">
        <h1>{t.weSupport}</h1>

        <div>
          <img width={50} src={okx} alt="" />
          <img width={50} src={binance} alt="" />
          <img width={50} src={byb} alt="" />
          <img width={50} src={bing} alt="" />
          <img width={50} src={bitget} alt="" />
          <img width={50} src={htx} alt="" />
        </div>

        <button>{t.registration}</button>
      </div>
    </>
  );
};

export default Banner;
