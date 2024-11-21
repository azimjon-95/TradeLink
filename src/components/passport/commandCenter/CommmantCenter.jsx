import React, { useEffect, useState } from "react";
import "./CommandCenter.css";
import { IoCheckmarkSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import stats_img from "../../../assets/passport/trading_stats.png";
import personal_img from "../../../assets/passport/personal_page.png";
import trading_hq from "../../../assets/passport/trading_hq.png";
import rating from "../../../assets/passport/rating.png";
import capital from "../../../assets/passport/capital.png";

import investment_attraction from "../../../assets/passport/swiper/investment_attraction.png";
import swiper_rating from "../../../assets/passport/swiper/rating.png";
import portfolio from "../../../assets/passport/swiper/portfolio.png";
import trader from "../../../assets/passport/swiper/trader.png";
import statistic from "../../../assets/passport/swiper/statistics.png";
import { langText } from "./lang";

function CommmantCenter() {
  const lang = useSelector((state) => state.language.currentLanguage);

  // const serviceData = [
  //   { img: stats_img, title: "Trading Stats" },
  //   { img: personal_img, title: "Personal page" },
  //   { img: trading_hq, title: "Trading HQ" },
  //   { img: rating, title: "Traders' Rating" },
  //   { img: capital, title: "Attract Capital" },
  // ];

  const serviceData = [
    {
      img: stats_img,
      title: {
        en: "Trading Stats",
        ru: "Статистика торговли",
        es: "Estadísticas de trading",
        de: "Handelsstatistiken",
      },
    },
    {
      img: personal_img,
      title: {
        en: "Personal page",
        ru: "Персональная страница",
        es: "Página personal",
        de: "Persönliche Seite",
      },
    },
    {
      img: trading_hq,
      title: {
        en: "Trading HQ",
        ru: "Торговая база",
        es: "HQ de trading",
        de: "Trading-HQ",
      },
    },
    {
      img: rating,
      title: {
        en: "Traders' Rating",
        ru: "Рейтинг трейдеров",
        es: "Clasificación de traders",
        de: "Trader-Bewertungen",
      },
    },
    {
      img: capital,
      title: {
        en: "Attract Capital",
        ru: "Привлечь капитал",
        es: "Atraer capital",
        de: "Kapital anlocken",
      },
    },
  ];

  // const swiperData = [
  //   {
  //     img: statistic,
  //     title: "Track Your Trading Progress:",
  //     description:
  //       "Gain insights into your trading performance with detailed analysis.",
  //     lists: [
  //       "Complete Trading Log: Access a full history of all your trades since the creation of your account.",
  //       "Over 60 Performance Metrics: Utilize a vast array of indicators to evaluate your trading strategies.",
  //       "Up-to-the-Minute Data: Keep up with real-time updates on your trading activity.",
  //       "Monitor Active Trades: Stay on top of your open positions and their status.",
  //       "Customizable Data Views: Choose how you'd like to visualize your trading statistics.",
  //     ],
  //   },
  //   {
  //     img: trader,
  //     title: "Build Your Trader Profile:",
  //     description:
  //       "Showcase your trading expertise and progress with a professional portfolio.",
  //     lists: [
  //       "Create a Powerful Portfolio: Build a portfolio that highlights your best trading achievements.",
  //       "Deep Market Insights: Gain access to detailed metrics that help you analyze your trading strategies.",
  //       "Easy Networking: Include your social media and contact info to connect with other traders.",
  //       "Showcase Your Best Work: Display your strategies and portfolios with full customization options.",
  //     ],
  //   },
  //   {
  //     img: portfolio,
  //     title: "Manage Multiple Trading Accounts:",
  //     description:
  //       "Easily connect and manage all your exchange accounts in one place.",
  //     lists: [
  //       "Unify Your Accounts: Integrate all your trading accounts into a single platform for easy management.",
  //       "Unified Overview: Get a comprehensive view of your performance across all platforms.",
  //       "Cross-Exchange Strategies: Manage and diversify your portfolios with trades across different exchanges.",
  //     ],
  //   },
  //   {
  //     img: swiper_rating,
  //     title: "Rise Through the Global Rankings:",
  //     description:
  //       "Share your portfolio, compete globally, and showcase your achievements.",
  //     lists: [
  //       "Display Your Achievements: Share your portfolio with the global community and rise in the ranks.",
  //       "Advanced Search Filters: Use powerful filtering options to narrow down top traders.",
  //       "Connect with Leading Traders: Discover and follow successful traders from around the world.",
  //       "Transparent Rating System: Benefit from an objective and clear rating system for traders.",
  //     ],
  //   },
  //   {
  //     img: investment_attraction,
  //     title: "Attract Investors with Proven Strategies",
  //     description:
  //       "Share your trading strategy, attract capital, and grow together.",
  //     lists: [
  //       "Gain Investment Opportunities: Present your strategy on the KYT marketplace and attract potential investors.",
  //       "Perfect Replication: Use advanced tools to precisely replicate your trading strategies for investors.",
  //       "Customizable Algorithmic Strategies: Develop tailored strategies with custom indexes to meet the needs of investors.",
  //       "Flexible Billing and Commission: Streamline how commissions are calculated and billed for investors.",
  //     ],
  //   },
  // ];

  const swiperData = [
    {
      img: statistic,
      title: {
        en: "Track Your Trading Progress:",
        ru: "Отслеживайте свою торговую активность:",
        es: "Rastrea su progreso comercial:",
        de: "Verfolgen Sie Ihren Handelsfortschritt:",
      },
      description: {
        en: "Gain insights into your trading performance with detailed analysis.",
        ru: "Получайте ценные сведения о вашей торговой производительности с помощью подробного анализа.",
        es: "Obtenga información sobre su rendimiento comercial con un análisis detallado.",
        de: "Erhalten Sie Einblicke in Ihre Handelsleistung mit detaillierten Analysen.",
      },
      lists: {
        en: [
          "Complete Trading Log: Access a full history of all your trades since the creation of your account.",
          "Over 60 Performance Metrics: Utilize a vast array of indicators to evaluate your trading strategies.",
          "Up-to-the-Minute Data: Keep up with real-time updates on your trading activity.",
          "Monitor Active Trades: Stay on top of your open positions and their status.",
          "Customizable Data Views: Choose how you'd like to visualize your trading statistics.",
        ],
        ru: [
          "Полный торговый журнал: Доступ ко всей истории ваших сделок с момента создания вашего счета.",
          "Более 60 показателей производительности: Используйте широкий спектр индикаторов для оценки ваших торговых стратегий.",
          "Последние данные: Следите за реальны временными обновлениями по вашей торговой активности.",
          "Отслеживайте активные сделки: Оставайтесь в курсе статуса ваших открытых позиций.",
          "Настраиваемые виды данных: Выберите, как вы хотите визуализировать ваши торговые статистики.",
        ],
        es: [
          "Registro de Comercio Completo: Acceda a toda la historia de todas sus operaciones desde la creación de su cuenta.",
          "Más de 60 Métricas de Rendimiento: Utilice una amplia gama de indicadores para evaluar sus estrategias comerciales.",
          "Datos en Tiempo Real: Manténgase al día con las actualizaciones en tiempo real sobre su actividad comercial.",
          "Monitoreo de Operaciones Activas: Mantenga un seguimiento de sus posiciones abiertas y su estado.",
          "Vistas de Datos Personalizables: Elija cómo desea visualizar sus estadísticas comerciales.",
        ],
        de: [
          "Vollständiges Handelsprotokoll: Greifen Sie auf die gesamte Handelsgeschichte ab, die seit der Erstellung Ihres Kontos verfügbar ist.",
          "Über 60 Leistungsmetriken: Nutzen Sie eine Vielzahl von Indikatoren, um Ihre Handelsstrategien zu bewerten.",
          "Aktuelle Daten: Bleiben Sie auf dem Laufenden mit aktuellen Updates zu Ihrer Handelsaktivität.",
          "Aktive Handelsoperationen überwachen: Bleiben Sie auf dem Laufenden über den Status Ihrer offenen Positionen.",
          "Anpassbare Datenansichten: Wählen Sie, wie Sie Ihre Handelsstatistiken visualisieren möchten.",
        ],
      },
    },
    {
      img: trader,
      title: {
        en: "Build Your Trader Profile:",
        ru: "Создайте свой профиль трейдера:",
        es: "Crea tu perfil de trader:",
        de: "Erstellen Sie Ihren Trader-Profil:",
      },
      description: {
        en: "Gain insights into your trading performance with detailed analysis.",
        ru: "Получайте ценные сведения о вашей торговой производительности с помощью подробного анализа.",
        es: "Obtenga información sobre su rendimiento comercial con un análisis detallado.",
        de: "Erhalten Sie Einblicke in Ihre Handelsleistung mit detaillierten Analysen.",
      },
      lists: {
        en: [
          "Create a Powerful Portfolio: Build a portfolio that highlights your best trading achievements.",
          "Deep Market Insights: Gain access to detailed metrics that help you analyze your trading strategies.",
          "Easy Networking: Include your social media and contact info to connect with other traders.",
          "Showcase Your Best Work: Display your strategies and portfolios with full customization options.",
        ],
        ru: [
          "Создайте мощный портфель: Создайте портфель, который подчеркивает ваши лучшие торговые достижения.",
          "Внутреннее рыночное понимание: Получайте доступ к подробным показателям, которые помогают анализировать ваши торговые стратегии.",
          "Простое взаимодействие: Включите свои социальные сети и контактную информацию, чтобы связаться с другими трейдерами.",
          "Показать свою лучшую работу: Показывайте свои стратегии и портфели с полными возможностями настройки.",
        ],
        es: [
          "Crea un Portafolio Poderoso: Crea un portafolio que resalte tus mejores logros comerciales.",
          "Profundización en el Mercado: Accede a métricas detalladas que te ayudan a analizar tus estrategias comerciales.",
          "Redes Sociales Fáciles: Incluye tus redes sociales y datos de contacto para conectarte con otros traders.",
          "Muestra tu Mejor Trabajo: Muestra tus estrategias y portafolios con opciones de personalización total.",
        ],
        de: [
          "Starkes Portfolio erstellen: Erstellen Sie ein Portfolio, das Ihre besten Handelsleistungen hervorhebt.",
          "Tiefes Marktverständnis: Greifen Sie auf detaillierte Metriken zu, die Ihnen helfen, Ihre Handelsstrategien zu analysieren.",
          "Einfache Netzwerke: Schließen Sie Ihre sozialen Medien und Kontaktinformationen ein, um mit anderen Händlern zu verbinden.",
          "Zeige Ihre besten Arbeiten: Zeigen Sie Ihre Strategien und Portfolios mit voller Anpassungsoptionen an.",
        ],
      },
    },
    {
      img: portfolio,
      title: {
        en: "Manage Multiple Trading Accounts:",
        ru: "Управляйте несколькими торговыми счетами:",
        es: "Administra varias cuentas de trading:",
        de: "Verwalten Sie mehrere Handelskonten:",
      },
      description: {
        en: "Easily connect and manage all your exchange accounts in one place.",
        ru: "Легко подключать и управлять всеми вашими торговыми счетами в одно месте.",
        es: "Conéctate y administra todas tus cuentas de trading en un solo lugar.",
        de: "Verbinden und verwalten Sie alle Ihre Handelskonten an einem Ort.",
      },
      lists: {
        en: [
          "Unify Your Accounts: Integrate all your trading accounts into a single platform for easy management.",
          "Unified Overview: Get a comprehensive view of your performance across all platforms.",
          "Cross-Exchange Strategies: Manage and diversify your portfolios with trades across different exchanges.",
        ],
        ru: [
          "Объедините свои счета: интегрируйте все свои торговые счета в одну платформу для удобного управления.",
          "Единый обзор: получайте комплексный обзор своей производительности на всех платформах.",
          "Кросс-обменные стратегии: управляйте и диверсифицируйте свои портфели с помощью торгов на разных биржах.",
        ],
        es: [
          "Unifica tus cuentas: Integra todas tus cuentas de trading en una sola plataforma para un fácil manejo.",
          "Vista unificada: Obtén una visión integral de tu rendimiento en todas las plataformas.",
          "Estrategias de intercambio cruzado: Administra y diversifica tus portafolios con operaciones en diferentes intercambios.",
        ],
      },
    },
    {
      img: swiper_rating,
      title: {
        en: "Rise Through the Global Rankings:",
        ru: "Поднимитесь по глобальным рейтингам:",
        es: "Suba por las clasificaciones globales:",
        de: "Steigen durch die globalen Ranglisten:",
      },
      description: {
        en: "Share your portfolio, compete globally, and showcase your achievements.",
        ru: "Поделитесь своим портфелем, соревнуйтесь глобал ьно и покажите свои достижения.",
        es: "Comparte tu portafolio, compite globalmente y muestra tus logros.",
        de: "Teilen Sie Ihr Portfolio, konkurrieren global und zeigen Sie Ihre Leistungen an.",
      },
      lists: {
        en: [
          "Display Your Achievements: Share your portfolio with the global community and rise in the ranks.",
          "Advanced Search Filters: Use powerful filtering options to narrow down top traders.",
          "Connect with Leading Traders: Discover and follow successful traders from around the world.",
          "Transparent Rating System: Benefit from an objective and clear rating system for traders.",
        ],
        ru: [
          "Показывайте свои достижения: поделитесь своим портфелем с глобальной сообществом и поднимитесь по рейтингам.",
          "Расширенные фильтры поиска: используйте мощные фильтры для узкого поиска лучших трейдеров.",
          "Свяжитесь с ведущими трейдерами: откройте для себя и следуйте успешным трейдерам со всего мира.",
          "Прозрачная система оценок: получайте объективную и четкую систему оценок для трейдеров.",
        ],
        es: [
          "Muestra tus logros: comparte tu portafolio con la comunidad global y sube en las clasificaciones.",
          "Filtros de búsqueda avanzados: utiliza opciones de filtrado poderosas para reducir los mejores traders.",
          "Conéctate con traders líderes: descubre y sigue a traders exitosos de todo el mundo.",
          "Sistema de calificación transparente: benefíciate de un sistema de calificación objetivo y claro para traders.",
        ],
        de: [
          "Zeige Ihre Leistungen: Teilen Sie Ihr Portfolio mit der globalen Community und steigen Sie in den Rängen auf.",
          "Erweiterte Suchfilter: Nutzen Sie leistungsstarke Filteroptionen, um die besten Trader einzugrenzen.",
          "Verbinden Sie sich mit führenden Trades: Entdecken Sie und folgen Sie erfolgreichen Trades aus der ganzen Welt.",
          "Transparentes Rating-System: Nutzen Sie ein objektives und klare Rating-System für Trades.",
        ],
      },
    },
    {
      img: investment_attraction,
      title: {
        en: "Attract Investors with Proven Strategies",
        ru: "Привлекайте инвесторов с проверенными стратегиями",
        es: "Atrae inversores con estrategias probadas",
        de: "Investoren mit bewährten Strategien anlocken",
      },
      description: {
        en: "Share your trading strategy, attract capital, and grow together.",
        ru: "Поделитесь своей торговой стратегией, привлекайте капитал и растите вместе.",
        es: "Comparte tu estrategia de trading, atrae capital y crece junto.",
        de: "Teile Ihre Trading-Strategie, lockt Kapital an und wachsen zusammen.",
      },
      lists: {
        en: [
          "Gain Investment Opportunities: Present your strategy on the KYT marketplace and attract potential investors.",
          "Perfect Replication: Use advanced tools to precisely replicate your trading strategies for investors.",
          "Customizable Algorithmic Strategies: Develop tailored strategies with custom indexes to meet the needs of investors.",
          "Flexible Billing and Commission: Streamline how commissions are calculated and billed for investors.",
        ],
        ru: [
          "Получайте возможности инвестирования: представляйте свою стратегию на KYT-маркете и привлекайте потенциальных инвесторов.",
          "Идеальное воспроизведение: используйте расширенные инструменты для точного воспроизведения ваших торговых стратегий для инвесторов.",
          "Настраиваемые алгоритмические стратегии: разрабатывайте настраиваемые стратегии с настраиваемыми индексами, чтобы удовлетворить потребности инвесторов.",
          "Гибкая выставление счетов и комиссий: упрощайте, как рассчитываются и выставляются комиссии для инвесторов.",
        ],
        es: [
          "Obtén oportunidades de inversión: Presenta tu estrategia en el mercado KYT y atrae a posibles inversores.",
          "Replicación perfecta: Utiliza herramientas avanzadas para replicar con precisión tus estrategias de trading para inversores.",
          "Estrategias algorítmicas personalizables: Desarrolla estrategias personalizadas con índices personalizados para satisfacer las necesidades de los inversores.",
          "Facturación y comisiones flexibles: Simplifica cómo se calculan y cobran las comisiones a los inversores.",
        ],
        de: [
          "Investitionsmöglichkeiten gewinnen: Präsentieren Sie Ihre Strategie auf dem KYT-Markt und locken Sie potenzielle Investoren an.",
          "Perfekte Replikation: Nutzen Sie erweiterte Tools, um Ihre Trading-Strategien für Investoren genau zu replizieren.",
          "Anpassbare algorithmische Strategien: Entwickeln Sie angepasste Strategien mit benutzerdefinierten Indizes, um die Bedürfnisse der Investoren zu erfüllen.",
          "Flexible Abrechnung und Gebühren: Strukturieren Sie, wie Gebühren berechnet und abgerechnet werden, um Investoren zu erleichtern.",
        ],
      },
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % serviceData.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [serviceData.length]);

  return (
    <div className="commandCenter">
      <div className="commandCenter_container">
        <h1 className="commandCenter_title">
          {langText[lang].commandCenter_title}
        </h1>
        <div className="command_center_services">
          {serviceData?.map((item, index) => (
            <Link
              className={`command_center_services_item ${
                activeIndex === index ? "active" : ""
              }`}
              key={index}
              onClick={() => setActiveIndex(index)}
            >
              <img src={item.img} alt="" />
              <p>{item.title[lang]}</p>
            </Link>
          ))}
        </div>
        <div className="commandCenter_img_and_text">
          <div className="commandCenter_img_and_text_left">
            <img
              src={swiperData[activeIndex]?.img}
              alt="investment_attraction"
            />
          </div>
          <div className="commandCenter_img_and_text_right">
            <h1>{swiperData[activeIndex]?.title[lang]}</h1>
            <p>{swiperData[activeIndex]?.description[lang]}</p>
            <ul>
              {swiperData[activeIndex]?.lists[lang]?.map((list, index) => (
                <li key={index}>
                  <IoCheckmarkSharp />
                  <span>{list}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommmantCenter;
