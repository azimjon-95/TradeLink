import React, { useState } from 'react';
import { AiOutlineQuestionCircle } from "react-icons/ai";
import ReactApexChart from 'react-apexcharts';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer, Cell } from 'recharts';
import './style.css';

const Trades = () => {
    const data = {
        trades: [
            // Example trades data
            {
                title: "Trade Summary",
                items: [
                    { label: "Total trades", value: "9.41K" },
                    { label: "Winning trades", value: "5.2K" },
                    { label: "Losing trades", value: "4.21K" },
                ],
            },
            {
                title: "Trade Performance",
                items: [
                    { label: "Average trade profit", value: "$320" },
                    { label: "Average trade loss", value: "$250" },
                    { label: "Largest win", value: "$5.6K" },
                ],
            },
            {
                title: "Market Analysis",
                items: [
                    { label: "Most traded market", value: "S&P 500" },
                    { label: "Best performing market", value: "NASDAQ" },
                    { label: "Worst performing market", value: "DAX" },
                ],
            },
        ],
    }

    const datatrades = [
        // Daily entries with specific hours
        { hour: '12:00 AM', revenue: 15, period: 'Daily' },
        { hour: '1:00 AM', revenue: 20, period: 'Daily' },
        { hour: '2:00 AM', revenue: 10, period: 'Daily' },
        { hour: '3:00 AM', revenue: 5, period: 'Daily' },
        { hour: '4:00 AM', revenue: 8, period: 'Daily' },
        { hour: '5:00 AM', revenue: 12, period: 'Daily' },
        { hour: '6:00 AM', revenue: 18, period: 'Daily' },
        { hour: '7:00 AM', revenue: 22, period: 'Daily' },
        { hour: '8:00 AM', revenue: 30, period: 'Daily' },
        { hour: '9:00 AM', revenue: 25, period: 'Daily' },
        { hour: '10:00 AM', revenue: 120, period: 'Daily' },
        { hour: '11:00 AM', revenue: 45, period: 'Daily' },
        { hour: '12:00 PM', revenue: 25, period: 'Daily' },
        { hour: '1:00 PM', revenue: 35, period: 'Daily' },
        { hour: '2:00 PM', revenue: 28, period: 'Daily' },
        { hour: '3:00 PM', revenue: 50, period: 'Daily' },
        { hour: '4:00 PM', revenue: 40, period: 'Daily' },
        { hour: '5:00 PM', revenue: 55, period: 'Daily' },
        { hour: '6:00 PM', revenue: 60, period: 'Daily' },
        { hour: '7:00 PM', revenue: 70, period: 'Daily' },
        { hour: '8:00 PM', revenue: 35, period: 'Daily' },
        { hour: '9:00 PM', revenue: 45, period: 'Daily' },
        { hour: '10:00 PM', revenue: 38, period: 'Daily' },
        { hour: '11:00 PM', revenue: 50, period: 'Daily' },

        // Weekly entries with specific days of the week
        { day: 'Monday', revenue: 15, period: 'Weekly' },
        { day: 'Tuesday', revenue: 40, period: 'Weekly' },
        { day: 'Wednesday', revenue: 20, period: 'Weekly' },
        { day: 'Thursday', revenue: 50, period: 'Weekly' },
        { day: 'Friday', revenue: 10, period: 'Weekly' },
        { day: 'Saturday', revenue: 60, period: 'Weekly' },
        { day: 'Sunday', revenue: 30, period: 'Weekly' }
    ];

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            const revenue = payload[0].value;
            return (
                <div className="PLByMonth">
                    <p>{label}</p>
                    <p>P/L by month: <strong>{revenue}%</strong></p>
                </div>
            );
        }
        return null;
    };
    const [activePeriod, setActivePeriod] = useState("Daily");

    // Filter data based on active period
    const filteredData = datatrades.filter(data => data.period === activePeriod);





    const [apexChart, setApexChart] = useState("volume"); // Set initial chart type to "volume"

    const [options] = useState({
        legend: {
            show: false,
        },
        chart: {
            height: 500,
            width: 500,
            type: 'treemap',
            toolbar: {
                show: true,
            },
            zoom: {
                enabled: false,
            },
        },
        title: {
            text: "",
            align: 'center',
        },
        colors: [
            "#d1565b", "#63c89a", "#9e7fb5", "#d2c874", "#df79ad",
            "#55c2c5", "#97d69b", "#9ad7d8", "#dc8a70", "#d485b2", "#bccf7d",
        ],
        plotOptions: {
            treemap: {
                distributed: true,
                enableShades: false,
                labels: {
                    show: true, // Show data labels
                    style: {
                        colors: ['#fff'], // Color of the labels
                        fontSize: '14px',
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
                fontSize: '12px',
            },
            x: {
                formatter: (value) => `Currency: ${value}`,
            },
            y: {
                formatter: (value) => `Value: ${value.toFixed(2)}`,
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


    const getDataByChartType = (type) => {
        switch (type) {
            case "volume":
                return [
                    { x: "BTCUSDT", y: 34.74 },
                    { x: "ETHUSDT", y: 15.81 },
                    { x: "BCHUSDT", y: 11.91 },
                    { x: "XRPUSDT", y: 10.14 },
                    { x: "LTCUSDT", y: 5.31 },
                    { x: "EOSUSDT", y: 5.34 },
                    { x: "ETCUSDT", y: 4.69 },
                    { x: "LINKUSDT", y: 4.12 },
                    { x: "ZECUSDT", y: 3.02 },
                    { x: "TRXUSDT", y: 3.2 },
                    { x: "DOGEUSDT", y: 0.95 },
                    { x: "DASHUSDT", y: 0.76 },
                ];
            case "average":
                return [
                    { x: "BTCUSDT", y: 40.00 },
                    { x: "ETHUSDT", y: 20.00 },
                    { x: "BCHUSDT", y: 15.00 },
                    { x: "XRPUSDT", y: 8.00 },
                    { x: "LTCUSDT", y: 4.00 },
                    { x: "EOSUSDT", y: 5.00 },
                    { x: "ETCUSDT", y: 4.50 },
                    { x: "LINKUSDT", y: 3.50 },
                    { x: "ZECUSDT", y: 2.50 },
                    { x: "TRXUSDT", y: 3.00 },
                    { x: "DOGEUSDT", y: 1.00 },
                    { x: "DASHUSDT", y: 0.80 },
                ];
            case "profit":
                return [
                    { x: "BTCUSDT", y: 25.00 },
                    { x: "ETHUSDT", y: 15.00 },
                    { x: "BCHUSDT", y: 10.00 },
                    { x: "XRPUSDT", y: 5.00 },
                    { x: "LTCUSDT", y: 2.50 },
                    { x: "EOSUSDT", y: 2.00 },
                    { x: "ETCUSDT", y: 1.50 },
                    { x: "LINKUSDT", y: 1.00 },
                    { x: "ZECUSDT", y: 0.75 },
                    { x: "TRXUSDT", y: 0.50 },
                    { x: "DOGEUSDT", y: 0.30 },
                    { x: "DASHUSDT", y: 0.20 },
                ];
            default:
                return [];
        }
    };

    const [series, setSeries] = useState([{
        data: getDataByChartType(apexChart) // Set initial data based on the default chart type
    }]);

    const handleButtonClick = (type) => {
        setApexChart(type);
        setSeries([{ data: getDataByChartType(type) }]); // Update series based on the selected type
    };
    return <>
        <div className="trades-cont">
            {
                data?.trades?.map((card, index) => (
                    <div key={index} className="single-card">
                        <h3>{card.title} <AiOutlineQuestionCircle /></h3>
                        <ul>
                            {card.items?.map((item, i) => (
                                <li key={i} className="single-card-item">
                                    <span className="single-label"> {item.label}</span>
                                    <span className="single-values">{item.value}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))
            }
        </div>

        <h2 className="ket-inxTitle">Distribution of orders by amount</h2>
        <nav className="single-tabs">
            <button
                onClick={() => setActivePeriod("Daily")}
                className={activePeriod === "Daily" ? "active" : ""}
            >
                Daily
            </button>
            <button
                onClick={() => setActivePeriod("Weekly")}
                className={activePeriod === "Weekly" ? "active" : ""}
            >
                Weekly
            </button>
        </nav>
        <div className="revenue-by-month">
            <div></div><span>Distribution</span>
        </div>
        <ResponsiveContainer width="100%" height={240}>
            <BarChart data={filteredData} margin={{ top: 20, right: 0, left: 0, bottom: 5 }}>
                <CartesianGrid vertical={false} strokeDasharray="0" stroke="#ccc" />
                <XAxis
                    dataKey={activePeriod === "Daily" ? "hour" : "day"} // Use hour for daily, day for weekly
                    tick={{ fontSize: 10 }}
                    axisLine={false}
                    tickLine={false}
                />
                <YAxis tick={{ fontSize: 10 }} axisLine={{ stroke: '#a9a9a978' }} tickLine={{ stroke: '#a9a9a978' }} />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar dataKey="revenue" barSize={activePeriod === "Daily" ? 20 : 120}>
                    {filteredData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={'#14C886'} />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>


        <h2 className="ket-inxTitle">Stats by trading pair</h2><br />
        <div className="single-tabs">
            <button
                onClick={() => handleButtonClick("volume")}
                style={{
                    backgroundColor: apexChart === "volume" ? "#fff" : "#f1f1f1",
                    color: "#000000",
                    border: "none",
                    cursor: "pointer",
                    transition: "background-color 0.3s"
                }}
            >
                Volume
            </button>
            <button
                onClick={() => handleButtonClick("average")}
                style={{
                    backgroundColor: apexChart === "average" ? "#fff" : "#f1f1f1",
                    color: "#000000",
                    border: "none",
                    cursor: "pointer",
                    transition: "background-color 0.3s"
                }}
            >
                Average position size
            </button>
            <button
                onClick={() => handleButtonClick("profit")}
                style={{
                    backgroundColor: apexChart === "profit" ? "#fff" : "#f1f1f1",
                    color: "#000000",
                    border: "none",
                    cursor: "pointer",
                    transition: "background-color 0.3s"
                }}
            >
                Profit
            </button>
        </div>

        <div className="apexChart-container">
            <ReactApexChart options={options} series={series} type="treemap" height={500} />
        </div>

    </>;
};

export default Trades;






