import React from "react";
import { Progress } from "antd";
import { Skeleton } from "antd";
import HandleTooltip from "../HandleTooltip";
import "./style.css";

const KeyIndicators = ({ data, topLoader }) => {
  const indicators = [
    {
      value: data?.open_story_coefficient?.toFixed(0) || 0,
      label: "Open History Coefficient",
      isProgress: true,
    },
    { value: (data?.cagr?.toFixed(2) || 0) + "%", label: "CAGR" },
    {
      value: (data?.average_monthly_profit?.toFixed(2) || 0) + "%",
      label: "Avg. Monthly Profit",
    },
    {
      value: (data?.average_daily_profit?.toFixed(2) || 0) + "%",
      label: "Avg. Day Profit",
    },
    { value: (data?.profit_rate?.toFixed(2) || 0) + "%", label: "Profit" },
    {
      value: (data?.winrate?.toFixed(2) || 0) + "%",
      label: "Success Rate",
      highlight: true,
    },
    {
      value: "$" + (data?.max_balance / 1000).toFixed(1) || 0 + "K",
      label: "Margin balance",
    },
    {
      value: (data?.max_drawdown?.toFixed(2) || 0) + "%",
      label: "Max drawdown",
    },
    {
      value: (data?.max_drawdown_duration?.toFixed(0) || 0) + "D",
      label: "Max DrawDown Duration",
    },
    { value: data?.max_leverage?.toFixed(2) || 0, label: "Max Leverage" },
    { value: data?.avg_leverage?.toFixed(2) || 0, label: "Av. Leverage" },
    {
      value: "$" + (data?.net_profit?.toFixed(2) || 0),
      label: "Income",
      color: "orange",
    },
  ];

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
                <div className="ket-label-none">{indicator.label}</div>
              ) : (
                <HandleTooltip value={indicator.value} text={indicator.label}>
                  <div className="ket-label">{indicator.label}</div>
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
