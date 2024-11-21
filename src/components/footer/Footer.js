import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../../assets/kyt.png";

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
  uz: {
    products: "Mahsulotlar",
    rating: "KYT - Reyting",
    passport: "KYT - Treyderlar Pasporti",
    company: "Kompaniya",
    aboutUs: "Biz haqimizda",
    reviews: "Sharhlar",
    faq: "FAQ",
    contact: "Aloqa",
    support: "Qo‘llab-quvvatlash",
    disclaimer:
      "Ushbu veb-saytda taqdim etilgan ma'lumotlar faqat ma'lumot va ta'limiy maqsadlarda ishlatiladi. Sayt foydalanuvchilarning aktivlarini saqlamaydi yoki boshqarmaydi, shuningdek investitsiya, moliyaviy, yuridik, soliq yoki boshqa maslahatlar bermaydi. Har qanday tahlil yoki moliyaviy ma'lumotlarning vizual tasviri faqat umumiy ma'lumot uchun mo'ljallangan va investitsiya qarorlarini qabul qilishda asos sifatida foydalanilmasligi kerak. Foydalanuvchilar har doim o'z tadqiqotlarini o'tkazishlari va qarorlarini mustaqil qabul qilishlari kerak.",
    copyright: `Copyright © 2021 - ${new Date().getFullYear()} "KYT - KNOW YOUR TRADER" KYT MChJ, BVI KOMPANIYA RAQAMI 822 85 193. Barcha huquqlar himoyalangan.`,
  },
  fr: {
    products: "Produits",
    rating: "KYT - Classement",
    passport: "KYT - Passeport des Traders",
    company: "Entreprise",
    aboutUs: "À propos de nous",
    reviews: "Avis",
    faq: "FAQ",
    contact: "Contact",
    support: "Soutien",
    disclaimer:
      "Les informations fournies sur ce site Web sont uniquement à des fins informatives et éducatives. Le site ne conserve ni ne gère aucun actif des utilisateurs et ne fournit aucun conseil en investissement, financier, juridique, fiscal ou autre. Toute analyse ou représentation visuelle de données financières est fournie à titre d'information générale uniquement et ne doit pas être considérée comme une recommandation pour prendre des décisions d'investissement. Les utilisateurs doivent toujours effectuer leurs propres recherches et prendre leurs propres décisions.",
    copyright: `Copyright © 2021 - ${new Date().getFullYear()} "KYT - KNOW YOUR TRADER" KYT LLC, BVI COMPANY NUMBER 822 85 193. Tous droits réservés.`,
  },
};

const Footer = () => {
  const currentLanguage = useSelector((state) => state.language.currentLanguage);
  const subTitle = translations[currentLanguage];

  return (
    <footer className="footer">
      <div className="footer-head">
        <div className="footer-head-logo">
          <img src={logo} alt="LOGO" />
        </div>
        <div className="footer-icons"></div>
      </div>

      <div className="footer-top">
        <div className="footer-section">
          <h3 className="footer-title">{subTitle.products}</h3>
          <ul className="footer-list">
            <li>
              <Link to={"/rating"}>{subTitle.rating}</Link>
            </li>
            <li>
              <Link to={"/passport"}>{subTitle.passport}</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">{subTitle.company}</h3>
          <ul className="footer-list">
            <li>
              <Link to={"/"}>{subTitle.aboutUs}</Link>
            </li>
            <li>
              <Link to={"/"}>{subTitle.reviews}</Link>
            </li>
            <li>
              <Link to={"/faq"}>{subTitle.faq}</Link>
            </li>
            <li>
              <Link to={"/"}>{subTitle.contact}</Link>
            </li>
            <li>
              <Link to={"/"}>{subTitle.support}</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-disclaimer">{subTitle.disclaimer}</p>
        <p className="footer-copyright">{subTitle.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
