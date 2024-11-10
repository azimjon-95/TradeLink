import React, { useState, useEffect } from "react";
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
import "./style.css";

const Charts = ({ chartData, checkedItems, isOverlayVisible, customKey, id, selectValue }) => {

    const dataMain = chartData?.balances?.map((balance, index) => ({
        name: new Date(balance.timestamp).toLocaleDateString(),
        negative0: chartData?.benchmark_btc[index].value,
        negative1: chartData?.drawdown_percentage[index].value,
        negative2: chartData?.drawdown_duration[index].value,
        revenue: chartData?.long_positions[index].value,
        negative3: chartData?.margin_balances[index].value,
        negative4: chartData?.pnl[index].value,
        negative5: chartData?.long_positions_x[index].value,
    }));

    const CustomTooltipMain = ({ active, payload, label }) => {
        if (!active || !payload || payload.length === 0) return null;
        console.log(payload);
        return (
            <div className="PLByMonth" style={{ color: "#fff", fontSize: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    {label}
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
                                        border: `2px solid ${item.color || "#EA3941"}`,
                                    }}
                                ></div>
                                {item.name}: <strong>{Math.floor(item.value)}</strong>
                            </div>
                        )
                )}
            </div>
        );
    };

    // const generateMockData = () => {
    //   const dataMain = [];
    //   const dataGrowth = chartData?.used_lerage || [];

    //   for (let i = 0; i < dataGrowth.length; i++) {
    //     const startDate = new Date(dataGrowth[i].timestamp);
    //     const date = new Date(startDate).toLocaleDateString();

    //     dataMain.push({
    //       date: date,
    //       growth: dataGrowth[i]?.value,
    //     });
    //   }

    //   return dataMain;
    // };

    // const dataLine = generateMockData();
    const dataLine = [
        {
            day: "2024-11-01",
            leverage: 10, // Leverage foizlar
            long_posotions: 1500, // Uzoq pozitsiyalar
            short_posotions: -300, // Qisqa pozitsiyalar
            revenue: 1500, // Daromad
        },
        {
            day: "2024-11-02",
            leverage: 5,
            long_posotions: 800,
            short_posotions: -200,
            revenue: 600,
        },
        {
            day: "2024-11-03",
            leverage: 12,
            long_posotions: -500,
            short_posotions: 1000,
            revenue: 500,
        },
        {
            day: "2024-11-04",
            leverage: 8,
            long_posotions: 1200,
            short_posotions: -600,
            revenue: 600,
        },
        {
            day: "2024-11-05",
            leverage: 20,
            long_posotions: 2000,
            short_posotions: -1000,
            revenue: 1000,
        },
        {
            day: "2024-11-06",
            leverage: 15,
            long_posotions: -400,
            short_posotions: 700,
            revenue: 300,
        },
        {
            day: "2024-11-07",
            leverage: 18,
            long_posotions: 1700,
            short_posotions: -800,
            revenue: 900,
        },
        {
            day: "2024-11-08",
            leverage: -5,
            long_posotions: -600,
            short_posotions: 500,
            revenue: -100,
        },
        {
            day: "2024-11-09",
            leverage: 7,
            long_posotions: 400,
            short_posotions: -200,
            revenue: 200,
        },
        {
            day: "2024-11-10",
            leverage: 10,
            long_posotions: 1300,
            short_posotions: -300,
            revenue: 1000,
        },
    ];

    const CustomTooltipTwo = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            console.log("payload", payload);

            return (
                <div className="PLByMonth">
                    <p>{label}</p>
                    <p>
                        Used Leverage:<strong>{payload[0]?.value}</strong>{" "}
                    </p>
                    <p>
                        Long positions:<strong>{payload[1]?.value}</strong>{" "}
                    </p>
                    <p>
                        Short positions:<strong>{payload[2]?.value}</strong>{" "}
                    </p>
                </div>
            );
        }
        return null;
    };

    // ---------------------------11A-----------------------------------
    // Mock Data Example
    const generateBottomData = () => {
        const dataBottom = [];
        const startDate = new Date(2023, 3); // Start from April 2023

        for (let i = 0; i < 15; i++) {
            const monthLabel = `${startDate.toLocaleString("default", {
                month: "short",
            })} '${startDate.getFullYear().toString().slice(-2)}`;

            // Generate leverage and drawdown values
            const leverageValue = 20 + Math.sin(i / 2) * 10 + i * 0.3;
            const drawdownValue = 100 - i * 0.5 + Math.cos(i / 3) * 15;

            dataBottom.push({
                date: monthLabel,
                leverage: leverageValue,
                drawdown: drawdownValue,
            });

            startDate.setMonth(startDate.getMonth() + 3); // Move by quarter
        }

        return dataBottom;
    };

    const dataBottom = generateBottomData;

    // Custom Tooltip Component
    const CustomTooltipBottom = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="PLByMonth">
                    <p style={{ fontWeight: "bold" }}>{label}</p>
                    <p>
                        Leverage: <strong>{payload[0].payload.leverage.toFixed(2)}%</strong>
                    </p>
                    <p>
                        DrawDown: <strong>{payload[0].payload.drawdown.toFixed(2)}%</strong>
                    </p>
                </div>
            );
        }
        return null;
    };

    // ---------------------------12A-----------------------------------

    const [data, setData] = useState(null); // State for fetched data


    useEffect(() => {
        // Function to fetch data with the chosen time_step
        const fetchRevenueData = async () => {
            try {
                // API request with portfolio_id and dynamic time_step
                const response = await axios.get(`/portfolio/revenue-by-month/?portfolio_id=${id}&time_step=${selectValue}`)
                setData(response?.data?.data); // Set data after successful fetch
            } catch (err) {
                console.log('Error fetching data', err);
            }
        };

        fetchRevenueData();
    }, [id, selectValue]); // Rerun effect when timeStep changes


    const formattedData = data?.map(item => ({
        month: moment(item.timestamp).format('MMM YYYY'), // Convert timestamp to "MMM YYYY" format
        revenue: item.value,
    }));
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            const revenue = payload[0].value;
            return (
                <div className="PLByMonth">
                    <p>{label}</p>
                    <p>
                        P/L by month:<strong>{Math.floor(revenue)}%</strong>{" "}
                    </p>
                </div>
            );
        }
        return null;
    };


    return (
        <>
            <ResponsiveContainer width="100%" height={isOverlayVisible ? 300 : 400}>
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

                    {checkedItems.benchmarkBTC && (
                        <Line
                            yAxisId="left"
                            name="Benchmark BTC"
                            type="monotone"
                            dataKey="negative0"
                            stroke="#8A2BE2"
                            strokeWidth={1.5}
                            dot={false}
                        />
                    )}
                    {checkedItems.return && (
                        <Area
                            strokeWidth={1.5}
                            name="Return (%)"
                            yAxisId="left"
                            type="linear"
                            dataKey="negative1"
                            fill="#fceddc"
                            stroke="#EB932D"
                        />
                    )}
                    {checkedItems.realizedReturn && (
                        <Line
                            yAxisId="left"
                            name="Realized Return"
                            type="monotone"
                            dataKey="negative2"
                            label="ssss"
                            stroke="#1E90FF"
                            strokeWidth={1.5}
                            dot={false}
                        />
                    )}
                    {checkedItems.plByday && (
                        <Bar
                            yAxisId="left"
                            z={2}
                            name="P\L by day"
                            dataKey="revenue"
                            barSize={2}
                        >
                            {" "}
                            {dataMain?.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={entry.revenue >= 0 ? "#14C886" : "#EA3941"}
                                />
                            ))}
                        </Bar>
                    )}
                    {checkedItems.marginBalance && (
                        <Line
                            yAxisId="left"
                            name="Margin Balance"
                            type="monotone"
                            dataKey="negative3"
                            stroke="#55516D"
                            strokeWidth={1.5}
                            dot={false}
                        />
                    )}
                    {checkedItems.balance && (
                        <Line
                            yAxisId="left"
                            name="Balance"
                            type="monotone"
                            dataKey="negative4"
                            stroke="#FF4500"
                            strokeWidth={1.5}
                            dot={false}
                        />
                    )}
                    {checkedItems.profit && (
                        <Line
                            yAxisId="left"
                            name="Profit ($)"
                            type="monotone"
                            dataKey="negative5"
                            stroke="#32CD32"
                            strokeWidth={1.5}
                            dot={false}
                        />
                    )}
                </ComposedChart>
            </ResponsiveContainer>

            {/* ---------------------------10A----------------------------------- */}
            <div style={{ display: `${customKey && "none"}` }}>
                {checkedItems.usedLeverage && (
                    <ResponsiveContainer width="100%" height={130}>
                        <ComposedChart
                            data={dataLine}
                            margin={{ top: 30, right: 0, left: 0, bottom: 30 }}
                        >
                            {/* <LineChart
                data={dataLine}
                size="midle"
                margin={{ top: 30, right: 0, left: 0, bottom: 30 }}
              > */}
                            <CartesianGrid
                                vertical={false}
                                strokeDasharray="0"
                                stroke="#ccc"
                            />

                            <YAxis
                                yAxisId="left"
                                orientation="left"
                                domain={[0, "auto"]}
                                tickFormatter={(value) => `${value}%`} // Keep as percentage format (unchanged)
                                tick={{ fontSize: 10 }}
                                axisLine={{ stroke: "#a9a9a978" }}
                                tickLine={{ stroke: "#a9a9a978" }}
                            />

                            {/* Right Y-Axis with "$" and "K" suffix */}
                            <YAxis
                                yAxisId="right"
                                orientation="right"
                                domain={["auto", 0]}
                                tickFormatter={(value) => `$${(value / 1000).toFixed(1)}K`} // Format with "$" and "K"
                                axisLine={{ stroke: "#a9a9a978" }}
                                tickLine={{ stroke: "#a9a9a978" }}
                                tick={{ fontSize: 10 }}
                            />

                            <Tooltip content={<CustomTooltipTwo />} />
                            <Line
                                yAxisId="left"
                                type="linear"
                                dataKey="leverage"
                                stroke="#954FC4"
                                strokeWidth={1.5}
                                dot={false}
                            />

                            <Bar
                                yAxisId="left"
                                z={2}
                                name="P\L by day"
                                dataKey="long_posotions"
                                barSize={2}
                            >
                                {dataLine?.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={entry.long_posotions >= 0 ? "#14C886" : "#EA3941"}
                                    />
                                ))}
                            </Bar>
                            <Bar
                                yAxisId="left"
                                z={2}
                                name="P\L by day"
                                dataKey="sh
                "
                                barSize={2}
                            >
                                {dataLine?.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={entry.short_posotions >= 0 ? "#14C886" : "#EA3941"}
                                    />
                                ))}
                            </Bar>
                            {/* </LineChart> */}
                        </ComposedChart>
                    </ResponsiveContainer>
                )}
            </div>

            {/* ---------------------------11A----------------------------------- */}
            {/* {checkedItems.drawDownDuration || checkedItems.drawDown && */}

            <ResponsiveContainer width="100%" height={130}>
                <ComposedChart
                    data={dataBottom}
                    margin={{ top: 20, right: 10, left: 10, bottom: 20 }}
                >
                    <CartesianGrid
                        vertical={false}
                        strokeDasharray="3 3"
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
                    {checkedItems.drawDown && (
                        <Line
                            yAxisId="left"
                            type="linear"
                            dataKey="drawdown"
                            stroke="#4180D2"
                            strokeWidth={1.5}
                            dot={false}
                        />
                    )}

                    {/* Conditional Area rendered on top */}
                    {checkedItems.drawDownDuration && (
                        <Area
                            yAxisId="left"
                            type="linear"
                            dataKey="leverage"
                            fill="#d1e3f9"
                            stroke="#4595fd0"
                            strokeWidth={1.5}
                        />
                    )}
                </ComposedChart>
            </ResponsiveContainer>

            {/* ---------------------------12A----------------------------------- */}
            <div className="revenue-by-month">
                <div></div>
                <span>Revenue by month (%)</span>{" "}
            </div>
            <ResponsiveContainer width="100%" height={isOverlayVisible ? 200 : 240}>
                <BarChart
                    data={formattedData}
                    margin={{ top: 20, right: 0, left: 0, bottom: 5 }}
                >
                    <CartesianGrid vertical={false} strokeDasharray="0" stroke="#ccc" />

                    <XAxis
                        dataKey="month"
                        angle={-45}
                        textAnchor="end"
                        height={60}
                        tick={{ fontSize: 10 }} /* Smaller font size for month labels */
                        axisLine={false}
                        tickLine={false}
                    />

                    <Bar dataKey="revenue" barSize={20}>
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
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                </BarChart>
            </ResponsiveContainer>
        </>
    );
};

export default Charts;
