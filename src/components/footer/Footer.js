import React from "react";
import { Link } from "react-router-dom"
import "./style.css";
import { useSelector } from "react-redux";
import { BsArrowUpShort } from "react-icons/bs";
import logo from "../../assets/logo_main.svg";
import footer_shadow from "../../assets/footer_shadow.png";

const translations = {
  en: {
    products: "Products",
    rating: "KYT - Rating",
    passport: "KYT - Traders Passport",
    company: "Company",
    aboutUs: "About Us",
    reviews: "Reviews",
    faq: "FAQ",
    contact: "Contact",
    support: "Support",
    disclaimer:
      "The information provided on this website is for informational and educational purposes only. The website does not hold or handle any assets of users and does not provide investment, financial, legal, tax or other advice. Any analysis or visual representation of financial data is for general information purposes only and should not be relied upon for investment decisions. Users should always conduct their own research and make their own decisions.",
    copyright: `Copyright © 2021 - ${new Date().getFullYear()} "KYT - KNOW YOUR TRADER" KYT LLC, BVI COMPANY NUMBER 822 85 193. All rights reserved.`,
  },
  ru: {
    products: "Продукты",
    rating: "KYT - Рейтинг",
    passport: "KYT - Паспорт трейдера",
    company: "Компания",
    aboutUs: "О нас",
    reviews: "Отзывы",
    faq: "FAQ",
    contact: "Контакты",
    support: "Поддержка",
    disclaimer:
      "Информация, представленная на этом сайте, предоставляется исключительно в информационных и образовательных целях. Сайт не хранит и не управляет активами пользователей, а также не предоставляет инвестиционные, финансовые, юридические, налоговые или иные консультации. Любой анализ или визуализация финансовых данных предоставляются только в общих информационных целях и не должны рассматриваться как рекомендация для принятия инвестиционных решений. Пользователи должны всегда проводить собственные исследования и принимать собственные решения.",
    copyright: `Copyright © 2021 - ${new Date().getFullYear()} "KYT - KNOW YOUR TRADER" KYT LLC, BVI COMPANY NUMBER 822 85 193. Все права защищены.`,
  },
  de: {
    products: "Produkte",
    rating: "KYT - Bewertung",
    passport: "KYT - Trader Pass",
    company: "Firma",
    aboutUs: "Über uns",
    reviews: "Bewertungen",
    faq: "FAQ",
    contact: "Kontakt",
    support: "Unterstützung",
    disclaimer:
      "Die auf dieser Website bereitgestellten Informationen dienen nur zu Informations- und Bildungszwecken. Die Website hält oder verwaltet keine Vermögenswerte der Benutzer und bietet keine Investitions-, Finanz-, Rechts-, Steuer- oder anderen Beratungen an. Alle Analysen oder visuelle Darstellungen von Finanzdaten dienen nur allgemeinen Informationszwecken und sollten nicht als Grundlage für Investitionsentscheidungen herangezogen werden. Benutzer sollten immer ihre eigenen Recherchen durchführen und ihre eigenen Entscheidungen treffen.",
    copyright: `Copyright © 2021 - ${new Date().getFullYear()} "KYT - KNOW YOUR TRADER" KYT LLC, BVI COMPANY NUMBER 822 85 193. Alle Rechte vorbehalten.`,
  },
  es: {
    products: "Productos",
    rating: "KYT - Clasificación",
    passport: "KYT - Pasaporte de Traders",
    company: "Compañía",
    aboutUs: "Sobre nosotros",
    reviews: "Reseñas",
    faq: "FAQ",
    contact: "Contacto",
    support: "Soporte",
    disclaimer:
      "La información proporcionada en este sitio web es solo para fines informativos y educativos. El sitio web no posee ni maneja activos de los usuarios y no proporciona asesoría en inversiones, finanzas, legal, impuestos o de otro tipo. Cualquier análisis o representación visual de datos financieros es solo para fines informativos generales y no debe ser considerado como una recomendación para tomar decisiones de inversión. Los usuarios siempre deben realizar su propia investigación y tomar sus propias decisiones.",
    copyright: `Copyright © 2021 - ${new Date().getFullYear()} "KYT - KNOW YOUR TRADER" KYT LLC, BVI COMPANY NUMBER 822 85 193. Todos los derechos reservados.`,
  },
};


const Footer = () => {
  const currentLanguage = useSelector(
    (state) => state.language.currentLanguage
  );
  const subTitle = translations[currentLanguage];



  const handleScrollToTop = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
    }, 0); // Ensure it runs after route change
  };


  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <div className="footer-head-logo">
            <img src={logo} alt="LOGO" />
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">{subTitle?.products}</h3>
          <ul className="footer-list">
            <li>
              <Link to={"/rating"}>{subTitle?.rating}</Link>
            </li>
            <li>
              <Link to={"/passport"}>{subTitle?.passport}</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">{subTitle?.company}</h3>
          <ul className="footer-list">
            <li>
              <Link onClick={handleScrollToTop} to={"/about"}>{subTitle?.aboutUs}</Link>
            </li>
            <li>
              <Link onClick={handleScrollToTop} to={"/reviews"}>{subTitle?.reviews}</Link>
            </li>
            <li>
              <Link onClick={handleScrollToTop} to={"/faq"}>{subTitle?.faq}</Link>
            </li>
            <li>
              <Link onClick={handleScrollToTop} to={"/contact"}>{subTitle?.contact}</Link>
            </li>
            {/* <li>
              <Link to={"/"}>{subTitle?.support}</Link>
            </li> */}
          </ul>
        </div>

        <button onClick={handleScrollToTop}><BsArrowUpShort /></button>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">{subTitle?.copyright}</p>
        <p className="footer-disclaimer">{subTitle?.disclaimer}</p>
      </div>

      <img src={footer_shadow} alt="" />
    </footer>
  );
};

export default Footer;
