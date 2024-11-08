import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GrBottomCorner } from "react-icons/gr";
import { Select, Switch, Table } from 'antd';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import { FaCheck } from "react-icons/fa6";
import binance from '../../../assets/ed_khan/binance_rounded.svg';
import avatar from '../../../assets/ed_khan/avatar.png';
import ret from '../../../assets/ed_khan/ret.svg';
import InfoModal from './InfoModal';
import './style.css';

const { Option } = Select;
const Leaderboard = () => {
    const navigate = useNavigate();
    const [isModal, setIsModal] = useState(false);
    // Initialize selectedOption from localStorage or default to "KYT"
    const [selectedOption, setSelectedOption] = useState(() => {
        return localStorage.getItem("selectedOption") || "KYT";
    });
    const modalRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContentType, setModalContentType] = useState("");
    const [filterOption, setFilterOption] = useState('returnAsc'); // default sorting option
    const [showInactive, setShowInactive] = useState(false); // toggle inactive portfolios

    const handleChange = (value) => {
        setFilterOption(value);
    };
    const leaderboardData = {
        Profit: {
            daily: {
                title: "Daily Top", date: "Nov 6", data: [
                    { id: 11, rank: 1, name: 'AlgoMaster', creator: 'AlgoBot', score: 140.52 },
                    { id: 12, rank: 2, name: 'CryptoWizard', creator: 'WizardPro', score: 78.34 },
                    { id: 13, rank: 3, name: 'TrendCatcher', creator: 'TrendBot', score: 67.89 },
                ]
            },
            weekly: {
                title: "Weekly Top", date: "Oct 31 - Nov 7", data: [
                    { id: 14, rank: 1, name: 'ProfitXtreme', creator: 'ExtremeTrades', score: 242.10 },
                    { id: 15, rank: 2, name: 'BTC-Eth-Balancer', creator: 'CryptoGains', score: 198.76 },
                    { id: 16, rank: 3, name: 'Optimus-Trend', creator: 'OptimusFund', score: 100.20 },
                ]
            },
            monthly: {
                title: "Monthly Top", date: "Nov 1 - Nov 30", data: [
                    { id: 17, rank: 1, name: 'BigProfitMax', creator: 'MaxTrader', score: 258.33 },
                    { id: 18, rank: 2, name: 'AutoTradePlus', creator: 'SmartBot', score: 187.65 },
                    { id: 19, rank: 3, name: 'CatchWave', creator: 'WaveRider', score: 160.55 },
                ]
            },
        },
        KYT: {
            monthly: {
                title: "Monthly Top", date: "Oct 8 - Nov 7", data: [
                    { id: 20, rank: 1, name: 'RiskAnalyzer', creator: 'RiskBot', score: 142.68 },
                    { id: 21, rank: 2, name: 'MarketPulse', creator: 'PulseAI', score: 92.50 },
                    { id: 22, rank: 3, name: 'PredictIt', creator: 'InsightAI', score: 75.42 },
                ]
            },
            quarterly: {
                title: "Quarterly Top", date: "Aug 9 - Nov 7", data: [
                    { id: 23, rank: 1, name: 'SafeTrade', creator: 'SafeBots', score: 220.89 },
                    { id: 24, rank: 2, name: 'AnalyzerPro', creator: 'TradeMaster', score: 198.45 },
                    { id: 25, rank: 3, name: 'StableTrade', creator: 'StableBot', score: 110.73 },
                ]
            },
            yearly: {
                title: "Yearly Top", date: "Nov 8 - Nov 7", data: [
                    { id: 26, rank: 1, name: 'PrimeTrade', creator: 'PrimeBots', score: 245.89 },
                    { id: 27, rank: 2, name: 'AlphaGain', creator: 'AlphaTeam', score: 175.63 },
                    { id: 28, rank: 3, name: 'ZenithProfit', creator: 'ZenithBot', score: 158.20 },
                ]
            },
        },
    };
    // Sample data structure (Replace with actual data)
    const portfolios = [
        { id: 1, name: "tradelink monitor binance futer", by: "PosExRozina", score: -44.94, mdd: "100%", return: -100, avgMonthlyProfit: -100, tracking: 704, data: [90, 85, 78, 92, 65, 45, 100, 80, 75, 66, 88, 99] },
        { id: 2, name: "Evge", by: "Evges", score: -61.39, mdd: "100%", return: -100, avgMonthlyProfit: -100, tracking: 1358, data: [80, 75, 65, 70, 50, 60, 100, 90, 88, 72, 85, 95] },
        { id: 3, name: "binaces", by: "lexastav", score: -71.87, mdd: "100%", return: -100, avgMonthlyProfit: -100, tracking: 1746, data: [95, 90, 78, 67, 89, 55, 35, 76, 82, 91, 60, 72] },
        { id: 4, name: "Пппп", by: "Aooaoaaaa", score: -55.07, mdd: "154.22%", return: -100, avgMonthlyProfit: -100, tracking: 501, data: [100, 65, 58, 80, 73, 45, 32, 90, 85, 78, 60, 90] },
        { id: 5, name: "Crypto Analyst", by: "TraderX", score: -49.23, mdd: "130%", return: -85, avgMonthlyProfit: -90, tracking: 839, data: [88, 77, 66, 99, 54, 45, 66, 83, 91, 75, 72, 58] },
        { id: 6, name: "Binance Tracker", by: "CoinMaster", score: -67.50, mdd: "98%", return: -92, avgMonthlyProfit: -93, tracking: 1112, data: [100, 65, 88, 77, 92, 60, 45, 80, 85, 75, 68, 74] },
        { id: 7, name: "Bullish Dreams", by: "TradeKing", score: -63.21, mdd: "102%", return: -94, avgMonthlyProfit: -95, tracking: 634, data: [75, 78, 83, 67, 55, 45, 91, 80, 82, 79, 88, 65] },
        { id: 8, name: "Futures Manager", by: "JohnDoe", score: -50.32, mdd: "150%", return: -78, avgMonthlyProfit: -85, tracking: 920, data: [91, 82, 76, 85, 65, 45, 100, 88, 77, 72, 60, 80] },
        { id: 9, name: "Crypto Guru", by: "Satoshi99", score: -46.78, mdd: "110%", return: -90, avgMonthlyProfit: -88, tracking: 728, data: [100, 99, 85, 70, 65, 42, 60, 75, 88, 95, 82, 77] },
        { id: 10, name: "Binance Beast", by: "AlphaTrader", score: -52.89, mdd: "120%", return: -89, avgMonthlyProfit: -92, tracking: 1083, data: [90, 85, 60, 73, 92, 45, 30, 85, 88, 75, 65, 78] },
        { id: 11, name: "Market Hawk", by: "TradeNinja", score: -53.11, mdd: "125%", return: -80, avgMonthlyProfit: -85, tracking: 887, data: [88, 77, 65, 74, 45, 67, 95, 82, 70, 85, 93, 60] },
        { id: 12, name: "Crypto Champ", by: "BettyBot", score: -60.75, mdd: "90%", return: -95, avgMonthlyProfit: -96, tracking: 1432, data: [100, 95, 78, 67, 54, 42, 75, 85, 92, 60, 72, 80] },
        { id: 13, name: "Risk Manager", by: "RiskyBiz", score: -57.44, mdd: "85%", return: -82, avgMonthlyProfit: -89, tracking: 950, data: [100, 90, 85, 75, 60, 55, 45, 78, 70, 67, 80, 88] },
        { id: 14, name: "Trade Titan", by: "MaxProf", score: -65.66, mdd: "105%", return: -87, avgMonthlyProfit: -90, tracking: 1604, data: [100, 95, 78, 65, 90, 50, 32, 88, 79, 85, 60, 73] },
        { id: 15, name: "Profit Hunter", by: "QuickTrade", score: -48.15, mdd: "99%", return: -88, avgMonthlyProfit: -92, tracking: 1139, data: [92, 85, 78, 67, 55, 60, 80, 90, 70, 88, 77, 65] }
    ];

    const getTimestamp = () => {
        return Math.floor(Date.now() / 1000); // Get current timestamp in seconds
    };

    // Calculate maxValue based on all portfolios' data
    const maxValue = Math.max(...portfolios.flatMap(portfolio => portfolio.data));

    // Function to generate points for the line chart
    const getPoints = (data, chartWidth, maxValue, chartHeight) => {
        return data
            .map((value, index) => {
                const x = (index / (data.length - 1)) * (typeof chartWidth === 'string' ? parseInt(chartWidth) : chartWidth);
                const y = chartHeight - (value / maxValue) * chartHeight; // Adjust Y to start chart from the bottom
                return `${x},${y}`;
            })
            .join(" ");
    };

    // Function to generate points for the filled area of the chart
    const getFilledPoints = (data, chartWidth, maxValue, chartHeight) => {
        const width = typeof chartWidth === 'string' ? parseInt(chartWidth, 10) : chartWidth;
        const points = getPoints(data, chartWidth, maxValue, chartHeight);
        return `0,${chartHeight} ${points} ${width},${chartHeight}`; // Close polygon at the bottom
    };

    // Chart dimensions
    const chartWidth = 150; // Set your desired chart width here
    const chartHeight = 40; // Set your desired chart height here


    // Handle sorting based on filter option
    const sortedPortfolios = [...portfolios].sort((a, b) => {
        switch (filterOption) {
            case 'scoreAsc':
                return a.score - b.score;
            case 'scoreDesc':
                return b.score - a.score;
            case 'returnAsc':
                return a.return - b.return;
            case 'returnDesc':
                return b.return - a.return;
            case 'mddAsc':
                return parseFloat(a.mdd) - parseFloat(b.mdd);
            case 'mddDesc':
                return parseFloat(b.mdd) - parseFloat(a.mdd);
            default:
                return 0;
        }
    });


    const handleOptionClick = (option) => {
        setSelectedOption(option);
        localStorage.setItem("selectedOption", option);
        setIsModal(false);
    };

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setIsModal(false);
        }
    };

    useEffect(() => {
        if (isModal) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isModal]);




    const openModal = (contentType) => {
        setModalContentType(contentType);
        setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);

    const columns = [
        {
            title: 'Rank',
            dataIndex: 'rank',
            key: 'rank',
            align: 'center',
            render: (text, record, index) => {
                let rankStyle = {};

                // Apply different styles for the top 3 ranks
                if (index === 0) {
                    rankStyle = { backgroundColor: '#FFD700' }; // Gold for 1st place
                } else if (index === 1) {
                    rankStyle = { backgroundColor: '#C0C0C0' }; // Silver for 2nd place
                } else if (index === 2) {
                    rankStyle = { backgroundColor: '#CD7F32' }; // Bronze for 3rd place
                }

                return (
                    <div style={rankStyle} className="rank-gold">
                        {index + 1}
                    </div >
                );
            }
        },
        {
            title: 'Portfolio',
            dataIndex: 'portfolio',
            key: 'portfolio',
            render: (_, record) => (
                <div className="row-rating-box">
                    <div className="row-rating-image">
                        <img width={30} src={binance} alt="" preview={false} />
                        <img width={30} className="row-rating-image-avatar" src={avatar} alt="" preview={false} />
                    </div>
                    <div className="row-rating-text">
                        <p className="ret-texOne">{record.name}</p>
                        <p className="ret-texTwo">by {record.by}</p>
                    </div>
                </div>
            ),
        },
        {
            title: 'Score', dataIndex: 'score', key: 'score', align: 'center', render: (_, record) => (
                <p className="ret-texOne">{record.score}</p>
            )
        },
        {
            title: 'MDD', dataIndex: 'mdd', key: 'mdd', align: 'center', render: (_, record) => (
                <p className="ret-texOne">{record.mdd}</p>
            )
        },
        {
            title: 'Return (%)', dataIndex: 'return', key: 'return', align: 'center', render: (_, record) => (
                <p className="ret-texOne">{record.return}</p>
            )
        },
        {
            title: 'Av. Monthly Profit', dataIndex: 'avgMonthlyProfit', key: 'avgMonthlyProfit', align: 'center', render: (_, record) => (
                <p className="ret-texOne">{record.avgMonthlyProfit}</p>
            )
        },
        {
            title: 'Tracking for', dataIndex: 'tracking', key: 'tracking', align: 'center', render: (_, record) => (
                <p className="ret-texOne">{record.tracking}</p>
            )
        },
        {
            title: '', dataIndex: 'tracking', key: 'tracking', align: 'center', render: (_, record) => (
                <div className="chart-table">
                    <svg width={chartWidth} height={chartHeight} className="jet-chart">
                        <polygon points={getFilledPoints(record.data, chartWidth, maxValue, chartHeight)} fill="#f7e5e0" />
                        <polyline points={getPoints(record.data, chartWidth, maxValue, chartHeight)} fill="none" stroke="#e57373" strokeWidth="1" />
                    </svg>
                </div>
            )
        },
    ];

    return (
        <div className="leaderboard-container-box">
            <div className="leaderboard-container">
                <div className="leaderboard-btnd-text">
                    <div className="leaderboard-Link">
                        <h1>Leaderboard by</h1>
                        <h1
                            style={{ cursor: "pointer", color: "#FFB700" }}
                            onClick={() => setIsModal(!isModal)}
                        >
                            {selectedOption} <GrBottomCorner />
                            {isModal && (
                                <div className="leaderboard-modal-smoll" ref={modalRef}>
                                    <button onClick={() => handleOptionClick("KYT")}>
                                        KYT-Know your trader {selectedOption === "KYT" && <FaCheck />}
                                    </button>
                                    <button onClick={() => handleOptionClick("Profit")}>
                                        Profit {selectedOption === "Profit" && <FaCheck />}
                                    </button>
                                </div>
                            )}
                        </h1>
                    </div>
                    <div className="leaderboard-btnd">
                        <button onClick={() => openModal("portfolio")}>
                            How to add your portfolio to the rating?
                        </button>
                        {selectedOption === "KYT" && (
                            <button onClick={() => openModal("score")}>
                                <img src={ret} alt="Info" /> How do we measure the Score?
                            </button>
                        )}
                        <InfoModal isOpen={isModalOpen} onClose={closeModal} contentType={modalContentType} />
                    </div>
                </div>

                <div className="leaderboard-cards">
                    {Object.keys(leaderboardData[selectedOption]).map((key) => {
                        const { title, date, data } = leaderboardData[selectedOption][key];
                        return <LeaderboardCard key={key} title={title} data={data} date={date} />;
                    })}
                </div>
            </div>

            <div className="container-rating">
                <h1>Top Traders Rating</h1>
                <div className="head-rating">
                    <label>
                        <Switch
                            checked={showInactive}
                            onChange={() => setShowInactive(!showInactive)}
                            className={showInactive ? 'switch-checked-ret' : 'switch-unchecked-ret'}
                        />
                        Show non-active
                    </label>

                    {/* Filter select */}
                    <Select
                        value={filterOption}
                        onChange={handleChange}
                        style={{ width: 150 }}
                        popupMatchSelectWidth={false} // Adjust dropdown width if needed
                    >
                        <Option value="scoreAsc">
                            Score <AiFillCaretDown style={{ fontSize: "18px", color: "#555" }} />
                        </Option>
                        <Option value="scoreDesc">
                            Score <AiFillCaretDown style={{ fontSize: "18px", color: "#555" }} />
                        </Option>
                        <Option value="returnAsc">
                            Return (%) <AiFillCaretUp style={{ fontSize: "18px", color: "#555" }} />
                        </Option>
                        <Option value="returnDesc">
                            Return (%) <AiFillCaretDown style={{ fontSize: "18px", color: "#555" }} />
                        </Option>
                        <Option value="mddAsc">
                            MDD <AiFillCaretDown style={{ fontSize: "18px", color: "#555" }} />
                        </Option>
                        <Option value="mddDesc">
                            MDD <AiFillCaretUp style={{ fontSize: "18px", color: "#555" }} />
                        </Option>
                    </Select>
                </div>
                {/* Portfolio Cards */}
                <div className="portfolio-list">
                    <Table
                        columns={columns}
                        dataSource={sortedPortfolios}
                        rowKey="id"
                        pagination={false}
                        scroll={{ x: '100%' }} // For responsive scrolling
                        size="small"
                        onRow={(record) => ({
                            onClick: () => {
                                const timestamp = getTimestamp();
                                navigate(`/portfolio/${record.id}?t=${timestamp}`);
                            },
                        })}
                    />

                </div>
            </div>

        </div>
    );
};

const LeaderboardCard = ({ title, data, date }) => {
    const getRankColor = (rank) => {
        switch (rank) {
            case 1: return '#FBAF3D';
            case 2: return '#C0C8E0';
            case 3: return '#D5B678';
            default: return '#fff';
        }
    };

    return (
        <div className="leaderboard-card">
            <div className="leaderboard-card-box">
                <h2>{title}</h2>
                <p className="leaderboard-date">{date}</p>
            </div>
            <ul>
                {data.map((item) => (
                    <Link to={`/user/${item.id}`} key={item.id}>
                        <li>
                            <div className="leaderboard-rank-box">
                                <span className="leaderboard-rank-icon" style={{ backgroundColor: getRankColor(item.rank) }}>{item.rank}</span>
                                <img width={30} src={binance} alt="No image" />
                                <img className="leaderboard-user-avatar" width={30} src={avatar} alt="User avatar" />
                            </div>
                            <div className="leaderboard-details">
                                <p className="leaderboard-name">{item.name}</p>
                                <p className="leaderboard-creator">by {item.creator}</p>
                            </div>
                            <img src={ret} alt="Ret" />
                            <p className="leaderboard-score">{item.score}</p>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
};

export default Leaderboard;



