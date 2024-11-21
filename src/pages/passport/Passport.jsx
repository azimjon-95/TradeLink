
import React from "react";
import { useSelector } from "react-redux";
import Section from "../../components/passport/section/Section";
import CommmantCenter from "../../components/passport/commandCenter/CommmantCenter";
import Solving from "../../components/passport/solving/Solving";

import OurMission from "../../components/passport/ourMission/OurMission";
import Ads from "../../components/passport/ads/Ads";
import Faq from "../../components/passport/faq/Faq";

// Example translation object
const translations = {
  en: {
    adsTitle1: "Hear What the Community is Saying About KYT Traders Passport",
    adsText1: "We value your feedback; it helps us improve.",
    adsButton1: "Review us on Trustpilot",
    adsTitle2: "Grow Your Funds on KYT Marketplace",
    adsText2: "Connect with investors, expand your reach, and earn commissions on profits - with no hidden fees.",
    adsButton2: "Learn more",
    adsTitle3: "Build Your Crypto Trading Reputation on KYT Traders Passport",
    adsText3: "Showcase your verified performance and connect with the world's leading investors.",
    adsButton3: "Get Started For FREE",
  },
  ru: {
    adsTitle1: "Слушайте, что сообщество говорит о паспорте трейдеров KYT",
    adsText1: "Мы ценим ваш отзыв; это помогает нам улучшаться.",
    adsButton1: "Оставьте отзыв на Trustpilot",
    adsTitle2: "Увеличьте свои средства на рынке KYT",
    adsText2: "Подключайтесь к инвесторам, расширяйте свой охват и зарабатывайте комиссии с прибыли — без скрытых сборов.",
    adsButton2: "Узнать больше",
    adsTitle3: "Постройте свою репутацию в криптоторговле с паспортом трейдера KYT",
    adsText3: "Продемонстрируйте свою проверенную производительность и соединитесь с ведущими инвесторами мира.",
    adsButton3: "Начните бесплатно",
  },
  de: {
    adsTitle1: "Hören Sie, was die Community über den KYT Traders Passport sagt",
    adsText1: "Wir schätzen Ihr Feedback; es hilft uns, uns zu verbessern.",
    adsButton1: "Bewerten Sie uns auf Trustpilot",
    adsTitle2: "Wachsen Sie Ihr Kapital auf dem KYT Marketplace",
    adsText2: "Verbinden Sie sich mit Investoren, erweitern Sie Ihre Reichweite und verdienen Sie Provisionen auf Gewinne – ohne versteckte Gebühren.",
    adsButton2: "Erfahren Sie mehr",
    adsTitle3: "Bauen Sie Ihren Krypto-Handelsruf auf dem KYT Traders Passport auf",
    adsText3: "Zeigen Sie Ihre verifizierte Leistung und verbinden Sie sich mit den weltweit führenden Investoren.",
    adsButton3: "Kostenlos starten",
  },
  es: {
    adsTitle1: "Escuche lo que la comunidad dice sobre el KYT Traders Passport",
    adsText1: "Valoramos sus comentarios; nos ayuda a mejorar.",
    adsButton1: "Revísenos en Trustpilot",
    adsTitle2: "Haga crecer sus fondos en el KYT Marketplace",
    adsText2: "Conéctese con inversores, amplíe su alcance y gane comisiones sobre las ganancias, sin tarifas ocultas.",
    adsButton2: "Aprenda más",
    adsTitle3: "Construya su reputación en el comercio de criptomonedas en el KYT Traders Passport",
    adsText3: "Muestre su rendimiento verificado y conéctese con los principales inversores del mundo.",
    adsButton3: "Comience gratis",
  },
};

const Passport = () => {
  const currentLanguage = useSelector((state) => state.language.currentLanguage);
  const t = translations[currentLanguage] || translations.en;

  let style = {
    width: "100%",
  };

  return (
    <div style={style} className="passport">
      <Section />
      <CommmantCenter />
      <Solving />
      <OurMission />
      <Ads
        extra_class="ads_1"
        ads_title={t.adsTitle1}
        ads_text={t.adsText1}
        ads_button={t.adsButton1}
      />
      <Ads
        extra_class="ads_2"
        ads_title={t.adsTitle2}
        ads_text={t.adsText2}
        ads_button={t.adsButton2}
      />
      <Faq />
      <Ads
        extra_class="ads_3"
        ads_title={t.adsTitle3}
        ads_text={t.adsText3}
        ads_button={t.adsButton3}
      />
    </div>
  );
};

export default Passport;
