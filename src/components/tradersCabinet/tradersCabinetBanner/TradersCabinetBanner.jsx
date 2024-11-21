import React, { useEffect } from "react";
import "./TradersCabinetBanner.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import RigthImg from "../../../assets/tradersCabinetRigthIgm.png";
import { setModalType } from "../../../context/modalType";

function TradersCabinetBanner() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const lang = useSelector((state) => state.language.currentLanguage);
  let token = localStorage.getItem("access_token");

  useEffect(() => {
    if (token) {
      navigate("/trader-cabinet/dashboard");
    }
  }, [token, navigate]);

  let langText = {
    en: {
      title: "Earn up to 20% from the profits of your investors",
      subtitle: "Publish your strategy to the KYT-know your trader",
      button: "Apply strategy",
    },
    ru: {
      title: "Зарабатывайте до 20% от прибыли ваших инвесторов",
      subtitle: "Опубликуйте свою стратегию в KYT-знакомьтесь с трейдером",
      button: "Применить стратегию",
    },
    es: {
      title: "Gana hasta 20% de las ganancias de tus inversores",
      subtitle: "Publica tu estrategia en KYT-conoce al trader",
      button: "Aplica la estrategia",
    },
    de: {
      title: "Erhalte bis zu 20% der Einnahmen deiner Investoren",
      subtitle:
        "Veröffentlichen Sie Ihre Strategie in KYT-kennen Sie den Trader",
      button: "Strategie anwenden",
    },
  };

  return (
    <div className="tradersCabinetBanner">
      <div className="tradersCabinetBanner__container">
        <div>
          <h1>{langText[lang].title}</h1>
          <p>{langText[lang].subtitle}</p>
          <Link onClick={() => dispatch(setModalType("signUp"))}>
            {langText[lang].button}
          </Link>
        </div>
        <div>
          <img src={RigthImg} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default TradersCabinetBanner;
