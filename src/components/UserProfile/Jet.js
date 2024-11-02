import React, { useEffect, useState } from "react";
import { Input, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import binance_rounded from '../../assets/ed_khan/binance_rounded.svg';
import './styles/style.css'; // Import the CSS file

const Jet = ({ data = [100, 100, 85, 75, 75, 10, 30, 100, 100, 85, 75, 75], maxValue = 100, chartHeight = 80 }) => {
    const [chartWidth, setChartWidth] = useState(window.innerWidth < 900 ? '100%' : 580); // Default width

    useEffect(() => {
        const handleResize = () => {
            setChartWidth(window.innerWidth < 900 ? 900 : 580);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Function to generate points for the chart
    const getPoints = (data, chartWidth, maxValue, chartHeight) => {
        return data
            .map((value, index) => {
                const x = (index / (data.length - 1)) * (typeof chartWidth === 'string' ? parseInt(chartWidth) : chartWidth);
                const y = (value / maxValue) * chartHeight; // Y coordinates adjusted
                return `${x},${y}`;
            })
            .join(" ");
    };

    // Define points for the filled area of the chart
    const filledPoints = `0,0 ${getPoints(data, chartWidth, maxValue, chartHeight)} ${typeof chartWidth === 'string' ? parseInt(chartWidth) : chartWidth},0`; // Starts from the top of the chart
    const points = getPoints(data, chartWidth, maxValue, chartHeight);

    return (
        <>
            <div className="menus-khan-page">
                <h2>Overview</h2>
                <div className="overview-container">
                    <div className="menus-khan-card">
                        <Tooltip title="This shows the total assets under management">
                            <h3>TradeLink AUM</h3>
                        </Tooltip>
                        <p>-$8.9</p>
                        <span>Impressive capital!</span>
                    </div>
                    <div className="menus-khan-card">
                        <Tooltip title="Total number of investors">
                            <h3>Total Investors</h3>
                        </Tooltip>
                        <p>$3.13K</p>
                        <span>A lot of investors respect this user!</span>
                    </div>
                </div>
                <div className="khan-search">
                    <b>Public strategies</b>
                    <Input
                        className="menus-khan-search-bar"
                        placeholder="Search by name"
                        prefix={<SearchOutlined />}
                        size="small"
                    />
                </div>
            </div>

            <div className="overview-container">
                <div className="over-card">
                    <div className="jet-header">
                        <div className="over-header">
                            <div className="image-khan-portf">
                                <img src={binance_rounded} alt="Logo" />
                            </div>
                            <div>
                                <h4 className="over-title">Counter Trend Index Lite</h4>
                            </div>
                        </div>

                        <span className="jet-strategies">5 strategies</span>
                    </div>

                    <div className="jet-stats">
                        <div>
                            <p className="jet-value">$3.13K</p>
                            <p className="jet-label">Margin Balance</p>
                        </div>
                        <div>
                            <p className="jet-value">-0.29%</p>
                            <p className="jet-label">Profit, All</p>
                        </div>
                        <div>
                            <p className="jet-value">0.36%</p>
                            <p className="jet-label">MDD</p>
                        </div>
                        <div>
                            <p className="jet-value">-$8.9</p>
                            <p className="jet-label">Profit ($)</p>
                        </div>
                    </div>

                    <svg width={chartWidth} height={chartHeight} className="jet-chart">
                        <polygon points={filledPoints} fill="#f7e5e0" />
                        <polyline points={points} fill="none" stroke="#e57373" strokeWidth="1" />
                    </svg>

                    <div className="jet-footer">
                        <span className="jet-status">Running</span>
                        <button className="jet-moreButton">More</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Jet;
