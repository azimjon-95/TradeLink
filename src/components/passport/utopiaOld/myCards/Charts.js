// eslint-disable-next-line
import React, { useState, useEffect, useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  // LineChart,
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

// import "moment/locale/en"; //  uchun
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

  // Data mapping optimized with useMemo
  const dataMain = useMemo(
    () =>
      chartData?.balances?.map((balance, index) => ({
        name: new Date(balance.timestamp).toLocaleDateString(),
        negative0: chartData?.benchmark_btc[index].value,
        negative1: chartData?.drawdown_percentage[index].value,
        negative2: chartData?.drawdown_duration[index].value,
        negative3: chartData?.long_positions_x[index].value,
        // revenue: chartData?.long_positions[index].value,
        // negative3: chartData?.margin_balances[index].value,
        // negative4: chartData?.pnl[index].value,
      })),
    [chartData]
  );

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



  const dataBottom = useMemo(
    () =>
      chartData?.drawdown_duration?.map((item, index) => ({
        day: new Date(item?.timestamp)?.toLocaleDateString(),
        drawdown_duration: item.value,
        drawdown: chartData?.drawdown_percentage[index].value,
      })),
    [chartData]
  );

  const drawdown = {
    en: "DrawDown:",
    ru: "Максимальная просадка:",
    de: "Maximaler Rückgang:",
    es: "Pérdida máxima:",
  };

  const CustomTooltipBottom = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="PLByMonth">
          <b style={{ color: "#fff", fontSize: "14px" }}>
            {moment(payload[0]?.payload?.day).format("MMM D YYYY")}
          </b>
          <p>
            <strong
              style={{ display: "flex", alignItems: "center", gap: "4px" }}
            >
              <div
                style={{
                  display: "inline-block",
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  border: `2px solid #85bafe`, // Color based on value
                }}
              ></div>
              {drawdown[currentLanguage]}{" "}
              {payload[0]?.payload?.drawdown?.toFixed(2)}%
            </strong>
          </p>

        </div>
      );
    }
    return null;
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


  const monthNames = {
    ru: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
    de: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
    en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    es: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]
  };

  // Funksiya sanani formatlash uchun
  function formatDay(day, currentLanguage) {
    const [month, date, year] = day.split("/"); // MM/DD/YYYY formatida bo'lishini kutadi
    const monthIndex = parseInt(month, 10) - 1; // Oy indexi uchun
    const translatedMonth = monthNames[currentLanguage]?.[monthIndex] || monthNames.eng[monthIndex]; // Default: English
    return `${translatedMonth}: ${date}`; // Oy nomi va kun
  }


  // dataBottom massivini formatlash
  function formatData(data, currentLanguage) {
    return data?.map(item => ({
      ...item,
      formattedDay: formatDay(item?.day, currentLanguage)
    }));
  }
  // Formatlangan natija
  const data_formated = formatData(dataBottom, currentLanguage);


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
          </ComposedChart>
        ) : (
          <div className="chartLoader">
            <div className="loader"></div>
          </div>
        )}
      </ResponsiveContainer>
      {/* ---------------------------10A----------------------------------- */}

      {
        checkedItems.drawDown && (
          <ResponsiveContainer width="100%" height={130}>
            {dataBottom?.length ? (
              <ComposedChart
                data={data_formated}
                margin={{ top: 20, right: 10, left: 10, bottom: 20 }}
              >
                <CartesianGrid
                  vertical={false}
                  strokeDasharray="0"
                  stroke="#e0e0e0"
                />

                <XAxis
                  dataKey="day"
                  tickFormatter={(value) => {
                    const matchedDay = data_formated.find((item) => item.day === value);
                    return matchedDay?.formattedDay || value; // formattedDay ni ko'rsatadi
                  }}
                  tick={{ fontSize: 10, fill: "#606060" }}
                  axisLine={{ stroke: "#a9a9a978" }}
                  tickLine={false}
                  tickMargin={10}
                />

                <YAxis
                  yAxisId="left"
                  orientation="left"
                  domain={[0, "auto"]}
                  tickFormatter={(value) => `${value}%`}
                  tick={{ fontSize: 10, fill: "#606060" }}
                  axisLine={false}
                  tickLine={false}
                />

                <YAxis
                  yAxisId="right"
                  orientation="right"
                  domain={["auto", 0]}
                  tickFormatter={(value) => `$${(value / 1000).toFixed(1)}K`}
                  tick={{ fontSize: 10, fill: "#606060" }}
                  axisLine={false}
                  tickLine={false}
                />

                <Tooltip content={<CustomTooltipBottom />} />

                <Area
                  yAxisId="left"
                  type="linear"
                  dataKey={checkedItems.drawDown && "drawdown"}
                  fill="#d1e3f9"
                  stroke="#4595fd0"
                  strokeWidth={checkedItems.drawDown ? 1.9 : 0}
                />
              </ComposedChart>
            ) : (
              <div className="chartLoader2">
                <div className="loader"></div>
              </div>
            )}
          </ResponsiveContainer>
        )}
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
