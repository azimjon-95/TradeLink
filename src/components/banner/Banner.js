import React, { useEffect, useState, useRef } from "react";
import "./style.css";
import "./media.css";
import AOS from "aos";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { BsQuestionCircle } from "react-icons/bs";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { BsCheck2 } from "react-icons/bs";
import Frame1 from "../../assets/newBanners/Frame1.png";
import Frame2 from "../../assets/newBanners/Frame2.png";
import Frame3 from "../../assets/newBanners/Frame3.png";
import Frame4 from "../../assets/newBanners/Frame4.png";
import Frame5 from "../../assets/newBanners/Frame5.png";
import my_img1 from "../../assets/banner/my_img1.png";
import okx from "../../assets/newBanners/okx.png";
import binance from "../../assets/newBanners/binance.png";
import byb from "../../assets/newBanners/byb.png";
import bing from "../../assets/newBanners/bing.png";
import bitget from "../../assets/newBanners/bitget.png";
import htx from "../../assets/newBanners/htx.png";
import ret from "../../assets/newBanners/Frame6.png";
import Ellipse from "../../assets/newBanners/image2.png";
import ForTrader from "../../components/forTrader/ForTrader";
import "aos/dist/aos.css";

import "swiper/css";
import "swiper/css/pagination";

// Rus:
// Наши тарифы

// Ingliz (English):
// Our tariffs

// Nemis (Deutsch):
// Unsere Tarife

// Ispan (Español):
// Nuestras tarifas

const translate = {
  en: {
    ourTariffs: "Our tariffs",
    global:
      "A global standard for independent evaluation of traders and investments in the best strategies.",
    theMost: "The most powerful international platform for",
    monitoring: "crypto-monitoring",
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
    passportBenefits: [
      "To build greater confidence among investors.",
      "Securely upload your data with an API key that has read-only permissions.",
      "Everything you need, from statistics to investment attraction, all in one place.",
    ],
    passportTitle: "KYT - Know your trader's passport",
    passportSubtitle: "Global standard for trader evaluation.",
    learnMore: "Learn more",
  },
  ru: {
    ourTariffs: "Наши тарифы",
    global:
      "Глобальный стандарт независимой оценки трейдеров и инвестиций в лучшие стратегии.",
    theMost: "Самая мощная международная платформа по",
    monitoring: "крипто-мониторингу",
    registration: "Регистрация",
    weSupport: "Мы поддерживаем",
    addMod1: "Как добавить свой портфель в рейтинг?",
    addMod2: "Как мы измеряем рейтинг?",
    addModal: "Как добавить свой портфель в рейтинг?",
    kytreat: "Рейтинг по",
    monthlyTop: "Ежемесячный топ",
    quarterlyTop: "Квартальный топ",
    howToAdd: "Как добавить свой портфель в рейтинг?",
    howWeCalculate: "Как мы измеряем рейтинг?",
    rank: "Рейтинг",
    by: "по",
    passportBenefits: [
      "Для создания большего доверия среди инвесторов.",
      "Безопасно загрузите ваши данные с API-ключом с правами только для чтения.",
      "Все, что вам нужно: статистика, привлечение инвестиций и многое другое.",
    ],
    passportTitle: "KYT - Знай паспорт своего трейдера",
    passportSubtitle: "Глобальный стандарт для оценки трейдеров.",
    learnMore: "Узнать больше",
  },
  es: {
    ourTariffs: "Nuestros precios",
    global:
      "Un estándar global para la evaluación independiente de traders e inversiones en las mejores estrategias.",
    theMost: "La plataforma internacional más poderosa para",
    monitoring: "monitoreo de criptomonedas",
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
    passportBenefits: [
      "Para generar mayor confianza entre los inversores.",
      "Sube tus datos de forma segura con una clave API con permisos solo de lectura.",
      "Todo lo que necesitas, desde estadísticas hasta atracción de inversiones, todo en un solo lugar.",
    ],
    passportTitle: "KYT - Conozca el pasaporte de su trader",
    passportSubtitle: "Estándar global para la evaluación de traders.",
    learnMore: "Aprende más",
  },
  de: {
    ourTariffs: "Unser Tarifplan",
    global:
      "Ein globaler Standard für die unabhängige Bewertung von Händlern und Investitionen in die besten Strategien.",
    theMost: "Die stärkste internationale Plattform für",
    monitoring: "Kryptowährungsmarktüberwachung",
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
    passportBenefits: [
      "Um das Vertrauen der Investoren zu stärken.",
      "Lade deine Daten sicher mit einem API-Schlüssel mit nur Lesezugriff hoch.",
      "Alles, was du brauchst, von Statistiken bis zur Anwerbung von Investitionen, alles an einem Ort.",
    ],
    passportTitle: "KYT - Kennen Sie den Pass Ihres Traders",
    passportSubtitle: "Globaler Standard für die Bewertung von Tradern.",
    learnMore: "Mehr erfahren",
  },
};

const Banner = () => {
  const location = useLocation();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [slider, setSlider] = useState(1); // Faol slayd raqami (1 dan boshlanadi)

  useEffect(() => {
    const new_token = new URLSearchParams(location.search).get("token");
    if (new_token) {
      localStorage.setItem("access_token", new_token);
    }
  }, [location]);

  const currentLanguage = useSelector(
    (state) => state.language.currentLanguage
  );
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
      {
        rank: 1,
        name: "A",
        icons: Frame1,
        reting: ret,
        org: "Kazier",
        score: 52.05,
      },
      {
        rank: 2,
        name: "T1",
        icons: Frame2,
        reting: ret,
        org: "Kazier",
        score: 51.92,
      },
      {
        rank: 3,
        name: "B7",
        icons: Frame3,
        reting: ret,
        org: "Kazier",
        score: 51.2,
      },
      {
        rank: 4,
        name: "M",
        icons: Frame4,
        reting: ret,
        org: "Kazier",
        score: 40.98,
      },
      {
        rank: 5,
        name: "AINATA",
        icons: Frame5,
        reting: ret,
        org: "MACROSMATIC",
        score: 39.88,
      },
    ],
    quarterly: [
      {
        rank: 1,
        name: "A",
        icons: Frame1,
        reting: ret,
        org: "Kazier",
        score: 53.02,
      },
      {
        rank: 2,
        name: "T1",
        icons: Frame2,
        reting: ret,
        org: "Kazier",
        score: 52.88,
      },
      {
        rank: 3,
        name: "B7",
        icons: Frame3,
        reting: ret,
        org: "Kazier",
        score: 52.27,
      },
      {
        rank: 4,
        name: "M",
        icons: Frame4,
        reting: ret,
        org: "Kazier",
        score: 41.94,
      },
      {
        rank: 5,
        name: "AINATA",
        icons: Frame5,
        reting: ret,
        org: "MACROSMATIC",
        score: 38.81,
      },
    ],
  };

  return (
    <>
      <div className="homePage">
        <header className="homePage__header">
          <div className="homePage__texts">
            <h1 className="homePage__title">{t.theMost}</h1>
            <h1
              style={{ color: "#7241d3" }}
              className="homePage__title homePage__title_x"
            >
              {t.monitoring}
            </h1>
            <p className="homePage__subtitle">{t.global}</p>
          </div>

          <div className="homePage__images">
            <img src={Ellipse} alt="" />
          </div>
        </header>

        <div className="slider-container">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onSwiper={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            onSlideChange={(swiper) => setSlider(swiper.activeIndex + 1)}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <div className="simple-btn">
              <p>0{slider}</p>
              <button ref={prevRef} className="prev-btn">
                <BsArrowLeftShort />
              </button>
              <button ref={nextRef} className="next-btn">
                <BsArrowRightShort />
              </button>
            </div>

            <SwiperSlide className="swiper-slide">
              <div className="swiper-slide-main">
                <div className="homeslide__left">
                  <div>
                    <p>{t.passportSubtitle}</p>
                    <h1>{t.passportTitle}</h1>
                  </div>

                  <Link to="/passport">
                    <button>{t.learnMore}</button>
                  </Link>
                </div>
                <div className="homeslide__right">
                  <img src={my_img1} alt="" />
                  <div className="homeslide__right_box">
                    <div>
                      <div>
                        <BsCheck2 />
                      </div>{" "}
                      <p>{t.passportBenefits[0]}</p>
                    </div>
                    <div>
                      <div>
                        <BsCheck2 />
                      </div>{" "}
                      <p>{t.passportBenefits[1]}</p>
                    </div>
                    <div>
                      <div>
                        <BsCheck2 />
                      </div>{" "}
                      <p>{t.passportBenefits[2]}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide_cert">
              <div className="swiper-slide-main_img"></div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <div className="swiper-slide-main">
                <div className="homeslide__left">
                  <div>
                    <p>{t.passportSubtitle}</p>
                    <h1>{t.passportTitle}</h1>
                  </div>

                  <Link to="/passport">
                    <button>{t.learnMore}</button>
                  </Link>
                </div>
                <div className="homeslide__right">
                  <img src={my_img1} alt="" />
                  <div className="homeslide__right_box">
                    <div>
                      <div>
                        <BsCheck2 />
                      </div>{" "}
                      <p>{t.passportBenefits[0]}</p>
                    </div>
                    <div>
                      <div>
                        <BsCheck2 />
                      </div>{" "}
                      <p>{t.passportBenefits[1]}</p>
                    </div>
                    <div>
                      <div>
                        <BsCheck2 />
                      </div>{" "}
                      <p>{t.passportBenefits[2]}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* passport */}
      <div className="marketplace">
        <h1 className="marketplace-subtitle_pass">
          {t.kytreat} <p>KYT</p>
        </h1>

        <div className="reting_btns-banner">
          <button>
            <BsQuestionCircle /> {t.addMod1}
          </button>
          <button>
            <BsQuestionCircle /> {t.addMod2}
          </button>
        </div>

        <div className="reating_banner_conts">
          <div className="reating_banner_box">
            <span>
              <strong className="reating_banner_box_title">
                {t.monthlyTop}
              </strong>
              <p>NOV 05 - DEC 05</p>
            </span>
            <div className="reting_banner_cards">
              {data.monthly.map((item) => (
                <div className="card_ret-bann" key={item.rank}>
                  <span>
                    <p
                      className={`${
                        item.rank === 1 ? "item-rank" : "item-rank-circle"
                      }`}
                    >
                      {item.rank}
                    </p>
                    <img width={28} src={item.icons} alt="" />
                    <div className="name_reting_user">
                      {item.name} <br />{" "}
                      <p>
                        {t.by} {item.org}
                      </p>
                    </div>
                  </span>

                  <span className="name_reting_res">
                    <img width={28} src={item.reting} alt="" />
                    <p> {item.score}</p>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="reating_banner_box">
            <span>
              <strong className="reating_banner_box_title">
                {t.quarterlyTop}
              </strong>
              <p>NOV 05 - DEC 05</p>
            </span>
            <div className="reting_banner_cards">
              {data.quarterly.map((item) => (
                <div className="card_ret-bann" key={item.rank}>
                  <span>
                    <p
                      className={`${
                        item.rank === 1 ? "item-rank" : "item-rank-circle"
                      }`}
                    >
                      {item.rank}
                    </p>
                    <img width={28} src={item.icons} alt="" />
                    <div className="name_reting_user">
                      {item.name} <br />{" "}
                      <p>
                        {t.by} {item.org}
                      </p>
                    </div>
                  </span>

                  <span className="name_reting_res">
                    <img width={28} src={item.reting} alt="" />
                    <p> {item.score}</p>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Как начать */}
      <ForTrader />

      {/* Мы поддерживаем */}
      <div className="weSupport_container">
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

      {/* Наши тарифы */}
      <div className="ourTariffs">
        <h1>{t.ourTariffs}</h1>

        <div>
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;
