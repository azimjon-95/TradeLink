import React from "react";
import { Progress } from "antd";
import { Skeleton } from "antd";
import HandleTooltip from "../HandleTooltip";
import "./style.css";

const KeyIndicators = ({ data, topLoader, currentLanguage }) => {
  function formatNumber(number) {
    if (number >= 1000) {
      return (number / 1000)?.toFixed(1)?.replace(/\.0$/, "") + "K";
    }
    return number?.toFixed(1);
  }

  const indicators = [
    {
      value: data?.open_story_coefficient?.toFixed(0) || 0,
      label: {
        en: "Open History Coefficient",
        ru: "Коэффициент открытой истории",
        es: "Coeficiente de historia abierta",
        de: "Offener Geschichtskoeffizient",
      },
      isProgress: true,
    },
    {
      value: (formatNumber(data?.cagr) || 0) + "%",
      label: {
        en: "CAGR",
        ru: "Среднегодовой темп роста",
        es: "Tasa de crecimiento anual compuesta",
        de: "Durchschnittliche jährliche Wachstumsrate",
      },
    },
    {
      value: (formatNumber(data?.average_monthly_profit) || 0) + "%",
      label: {
        en: "Avg. Monthly Profit",
        ru: "Средняя ежемесячная прибыль",
        es: "Beneficio mensual promedio",
        de: "Durchschnittlicher monatlicher Gewinn",
      },
    },
    {
      value: (formatNumber(data?.average_daily_profit) || 0) + "%",
      label: {
        en: "Avg. Day Profit",
        ru: "Средняя ежедневная прибыль",
        es: "Beneficio diario promedio",
        de: "Durchschnittlicher Tagesgewinn",
      },
    },
    {
      value: (formatNumber(data?.profit_rate) || 0) + "%",
      label: {
        en: "Profit",
        ru: "Прибыль",
        es: "Beneficio",
        de: "Profit",
      },
    },
    {
      value: (formatNumber(data?.winrate) || 0) + "%",
      label: {
        en: "Success Rate",
        ru: "Коэффициент успеха",
        es: "Tasa de éxito",
        de: "Erfolgsquote",
      },
      highlight: true,
    },
    {
      // value: "$" + (data?.margin_balance / 1000).toFixed(1) || 0 + "K",
      value: "$" + formatNumber(data?.margin_balance),
      label: {
        en: "Margin Balance",
        ru: "Баланс маржи",
        es: "Saldo de margen",
        de: "Margebilanz",
      },
    },
    {
      value: (formatNumber(data?.max_drawdown) || 0) + "%",
      label: {
        en: "Max Drawdown",
        ru: "Максимальное падение",
        es: "Máxima caída",
        de: "Maximaler Rückgang",
      },
    },
    {
      value: (formatNumber(data?.max_drawdown_duration) || 0) + "D",
      label: {
        en: "Max Drawdown Duration",
        ru: "Длительность максимального падения",
        es: "Duración máxima de la caída",
        de: "Maximale Rückgangsdauer",
      },
    },
    {
      value: formatNumber(data?.max_leverage) || 0,
      label: {
        en: "Max Leverage",
        ru: "Максимальное кредитное плечо",
        es: "Máxima palanca",
        de: "Maximale Hebelwirkung",
      },
    },
    {
      value: formatNumber(data?.avg_leverage) || 0,
      label: {
        en: "Avg. Leverage",
        ru: "Среднее кредитное плечо",
        es: "Palanca promedio",
        de: "Durchschnittlicher Hebel",
      },
    },
    {
      value: "$" + formatNumber(data?.net_profit),
      label: {
        en: "Income",
        ru: "Доход",
        es: "Ingresos",
        de: "Einkommen",
      },
      color: "orange",
    },
  ];

  // Function to get the correct language label based on currentLanguage
  const getLabel = (labelObj) => {
    return labelObj[currentLanguage] || labelObj.en; // Default to English if the language is not found
  };

  return (
    <>
      {!topLoader ? (
        <div className="key-indicators">
          {indicators.map((indicator, index) => (
            <div
              key={index}
              className={`indicator-card ${
                indicator.highlight ? "highlight" : ""
              }`}
            >
              <div className="ket-value">
                {indicator.isProgress ? (
                  <h3>
                    {indicator.value}%{" "}
                    <Progress
                      size="small"
                      percent={indicator.value}
                      showInfo={false}
                      strokeColor="#00f45a"
                    />
                  </h3>
                ) : (
                  <h3>{indicator.value}</h3>
                )}
              </div>
              {indicator.isProgress ? (
                <div className="ket-label-none">
                  {getLabel(indicator.label)}
                </div>
              ) : (
                <HandleTooltip
                  value={indicator.value}
                  text={getLabel(indicator.label)}
                >
                  <div className="ket-label">{getLabel(indicator.label)}</div>
                </HandleTooltip>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="key-indicators_sleton">
          <Skeleton title={false} active />
          <Skeleton title={false} active />
          <Skeleton title={false} active />
          <Skeleton title={false} active />
          <Skeleton title={false} active />
          <Skeleton title={false} active />
        </div>
      )}
    </>
  );
};

export default KeyIndicators;
