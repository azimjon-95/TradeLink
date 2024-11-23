import React, { useEffect, useState } from "react";

const LineChart = ({ data, height = 60, strokeColor = "#00c086" }) => {
  const [chartWidth, setChartWidth] = useState(
    window.innerWidth < 900 ? "100%" : 578
  );
  const maxValue = Math.max(...data);

  useEffect(() => {
    const handleResize = () => {
      setChartWidth(window.innerWidth < 900 ? "100%" : 578);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate points for line and filled area
  const points = data
    .map((value, index) => {
      const x =
        (index / (data?.length - 1)) *
        (chartWidth === "100%" ? 578 : chartWidth); // 578 as a reference width for calculations
      const y = height - (value / maxValue) * height;
      return `${x},${y}`;
    })
    .join(" ");

  const filledPoints = `0, ${height} ${points} ${chartWidth === "100%" ? 578 : chartWidth
    }, ${height}`;

  return (
    <svg
      width={chartWidth}
      height={height}
      className="over-chart"
      style={{ width: chartWidth }}
    >
      <polygon points={filledPoints} fill={strokeColor} opacity="0.1" />
      <polyline
        points={points}
        fill="none"
        stroke={strokeColor}
        strokeWidth="1"
      />
    </svg>
  );
};

export default LineChart;
