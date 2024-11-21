import React, { useState } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import ReactApexChart from "react-apexcharts";
import { Tooltip, Skeleton } from "antd";
import "./style.css";
import Distribution from "./Distribution";

const Trades = ({ currentLanguage, data }) => {
  const trades = {
    en: [
      {
        title: "Orders by types",
        tooltip:
          "This section shows the distribution of trades based on the order type, such as limit orders, market orders, and total trades.",
        items: [
          {
            label: "Limit orders",
            value: `${data?.trades_stats?.orders_by_types?.limit_orders.toLocaleString() ||
              0
              }`,
            originalValue:
              data?.trades_stats?.orders_by_types?.limit_orders || 0,
            tooltip:
              "Number of limit orders placed by traders. A limit order is an order to buy or sell at a specific price or better.",
          },
          {
            label: "Market orders",
            value: `${data?.trades_stats?.orders_by_types?.market_orders.toLocaleString() ||
              0
              }`,
            originalValue:
              data?.trades_stats?.orders_by_types?.market_orders || 0,
            tooltip:
              "Number of market orders executed by traders. A market order is an order to buy or sell immediately at the best available price.",
          },
          {
            label: "Total trades",
            value: `${data?.trades_stats?.orders_by_types?.total_trades.toLocaleString() ||
              0
              }`,
            originalValue:
              data?.trades_stats?.orders_by_types?.total_trades || 0,
            tooltip:
              "Total number of trades executed during the period. This is the sum of all limit and market orders.",
          },
        ],
      },
      {
        title: "Orders by side",
        tooltip:
          "This section shows the distribution of trades based on the side of the order, either long (buy) or short (sell).",
        items: [
          {
            label: "Long orders",
            value: `${data?.trades_stats?.orders_by_side?.long_orders || 0}`,
            originalValue: data?.trades_stats?.orders_by_side?.long_orders || 0,
            tooltip:
              "Number of long orders, where the trader is betting that the price of an asset will rise.",
          },
          {
            label: "Short orders",
            value: `${data?.trades_stats?.orders_by_side?.short_orders || 0}`,
            originalValue:
              data?.trades_stats?.orders_by_side?.short_orders || 0,
            tooltip:
              "Number of short orders, where the trader is betting that the price of an asset will fall.",
          },
          {
            label: "Ratio",
            value: `${data?.trades_stats?.orders_by_side?.ratio.toFixed(2) || 0
              }`,
            originalValue: data?.trades_stats?.orders_by_side?.ratio || 0,
            tooltip:
              "The ratio of long orders to short orders. A higher ratio indicates more optimism about the market's upward movement.",
          },
        ],
      },
      {
        title: "Orders size info",
        tooltip:
          "This section provides information about the size of orders, including the maximum, minimum, and average order sizes.",
        items: [
          {
            label: "Maximum",
            value: `${data?.trades_stats?.orders_size_info?.maximum.toLocaleString() ||
              0
              }`,
            originalValue: data?.trades_stats?.orders_size_info?.maximum || 0,
            tooltip:
              "The maximum size of a single order executed during the period. This indicates the largest trade made by a trader.",
          },
          {
            label: "Average",
            value: `${data?.trades_stats?.orders_size_info?.average.toFixed(2) || 0
              }`,
            originalValue: data?.trades_stats?.orders_size_info?.average,
            tooltip:
              "The average size of orders placed. This helps gauge the typical trade size in the market during the period.",
          },
          {
            label: "Minimum",
            value: `${data?.trades_stats?.orders_size_info?.minimum.toFixed(2) || 0
              }`,
            originalValue: data?.trades_stats?.orders_size_info?.minimum || 0,
            tooltip:
              "The minimum size of a single order executed during the period. This indicates the smallest trade made by a trader.",
          },
        ],
      },
    ],
    ru: [
      {
        title: "Заказы по типам",
        tooltip:
          "Этот раздел показывает распределение сделок в зависимости от типа заказа, таких как лимитные заказы, рыночные заказы и общее количество сделок.",
        items: [
          {
            label: "Лимитные заказы",
            value: `${data?.trades_stats?.orders_by_types?.limit_orders.toLocaleString() ||
              0
              }`,
            originalValue:
              data?.trades_stats?.orders_by_types?.limit_orders || 0,
            tooltip:
              "Количество лимитных заказов, размещенных трейдерами. Лимитный заказ — это заказ на покупку или продажу по определенной цене или лучше.",
          },
          {
            label: "Рыночные заказы",
            value: `${data?.trades_stats?.orders_by_types?.market_orders.toLocaleString() ||
              0
              }`,
            originalValue:
              data?.trades_stats?.orders_by_types?.market_orders || 0,
            tooltip:
              "Количество рыночных заказов, выполненных трейдерами. Рыночный заказ — это заказ на немедленную покупку или продажу по лучшей доступной цене.",
          },
          {
            label: "Общее количество сделок",
            value: `${data?.trades_stats?.orders_by_types?.total_trades.toLocaleString() ||
              0
              }`,
            originalValue:
              data?.trades_stats?.orders_by_types?.total_trades || 0,
            tooltip:
              "Общее количество сделок, выполненных за период. Это сумма всех лимитных и рыночных заказов.",
          },
        ],
      },
      {
        title: "Заказы по сторонам",
        tooltip:
          "Этот раздел показывает распределение сделок в зависимости от стороны заказа: длинные (покупка) или короткие (продажа).",
        items: [
          {
            label: "Длинные заказы",
            value: `${data?.trades_stats?.orders_by_side?.long_orders || 0}`,
            originalValue: data?.trades_stats?.orders_by_side?.long_orders || 0,
            tooltip:
              "Количество длинных заказов, где трейдер делает ставку на рост цены актива.",
          },
          {
            label: "Короткие заказы",
            value: `${data?.trades_stats?.orders_by_side?.short_orders || 0}`,
            originalValue:
              data?.trades_stats?.orders_by_side?.short_orders || 0,
            tooltip:
              "Количество коротких заказов, где трейдер делает ставку на снижение цены актива.",
          },
          {
            label: "Соотношение",
            value: `${data?.trades_stats?.orders_by_side?.ratio.toFixed(2) || 0
              }`,
            originalValue: data?.trades_stats?.orders_by_side?.ratio || 0,
            tooltip:
              "Соотношение длинных заказов к коротким. Более высокое соотношение указывает на оптимизм в отношении роста рынка.",
          },
        ],
      },
      {
        title: "Информация о размерах заказов",
        tooltip:
          "Этот раздел предоставляет информацию о размерах заказов, включая максимальный, минимальный и средний размеры.",
        items: [
          {
            label: "Максимальный",
            value: `${data?.trades_stats?.orders_size_info?.maximum.toLocaleString() ||
              0
              }`,
            originalValue: data?.trades_stats?.orders_size_info?.maximum || 0,
            tooltip:
              "Максимальный размер одного заказа, выполненного за период. Это самая крупная сделка, совершенная трейдером.",
          },
          {
            label: "Средний",
            value: `${data?.trades_stats?.orders_size_info?.average.toFixed(2) || 0
              }`,
            originalValue: data?.trades_stats?.orders_size_info?.average || 0,
            tooltip:
              "Средний размер заказов, размещенных за период. Это помогает оценить типичный размер сделок на рынке.",
          },
          {
            label: "Минимальный",
            value: `${data?.trades_stats?.orders_size_info?.minimum.toFixed(2) || 0
              }`,
            originalValue: data?.trades_stats?.orders_size_info?.minimum || 0,
            tooltip:
              "Минимальный размер одного заказа, выполненного за период. Это самая маленькая сделка, совершенная трейдером.",
          },
        ],
      },
    ],
    de: [
      {
        title: "Bestellungen nach Typen",
        tooltip:
          "Dieser Abschnitt zeigt die Verteilung der Trades basierend auf dem Bestelltyp, wie Limit-Orders, Markt-Orders und der Gesamtzahl der Trades.",
        items: [
          {
            label: "Limit-Orders",
            value: `${data?.trades_stats?.orders_by_types?.limit_orders.toLocaleString() ||
              0
              }`,
            originalValue:
              data?.trades_stats?.orders_by_types?.limit_orders || 0,
            tooltip:
              "Anzahl der von Händlern platzierten Limit-Orders. Eine Limit-Order ist eine Bestellung zum Kauf oder Verkauf zu einem bestimmten Preis oder besser.",
          },
          {
            label: "Markt-Orders",
            value: `${data?.trades_stats?.orders_by_types?.market_orders.toLocaleString() ||
              0
              }`,
            originalValue:
              data?.trades_stats?.orders_by_types?.market_orders || 0,
            tooltip:
              "Anzahl der von Händlern ausgeführten Markt-Orders. Eine Markt-Order ist eine Bestellung zum sofortigen Kauf oder Verkauf zum besten verfügbaren Preis.",
          },
          {
            label: "Gesamtanzahl der Trades",
            value: `${data?.trades_stats?.orders_by_types?.total_trades.toLocaleString() ||
              0
              }`,
            originalValue:
              data?.trades_stats?.orders_by_types?.total_trades || 0,
            tooltip:
              "Gesamtzahl der in diesem Zeitraum ausgeführten Trades. Dies ist die Summe aller Limit- und Markt-Orders.",
          },
        ],
      },
      {
        title: "Bestellungen nach Seiten",
        tooltip:
          "Dieser Abschnitt zeigt die Verteilung der Trades basierend auf der Seite der Bestellung, entweder Long (Kauf) oder Short (Verkauf).",
        items: [
          {
            label: "Long-Orders",
            value: `${data?.trades_stats?.orders_by_side?.long_orders || 0}`,
            originalValue: data?.trades_stats?.orders_by_side?.long_orders || 0,
            tooltip:
              "Anzahl der Long-Orders, bei denen der Händler darauf wettet, dass der Preis eines Vermögenswerts steigen wird.",
          },
          {
            label: "Short-Orders",
            value: `${data?.trades_stats?.orders_by_side?.short_orders || 0}`,
            originalValue:
              data?.trades_stats?.orders_by_side?.short_orders || 0,
            tooltip:
              "Anzahl der Short-Orders, bei denen der Händler darauf wettet, dass der Preis eines Vermögenswerts fallen wird.",
          },
          {
            label: "Verhältnis",
            value: `${data?.trades_stats?.orders_by_side?.ratio.toFixed(2) || 0
              }`,
            originalValue: data?.trades_stats?.orders_by_side?.ratio || 0,
            tooltip:
              "Das Verhältnis von Long-Orders zu Short-Orders. Ein höheres Verhältnis zeigt mehr Optimismus hinsichtlich eines Marktwachstums.",
          },
        ],
      },
      {
        title: "Informationen zur Bestellgröße",
        tooltip:
          "Dieser Abschnitt enthält Informationen zur Größe der Bestellungen, einschließlich der maximalen, minimalen und durchschnittlichen Bestellgröße.",
        items: [
          {
            label: "Maximal",
            value: `${data?.trades_stats?.orders_size_info?.maximum.toLocaleString() ||
              0
              }`,
            originalValue: data?.trades_stats?.orders_size_info?.maximum || 0,
            tooltip:
              "Die maximale Größe einer einzelnen Bestellung, die im Zeitraum ausgeführt wurde. Dies zeigt den größten Handel, der von einem Händler getätigt wurde.",
          },
          {
            label: "Durchschnitt",
            value: `${data?.trades_stats?.orders_size_info?.average.toFixed(2) || 0
              }`,
            originalValue: data?.trades_stats?.orders_size_info?.average || 0,
            tooltip:
              "Die durchschnittliche Größe der platzierten Bestellungen. Dies hilft, die typische Handelsgröße auf dem Markt während des Zeitraums zu beurteilen.",
          },
          {
            label: "Minimal",
            value: `${data?.trades_stats?.orders_size_info?.minimum.toFixed(2) || 0
              }`,
            originalValue: data?.trades_stats?.orders_size_info?.minimum || 0,
            tooltip:
              "Die minimale Größe einer einzelnen Bestellung, die im Zeitraum ausgeführt wurde. Dies zeigt den kleinsten Handel, der von einem Händler getätigt wurde.",
          },
        ],
      },
    ],
    es: [
      {
        title: "Órdenes por tipo",
        tooltip:
          "Esta sección muestra la distribución de las operaciones según el tipo de orden, como órdenes limitadas, órdenes de mercado y operaciones totales.",
        items: [
          {
            label: "Órdenes limitadas",
            value: `${data?.trades_stats?.orders_by_types?.limit_orders.toLocaleString() ||
              0
              }`,
            originalValue:
              data?.trades_stats?.orders_by_types?.limit_orders || 0,
            tooltip:
              "Número de órdenes limitadas realizadas por los traders. Una orden limitada es una orden para comprar o vender a un precio específico o mejor.",
          },
          {
            label: "Órdenes de mercado",
            value: `${data?.trades_stats?.orders_by_types?.market_orders.toLocaleString() ||
              0
              }`,
            originalValue:
              data?.trades_stats?.orders_by_types?.market_orders || 0,
            tooltip:
              "Número de órdenes de mercado ejecutadas por los traders. Una orden de mercado es una orden para comprar o vender inmediatamente al mejor precio disponible.",
          },
          {
            label: "Operaciones totales",
            value: `${data?.trades_stats?.orders_by_types?.total_trades.toLocaleString() ||
              0
              }`,
            originalValue:
              data?.trades_stats?.orders_by_types?.total_trades || 0,
            tooltip:
              "Número total de operaciones realizadas durante el período. Esta es la suma de todas las órdenes limitadas y de mercado.",
          },
        ],
      },
      {
        title: "Órdenes por lado",
        tooltip:
          "Esta sección muestra la distribución de las operaciones según el lado de la orden, ya sea largo (compra) o corto (venta).",
        items: [
          {
            label: "Órdenes largas",
            value: `${data?.trades_stats?.orders_by_side?.long_orders || 0}`,
            originalValue: data?.trades_stats?.orders_by_side?.long_orders || 0,
            tooltip:
              "Número de órdenes largas, donde el trader apuesta a que el precio de un activo subirá.",
          },
          {
            label: "Órdenes cortas",
            value: `${data?.trades_stats?.orders_by_side?.short_orders || 0}`,
            originalValue:
              data?.trades_stats?.orders_by_side?.short_orders || 0,
            tooltip:
              "Número de órdenes cortas, donde el trader apuesta a que el precio de un activo caerá.",
          },
          {
            label: "Relación",
            value: `${data?.trades_stats?.orders_by_side?.ratio.toFixed(2) || 0
              }`,
            originalValue: data?.trades_stats?.orders_by_side?.ratio || 0,
            tooltip:
              "La relación de órdenes largas a órdenes cortas. Una relación más alta indica un mayor optimismo sobre el movimiento ascendente del mercado.",
          },
        ],
      },
      {
        title: "Información sobre el tamaño de las órdenes",
        tooltip:
          "Esta sección proporciona información sobre el tamaño de las órdenes, incluyendo el tamaño máximo, mínimo y promedio de las órdenes.",
        items: [
          {
            label: "Máximo",
            value: `${data?.trades_stats?.orders_size_info?.maximum.toLocaleString() ||
              0
              }`,
            originalValue: data?.trades_stats?.orders_size_info?.maximum || 0,
            tooltip:
              "El tamaño máximo de una sola orden ejecutada durante el período. Esto indica el comercio más grande realizado por un trader.",
          },
          {
            label: "Promedio",
            value: `${data?.trades_stats?.orders_size_info?.average.toFixed(2) || 0
              }`,
            originalValue: data?.trades_stats?.orders_size_info?.average || 0,
            tooltip:
              "El tamaño promedio de las órdenes realizadas. Esto ayuda a evaluar el tamaño típico de las operaciones en el mercado durante el período.",
          },
          {
            label: "Mínimo",
            value: `${data?.trades_stats?.orders_size_info?.minimum.toFixed(2) || 0
              }`,
            originalValue: data?.trades_stats?.orders_size_info?.minimum || 0,
            tooltip:
              "El tamaño mínimo de una sola orden ejecutada durante el período. Esto indica la operación más pequeña realizada por un trader.",
          },
        ],
      },
    ],
  };

  let someText = {
    en: {
      inxTitle: "Stats by trading pair",
      volume: "Volume",
      average_position_size: "Average position size",
      profit: "Profit",
    },
    es: {
      inxTitle: "Estadísticas por par de trading",
      volume: "Volumen",
      average_position_size: "Tamaño promedio de la posición",
      profit: "Ganancia",
    },
    ru: {
      inxTitle: "Статистика по паре торговли",
      volume: "Объем",
      average_position_size: "Средний размер позиции",
      profit: "Прибыль",
    },
    de: {
      inxTitle: "Statistik für Trading-Paar",
      volume: "Volumen",
      average_position_size: "Durchs chnittlicher Positiongröße",
      profit: "Gewinn",
    },
  };

  const [options] = useState({
    legend: {
      show: false,
    },
    chart: {
      height: 500,
      width: 500,
      // type: 'treemap',
      toolbar: {
        show: true,
      },
      zoom: {
        enabled: false,
      },
    },
    title: {
      text: "",
      align: "center",
    },
    colors: [
      "#d1565b",
      "#63c89a",
      "#9e7fb5",
      "#d2c874",
      "#df79ad",
      "#55c2c5",
      "#97d69b",
      "#9ad7d8",
      "#dc8a70",
      "#d485b2",
      "#bccf7d",
    ],
    plotOptions: {
      treemap: {
        distributed: true,
        enableShades: true,
        labels: {
          show: true, // Show data labels
          style: {
            colors: ["#fff"], // Color of the labels
            fontSize: "14px",
            fontWeight: 600,
          },
          // Customizing labels directly without HTML
          formatter: (value, { dataPoint }) => {
            return `${dataPoint.x}: ${dataPoint.y.toFixed(2)}`; // Simple text display
          },
        },
      },
    },
    tooltip: {
      enabled: true,
      shared: true,
      intersect: false,
      style: {
        fontSize: "12px",
      },
      x: {
        formatter: (value) => `Currency: ${value}`,
      },
      y: {
        formatter: (value) => ` ${value.toFixed(2)}`,
      },
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          chart: {
            height: 300,
            width: 300,
          },
        },
      },
      {
        breakpoint: 1000,
        options: {
          chart: {
            height: 400,
            width: 400,
          },
        },
      },
    ],
  });

  const mapStatsToChartData = (data, type) => {
    if (!data) return []; // Return an empty array if data is undefined
    return data.map((item) => {
      switch (type) {
        case "volume":
          return { x: item.symbol, y: item.volume?.abs || 0 };
        case "pnl":
          return { x: item.symbol, y: item.pnl?.abs || 0 };
        case "average_qty":
          return { x: item.symbol, y: item.qty?.avg || 0 };
        default:
          return { x: item.symbol, y: 0 };
      }
    });
  };

  const [chartType, setChartType] = useState("volume");
  const [series, setSeries] = useState([
    {
      data: mapStatsToChartData(
        data?.stats_by_trading_pair?.symbols || [],
        chartType
      ),
    },
  ]);

  const handleButtonClick = (type) => {
    setChartType(type);
    setSeries([
      {
        data: mapStatsToChartData(
          data?.stats_by_trading_pair?.symbols || [],
          type
        ),
      },
    ]);
  };
  return (
    <>
      <div className="trades-cont">
        {data && Object.keys(data).length > 0
          ? trades[currentLanguage]?.map((section, inx) => (
            <div className="single-card" key={inx}>
              <h3>
                <Tooltip title={`${section?.tooltip}`}>
                  <span>
                    {section?.title} <AiOutlineQuestionCircle />
                  </span>
                </Tooltip>
              </h3>
              {section.items?.map((item, index) => (
                <div className="single-card-item" key={index}>
                  <Tooltip title={`${item?.tooltip}`}>
                    <span className="single-label">{item?.label}</span>
                  </Tooltip>
                  <Tooltip title={`${item?.originalValue}`}>
                    <span className="single-values">{item?.value}</span>
                  </Tooltip>
                </div>
              ))}
            </div>
          ))
          : trades[currentLanguage]?.map((card, index) => (
            <div key={index} className="single-card">
              <h3>
                <Skeleton.Input
                  style={{ width: 180 }}
                  active
                  loading={true}
                />
              </h3>
              <ul>
                <Skeleton active paragraph={{ rows: 1 }} />
              </ul>
            </div>
          ))}
      </div>

      <Distribution data={data?.distribution_of_orders_by_amount} />

      <h2 className="ket-inxTitle">{someText[currentLanguage].inxTitle}</h2>
      <br />
      <div className="single-tabs">
        <button
          onClick={() => handleButtonClick("volume")}
          style={{
            backgroundColor: chartType === "volume" ? "#fff" : "#f1f1f1",
            color: "#000000",
            border: "none",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
        >
          {someText[currentLanguage].volume}
        </button>
        <button
          onClick={() => handleButtonClick("average_qty")}
          style={{
            backgroundColor: chartType === "average" ? "#fff" : "#f1f1f1",
            color: "#000000",
            border: "none",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
        >
          {someText[currentLanguage].average_position_size}
        </button>
        <button
          onClick={() => handleButtonClick("pnl")}
          style={{
            backgroundColor: chartType === "profit" ? "#fff" : "#f1f1f1",
            color: "#000000",
            border: "none",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
        >
          {someText[currentLanguage].profit}
        </button>
      </div>

      <div className="apexChart-container">
        <ReactApexChart
          options={options}
          series={series}
          type="treemap"
          height={500}
        />
      </div>
    </>
  );
};

export default Trades;
