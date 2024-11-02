import React, { useState } from 'react'; // Import React at the top
import { EyeOutlined, StarOutlined, SearchOutlined } from '@ant-design/icons'; // Consolidated icon imports
import { Input, Tooltip } from 'antd'; // Ant Design components
import binance_rounded from '../../assets/ed_khan/binance_rounded.svg'; // Image import
import LineChart from '../../hooks/LineChart'; // Custom hook or component import
import './style.css'; // CSS import


const PortfolCard = ({ title, returnPercentage, drawDown, minDeposit, data, tooltipReturn, tooltipDrawDown, tooltipMinDeposit, tooltipProfit, labelReturn, labelDrawDown, labelMinDeposit, profit, view, image, started, result }) => {
    return (
        <div className="over-card">
            <div className="over-header">
                <div className="image-khan-portf">
                    <img src={image} alt="Logo" />
                </div>
                <div>
                    <h4 className="over-title">{title}</h4>
                </div>
            </div>

            <div className="over-stats">
                <div>
                    <p className="over-value">{returnPercentage}%</p>
                    <Tooltip title={tooltipReturn}>
                        <p className="over-label">{labelReturn}</p>
                    </Tooltip>
                </div>
                <div>
                    <p className="over-value">{drawDown}%</p>
                    <Tooltip title={tooltipDrawDown}>
                        <p className="over-label">{labelDrawDown}</p>
                    </Tooltip>
                </div>
                <div>
                    <p className="over-value">${minDeposit}</p>
                    <Tooltip title={tooltipMinDeposit}>
                        <p className="over-label">{labelMinDeposit}</p>
                    </Tooltip>
                </div>
                <div>
                    <p className="over-value">${profit}</p>
                    <Tooltip title={tooltipProfit}>
                        <p className="over-label">Profit($)</p>
                    </Tooltip>
                </div>
            </div>

            <LineChart data={data} height={80} />

            <div className="portfol-details">
                <p><EyeOutlined /> {view}</p>
                <p><StarOutlined /> {result}</p>
                <p>{started}</p>
                <button>More</button>
            </div>
        </div>
    );
};

const Portfolios = () => {
    const data = [10, 15, 20, 25, 40, 42, 41, 44, 43, 48, 50, 52, 55, 58, 60, 62, 65, 68, 10, 15, 20, 25, 40, 42, 41, 44, 43, 48, 50, 52, 55, 58, 60, 62, 65, 68];
    const startDate = "12/04/2019";
    const daysElapsed = 1152;
    const occupancyRate = "100% OHR";
    const start = `Started at ${startDate} (${daysElapsed} days, ${occupancyRate})`;

    const [searchQuery, setSearchQuery] = useState("");

    // Function to handle search input changes
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };


    const portfoliosData = [
        {
            title: "Utopia",
            returnPercentage: "205.25",
            drawDown: "39.77",
            minDeposit: "500",
            data: data, // Correct: 'data' is an array
            tooltipReturn: "Total return percentage achieved",
            tooltipDrawDown: "Maximum drawdown percentage",
            tooltipMinDeposit: "Minimum deposit required",
            tooltipProfit: "Profit in dollars",
            labelReturn: "Margin Balance",
            labelDrawDown: "Profit, All",
            labelMinDeposit: "MDD",
            profit: "Profit($)",
            image: binance_rounded, // Correct: 'binance_rounded' is an image
            view: "12332",
            started: start, // Correct: 'start' is a string
            result: "3"
        },
        {
            title: "Utopia",
            returnPercentage: "205.25",
            drawDown: "39.77",
            minDeposit: "500",
            data: data, // Correct: ensure it's the array 'data'
            tooltipReturn: "Total return percentage achieved",
            tooltipDrawDown: "Maximum drawdown percentage",
            tooltipMinDeposit: "Minimum deposit required",
            tooltipProfit: "Profit in dollars",
            labelReturn: "Margin Balance",
            labelDrawDown: "Profit, All",
            labelMinDeposit: "MDD",
            profit: "Profit($)",
            image: binance_rounded, // Correct: using the same image reference
            view: "12332",
            started: start, // Correct: using the same start reference
            result: "3",
        },
        {
            title: "Utopia",
            returnPercentage: "205.25",
            drawDown: "39.77",
            minDeposit: "500",
            data: data, // Correct: 'data' is an array
            tooltipReturn: "Total return percentage achieved",
            tooltipDrawDown: "Maximum drawdown percentage",
            tooltipMinDeposit: "Minimum deposit required",
            tooltipProfit: "Profit in dollars",
            labelReturn: "Margin Balance",
            labelDrawDown: "Profit, All",
            labelMinDeposit: "MDD",
            profit: "Profit($)",
            image: binance_rounded, // Correct: 'binance_rounded' is an image
            view: "12332",
            started: start, // Correct: 'start' is a string
            result: "3"
        },
        {
            title: "Utopia",
            returnPercentage: "205.25",
            drawDown: "39.77",
            minDeposit: "500",
            data: data, // Correct: ensure it's the array 'data'
            tooltipReturn: "Total return percentage achieved",
            tooltipDrawDown: "Maximum drawdown percentage",
            tooltipMinDeposit: "Minimum deposit required",
            tooltipProfit: "Profit in dollars",
            labelReturn: "Margin Balance",
            labelDrawDown: "Profit, All",
            labelMinDeposit: "MDD",
            profit: "Profit($)",
            image: binance_rounded, // Correct: using the same image reference
            view: "12332",
            started: start, // Correct: using the same start reference
            result: "3",
        },
        {
            title: "Utopia",
            returnPercentage: "205.25",
            drawDown: "39.77",
            minDeposit: "500",
            data: data, // Correct: 'data' is an array
            tooltipReturn: "Total return percentage achieved",
            tooltipDrawDown: "Maximum drawdown percentage",
            tooltipMinDeposit: "Minimum deposit required",
            tooltipProfit: "Profit in dollars",
            labelReturn: "Margin Balance",
            labelDrawDown: "Profit, All",
            labelMinDeposit: "MDD",
            profit: "Profit($)",
            image: binance_rounded, // Correct: 'binance_rounded' is an image
            view: "12332",
            started: start, // Correct: 'start' is a string
            result: "3"
        },
        {
            title: "Utopia",
            returnPercentage: "205.25",
            drawDown: "39.77",
            minDeposit: "500",
            data: data, // Correct: ensure it's the array 'data'
            tooltipReturn: "Total return percentage achieved",
            tooltipDrawDown: "Maximum drawdown percentage",
            tooltipMinDeposit: "Minimum deposit required",
            tooltipProfit: "Profit in dollars",
            labelReturn: "Margin Balance",
            labelDrawDown: "Profit, All",
            labelMinDeposit: "MDD",
            profit: "Profit($)",
            image: binance_rounded, // Correct: using the same image reference
            view: "12332",
            started: start, // Correct: using the same start reference
            result: "3",
        },
        {
            title: "Utopia",
            returnPercentage: "205.25",
            drawDown: "39.77",
            minDeposit: "500",
            data: data, // Correct: 'data' is an array
            tooltipReturn: "Total return percentage achieved",
            tooltipDrawDown: "Maximum drawdown percentage",
            tooltipMinDeposit: "Minimum deposit required",
            tooltipProfit: "Profit in dollars",
            labelReturn: "Margin Balance",
            labelDrawDown: "Profit, All",
            labelMinDeposit: "MDD",
            profit: "Profit($)",
            image: binance_rounded, // Correct: 'binance_rounded' is an image
            view: "12332",
            started: start, // Correct: 'start' is a string
            result: "3"
        },
        {
            title: "Utopia",
            returnPercentage: "205.25",
            drawDown: "39.77",
            minDeposit: "500",
            data: data, // Correct: ensure it's the array 'data'
            tooltipReturn: "Total return percentage achieved",
            tooltipDrawDown: "Maximum drawdown percentage",
            tooltipMinDeposit: "Minimum deposit required",
            tooltipProfit: "Profit in dollars",
            labelReturn: "Margin Balance",
            labelDrawDown: "Profit, All",
            labelMinDeposit: "MDD",
            profit: "Profit($)",
            image: binance_rounded, // Correct: using the same image reference
            view: "12332",
            started: start, // Correct: using the same start reference
            result: "3",
        },
        {
            title: "Utopia",
            returnPercentage: "205.25",
            drawDown: "39.77",
            minDeposit: "500",
            data: data, // Correct: 'data' is an array
            tooltipReturn: "Total return percentage achieved",
            tooltipDrawDown: "Maximum drawdown percentage",
            tooltipMinDeposit: "Minimum deposit required",
            tooltipProfit: "Profit in dollars",
            labelReturn: "Margin Balance",
            labelDrawDown: "Profit, All",
            labelMinDeposit: "MDD",
            profit: "Profit($)",
            image: binance_rounded, // Correct: 'binance_rounded' is an image
            view: "12332",
            started: start, // Correct: 'start' is a string
            result: "3"
        },
        {
            title: "Utopia",
            returnPercentage: "205.25",
            drawDown: "39.77",
            minDeposit: "500",
            data: data, // Correct: ensure it's the array 'data'
            tooltipReturn: "Total return percentage achieved",
            tooltipDrawDown: "Maximum drawdown percentage",
            tooltipMinDeposit: "Minimum deposit required",
            tooltipProfit: "Profit in dollars",
            labelReturn: "Margin Balance",
            labelDrawDown: "Profit, All",
            labelMinDeposit: "MDD",
            profit: "Profit($)",
            image: binance_rounded, // Correct: using the same image reference
            view: "12332",
            started: start, // Correct: using the same start reference
            result: "3",
        },
        {
            title: "Utopia",
            returnPercentage: "205.25",
            drawDown: "39.77",
            minDeposit: "500",
            data: data, // Correct: 'data' is an array
            tooltipReturn: "Total return percentage achieved",
            tooltipDrawDown: "Maximum drawdown percentage",
            tooltipMinDeposit: "Minimum deposit required",
            tooltipProfit: "Profit in dollars",
            labelReturn: "Margin Balance",
            labelDrawDown: "Profit, All",
            labelMinDeposit: "MDD",
            profit: "Profit($)",
            image: binance_rounded, // Correct: 'binance_rounded' is an image
            view: "12332",
            started: start, // Correct: 'start' is a string
            result: "3"
        },
        {
            title: "Utopia",
            returnPercentage: "205.25",
            drawDown: "39.77",
            minDeposit: "500",
            data: data, // Correct: ensure it's the array 'data'
            tooltipReturn: "Total return percentage achieved",
            tooltipDrawDown: "Maximum drawdown percentage",
            tooltipMinDeposit: "Minimum deposit required",
            tooltipProfit: "Profit in dollars",
            labelReturn: "Margin Balance",
            labelDrawDown: "Profit, All",
            labelMinDeposit: "MDD",
            profit: "Profit($)",
            image: binance_rounded, // Correct: using the same image reference
            view: "12332",
            started: start, // Correct: using the same start reference
            result: "3",
        },
        {
            title: "Utopia",
            returnPercentage: "205.25",
            drawDown: "39.77",
            minDeposit: "500",
            data: data, // Correct: 'data' is an array
            tooltipReturn: "Total return percentage achieved",
            tooltipDrawDown: "Maximum drawdown percentage",
            tooltipMinDeposit: "Minimum deposit required",
            tooltipProfit: "Profit in dollars",
            labelReturn: "Margin Balance",
            labelDrawDown: "Profit, All",
            labelMinDeposit: "MDD",
            profit: "Profit($)",
            image: binance_rounded, // Correct: 'binance_rounded' is an image
            view: "12332",
            started: start, // Correct: 'start' is a string
            result: "3"
        },
        {
            title: "Utopia",
            returnPercentage: "205.25",
            drawDown: "39.77",
            minDeposit: "500",
            data: data, // Correct: ensure it's the array 'data'
            tooltipReturn: "Total return percentage achieved",
            tooltipDrawDown: "Maximum drawdown percentage",
            tooltipMinDeposit: "Minimum deposit required",
            tooltipProfit: "Profit in dollars",
            labelReturn: "Margin Balance",
            labelDrawDown: "Profit, All",
            labelMinDeposit: "MDD",
            profit: "Profit($)",
            image: binance_rounded, // Correct: using the same image reference
            view: "12332",
            started: start, // Correct: using the same start reference
            result: "3",
        },
    ];


    // Filter portfolios based on the search query
    const filteredPortfolios = portfoliosData.filter(portfolio =>
        portfolio.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <div className="menus-khan-page">
                <h2>Overview</h2>
                <div className="overview-container">
                    <div className="menus-khan-card">
                        <Tooltip title="This shows the total assets under management">
                            <h3>TradeLink AUM</h3>
                        </Tooltip>
                        <p>$34.86K</p>
                        <span>Impressive capital!</span>
                    </div>
                    <div className="menus-khan-card">
                        <Tooltip title="Total number of investors">
                            <h3>Total Investors</h3>
                        </Tooltip>
                        <p>10</p>
                        <span>A lot of investors respect this user!</span>
                    </div>
                    <div className="menus-khan-card">
                        <Tooltip title="Average monthly income percentage">
                            <h3>Average Monthly Income</h3>
                        </Tooltip>
                        <p>3.86%</p>
                        <span>It's sad to think about the loss.</span>
                    </div>
                </div>

                <div className="khan-search">
                    <b>Public strategies</b>
                    <Input
                        className="menus-khan-search-bar"
                        placeholder="Search by name"
                        prefix={<SearchOutlined />}
                        size="small"
                        value={searchQuery}
                        onChange={handleSearchChange} // Update search query on input change
                    />
                </div>
            </div>

            <div className="overview-container">
                {filteredPortfolios?.map((portfolio, index) => (
                    <PortfolCard key={index} {...portfolio} />
                ))}

            </div>
        </>
    );
};

export default Portfolios;


