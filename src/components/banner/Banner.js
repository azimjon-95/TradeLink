import React, { useState } from "react";
import "./style.css";
import "./media.css";
import Rating from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
import bt_binance from "../../assets/banner/supporters.png";
import bt_passport from "../../assets/banner/passport.png";
import bt_widget from "../../assets/banner/widget.png";
import avatar_img1 from "../../assets/banner/fase2.png";
import avatar_img2 from "../../assets/banner/fase3.png";
import avatar_img3 from "../../assets/banner/fase1.png";
import bt_indexes from "../../assets/banner/indexes.png";
import bt_jet from "../../assets/banner/Instagram-post.png";
import { setModalType } from "../../context/modalType";
// import { useSelector } from "react-redux";

const Banner = () => {
  const dispatch = useDispatch();
  const [selectedReview, setSelectedReview] = useState(null);
  let token = localStorage.getItem("access_token");

  // const currentLanguage = useSelector(
  //   (state) => state.language.currentLanguage
  // );
  // const reviews = [
  //   {
  //     name: "Maria Ivanova",
  //     store: 5,
  //     text: {
  //       en: "I absolutely love this service! It provides detailed trading analytics, easy portfolio management, and the support team is always responsive. A must-have for any trader.",
  //       es: "¡Me encanta este servicio! Ofrece análisis detallados de trading, una gestión de portafolios fácil, y el equipo de soporte siempre está disponible. Imprescindible para cualquier trader.",
  //       de: "Ich liebe diesen Service! Es bietet detaillierte Handelsanalysen, einfaches Portfolio-Management und das Support-Team ist immer erreichbar. Ein Muss für jeden Trader.",
  //       ru: "Я абсолютно люблю этот сервис! Он предоставляет подробную торговую аналитику, легкое управление портфелем, а команда поддержки всегда отзывчива. Необходимый инструмент для любого трейдера."
  //     },
  //     date: "Jun 21, 2024",
  //     image: "https://randomuser.me/api/portraits/women/13.jpg",
  //   },
  //   {
  //     name: "Alexey Smirnov",
  //     store: 4,
  //     text: {
  //       en: "The platform offers a user-friendly interface for tracking trading results. I’ve been using it for a year, and it has helped me improve my strategies. Highly recommended!",
  //       es: "La plataforma ofrece una interfaz fácil de usar para seguir los resultados del trading. Lo he estado usando durante un año y me ha ayudado a mejorar mis estrategias. ¡Muy recomendado!",
  //       de: "Die Plattform bietet eine benutzerfreundliche Oberfläche zur Verfolgung von Handelsergebnissen. Ich benutze sie seit einem Jahr und sie hat mir geholfen, meine Strategien zu verbessern. Sehr empfehlenswert!",
  //       ru: "Платформа предлагает удобный интерфейс для отслеживания торговых результатов. Я использую её уже год, и она помогла мне улучшить мои стратегии. Настоятельно рекомендую!"
  //     },
  //     date: "Jun 20, 2024",
  //     image: "https://randomuser.me/api/portraits/men/8.jpg",
  //   },
  //   {
  //     name: "Dmitry Petrov",
  //     store: 3.5,
  //     text: {
  //       en: "A good platform for monitoring trades and keeping track of performance. The analytics could be more detailed, but overall, it’s a solid choice.",
  //       es: "Una buena plataforma para monitorear operaciones y hacer seguimiento de rendimiento. La analítica podría ser más detallada, pero en general, es una buena opción.",
  //       de: "Eine gute Plattform zum Überwachen von Trades und zur Leistungskontrolle. Die Analysen könnten detaillierter sein, aber insgesamt ist es eine solide Wahl.",
  //       ru: "Хорошая платформа для мониторинга сделок и отслеживания производительности. Аналитика могла бы быть более детализированной, но в целом это хороший выбор."
  //     },
  //     date: "Jun 22, 2024",
  //     image: "https://randomuser.me/api/portraits/men/21.jpg",
  //   },
  //   {
  //     name: "Svetlana Kuznetsova",
  //     store: 4.5,
  //     text: {
  //       en: "Great experience so far. The charts and performance metrics are clear and helpful. This service has become a key part of my trading routine.",
  //       es: "Excelente experiencia hasta ahora. Los gráficos y métricas de rendimiento son claros y útiles. Este servicio se ha convertido en una parte clave de mi rutina de trading.",
  //       de: "Tolle Erfahrung bisher. Die Diagramme und Leistungskennzahlen sind klar und hilfreich. Dieser Service ist ein wesentlicher Bestandteil meiner Handelsroutine geworden.",
  //       ru: "Отличный опыт. Графики и показатели эффективности ясны и полезны. Этот сервис стал важной частью моей торговой рутины."
  //     },
  //     date: "Jun 23, 2024",
  //     image: "https://randomuser.me/api/portraits/women/14.jpg",
  //   },
  //   {
  //     name: "Igor Sokolov",
  //     store: 2.5,
  //     text: {
  //       en: "The platform is decent but needs improvements in some areas, like loading times and UI design. It’s useful, but not perfect.",
  //       es: "La plataforma es decente, pero necesita mejoras en algunas áreas, como los tiempos de carga y el diseño de la interfaz. Es útil, pero no perfecta.",
  //       de: "Die Plattform ist anständig, muss jedoch in einigen Bereichen verbessert werden, wie Ladezeiten und UI-Design. Sie ist nützlich, aber nicht perfekt.",
  //       ru: "Платформа хорошая, но требует улучшений в некоторых областях, таких как время загрузки и дизайн интерфейса. Это полезно, но не идеально."
  //     },
  //     date: "Jun 24, 2024",
  //     image: "https://randomuser.me/api/portraits/men/17.jpg",
  //   },
  //   {
  //     name: "Elena Morozova",
  //     store: 5,
  //     text: {
  //       en: "This is a fantastic service for showcasing my trading skills to investors. The detailed reports and verification system make it very reliable.",
  //       es: "Este es un servicio fantástico para mostrar mis habilidades de trading a los inversores. Los informes detallados y el sistema de verificación lo hacen muy confiable.",
  //       de: "Dies ist ein fantastischer Service, um meine Handelsfähigkeiten Investoren zu zeigen. Die detaillierten Berichte und das Verifizierungssystem machen es sehr zuverlässig.",
  //       ru: "Это фантастический сервис для демонстрации моих торговых навыков инвесторам. Подробные отчеты и система проверки делают его очень надежным."
  //     },
  //     date: "Jun 25, 2024",
  //     image: "https://randomuser.me/api/portraits/women/15.jpg",
  //   },
  //   {
  //     name: "Vladimir Pavlov",
  //     store: 3,
  //     text: {
  //       en: "The copy trading feature is interesting but could use more transparency about trader risks. Still, it’s a great addition to the platform.",
  //       es: "La función de copy trading es interesante, pero podría tener más transparencia sobre los riesgos de los traders. Aun así, es una excelente adición a la plataforma.",
  //       de: "Die Copy-Trading-Funktion ist interessant, könnte aber mehr Transparenz über die Risiken von Händlern bieten. Trotzdem ist es eine tolle Ergänzung zur Plattform.",
  //       ru: "Функция копи-трейдинга интересная, но ей не хватает прозрачности относительно рисков трейдеров. Тем не менее, это отличное дополнение к платформе."
  //     },
  //     date: "Jun 26, 2024",
  //     image: "https://randomuser.me/api/portraits/men/18.jpg",
  //   },
  //   {
  //     name: "Olga Novikova",
  //     store: 4.8,
  //     text: {
  //       en: "I’ve been using this tool for months now, and it’s helped me stay organized and improve my trading results. The support team is amazing too!",
  //       es: "He estado usando esta herramienta durante meses y me ha ayudado a mantenerme organizado y mejorar mis resultados de trading. ¡El equipo de soporte también es increíble!",
  //       de: "Ich benutze dieses Tool nun schon seit Monaten und es hat mir geholfen, organisiert zu bleiben und meine Handelsergebnisse zu verbessern. Das Support-Team ist auch großartig!",
  //       ru: "Я использую этот инструмент уже несколько месяцев, и он помог мне оставаться организованным и улучшать мои торговые результаты. Команда поддержки тоже потрясающая!"
  //     },
  //     date: "Jun 27, 2024",
  //     image: "https://randomuser.me/api/portraits/women/33.jpg",
  //   }
  // ];

  const reviews = [
    {
      name: "Maria Ivanova",
      store: 5,
      text: "I absolutely love this service! It provides detailed trading analytics, easy portfolio management, and the support team is always responsive. A must-have for any trader.",
      date: "Jun 21, 2024",
      image: "https://randomuser.me/api/portraits/women/13.jpg",
    },
    {
      name: "Alexey Smirnov",
      store: 4,
      text: "The platform offers a user-friendly interface for tracking trading results. I’ve been using it for a year, and it has helped me improve my strategies. Highly recommended!",
      date: "Jun 20, 2024",
      image: "https://randomuser.me/api/portraits/men/8.jpg",
    },
    {
      name: "Dmitry Petrov",
      store: 3.5,
      text: "A good platform for monitoring trades and keeping track of performance. The analytics could be more detailed, but overall, it’s a solid choice.",
      date: "Jun 22, 2024",
      image: "https://randomuser.me/api/portraits/men/21.jpg",
    },
    {
      name: "Svetlana Kuznetsova",
      store: 4.5,
      text: "Great experience so far. The charts and performance metrics are clear and helpful. This service has become a key part of my trading routine.",
      date: "Jun 23, 2024",
      image: "https://randomuser.me/api/portraits/women/14.jpg",
    },
    {
      name: "Igor Sokolov",
      store: 2.5,
      text: "The platform is decent but needs improvements in some areas, like loading times and UI design. It’s useful, but not perfect.",
      date: "Jun 24, 2024",
      image: "https://randomuser.me/api/portraits/men/17.jpg",
    },
    {
      name: "Elena Morozova",
      store: 5,
      text: "This is a fantastic service for showcasing my trading skills to investors. The detailed reports and verification system make it very reliable.",
      date: "Jun 25, 2024",
      image: "https://randomuser.me/api/portraits/women/15.jpg",
    },
    {
      name: "Vladimir Pavlov",
      store: 3,
      text: "The copy trading feature is interesting but could use more transparency about trader risks. Still, it’s a great addition to the platform.",
      date: "Jun 26, 2024",
      image: "https://randomuser.me/api/portraits/men/18.jpg",
    },
    {
      name: "Olga Novikova",
      store: 4.8,
      text: "I’ve been using this tool for months now, and it’s helped me stay organized and improve my trading results. The support team is amazing too!",
      date: "Jun 27, 2024",
      image: "https://randomuser.me/api/portraits/women/33.jpg",
    },
  ];

  // Extract initials from the name
  const getInitials = (name) => {
    const initials = name
      .split(" ")
      .map((word) => word[0])
      .join("");
    return initials.toUpperCase();
  };
  const ReviewCard = ({ review, onClick }) => {
    return (
      <div className="review-card" onClick={() => onClick(review)}>
        <div className="img-stor">
          <div className="avatar-mod-image">
            {review.image ? (
              <img
                src={review.image}
                alt={`${review.name}'s avatar`}
                className="review-avatar"
              />
            ) : (
              <div className="initials-avatar">{getInitials(review.name)}</div>
            )}
          </div>
          <div className="store-box">
            <Rating
              count={5} // Maximum number of stars
              value={review.store} // Rating value
              edit={false} // Makes it non-editable
              size={20} // Star size
              isHalf={true} // Enables half-star display
              activeColor="gold" // Color for active stars
              color="gray" // Color for inactive stars
            />
          </div>
        </div>
        <h4 className="review-name">{review?.name}</h4>
        <p className="review-summary">{review?.text}...</p>
      </div>
    );
  };

  // Modal Component for detailed review
  const ReviewModal = ({ review, onClose }) => {
    if (!review) return null;

    return (
      <div className="modal-overlay-review" onClick={onClose}>
        <div
          className="modal-content-review"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="close-button-review" onClick={onClose}>
            X
          </button>
          <div className="modal-overlay-head">
            <div className="modal-overlay-head-box">
              <img
                src={review.image}
                alt={review.name}
                className="review-avatar-large"
              />
              <h4 className="review-name-modal">{review.name}</h4>
            </div>
            <p className="review-date">{review.date}</p>
          </div>
          <p className="review-full-text">{review.text}</p>
        </div>
      </div>
    );
  };

  const handleCardClick = (review) => {
    setSelectedReview(review);
  };

  const closeModal = () => {
    setSelectedReview(null);
  };

  const faqData = [
    {
      question: "What is KYT - Know Your Trader all about?",
      answer:
        "KYT - Know Your Trader is a revolutionary platform designed to bring transparency to the cryptocurrency market, enabling users to confidently validate trading data and make informed decisions.",
    },
    {
      question: "What is the KYT Passport, and how does it work?",
      answer:
        "The KYT Passport is a trusted standard for trader verification, offering detailed analytics and insights into exchange account performance, ensuring transparency and credibility.",
    },
    {
      question: "How can KYT - Know Your Trader benefit traders?",
      answer:
        "KYT provides traders with comprehensive exchange account statistics and tools to analyze their performance, optimize trading strategies, and build trust with potential investors.",
    },
    {
      question: "What advantages does KYT offer to investors?",
      answer:
        "KYT helps investors by curating a selection of top-performing strategies, allowing them to invest confidently in verified and reliable trading plans.",
    },
  ];
  // const faqData = [
  //   {
  //     question: {
  //       en: "What is KYT - Know Your Trader all about?",
  //       es: "¿De qué se trata KYT - Conozca a su Trader?",
  //       de: "Was ist KYT - Know Your Trader?",
  //       ru: "Что такое KYT - Знай своего трейдера?"
  //     },
  //     answer: {
  //       en: "KYT - Know Your Trader is a revolutionary platform designed to bring transparency to the cryptocurrency market, enabling users to confidently validate trading data and make informed decisions.",
  //       es: "KYT - Conozca a su Trader es una plataforma revolucionaria diseñada para aportar transparencia al mercado de criptomonedas, permitiendo a los usuarios validar datos de trading con confianza y tomar decisiones informadas.",
  //       de: "KYT - Know Your Trader ist eine revolutionäre Plattform, die entwickelt wurde, um Transparenz in den Kryptowährungsmarkt zu bringen, sodass Benutzer Handelsdaten mit Vertrauen validieren und fundierte Entscheidungen treffen können.",
  //       ru: "KYT - Знай своего трейдера — это революционная платформа, созданная для обеспечения прозрачности на рынке криптовалют, позволяющая пользователям с уверенностью проверять торговые данные и принимать обоснованные решения."
  //     },
  //   },
  //   {
  //     question: {
  //       en: "What is the KYT Passport, and how does it work?",
  //       es: "¿Qué es el Pasaporte KYT y cómo funciona?",
  //       de: "Was ist der KYT-Pass und wie funktioniert er?",
  //       ru: "Что такое паспорт KYT и как он работает?"
  //     },
  //     answer: {
  //       en: "The KYT Passport is a trusted standard for trader verification, offering detailed analytics and insights into exchange account performance, ensuring transparency and credibility.",
  //       es: "El Pasaporte KYT es un estándar confiable para la verificación de traders, ofreciendo análisis detallados y conocimientos sobre el rendimiento de las cuentas de intercambio, asegurando transparencia y credibilidad.",
  //       de: "Der KYT-Pass ist ein vertrauenswürdiger Standard für die Verifizierung von Händlern, der detaillierte Analysen und Einblicke in die Leistung von Börsenkonten bietet und so Transparenz und Glaubwürdigkeit gewährleistet.",
  //       ru: "Паспорт KYT — это надежный стандарт для проверки трейдеров, предлагающий подробную аналитику и информацию о производительности аккаунтов на биржах, обеспечивая прозрачность и доверие."
  //     },
  //   },
  //   {
  //     question: {
  //       en: "How can KYT - Know Your Trader benefit traders?",
  //       es: "¿Cómo puede beneficiar KYT - Conozca a su Trader a los traders?",
  //       de: "Wie kann KYT - Know Your Trader den Händlern zugutekommen?",
  //       ru: "Как KYT - Знай своего трейдера может помочь трейдерам?"
  //     },
  //     answer: {
  //       en: "KYT provides traders with comprehensive exchange account statistics and tools to analyze their performance, optimize trading strategies, and build trust with potential investors.",
  //       es: "KYT ofrece a los traders estadísticas completas de cuentas de intercambio y herramientas para analizar su rendimiento, optimizar sus estrategias de trading y generar confianza con los inversionistas potenciales.",
  //       de: "KYT bietet Händlern umfassende Statistiken zu Börsenkonten und Tools zur Analyse ihrer Leistung, Optimierung von Handelsstrategien und zum Aufbau von Vertrauen bei potenziellen Investoren.",
  //       ru: "KYT предоставляет трейдерам всестороннюю статистику по аккаунтам на биржах и инструменты для анализа их эффективности, оптимизации торговых стратегий и создания доверия у потенциальных инвесторов."
  //     },
  //   },
  //   {
  //     question: {
  //       en: "What advantages does KYT offer to investors?",
  //       es: "¿Qué ventajas ofrece KYT a los inversionistas?",
  //       de: "Welche Vorteile bietet KYT für Investoren?",
  //       ru: "Какие преимущества KYT предоставляет инвесторам?"
  //     },
  //     answer: {
  //       en: "KYT helps investors by curating a selection of top-performing strategies, allowing them to invest confidently in verified and reliable trading plans.",
  //       es: "KYT ayuda a los inversionistas seleccionando las mejores estrategias, permitiéndoles invertir con confianza en planes de trading verificados y confiables.",
  //       de: "KYT hilft Investoren, indem es eine Auswahl an leistungsstarken Strategien kuratiert, die es ihnen ermöglichen, mit Vertrauen in verifizierte und zuverlässige Handelspläne zu investieren.",
  //       ru: "KYT помогает инвесторам, отбирая лучшие стратегии, что позволяет им с уверенностью инвестировать в проверенные и надежные торговые планы."
  //     },
  //   },
  // ];

  const [activeKey, setActiveKey] = useState(null);

  const togglePanel = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  const blogPosts = [
    {
      date: "2024-08-02",
      kyt: "WHAT IS CRYPTOTRADING?",
      tags: ["Crypto", "Guides"],
      title: "Understanding Crypto Trading: A Beginner's Guide",
      description:
        "Crypto trading has gained immense popularity, offering opportunities for both seasoned investors and newcomers alike to explore the digital currency market...",
      image: "path/to/crypto-image.jpg",
    },
    {
      date: "2024-08-01",
      kyt: "WHAT IS COPYTRADING?",
      tags: ["Crypto", "Guides"],
      title: "Exploring Copy Trading: How to Follow Expert Traders",
      description:
        "Copy trading lets you mimic the trades of seasoned traders, making it easier for novices to participate in the financial markets without in-depth knowledge...",
      image: "path/to/copytrading-image.jpg",
    },
    {
      date: "2024-04-11",
      tags: ["News"],
      title: "Introducing Jet 2.0: The Next Generation of Trading Tools",
      description:
        "We're excited to unveil Jet 2.0, a new version packed with enhanced features and better performance for all your trading needs...",
      image: "path/to/jet2-image.jpg",
    },
  ];
  // const blogPosts = [
  //   {
  //     date: "2024-08-02",
  //     kyt: {
  //       en: "WHAT IS CRYPTOTRADING?",
  //       es: "¿QUÉ ES EL CRIPTOINTERCAMBIO?",
  //       de: "WAS IST KRYPTOHANDEL?",
  //       ru: "ЧТО ТАКОЕ КРИПТОТРЕЙДИНГ?"
  //     },
  //     tags: ["Crypto", "Guides"],
  //     title: {
  //       en: "Understanding Crypto Trading: A Beginner's Guide",
  //       es: "Entendiendo el Comercio de Criptomonedas: Una Guía para Principiantes",
  //       de: "Verstehen des Kryptohandels: Ein Anfängerleitfaden",
  //       ru: "Понимание криптотрейдинга: Руководство для начинающих"
  //     },
  //     description: {
  //       en: "Crypto trading has gained immense popularity, offering opportunities for both seasoned investors and newcomers alike to explore the digital currency market...",
  //       es: "El comercio de criptomonedas ha ganado una inmensa popularidad, ofreciendo oportunidades tanto para inversores experimentados como para novatos para explorar el mercado de divisas digitales...",
  //       de: "Der Krypto-Handel hat enorme Popularität erlangt und bietet sowohl erfahrenen Investoren als auch Neulingen die Möglichkeit, den Markt für digitale Währungen zu erkunden...",
  //       ru: "Криптовалютная торговля стала чрезвычайно популярной, предоставляя возможности как для опытных инвесторов, так и для новичков исследовать рынок цифровых валют..."
  //     },
  //     image: "path/to/crypto-image.jpg",
  //   },
  //   {
  //     date: "2024-08-01",
  //     kyt: {
  //       en: "WHAT IS COPYTRADING?",
  //       es: "¿QUÉ ES EL COPYTRADING?",
  //       de: "WAS IST COPYTRADING?",
  //       ru: "ЧТО ТАКОЕ КОПИ-ТРЕЙДИНГ?"
  //     },
  //     tags: ["Crypto", "Guides"],
  //     title: {
  //       en: "Exploring Copy Trading: How to Follow Expert Traders",
  //       es: "Explorando el Copy Trading: Cómo Seguir a los Traders Expertos",
  //       de: "Copy Trading erkunden: Wie man erfahrene Händler folgt",
  //       ru: "Изучаем копи-трейдинг: Как следовать за опытными трейдерами"
  //     },
  //     description: {
  //       en: "Copy trading lets you mimic the trades of seasoned traders, making it easier for novices to participate in the financial markets without in-depth knowledge...",
  //       es: "El copy trading te permite imitar las operaciones de traders experimentados, facilitando la participación de los novatos en los mercados financieros sin necesidad de conocimientos profundos...",
  //       de: "Copy Trading ermöglicht es dir, die Trades erfahrener Händler nachzuahmen, sodass es Anfängern leichter fällt, an den Finanzmärkten teilzunehmen, ohne tiefgehendes Wissen zu haben...",
  //       ru: "Копи-трейдинг позволяет вам имитировать сделки опытных трейдеров, что упрощает участие новичков в финансовых рынках без углубленных знаний..."
  //     },
  //     image: "path/to/copytrading-image.jpg",
  //   },
  //   {
  //     date: "2024-04-11",
  //     kyt: {
  //       en: "WHAT IS COPYTRADING?",
  //       es: "¿QUÉ ES EL COPYTRADING?",
  //       de: "WAS IST COPYTRADING?",
  //       ru: "ЧТО ТАКОЕ КОПИ-ТРЕЙДИНГ?"
  //     },
  //     tags: ["News"],
  //     title: {
  //       en: "Introducing Jet 2.0: The Next Generation of Trading Tools",
  //       es: "Presentando Jet 2.0: La Próxima Generación de Herramientas de Trading",
  //       de: "Jet 2.0 vorstellen: Die nächste Generation von Trading-Tools",
  //       ru: "Представляем Jet 2.0: Следующее поколение торговых инструментов"
  //     },
  //     description: {
  //       en: "We're excited to unveil Jet 2.0, a new version packed with enhanced features and better performance for all your trading needs...",
  //       es: "Estamos emocionados de presentar Jet 2.0, una nueva versión con características mejoradas y un mejor rendimiento para todas tus necesidades de trading...",
  //       de: "Wir freuen uns, Jet 2.0 vorzustellen, eine neue Version mit verbesserten Funktionen und besserer Leistung für all deine Trading-Bedürfnisse...",
  //       ru: "Мы рады представить Jet 2.0, новую версию с улучшенными функциями и лучшей производительностью для всех ваших торговых нужд..."
  //     },
  //     image: "path/to/jet2-image.jpg",
  //   }
  // ];

  return (
    <>
      <div className="homePage">
        <header className="homePage__header">
          <h1 className="homePage__title">
            Global standard for the independent evaluation of traders and
            investments in the best strategies
          </h1>
          <p className="homePage__subtitle">
            We support traders in validating their trading performance and
            securing investments, and provide investors with verified, low-risk
            trading strategies.
          </p>
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
              Sign up
            </button>
          )}
        </header>
        <p className="homePage__subtitle-bottom">We support</p>
        <div className="homePage__support">
          <img src={bt_binance} alt="" />
        </div>
      </div>

      {/* passport */}
      <div className="marketplace">
        <div className="marketplace-passporte">
          <div className="marketplace-home_img">
            <img src={bt_passport} alt="" />
          </div>
          <div className="marketplace-container">
            <p className="marketplace-subtitle_pass ">
              Global standard for trader evaluation.
            </p>
            <h1 className="marketplace-title">
              <span role="img" aria-label="logo">
                📊
              </span>{" "}
              KYT - Know Your Trader Passport
            </h1>
            <p className="marketplace-description">
              An objective and unbiased evaluation of traders' skills and
              performance.
            </p>

            <ul className="marketplace-benefits">
              <li>
                <span className="check-icon-pass">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#333"
                  >
                    <path d="M20.285 2.586l-11.949 11.95-4.95-4.95-1.416 1.415 6.365 6.364 13.364-13.364z" />
                  </svg>
                </span>
                To build greater confidence among investors.
              </li>
              <li>
                <span className="check-icon-pass">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#333"
                  >
                    <path d="M20.285 2.586l-11.949 11.95-4.95-4.95-1.416 1.415 6.365 6.364 13.364-13.364z" />
                  </svg>
                </span>
                Securely upload your data with an API key that has read-only
                permissions.
              </li>
              <li>
                <span className="check-icon-pass">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#333"
                  >
                    <path d="M20.285 2.586l-11.949 11.95-4.95-4.95-1.416 1.415 6.365 6.364 13.364-13.364z" />
                  </svg>
                </span>
                Everything you need, from statistics to investment attraction,
                all in one place.
              </li>
            </ul>

            <Link to="/passport">
              <button className="learn-more-button-passporte">
                Learn more
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Our mission */}
      <div className="mission-container">
        <div className="mission-content">
          <h4>Our mission</h4>
          <h2>
            We make the cryptocurrency trading market fair <br /> and
            transparent.
          </h2>
        </div>
      </div>

      {/* For PRO-traders */}
      <div className="app-container">
        <div className="section marketplace-section">
          <div className="marketplace-header">
            <span className="badge-pro-traders">For PRO-traders</span>
            <span>
              <h2 className="marketplace-title">
                Submit your strategy on the <br /> KYT - Know Your Trader <br />{" "}
                to acquire new clients.
              </h2>
              <p className="marketplace-subtitle">
                We take care of everything else with the investor.
              </p>
            </span>
            <Link to="/traders-cabinet">
              <button className="learn-more-btn">Learn more</button>
            </Link>
          </div>
          <div className="index-cards">
            <img src={bt_indexes} alt="" />
          </div>
        </div>

        <div className="marketplace-section-box">
          <div className="section widget-section">
            <div className="statistics">
              <h2 className="widget-title">
                Integrate the KYT - Know Your Trader widget into your website.
              </h2>
              <p className="widget-subtitle">
                Share your strategy performance on your <br /> personal website
                with the help of the widget.
              </p>
            </div>
            <div className="statistics-bar-chart">
              <img src={bt_widget} alt="" />
            </div>
          </div>

          <div className="section referral-section">
            <h2 className="referral-title">
              KYT - Know Your Trader Invitation Program
            </h2>
            <p className="referral-subtitle">
              Get a commission from the profits of your referrals, free from any
              hidden platform charges.
            </p>
            <Link to="/referral">
              <button className="btn referral-btn">
                How does it function?
              </button>
            </Link>
            <div className="referral-avatars">
              <div className="referral-avatars_box1">
                <img src={avatar_img1} alt="" />
              </div>
              <div className="referral-avatars_box2">
                <img src={avatar_img2} alt="" />
              </div>
              <div className="referral-avatars_box3">
                <img src={avatar_img3} alt="" />
              </div>
              <div className="referral-avatars_box4">+</div>
            </div>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="faq-container">
        <h1 className="faq-title">Questions We Get Asked Often</h1>
        {faqData.map((item, index) => (
          <div key={index} className="faq-card">
            <div className="faq-header" onClick={() => togglePanel(index)}>
              <h3 className="faq-question">{item.question}</h3>
              <button className="faq-question-btn">
                {activeKey === index ? <MinusOutlined /> : <PlusOutlined />}
              </button>
            </div>
            {activeKey === index && (
              <div className="faq-content">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
        <div className="faq-more-btn-box">
          {!token && <button className="faq-more-btn">Sign up</button>}
        </div>
      </div>

      <div className="account-container">
        <h2 className="account-title">
          Discover what traders and investors love about KYT - Know Your Trader.
        </h2>
        <p>We consider your input, as it helps us enhance our service.</p>
        <div className="reviews-container">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} onClick={handleCardClick} />
          ))}
        </div>
        <ReviewModal review={selectedReview} onClose={closeModal} />
      </div>

      {/* Blog */}
      <section className="blog-section__container">
        <h2 className="blog-section__title">Our Posts</h2>
        <p className="blog-section__subtitle">Updates & News</p>
        <div className="blog-section__grid">
          {blogPosts.map((post, index) => (
            <div key={index} className="blog-section__card">
              <div className="blog-section__card-imageBar">
                {!post.kyt ? (
                  <img src={bt_jet} alt="" />
                ) : (
                  <div className="blog-section__section">
                    <div className="blog-section-min">KYT</div>
                    <h2>{post.kyt}</h2>
                  </div>
                )}
              </div>
              <div className="blog-section__card-content">
                <div className="blog-section__card-bottom">
                  <span className="blog-section__card-date">{post.date}</span>
                  <div className="blog-section__card-tags">
                    {post.tags.map((tag, i) => (
                      <span key={i} className="blog-section__card-tag">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="blog-section__card-title">{post.title}</h3>
                <p className="blog-section__card-description">
                  {post.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Banner;

// const translations = {
//   en: {
//     title: "Global standard for the independent evaluation of traders and investments in the best strategies",
//     subtitle: "We support traders in validating their trading performance and securing investments, and provide investors with verified, low-risk trading strategies.",
//     signUp: "Sign up",
//     passportSubtitle: "Global standard for trader evaluation.",
//     passportTitle: "KYT - Know Your Trader Passport",
//     passportDescription: "An objective and unbiased evaluation of traders' skills and performance.",
//     passportBenefits: [
//       "To build greater confidence among investors.",
//       "Securely upload your data with an API key that has read-only permissions.",
//       "Everything you need, from statistics to investment attraction, all in one place."
//     ],
//     learnMore: "Learn more",
//     missionTitle: "We make the cryptocurrency trading market fair and transparent.",
//     proTradersTitle: "For PRO-traders",
//     proTradersDescription: "Submit your strategy on the KYT - Know Your Trader to acquire new clients.",
//     widgetTitle: "Integrate the KYT - Know Your Trader widget into your website.",
//     referralTitle: "KYT - Know Your Trader Invitation Program",
//     faqTitle: "Questions We Get Asked Often",
//     faqMore: "Sign up",
//     accountTitle: "Discover what traders and investors love about KYT - Know Your Trader.",
//     blogTitle: "Our Posts",
//     blogSubtitle: "Updates & News",
//   },
//   ru: {
//     title: "Глобальный стандарт для независимой оценки трейдеров и инвестиций в лучшие стратегии",
//     subtitle: "Мы поддерживаем трейдеров в проверке их торговых показателей и обеспечении инвестиций, а также предоставляем инвесторам проверенные стратегии с низким риском.",
//     signUp: "Зарегистрироваться",
//     passportSubtitle: "Глобальный стандарт для оценки трейдеров.",
//     passportTitle: "KYT - Знай своего трейдера Паспорт",
//     passportDescription: "Объективная и беспристрастная оценка навыков и результатов трейдеров.",
//     passportBenefits: [
//       "Для создания большего доверия среди инвесторов.",
//       "Безопасно загрузите ваши данные с API-ключом с правами только для чтения.",
//       "Все, что вам нужно: статистика, привлечение инвестиций и многое другое."
//     ],
//     learnMore: "Узнать больше",
//     missionTitle: "Мы делаем рынок криптовалютной торговли справедливым и прозрачным.",
//     proTradersTitle: "Для ПРО-трейдеров",
//     proTradersDescription: "Разместите свою стратегию на KYT - Знай своего трейдера, чтобы привлечь новых клиентов.",
//     widgetTitle: "Интегрируйте виджет KYT - Знай своего трейдера на вашем сайте.",
//     referralTitle: "Пригласительная программа KYT - Знай своего трейдера",
//     faqTitle: "Вопросы, которые нам часто задают",
//     faqMore: "Зарегистрироваться",
//     accountTitle: "Узнайте, что трейдеры и инвесторы любят в KYT - Знай своего трейдера.",
//     blogTitle: "Наши посты",
//     blogSubtitle: "Обновления и новости",
//   },
//   es: {
//     title: "Estándar global para la evaluación independiente de traders e inversiones en las mejores estrategias",
//     subtitle: "Apoyamos a los traders en la validación de su rendimiento comercial y en la obtención de inversiones, y ofrecemos a los inversores estrategias comerciales verificadas y de bajo riesgo.",
//     signUp: "Regístrate",
//     passportSubtitle: "Estándar global para la evaluación de traders.",
//     passportTitle: "KYT - Conoce a tu Trader Pasaporte",
//     passportDescription: "Una evaluación objetiva e imparcial de las habilidades y el rendimiento de los traders.",
//     passportBenefits: [
//       "Para generar mayor confianza entre los inversores.",
//       "Sube tus datos de forma segura con una clave API con permisos solo de lectura.",
//       "Todo lo que necesitas, desde estadísticas hasta atracción de inversiones, todo en un solo lugar."
//     ],
//     learnMore: "Aprende más",
//     missionTitle: "Hacemos que el mercado de trading de criptomonedas sea justo y transparente.",
//     proTradersTitle: "Para traders PRO",
//     proTradersDescription: "Envía tu estrategia en el KYT - Conoce a tu Trader para adquirir nuevos clientes.",
//     widgetTitle: "Integra el widget KYT - Conoce a tu Trader en tu sitio web.",
//     referralTitle: "Programa de invitación KYT - Conoce a tu Trader",
//     faqTitle: "Preguntas frecuentes",
//     faqMore: "Regístrate",
//     accountTitle: "Descubre lo que los traders e inversores aman de KYT - Conoce a tu Trader.",
//     blogTitle: "Nuestras publicaciones",
//     blogSubtitle: "Actualizaciones y Noticias",
//   },
//   de: {
//     title: "Globaler Standard für die unabhängige Bewertung von Tradern und Investitionen in die besten Strategien",
//     subtitle: "Wir unterstützen Trader bei der Validierung ihrer Handelsleistung und der Sicherung von Investitionen und bieten Investoren verifizierte, risikoarme Handelsstrategien.",
//     signUp: "Anmelden",
//     passportSubtitle: "Globaler Standard für die Bewertung von Tradern.",
//     passportTitle: "KYT - Know Your Trader Pass",
//     passportDescription: "Eine objektive und unparteiische Bewertung der Fähigkeiten und Leistungen von Tradern.",
//     passportBenefits: [
//       "Um das Vertrauen der Investoren zu stärken.",
//       "Lade deine Daten sicher mit einem API-Schlüssel mit nur Lesezugriff hoch.",
//       "Alles, was du brauchst, von Statistiken bis zur Anwerbung von Investitionen, alles an einem Ort."
//     ],
//     learnMore: "Mehr erfahren",
//     missionTitle: "Wir machen den Kryptowährungshandelsmarkt fair und transparent.",
//     proTradersTitle: "Für PRO-Trader",
//     proTradersDescription: "Reiche deine Strategie auf KYT - Know Your Trader ein, um neue Kunden zu gewinnen.",
//     widgetTitle: "Integriere das KYT - Know Your Trader Widget auf deiner Website.",
//     referralTitle: "KYT - Know Your Trader Einladung Programm",
//     faqTitle: "Fragen, die uns häufig gestellt werden",
//     faqMore: "Anmelden",
//     accountTitle: "Entdecke, was Trader und Investoren an KYT - Know Your Trader lieben.",
//     blogTitle: "Unsere Beiträge",
//     blogSubtitle: "Updates & Neuigkeiten",
//   },
// };

// const currentLanguage = useSelector((state) => state.language.currentLanguage);

// const content = translations[currentLanguage] || translations.en;
