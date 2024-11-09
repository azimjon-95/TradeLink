import React from "react";
import ApexCharts from "react-apexcharts";
import { Link } from "react-router-dom";
import beta_formula from "../../../assets/passport/beta-formula.svg";
import growth_rate_formula from "../../../assets/passport/growth-rate-formula.svg";

function InfoModal({ isOpen, onClose, contentType }) {
  if (!isOpen) return null;

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
          <p>
            To add your portfolio to the rating and compete with other traders
            you need to follow simple steps:
          </p>
          <br />
          <p>
            1. Register on{" "}
            <Link
              style={{ color: "#000", textDecoration: "underline" }}
              to="/passport"
            >
              <strong>KYT-Know your trader Passport</strong>
            </Link>{" "}
          </p>
          <p>2. Add an API Read-Only key from Binance or Bybit.</p>
          <p>
            3. When creating a portfolio, mark it as "Public" and "Show in
            rating" with checkboxes.
          </p>
          <p>4. Your portfolio will appear in the rating soon.</p>
        </div>
      );
    } else if (contentType === "score") {
      return (
        <div className="info-modal-mainTwo">
          <h3>KYT-Know your trader Rating</h3>
          <p>
            The purpose of the TradeLink Rating is to identify strategies with
            the best risk-to-reward ratio while also considering a range of
            indirect factors such as the strategy's lifespan, average deposit,
            and profitability over different time periods. An integral
            indicator, the TradeLink Score, is used for a comprehensive
            assessment of each strategy.
          </p>
          <p>
            The higher the TradeLink Score, the more balanced the strategy is in
            terms of risk relative to profit and trading history.
          </p>
          <p>
            This rating is not a financial recommendation but merely a
            mathematical evaluation of a strategy's trading history.
          </p>
          <h3>The general formula is:</h3>
          <img src={beta_formula} alt="" />
          <h3>
            The following indicators are used to calculate the TradeLink Score:
          </h3>
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
            <strong>Recovery Factor:</strong> An indicator showing how many
            times the profit exceeds the maximum drawdown.
          </p>
          <p>
            <strong>Track Time:</strong> An indicator showing how many days the
            strategy has existed.
          </p>
          <p>
            <strong>Avg. ICP:</strong> The average deposit load (actual
            leverage) over the strategy's existence.
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
        <button className="info-close-btn" onClick={onClose}>
          X
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
              <p>KYT-Know your trader</p>
              <div className="ApexCharts"></div>
            </div>
          )}
        </div>
        {getContent()}
      </div>
    </div>
  );
}

export default InfoModal;
