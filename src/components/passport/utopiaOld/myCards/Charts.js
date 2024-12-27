import React, { useState, useEffect, useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Area,
  Line,
  Legend,
  ResponsiveContainer,
  Cell,
  ComposedChart,
} from "recharts";
import moment from "moment";
import axios from "../../../../api";
import "moment/locale/ru"; // Ruscha uchun
import "moment/locale/es"; // Ispancha uchun
import "moment/locale/de"; // Ispancha uchun
import "./style.css";

const Charts = ({
  checkedItems,
  isOverlayVisible,
  id,
  selectValue,
  labels,
  currentLanguage,
}) => {
  const t = labels[currentLanguage];

  const [chartData, setChartData] = useState(null);
  const fetchChartData = (id, selectValue) => {
    return new Promise(async (resolve, reject) => {
      try {
        const API = `/portfolio/chart/?portfolio_id=${id}&time_step=${selectValue}`;
        const response = await axios.get(API);
        // Ma'lumotlarni filtrlash va optimallashtirish
        const optimizedData = response?.data?.data?.balances?.slice(-100) || []; // Oxirgi 100 yozuvni olish
        resolve({
          ...response?.data?.data,
          balances: optimizedData,
        });
      } catch (error) {
        reject(error); // Xatolik yuz bersa qaytarish
      }
    });
  };

  useEffect(() => {
    fetchChartData(id, selectValue)
      .then((data) => {
        setChartData(data); // Ma'lumotlarni saqlash
      })
      .catch((error) => {
        console.error("Error fetching chart data:", error); // Xatoliklarni konsolga chiqarish
      });
  }, [id, selectValue]);

  const [aa, setAa] = useState("profit");

  useEffect(() => {
    const getTimeStep = (checkedItems) => {
      if (checkedItems?.profit) return "profit";
      if (checkedItems?.benchmarkBTC) return "benchmark_btc";
      if (checkedItems?.marginBalance) return "margin_balances";
      if (checkedItems?.return) return "profit_percentage";
    };
    setAa(getTimeStep(checkedItems));
  }, [checkedItems]);

  const dataMain = useMemo(() => {
    if (!chartData) return []; // Return an empty array if chartData is not available.

    const { benchmark_btc, profit_percentage, margin_balances, profit } =
      chartData;

    return benchmark_btc.map((balance, index) => ({
      // name: new Date(balance.timestamp).toLocaleDateString(),
      name: new Date(chartData[aa][index]?.timestamp).toLocaleDateString(),
      negative0: benchmark_btc[index]?.value ?? 0,
      negative1: profit_percentage[index]?.value ?? 0,
      negative2: margin_balances[index]?.value ?? 0,
      negative3: profit[index]?.value ?? 0,
    }));
  }, [chartData]);

  const CustomTooltipMain = ({ active, payload, label }) => {
    if (!active || !payload || payload.length === 0) return null;
    return (
      <div className="PLByMonth" style={{ color: "#fff", fontSize: "12px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <b>{moment(payload[0]?.payload?.name).format("MMM D YYYY")}</b>
        </div>
        {payload.map(
          (item, index) =>
            item.value !== undefined && (
              <div
                key={index}
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    border: `2px solid ${"#14C886" || "#EA3941"}`,
                  }}
                ></div>
                {item.name}: <strong>{Math.floor(item.value)}</strong>
              </div>
            )
        )}
      </div>
    );
  };

  // ---------------------------12A-----------------------------------

  const [data, setData] = useState([]); // State for fetched data

  useEffect(() => {
    // Asinxron ma'lumotlarni olish funksiyasi
    const fetchRevenueData = () => {
      return new Promise(async (resolve, reject) => {
        try {
          const response = await axios.get(
            `/portfolio/revenue-by-month/?portfolio_id=${id}&time_step=${selectValue}`
          );
          resolve(response?.data?.data); // Ma'lumot muvaffaqiyatli olinsa
        } catch (err) {
          reject(err); // Xatolik yuz bersa
        }
      });
    };

    // Ma'lumotlarni olishni chaqirish
    fetchRevenueData()
      .then((fetchedData) => {
        setData(fetchedData); // Ma'lumotlarni konsolga chiqarish
      })
      .catch((err) => {
        console.error("Error fetching data:", err); // Xatoliklarni konsolga chiqarish
      });
  }, [id, selectValue]); // id yoki selectValue o'zgarsa, qayta ishga tushadi

  const formattedData = data?.map((item) => ({
    month: moment(item.timestamp).format("MMM YYYY"), // Convert timestamp to "MMM YYYY" format
    revenue: item.value,
  }));

  const plByMonthLabels = {
    en: "P/L by month:",
    ru: "Прибыль/Убыток за месяц:",
    de: "Gewinn/Verlust pro Monat:",
    es: "Ganancias/Pérdidas por mes:",
  };
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const revenue = payload[0].value;
      const isPositive = revenue >= 0;

      return (
        <div className="PLByMonth">
          <p>{label}</p>
          <p>
            <span
              style={{
                display: "inline-block",
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: isPositive ? "green" : "red",
                marginRight: "5px",
              }}
            ></span>
            {plByMonthLabels[currentLanguage]}
            <strong>{Math.floor(revenue)}%</strong>
          </p>
        </div>
      );
    }
    return null;
  };

  const revenueLabels = {
    en: "Revenue by month (%)",
    ru: "Доходность: в месяц (%)",
    de: "Umsatz pro Monat (%)",
    es: "Ingresos por mes (%)",
  };

  return (
    <>
      <ResponsiveContainer width="100%" height={isOverlayVisible ? 300 : 400}>
        {dataMain?.length ? (
          <ComposedChart
            data={dataMain}
            margin={{ top: 30, right: 0, left: 0, bottom: 30 }}
          >
            <CartesianGrid
              vertical={false}
              strokeDasharray="0"
              stroke="#ccccccd5"
            />
            {/* Define the Y-axes */}
            <YAxis
              yAxisId="left"
              orientation="left"
              domain={["auto"]}
              tickFormatter={(value) => `${(value / 1000).toFixed(1)}K%`}
              axisLine={{ stroke: "#ccc", strokeWidth: 1 }}
              tickLine={{ stroke: "#a9a9a978" }}
              tick={{ fontSize: 10 }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              domain={["auto"]}
              tickFormatter={(value) => `$${(value / 1000).toFixed(1)}K`}
              axisLine={{ stroke: "#a9a9a978" }}
              tickLine={{ stroke: "#a9a9a978" }}
              tick={{ fontSize: 10 }}
            />
            <Tooltip content={<CustomTooltipMain />} />
            <Legend />
            {/* Graphical components */}
            <Line
              yAxisId="left" // Matches "left" YAxis
              name={t.benchmarkBTC}
              type="monotone"
              dataKey={checkedItems?.benchmarkBTC && "negative0"}
              stroke="#FFD800"
              strokeWidth={checkedItems?.benchmarkBTC ? 1.9 : 0}
              dot={false}
            />
            <Area
              yAxisId="left" // Matches "left" YAxis
              stroke="#EB932D" // Stroke comes first
              strokeWidth={checkedItems?.return ? 1.9 : 0}
              fill="#fceddc" // Fill comes after stroke
              name={t.return}
              type="monotone"
              dataKey={checkedItems?.return && "negative1"}
            />
            <Line
              yAxisId="right" // Matches "right" YAxis
              name={t.marginBalance}
              type="monotone"
              dataKey={checkedItems?.marginBalance && "negative2"}
              stroke="#51AF94"
              strokeWidth={1.8}
              dot={false}
            />
            <Line
              yAxisId="right" // Matches "right" YAxis
              name={t.profit}
              type="monotone"
              dataKey={checkedItems?.profit && "negative3"}
              stroke="#444974"
              strokeWidth={checkedItems?.profit ? 1.8 : 0}
              dot={false}
            />
            {/* <Line
              yAxisId="right" // Matches "right" YAxis
              name={t.drawDown}
              type="monotone"
              dataKey={checkedItems?.drawDown && "negative4"}
              stroke="dodgerblue"
              strokeWidth={checkedItems?.drawdown_percentage ? 1.8 : 0}
              dot={false}
            /> */}
          </ComposedChart>
        ) : (
          <div className="chartLoader">
            <div className="loader"></div>
          </div>
        )}
      </ResponsiveContainer>

      {/* ---------------------------12A----------------------------------- */}
      <div className="revenue-by-month">
        <div></div>
        <span>{revenueLabels[currentLanguage]}</span>{" "}
      </div>
      <ResponsiveContainer width="100%" height={isOverlayVisible ? 200 : 240}>
        <BarChart
          data={formattedData}
          margin={{ top: 20, right: 0, left: 0, bottom: 5 }}
        >
          <CartesianGrid
            vertical={true} // Enable vertical lines for a full grid
            horizontal={true} // Ensure horizontal lines are also enabled
            strokeDasharray="0 0" // Adjust for small dashed pattern
            stroke="#ccccccd5" // Keep your preferred color
          />

          <XAxis
            dataKey="month"
            angle={-45}
            textAnchor="end"
            height={60}
            tick={{ fontSize: 10 }} /* Smaller font size for month labels */
            axisLine={false}
            tickLine={false}
            // tickFormatter={(monthIndex) => formatMonthYear(monthIndex, currentLanguage)}
          />

          <Bar
            dataKey="revenue"
            barSize={
              formattedData?.length <= 5
                ? 40
                : formattedData?.length <= 10
                ? 30
                : 20
            }
          >
            {formattedData?.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.revenue >= 0 ? "#14C886" : "#EA3941"}
              />
            ))}
          </Bar>

          <YAxis
            tick={{ fontSize: 10 }}
            axisLine={{ stroke: "#a9a9a978" }}
            tickLine={{ stroke: "#a9a9a978" }}
          />
          <XAxis
            tick={{ fontSize: 10 }}
            axisLine={{ stroke: "#a9a9a978" }}
            tickLine={{ stroke: "#a9a9a978" }}
          />
          <Tooltip content={<CustomTooltip />} cursor={false} />
          <Legend />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default Charts;
