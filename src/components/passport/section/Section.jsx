import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./Section.css";
import { useNavigate } from "react-router-dom";
import section_img from "../../../assets/banner/passport.png";
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
          The Ultimate Global Standard for Crypto Traders.
        </h1>
        <h3>
          Verify your trading success with immutable data from reliable exchanges.
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


// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import "./Section.css";
// import { useNavigate } from "react-router-dom";
// import section_img from "../../../assets/banner/passport.png";
// import supporters from "../../../assets/banner/supporters.png";
// import { setModalType } from "../../../context/modalType";

// function Section() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   let token = localStorage.getItem("access_token");
//   const currentLanguage = useSelector((state) => state.language.currentLanguage);

//   useEffect(() => {
//     if (token) {
//       navigate("/trader-cabinet/dashboard");
//     }
//   }, [token, navigate]);

//   // Tarjimalar obyektini yaratamiz
//   const translations = {
//     en: {
//       title: "The Ultimate Global Standard for Crypto Traders.",
//       subtitle: "Verify your trading success with immutable data from reliable exchanges.",
//       buttonText: "Start building your trading Portfolio for free",
//       supportTitle: "We support",
//     },
//     ru: {
//       title: "Абсолютный глобальный стандарт для крипто-трейдеров.",
//       subtitle: "Подтвердите свои успехи в торговле с помощью неизменяемых данных надежных бирж.",
//       buttonText: "Начните создавать свой торговый портфель бесплатно",
//       supportTitle: "Мы поддерживаем",
//     },
//     es: {
//       title: "El estándar global definitivo para los comerciantes de criptomonedas.",
//       subtitle: "Verifica tu éxito comercial con datos inmutables de intercambios confiables.",
//       buttonText: "Comienza a construir tu portafolio comercial gratis",
//       supportTitle: "Apoyamos",
//     },
//     de: {
//       title: "Der ultimative globale Standard für Krypto-Trader.",
//       subtitle: "Überprüfen Sie Ihren Handelserfolg mit unveränderlichen Daten zuverlässiger Börsen.",
//       buttonText: "Beginnen Sie kostenlos mit dem Aufbau Ihres Handelsportfolios",
//       supportTitle: "Wir unterstützen",
//     },
//   };

//   // Tanlangan til uchun matnlarni olish
//   const { title, subtitle, buttonText, supportTitle } = translations[currentLanguage] || translations.en;

//   return (
//     <section>
//       <div className="section_container">
//         <h1 className="section_title">{title}</h1>
//         <h3>{subtitle}</h3>
//         {
//           !token &&
//           <button onClick={() => dispatch(setModalType("signUp"))}>{buttonText}</button>
//         }
//         <img src={section_img} alt="passport page img" />

//         <div className="section_support">
//           <h2>{supportTitle}</h2>
//           <img src={supporters} alt="supporters" />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Section;
