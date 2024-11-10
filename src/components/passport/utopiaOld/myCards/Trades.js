import React, { useState } from 'react';
import { AiOutlineQuestionCircle } from "react-icons/ai";
import ReactApexChart from 'react-apexcharts';
import { Tooltip, Skeleton } from 'antd';
import './style.css';
import Distribution from './Distribution';

const Trades = ({ data }) => {
    const datas = {
        trades: [
            {
                title: "Orders by types",
                tooltip: "This section shows the distribution of trades based on the order type, such as limit orders, market orders, and total trades.",
                items: [
                    {
                        label: "Limit orders",
                        value: `${data?.trades_stats?.orders_by_types?.limit_orders.toLocaleString() || 0}`,
                        originalValue: data?.trades_stats?.orders_by_types?.limit_orders || 0,
                        tooltip: "Number of limit orders placed by traders. A limit order is an order to buy or sell at a specific price or better.",
                    },
                    {
                        label: "Market orders",
                        value: `${data?.trades_stats?.orders_by_types?.market_orders.toLocaleString() || 0}`,
                        originalValue: data?.trades_stats?.orders_by_types?.market_orders || 0,
                        tooltip: "Number of market orders executed by traders. A market order is an order to buy or sell immediately at the best available price.",
                    },
                    {
                        label: "Total trades",
                        value: `${data?.trades_stats?.orders_by_types?.total_trades.toLocaleString() || 0}`,
                        originalValue: data?.trades_stats?.orders_by_types?.total_trades || 0,
                        tooltip: "Total number of trades executed during the period. This is the sum of all limit and market orders.",
                    },
                ],
            },
            {
                title: "Orders by side",
                tooltip: "This section shows the distribution of trades based on the side of the order, either long (buy) or short (sell).",
                items: [
                    {
                        label: "Long orders",
                        value: `${data?.trades_stats?.orders_by_side?.long_orders || 0}`,
                        originalValue: data?.trades_stats?.orders_by_side?.long_orders || 0,
                        tooltip: "Number of long orders, where the trader is betting that the price of an asset will rise.",
                    },
                    {
                        label: "Short orders",
                        value: `${data?.trades_stats?.orders_by_side?.short_orders || 0}`,
                        originalValue: data?.trades_stats?.orders_by_side?.short_orders || 0,
                        tooltip: "Number of short orders, where the trader is betting that the price of an asset will fall.",
                    },
                    {
                        label: "Ratio",
                        value: `${data?.trades_stats?.orders_by_side?.ratio.toFixed(2) || 0}`,
                        originalValue: data?.trades_stats?.orders_by_side?.ratio || 0,
                        tooltip: "The ratio of long orders to short orders. A higher ratio indicates more optimism about the market's upward movement.",
                    },
                ],
            },
            {
                title: "Orders size info",
                tooltip: "This section provides information about the size of orders, including the maximum, minimum, and average order sizes.",
                items: [
                    {
                        label: "Maximum",
                        value: `${data?.trades_stats?.orders_size_info?.maximum.toLocaleString() || 0}`,
                        originalValue: data?.trades_stats?.orders_size_info?.maximum || 0,
                        tooltip: "The maximum size of a single order executed during the period. This indicates the largest trade made by a trader.",
                    },
                    {
                        label: "Average",
                        value: `${data?.trades_stats?.orders_size_info?.average.toFixed(2) || 0}`,
                        originalValue: data?.trades_stats?.orders_size_info?.average,
                        tooltip: "The average size of orders placed. This helps gauge the typical trade size in the market during the period.",
                    },
                    {
                        label: "Minimum",
                        value: `${data?.trades_stats?.orders_size_info?.minimum.toFixed(2) || 0}`,
                        originalValue: data?.trades_stats?.orders_size_info?.minimum || 0,
                        tooltip: "The minimum size of a single order executed during the period. This indicates the smallest trade made by a trader.",
                    },
                ],
            },
        ],
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
            align: 'center',
        },
        colors: [
            "#d1565b", "#63c89a", "#9e7fb5", "#d2c874", "#df79ad",
            "#55c2c5", "#97d69b", "#9ad7d8", "#dc8a70", "#d485b2", "#bccf7d",
        ],
        plotOptions: {
            treemap: {
                distributed: true,
                enableShades: true,
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
    // const [series, setSeries] = useState([
    //     {
    //         data: mapStatsToChartData(data?.stats_by_trading_pair?.symbols, chartType)
    //     }
    // ]);
    const [series, setSeries] = useState([
        {
            data: mapStatsToChartData(data?.stats_by_trading_pair?.symbols || [], chartType)
        }
    ]);

    // const handleButtonClick = (type) => {
    //     setChartType(type);
    //     setSeries([{ data: mapStatsToChartData(data?.stats_by_trading_pair?.symbols, type) }]);
    // };
    const handleButtonClick = (type) => {
        setChartType(type);
        setSeries([{ data: mapStatsToChartData(data?.stats_by_trading_pair?.symbols || [], type) }]);
    };
    return <>
        <div className="trades-cont">
            {
                data && Object.keys(data).length > 0 ? (
                    datas?.trades?.map((section, inx) => (
                        <div className="single-card" key={inx}>
                            <h3>
                                <Tooltip title={`${section?.tooltip}`}>
                                    <span>{section?.title} <AiOutlineQuestionCircle /></span>
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
                ) : (
                    datas?.trades?.map((card, index) => (
                        <div key={index} className="single-card">
                            <h3>
                                <Skeleton.Input style={{ width: 180 }} active loading={true} />
                            </h3>
                            <ul>
                                <Skeleton active paragraph={{ rows: 1 }} />
                            </ul>
                        </div>
                    ))
                )
            }

        </div>

        <Distribution data={data?.distribution_of_orders_by_amount} />

        <h2 className="ket-inxTitle">Stats by trading pair</h2><br />
        <div className="single-tabs">
            <button
                onClick={() => handleButtonClick("volume")}
                style={{
                    backgroundColor: chartType === "volume" ? "#fff" : "#f1f1f1",
                    color: "#000000",
                    border: "none",
                    cursor: "pointer",
                    transition: "background-color 0.3s"
                }}
            >
                Volume
            </button>
            <button
                onClick={() => handleButtonClick("average_qty")}
                style={{
                    backgroundColor: chartType === "average" ? "#fff" : "#f1f1f1",
                    color: "#000000",
                    border: "none",
                    cursor: "pointer",
                    transition: "background-color 0.3s"
                }}
            >
                Average position size
            </button>
            <button
                onClick={() => handleButtonClick("pnl")}
                style={{
                    backgroundColor: chartType === "profit" ? "#fff" : "#f1f1f1",
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

    </>
};

export default Trades;


