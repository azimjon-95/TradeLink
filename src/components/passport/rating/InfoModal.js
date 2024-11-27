import React from "react";
import ApexCharts from "react-apexcharts";
import { Link } from "react-router-dom";
import { FiX } from "react-icons/fi";
import beta_formula from "../../../assets/passport/beta-formula.svg";
import growth_rate_formula from "../../../assets/passport/growth-rate-formula.svg";

const translations = {
  en: {
    addPortfolio: "How to add your portfolio to the rating?",
    portfolioSteps: [
      "To add your portfolio to the rating and compete with other traders you need to follow simple steps:",
      "1. Register on ",
      "Traders Passport",
      "2. Add an API Read-Only key from Binance or Bybit.",
      "3. When creating a portfolio, mark it as 'Public' and 'Show in rating' with checkboxes.",
      "4. Your portfolio will appear in the rating soon.",
    ],
    scoreTitle: "How do we measure the Score?",
    kytTitle: "KYT Rating",
    kytPurpose:
      "The purpose of the KYT Rating is to identify strategies with the best risk-to-reward ratio while also considering a range of indirect factors such as the strategy's lifespan, average deposit, and profitability over different time periods. An integral indicator, the KYT Score, is used for a comprehensive assessment of each strategy.",
    kytDetails:
      "The higher the KYT Score, the more balanced the strategy is in terms of risk relative to profit and trading history.",
    formulaTitle: "The general formula is:",
    indicatorsTitle:
      "The following indicators are used to calculate the KYT Score:",
    growthRate:
      "Growth Rate: The growth indicator over time periods, calculated as follows:",
    recoveryFactor:
      "Recovery Factor: An indicator showing how many times the profit exceeds the maximum drawdown.",
    trackTime:
      "Track Time: An indicator showing how many days the strategy has existed.",
    avgIcp:
      "Avg. ICP: The average deposit load (actual leverage) over the strategy's existence.",
  },
  ru: {
    addPortfolio: "Как добавить ваш портфель в рейтинг?",
    portfolioSteps: [
      "Чтобы добавить ваш портфель в рейтинг и соревноваться с другими трейдерами, выполните простые шаги:",
      "1. Зарегистрируйтесь на ",
      "Трейдерский Паспорт",
      "2. Добавьте API-ключ только для чтения из Binance или Bybit.",
      "3. При создании портфеля отметьте его как 'Публичный' и 'Показать в рейтинге' с помощью флажков.",
      "4. Ваш портфель скоро появится в рейтинге.",
    ],
    scoreTitle: "Как мы измеряем балл?",
    kytTitle: "Рейтинг KYT-трейдера",
    kytPurpose:
      "Цель рейтинга KYT-трейдера — выявить стратегии с лучшим соотношением риска и доходности, а также учитывать ряд косвенных факторов, таких как срок действия стратегии, средний депозит и прибыльность за разные периоды времени.",
    kytDetails:
      "Чем выше балл KYT-трейдера, тем более сбалансирована стратегия с точки зрения риска, прибыли и истории торговли.",
    formulaTitle: "Общая формула:",
    indicatorsTitle:
      "Следующие показатели используются для расчета балла KYT-трейдера:",
    growthRate:
      "Темпы роста: Индикатор роста за определенные периоды времени, рассчитывается следующим образом:",
    recoveryFactor:
      "Фактор восстановления: Показатель того, во сколько раз прибыль превышает максимальную просадку.",
    trackTime:
      "Время отслеживания: Показатель того, сколько дней существует стратегия.",
    avgIcp:
      "Средний ICP: Средняя загрузка депозита (фактическое плечо) за время существования стратегии.",
  },
  es: {
    addPortfolio: "¿Cómo añadir tu portafolio al ranking?",
    portfolioSteps: [
      "Para añadir tu portafolio al ranking y competir con otros traders, sigue estos pasos simples:",
      "1. Regístrate en ",
      "Pasaporte de Traders",
      "2. Añade una clave de API de solo lectura de Binance o Bybit.",
      "3. Al crear un portafolio, márcalo como 'Público' y 'Mostrar en el ranking' con las casillas de verificación.",
      "4. Tu portafolio aparecerá pronto en el ranking.",
    ],
    scoreTitle: "¿Cómo medimos el puntaje?",
    kytTitle: "Calificación KYT",
    kytPurpose:
      "El propósito de la Calificación KYT es identificar estrategias con la mejor relación riesgo-recompensa, considerando también una variedad de factores indirectos como la duración de la estrategia, el depósito promedio y la rentabilidad durante diferentes períodos de tiempo.",
    kytDetails:
      "Cuanto mayor sea el puntaje KYT, más equilibrada será la estrategia en términos de riesgo frente a la ganancia y el historial comercial.",
    formulaTitle: "La fórmula general es:",
    indicatorsTitle:
      "Los siguientes indicadores se utilizan para calcular el puntaje KYT:",
    growthRate:
      "Tasa de crecimiento: El indicador de crecimiento en períodos de tiempo, calculado de la siguiente manera:",
    recoveryFactor:
      "Factor de recuperación: Un indicador que muestra cuántas veces la ganancia excede la máxima caída.",
    trackTime:
      "Tiempo de seguimiento: Un indicador que muestra cuántos días ha existido la estrategia.",
    avgIcp:
      "Prom. ICP: La carga promedio del depósito (apalancamiento real) durante la existencia de la estrategia.",
  },
  de: {
    addPortfolio: "Wie fügt man Ihr Portfolio zum Ranking hinzu?",
    portfolioSteps: [
      "Um Ihr Portfolio zum Ranking hinzuzufügen und mit anderen Händlern zu konkurrieren, folgen Sie diesen einfachen Schritten:",
      "1. Registrieren Sie sich bei ",
      "Händler-Pass",
      "2. Fügen Sie einen API-Schlüssel nur zum Lesen von Binance oder Bybit hinzu.",
      "3. Markieren Sie beim Erstellen eines Portfolios die Optionen 'Öffentlich' und 'Im Ranking anzeigen'.",
      "4. Ihr Portfolio wird bald im Ranking erscheinen.",
    ],
    scoreTitle: "Wie messen wir die Punktzahl?",
    kytTitle: "KYT - Bewertung",
    kytPurpose:
      "Der Zweck der KYT - Bewertung besteht darin, Strategien mit dem besten Risiko-Ertrags-Verhältnis zu identifizieren und dabei eine Reihe von indirekten Faktoren wie die Lebensdauer der Strategie, den durchschnittlichen Einsatz und die Rentabilität über verschiedene Zeiträume zu berücksichtigen.",
    kytDetails:
      "Je höher der KYT - Punktwert, desto ausgewogener ist die Strategie in Bezug auf Risiko und Gewinn sowie Handelsgeschichte.",
    formulaTitle: "Die allgemeine Formel ist:",
    indicatorsTitle:
      "Die folgenden Indikatoren werden zur Berechnung des KYT - Punktwerts verwendet:",
    growthRate:
      "Wachstumsrate: Der Wachstumsindikator über Zeiträume, berechnet wie folgt:",
    recoveryFactor:
      "Erholungsfaktor: Ein Indikator, der zeigt, wie oft der Gewinn den maximalen Verlust übersteigt.",
    trackTime:
      "Verfolgungszeit: Ein Indikator, der zeigt, wie viele Tage die Strategie existiert hat.",
    avgIcp:
      "Durchschn. ICP: Die durchschnittliche Belastung des Einsatzes (tatsächlicher Hebel) während der Existenz der Strategie.",
  },
};

function InfoModal({ isOpen, onClose, contentType, currentLanguage }) {
  if (!isOpen) return null;

  const t = translations[currentLanguage];

  const options = {
    series: [76],
    chart: {
      type: "radialBar",
      offsetY: -20,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: "#e7e7e7",
          strokeWidth: "97%",
          margin: 5, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            color: "#d7d7d7",
            opacity: 1,
            blur: 2,
          },
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: 0, // Adjusting vertical position
            fontSize: "25px", // Increasing the font size
            fontWeight: "bold", // Making the text bold
            show: true,
            marginTop: "-170px",
          },
        },
        min: 0,
        max: 100,
      },
    },
    grid: {
      padding: {
        top: -10,
      },
    },
    fill: {
      type: "gradient",
      // type: 'solid', // Solid fill
      colors: ["#fffb00"],
      gradient: {
        shade: "light",
        shadeIntensity: 0.4,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 53, 91],
      },
    },
    labels: ["Average Results"],
  };

  const getContent = () => {
    if (contentType === "portfolio") {
      return (
        <div className="info-modal-main">
          <p>{t.portfolioSteps[0]}</p>
          <br />
          <p>
            {t.portfolioSteps[1]}{" "}
            <Link
              style={{ color: "#000", textDecoration: "underline" }}
              to="/passport"
            >
              <strong> {t.portfolioSteps[2]}</strong>
            </Link>{" "}
          </p>
          <p>{t.portfolioSteps[3]}</p>
          <p>{t.portfolioSteps[4]}</p>
          <p>{t.portfolioSteps[5]}</p>
        </div>
      );
    } else if (contentType === "score") {
      return (
        <div className="info-modal-mainTwo">
          <h3>{t.kytTitle}</h3>
          <p>{t.kytPurpose}</p>
          <p>{t.kytDetails}</p>
          <p>
            This rating is not a financial recommendation but merely a
            mathematical evaluation of a strategy's trading history.
          </p>
          <h3>{t.formulaTitle}</h3>
          <img src={beta_formula} alt="" />
          <h3>{t.indicatorsTitle}</h3>
          <p>
            <strong>Growth Rate:</strong> The growth indicator over time
            periods, calculated as follows:
          </p>
          <img src={growth_rate_formula} alt="" />
          <br />
          <div>
            *By increasing the weight of longer and older periods, this
            indicator will be higher for strategies that have existed for more
            than a year and show growth over a long horizon. This also helps to
            reduce the ranking of strategies with large one-time earnings.
          </div>

          <p>
            <strong>{t.recoveryFactor}</strong>
          </p>
          <p>
            <strong>{t.trackTime}</strong>
          </p>
          <p>
            <strong>{t.avgIcp}</strong>
          </p>
        </div>
      );
    }
  };

  return (
    <div className="info-modal-overlay" onClick={onClose}>
      <div
        style={{
          maxWidth: `${contentType === "portfolio" ? "500px" : "850px"}`,
        }}
        className="info-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="info-close-btn"
          onClick={onClose}
          style={{ zIndex: "1000" }}
        >
          <FiX />
        </button>
        <div className="info-res-box">
          <h3>
            {contentType === "portfolio"
              ? "How to add your portfolio to the rating?"
              : "How do we measure the Score?"}
          </h3>

          {contentType === "score" && (
            <div className="measure-Score">
              <ApexCharts
                options={options}
                series={options.series}
                type="radialBar"
                width={400}
                height={400}
              />
              <p style={{ width: "40%" }}>KYT - Traders</p>
              {/* <div className="ApexCharts"></div> */}
            </div>
          )}
        </div>
        {getContent()}
      </div>
    </div>
  );
}

export default InfoModal;
