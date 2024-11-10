import React, { useState } from "react"; // Import React at the top
import { EyeOutlined, StarOutlined, SearchOutlined } from "@ant-design/icons"; // Consolidated icon imports
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Input, Tooltip } from "antd"; // Ant Design components
import binance_rounded from "../../assets/ed_khan/binance_rounded.svg"; // Image import
import LineChart from "../../hooks/LineChart"; // Custom hook or component import
import "./styles/style.css"; // Import the CSS file

const PortfolCard = ({
  title,
  returnPercentage,
  drawDown,
  minDeposit,
  data,
  tooltipReturn,
  tooltipDrawDown,
  tooltipMinDeposit,
  tooltipProfit,
  labelReturn,
  labelDrawDown,
  labelMinDeposit,
  profit,
  view,
  image,
  started,
  result,
}) => {
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
        <p>
          <EyeOutlined /> {view}
        </p>
        <p>
          <StarOutlined /> {result}
        </p>
        <p>{started}</p>
        <button>More</button>
      </div>
    </div>
  );
};

const Portfolios = ({
  portFolioData,
  public_portfolios,
  portfolio_chartData,
}) => {
  //   const data = [
  //     10, 15, 20, 25, 40, 42, 41, 44, 43, 48, 50, 52, 55, 58, 60, 62, 65, 68, 10,
  //     15, 20, 25, 40, 42, 41, 44, 43, 48, 50, 52, 55, 58, 60, 62, 65, 68,
  //   ];
  //   const startDate = new Date(public_portfolios?.started_at)?.toLocaleString();
  const startDate = new Date(public_portfolios?.started_at).toLocaleDateString(
    "uz-UZ",
    {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    }
  );
  const daysElapsed = public_portfolios?.active_days || 0;
  const occupancyRate = (public_portfolios?.ohr || 0) + "% OHR";
  const start = `Started at ${startDate} (${daysElapsed} days, ${occupancyRate})`;

  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle search input changes
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const generateUniqueId = () => {
    const baseId = uuidv4();
    const tParam = Math.floor(Date.now() / 1000); // using a Unix timestamp
    const startDate = "2019-12-04";
    const endDate = "2023-01-28";
    const step = "hour";
    const profit = 0;
    const marginBalance = 0;
    const balance = 1;

    return `${baseId}?t=${tParam}&startDate=${startDate}&endDate=${endDate}&step=${step}&profit=${profit}&margin-balance=${marginBalance}&balance=${balance}`;
  };
  const portfoliosData = [
    {
      id: generateUniqueId(),
      title: "Utopia",
      returnPercentage: public_portfolios?.margin_balance?.toFixed(2) || 0,
      drawDown: public_portfolios?.profit_percent?.toFixed(2) || 0,
      minDeposit: public_portfolios?.mdd?.toFixed(2) || 0,
      data: portfolio_chartData?.map((i) => i.value) || [], // Correct: 'data' is an array
      tooltipReturn: "Total return percentage achieved",
      tooltipDrawDown: "Maximum drawdown percentage",
      tooltipMinDeposit: "Minimum deposit required",
      tooltipProfit: "Profit in dollars",
      labelReturn: "Margin Balance",
      labelDrawDown: "Profit, All",
      labelMinDeposit: "MDD",
      profit: public_portfolios?.profit?.toFixed(2) || 0,
      image: binance_rounded, // Correct: 'binance_rounded' is an image
      view: "0",
      started: start, // Correct: 'start' is a string
      result: "3",
    },
  ];

  // Filter portfolios based on the search query
  const filteredPortfolios = portfoliosData.filter((portfolio) =>
    portfolio.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="menus-khan-page">
        <h2>Overview</h2>
        <div className="overview-container">
          <div className="menus-khan-card">
            <Tooltip title="This shows the total assets under management">
              <h3>Total Income</h3>
            </Tooltip>
            {/* <p>${(portFolioData?.total_income / 1000)?.toFixed(2) || 0}K</p> */}
            <p>
              $
              {(portFolioData?.total_income
                ? (portFolioData.total_income / 1000).toFixed(2)
                : 0) + "K"}
            </p>

            <span>Luck smiled - it's wonderful!</span>
          </div>
          <div className="menus-khan-card">
            <Tooltip title="Total number of investors">
              <h3>Total Balance</h3>
            </Tooltip>
            {/* <p>${(portFolioData?.total_balance / 1000).toFixed(2) || 0}K</p> */}
            <p>
              $
              {(portFolioData?.total_balance
                ? (portFolioData.total_balance / 1000).toFixed(2)
                : 0) + "K"}
            </p>
            <span>Ed Khan gained $14.94K this week</span>
          </div>
          <div className="menus-khan-card">
            <Tooltip title="Average monthly income percentage">
              <h3>Total Volume</h3>
            </Tooltip>
            {/* <p>${(portFolioData?.total_volume / 1000000).toFixed(2) || 0}M</p> */}
            <p>
              {(portFolioData?.total_volume
                ? (portFolioData.total_volume / 1000000).toFixed(2)
                : 0) + "M"}
            </p>
            <span>Oh wow, this is already a serious number!</span>
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
          <Link key={index} to={`/portfolio/${portfolio.id}`}>
            <PortfolCard key={index} {...portfolio} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Portfolios;
