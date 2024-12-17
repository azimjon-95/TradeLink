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
  customKey,
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
        revenue: chartData?.long_positions[index].value,
        negative3: chartData?.margin_balances[index].value,
        negative4: chartData?.pnl[index].value,
        negative5: chartData?.long_positions_x[index].value,
      })),
    [chartData]
  );

  const CustomTooltipMain = ({ active, payload, label }) => {
    if (!active || !payload || payload.length === 0) return null;
    return (
      <div className="PLByMonth" style={{ color: "#fff", fontSize: "12px" }}>
        {/* <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <b>{moment(payload[0]?.payload?.name).format("MMM D YYYY")}</b>
        </div> */}
        <b>
          {moment(payload[0]?.payload?.name, "MM/DD/YYYY").isValid()
            ? moment(payload[0]?.payload?.name, "MM/DD/YYYY").format(
                "MMM D YYYY"
              )
            : "Noma'lum sana"}
        </b>
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

  const dataLine = useMemo(
    () =>
      chartData?.used_lerage?.map((item, index) => ({
        day: new Date(item?.timestamp)?.toLocaleDateString(),
        leverage: item.value,
        long_positions: chartData?.long_positions[index].value,
        short_positions: chartData?.short_positions[index].value,
      })),
    [chartData]
  );

  const usedLeverage = {
    en: "Used Leverage:",
    ru: "Используемое кредитное плечо:",
    de: "Verwendeter Hebel:",
    es: "Apalancamiento usado:",
  };
  const longPositions = {
    en: "Long positions:",
    ru: "Длинные позиции:",
    de: "Long-Positionen:",
    es: "Posiciones largas:",
  };
  const shortPositions = {
    en: "Short positions:",
    ru: "Короткие позиции:",
    de: "Short-Positionen:",
    es: "Posiciones cortas:",
  };
  const CustomTooltipTwo = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="PLByMonth">
          {/* <b style={{ color: "#fff", fontSize: "14px" }}>
            {moment(payload[0]?.payload?.day).format("MMM D YYYY")}
          </b> */}
          <b style={{ color: "#fff", fontSize: "14px" }}>
            {moment(payload[0]?.payload?.day, "MM/DD/YYYY").isValid()
              ? moment(payload[0]?.payload?.day, "MM/DD/YYYY").format(
                  "MMM D YYYY"
                )
              : "Noma'lum sana"}
          </b>

          <p>
            <strong
              style={{ display: "flex", alignItems: "center", gap: "4px" }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  border: `2px solid #14C886`,
                }}
              ></div>
              {usedLeverage[currentLanguage]}
              {payload[0]?.value.toFixed(2)}
            </strong>
          </p>
          <p>
            <strong
              style={{ display: "flex", alignItems: "center", gap: "4px" }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  border: `2px solid  #EA3941`,
                }}
              ></div>
              {longPositions[currentLanguage]}
              {payload[1]?.value.toFixed(2)}
            </strong>
          </p>
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
                  border: `2px solid  ${payload[2]?.stroke}`,
                }}
              ></div>
              {shortPositions[currentLanguage]}
              {payload[2]?.value.toFixed(2)}
            </strong>
          </p>
        </div>
      );
    }
    return null;
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
  const drawdownDuration = {
    en: "DrawDown Duration:",
    ru: "Длительность просадки:",
    de: "Dauer des Rückgangs:",
    es: "Duración de la pérdida:",
  };
  const CustomTooltipBottom = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="PLByMonth">
          {/* <b style={{ color: "#fff", fontSize: "14px" }}>
            {moment(payload[0]?.payload?.day).format("MMM D YYYY")}
          </b> */}
          <b style={{ color: "#fff", fontSize: "14px" }}>
            {moment(payload[0]?.payload?.day, "YYYY-MM-DD", true).isValid()
              ? moment(payload[0]?.payload?.day).format("MMM D YYYY")
              : "Noma'lum sana"}
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
                  border: `2px solid #4180D2`, // Color based on value
                }}
              ></div>
              {drawdownDuration[currentLanguage]}{" "}
              {payload[1]?.payload?.drawdown_duration?.toFixed(2)}%
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

            <YAxis
              yAxisId="left"
              orientation="left"
              domain={["auto"]}
              tickFormatter={(value) => `${value}%`} // Keep as percentage format (unchanged)
              tick={{ fontSize: 10 }}
              axisLine={{ stroke: "#a9a9a978" }}
              tickLine={{ stroke: "#a9a9a978" }}
            />

            <YAxis
              yAxisId="right"
              orientation="right"
              domain={["auto"]}
              tickFormatter={(value) => `$${(value / 1000).toFixed(1)}K`} // Format with "$" and "K"
              axisLine={{ stroke: "#a9a9a978" }}
              tickLine={{ stroke: "#a9a9a978" }}
              tick={{ fontSize: 10 }}
            />

            <Tooltip content={<CustomTooltipMain />} />
            <Legend />

            <Line
              yAxisId="left"
              name={t.benchmarkBTC}
              type="monotone"
              dataKey={checkedItems?.benchmarkBTC && "negative0"}
              stroke="#8A2BE2"
              strokeWidth={checkedItems?.benchmarkBTC ? 1.9 : 0}
              dot={false}
            />

            <Area
              strokeWidth={checkedItems?.realizedReturn ? 1.9 : 0}
              name={t.return}
              yAxisId="left"
              type="linear"
              dataKey={checkedItems?.realizedReturn && "negative1"}
              fill="#fceddc"
              stroke="#EB932D"
            />

            <Line
              yAxisId="left"
              name={t.realizedReturn}
              type="monotone"
              dataKey={checkedItems?.realizedReturn && "negative2"}
              label="ssss"
              stroke="#1E90FF"
              strokeWidth={checkedItems?.realizedReturn ? 1.9 : 0}
              dot={false}
            />

            <Bar
              yAxisId="left"
              z={2}
              name={t.plByDay}
              dataKey={checkedItems?.plByday && "revenue"}
              barSize={checkedItems?.plByday ? 2 : 0}
            >
              {" "}
              {dataMain?.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.revenue >= 0 ? "#14C886" : "#EA3941"}
                />
              ))}
            </Bar>

            <Line
              yAxisId="left"
              name={t.marginBalance}
              type="monotone"
              dataKey={checkedItems?.marginBalance && "negative3"}
              stroke="#55516D"
              strokeWidth={1.8}
              dot={false}
            />

            <Line
              yAxisId="left"
              name={t.balance}
              type="monotone"
              dataKey={checkedItems?.balance && "negative4"}
              stroke="#FF4500"
              strokeWidth={checkedItems?.balance ? 1.8 : 0}
              dot={false}
            />

            <Line
              yAxisId="left"
              name={t.profit}
              type="monotone"
              dataKey={checkedItems?.profit && "negative5"}
              stroke="#32CD32"
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
      <div style={{ display: `${customKey && "none"}` }}>
        {checkedItems.usedLeverage && (
          <ResponsiveContainer width="100%" height={130}>
            {dataLine?.length ? (
              <ComposedChart
                data={dataLine}
                margin={{ top: 30, right: 0, left: 0, bottom: 30 }}
              >
                <CartesianGrid
                  vertical={false}
                  strokeDasharray="0"
                  stroke="#ccccccd5"
                />

                {/* Left Y-Axis - Percentage format */}
                <YAxis
                  yAxisId="left"
                  orientation="left"
                  domain={["auto"]}
                  tickFormatter={(value) => `${value}%`}
                  tick={{ fontSize: 10 }}
                  axisLine={{ stroke: "#a9a9a978" }}
                  tickLine={{ stroke: "#a9a9a978" }}
                />

                {/* Right Y-Axis - Dollar format with 'K' suffix */}
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  domain={["auto"]}
                  tickFormatter={(value) => `$${(value / 1000).toFixed(1)}K`}
                  tick={{ fontSize: 10 }}
                  axisLine={{ stroke: "#a9a9a978" }}
                  tickLine={{ stroke: "#a9a9a978" }}
                />

                <Tooltip content={<CustomTooltipTwo />} />
                <Legend />

                {/* Bar for Long Positions */}
                <Bar
                  yAxisId="left"
                  name="Long Positions"
                  dataKey="long_positions"
                  barSize={4}
                >
                  {dataLine?.map((entry, index) => (
                    <Cell
                      key={`long-cell-${index}`}
                      fill={entry.long_positions >= 0 ? "#14C886" : "#EA3941"}
                    />
                  ))}
                </Bar>

                {/* Bar for Short Positions */}
                <Bar
                  yAxisId="left"
                  name="Short Positions"
                  dataKey="short_positions"
                  barSize={4}
                >
                  {dataLine?.map((entry, index) => (
                    <Cell
                      key={`short-cell-${index}`}
                      fill={entry.short_positions >= 0 ? "#14C886" : "#EA3941"}
                    />
                  ))}
                </Bar>

                {/* Line Component for Leverage */}
                <Line
                  yAxisId="left"
                  name="Margin Balance"
                  type="monotone"
                  dataKey="leverage"
                  stroke="#954FC4"
                  strokeWidth={1.5}
                  dot={false}
                />
              </ComposedChart>
            ) : (
              <div className="chartLoader2">
                <div className="loader"></div>
              </div>
            )}
          </ResponsiveContainer>
        )}
      </div>

      {/* ---------------------------11A----------------------------------- */}
      {/* {checkedItems.drawDownDuration || checkedItems.drawDown && */}

      <ResponsiveContainer width="100%" height={130}>
        {dataBottom?.length ? (
          <ComposedChart
            data={dataBottom}
            margin={{ top: 20, right: 10, left: 10, bottom: 20 }}
          >
            <CartesianGrid
              vertical={false}
              strokeDasharray="0"
              stroke="#e0e0e0"
            />

            {/* X-Axis with Month Labels */}
            <XAxis
              dataKey="date"
              tick={{ fontSize: 10, fill: "#606060" }}
              axisLine={{ stroke: "#a9a9a978" }}
              tickLine={false}
              tickMargin={10}
            />

            {/* Left Y-Axis for Percentage */}
            <YAxis
              yAxisId="left"
              orientation="left"
              domain={[0, "auto"]}
              tickFormatter={(value) => `${value}%`}
              tick={{ fontSize: 10, fill: "#606060" }}
              axisLine={false}
              tickLine={false}
            />

            {/* Right Y-Axis with "$" and "K" suffix */}
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

            {/* Conditional Line before Area for rendering order */}
            <Line
              yAxisId="left"
              type="linear"
              dataKey={checkedItems.drawDown && "drawdown"}
              stroke="#4180D2"
              strokeWidth={checkedItems.drawDown ? 1.9 : 0}
              dot={false}
            />

            {/* Conditional Area rendered on top */}
            <Area
              yAxisId="left"
              type="linear"
              dataKey={checkedItems.drawDownDuration && "drawdown_duration"}
              fill="#d1e3f9"
              stroke="#4595fd0"
              strokeWidth={checkedItems.drawDownDuration ? 1.9 : 0}
            />
          </ComposedChart>
        ) : (
          <div className="chartLoader2">
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
