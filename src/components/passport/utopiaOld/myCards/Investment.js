import React, { useState, useEffect } from "react";
import "./style.css";
import { Tooltip, Skeleton } from "antd";
import axios from "../../../../api";
import { transInvestment } from "../Lang";

const Investment = ({ id, selectValue, currentLanguage }) => {
  const [data, setStats] = useState([]); // Stores the fetched data
  const [isDataFetched, setIsDataFetched] = useState(false); // Tracks if data has already been fetched

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchStats = async () => {
      if (!id || !selectValue || isDataFetched) return; // Prevent fetch if data is already fetched

      try {
        const response = await axios.get(
          `/portfolio/stats/?portfolio_id=${id}&time_step=${selectValue}`,
          { signal }
        );
        setStats(response?.data?.data?.investment_statistic);
        setIsDataFetched(true); // Mark the data as fetched
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    const debounceFetch = setTimeout(fetchStats, 300);

    return () => {
      clearTimeout(debounceFetch);
      controller.abort();
    };
  }, [id, selectValue, isDataFetched]);

  // Add isDataFetched to the dependency array to control re-fetching
  const formatValue = (value) => {
    // If the value is undefined or null, return it as-is (empty or fallback value)
    if (value === undefined || value === null) {
      return ''; // or some fallback value, like 'N/A'
    }

    // Convert the value to string and check the number of digits
    const valueString = value.toString();
    const decimalIndex = valueString.indexOf('.');

    // Check if the absolute value has less than 1000 and has less than 4 digits before the decimal
    if (Math.abs(value) < 1000) {
      if (decimalIndex === -1) {
        // Integer value, check the length
        if (valueString.length < 4) {
          return valueString; // Return the number as it is if it has fewer than 4 digits
        }
      } else {
        // Decimal value, check the length before and after the decimal point
        const beforeDecimal = valueString.substring(0, decimalIndex);
        const afterDecimal = valueString.substring(decimalIndex + 1);

        if (beforeDecimal.length < 4 && afterDecimal.length === 0) {
          return valueString; // Return the number as it is if it has fewer than 4 digits and no decimals
        }
      }
    }

    // Format the value if it's 1000 or more or has more than 3 digits
    return value.toFixed(3); // Return formatted value with 3 decimals
  };


  const datas = [
    {
      title: transInvestment[currentLanguage]?.lifetimeExperience || "Lifetime Experience",
      value: formatValue(data?.lifetime_experience),
      description: transInvestment[currentLanguage]?.lifetimeExperienceDescription || "Very good",
      a: 25,
      y: 25,
      x: 25,
      m: 25,
      p: 25,
      sliderValue: +data?.lifetime_experience,
    },
    {
      title: transInvestment[currentLanguage]?.sharpeRatio,
      value: formatValue(data?.sharpe_ratio),
      description: transInvestment[currentLanguage]?.sharpeRatioDescription,
      a: 25,
      y: 25,
      x: 25,
      m: 25,
      p: 25,
      sliderValue: +data?.sharpe_ratio,
    },
    {
      title: transInvestment[currentLanguage]?.calmarRatio,
      value: formatValue(data?.calmar_ratio),
      description: transInvestment[currentLanguage]?.calmarRatioDescription,
      a: 25,
      y: 25,
      x: 25,
      m: 25,
      p: 25,
      sliderValue: +data?.calmar_ratio,
    },
    {
      title: transInvestment[currentLanguage]?.sortinoRatio,
      value: formatValue(data?.sortino_ratio),
      description: transInvestment[currentLanguage]?.sortinoRatioDescription,
      a: 25,
      y: 25,
      x: 25,
      m: 25,
      p: 25,
      sliderValue: +data?.sortino_ratio,
    },
    {
      title: transInvestment[currentLanguage]?.alphaRatio,
      value: formatValue(data?.treynor_ratio),
      description: transInvestment[currentLanguage]?.alphaRatioDescription,
      a: 25,
      y: 25,
      x: 25,
      m: 25,
      p: 25,
      sliderValue: +data?.treynor_ratio,
    },
    {
      title: transInvestment[currentLanguage]?.betaRatio,
      value: formatValue(data?.beta_ratio),
      description: transInvestment[currentLanguage]?.betaRatioDescription,
      a: 25,
      y: 25,
      x: 25,
      m: 25,
      p: 25,
      sliderValue: +data?.beta_ratio,
    },
  ];





  const Card = ({ title, value, description, a, y, x, m, p, sliderValue }) => {
    // Segmentlar uchun qiymatlar
    const segments = [
      { value: Math.max(a, 0), color: "#ECEFF5" }, // a qiymati
      { value: Math.max(y, 0), color: "#BCEDCE" }, // y qiymati
      { value: Math.max(x, 0), color: "#BCEDCE" }, // x qiymati
      { value: Math.max(m, 0), color: "#90E1AE" }, // m qiymati
      { value: Math.max(p, 0), color: "#21C45D" }, // p qiymati
    ];

    // Umumiy qiymatlarni hisoblash
    const total = segments.reduce((acc, segment) => acc + segment.value, 0);

    // Gradient ranglarni hisoblash
    const gradientColors = segments
      .map((segment, index) => {
        const percentage = (segment.value / total) * 100;
        const position =
          index === 0
            ? 0
            : segments
              .slice(0, index)
              .reduce((acc, s) => acc + (s.value / total) * 100, 0);
        return `${segment.color} ${position}% ${position + percentage}%`;
      })
      .join(", ");

    return (
      <>
        <div className="investment-card">
          <div className="investment-card-header">
            <h3>{title}</h3>
            <Tooltip title={`${sliderValue}`}>
              <span className="investment-value">{value}</span>
            </Tooltip>
          </div>
          <p className="investment-description">{description}</p>
          <div className="investment-slider-container">
            <div
              className="investment-slider-scale"
              style={{
                position: "relative",
                width: "100%",
                height: "7px",
                borderRadius: "7px",
                background: `linear-gradient(to right, ${gradientColors})`, // Linear gradient
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left:
                    sliderValue > 100
                      ? "100%"
                      : sliderValue < 3 && sliderValue >= 0
                        ? `${sliderValue}%`
                        : sliderValue < 0
                          ? "0%"
                          : `${sliderValue}%`,
                  transform: "translateX(-50%)", // Markazdan ko'rsatish
                  width: "12px", // Sliderning kengligi
                  height: "12px", // Sliderning balandligi
                  backgroundColor: "#ffffff", // Sliderning rangi
                  borderRadius: "50%",
                  border: ".5px solid #373737",
                  zIndex: 2, // Frontda bo'lishi uchun
                  top: "-3px",
                }}
              />
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {data && Object.keys(data).length > 0
        ? datas?.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            value={item.value}
            description={item.description}
            a={item.a}
            y={item.y}
            x={item.x}
            m={item.m}
            p={item.p}
            sliderValue={item.sliderValue}
          />
        ))
        : datas?.map((card, index) => (
          <div key={index} className="investment-card">
            <h3>
              <Skeleton.Input style={{ width: 180 }} active loading={true} />
            </h3>
            <ul>
              <Skeleton active paragraph={{ rows: 1 }} />
            </ul>
          </div>
        ))}
    </>
  );
};

export default Investment;
