import React, { useState } from "react"; // Import React at the top
import { EyeOutlined, StarOutlined, SearchOutlined } from "@ant-design/icons"; // Consolidated icon imports
import { Link } from "react-router-dom";
// import { v4 as uuidv4 } from "uuid";
import { Input, Tooltip } from "antd"; // Ant Design components
import { useSelector } from "react-redux";
import binance_rounded from "../../assets/ed_khan/binance_rounded.svg"; // Image import
import LineChart from "../../hooks/LineChart"; // Custom hook or component import
import "./styles/style.css"; // Import the CSS file

import { portfolioLang } from "./lang";

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
  ohr,
  active_days,
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
        <p>
          Started at {started}, (${active_days} days, ${ohr.toFixed(2)} OHR)
        </p>
        {/* <p> starter at {active_days}</p> */}
        {/* <button>More</button> */}
      </div>
    </div>
  );
};

const Portfolios = ({
  portFolioData,
  public_portfolios,
  portfolio_chartData,
}) => {
  const lang = useSelector((state) => state.language.currentLanguage);
  // const startDate = new Date(public_portfolios?.started_at)?.toLocaleString({
  //   "uz-UZ": {
  //     month: "nummeric",
  //     day: "numeric",
  //     year: "numeric",
  //   },
  // });
  // const daysElapsed = public_portfolios?.active_days || 0;
  // const occupancyRate = (public_portfolios?.ohr || 0) + "% OHR";
  // const start = `Started at ${startDate} (${daysElapsed} days, ${occupancyRate})`;

  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle search input changes
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const generateUniqueId = (index) => {
    const baseId = public_portfolios[index]?.portfolio_id;
    const tParam = Math.floor(Date.now() / 1000); // using a Unix timestamp
    // const startDate = "2019-12-04";
    // const endDate = "2023-01-28";
    // const step = "hour";
    // const profit = 0;
    // const marginBalance = 0;
    // const balance = 1;

    // return `${baseId}?t=${tParam}&startDate=${startDate}&endDate=${endDate}&step=${step}&profit=${profit}&margin-balance=${marginBalance}&balance=${balance}`;
    return `${baseId}?t=${tParam}`;
  };

  const portfoliosData = public_portfolios?.map((portfolio, index) => ({
    id: generateUniqueId(index),
    title: portfolio?.name,
    returnPercentage: portfolio?.margin_balance?.toFixed(2) || 0,
    drawDown: portfolio?.profit_percent?.toFixed(2) || 0,
    minDeposit: portfolio?.mdd?.toFixed(2) || 0,
    data: portfolio_chartData?.map((i) => i.value) || [], // Correct: 'data' is an array
    tooltipReturn: "Total return percentage achieved",
    tooltipDrawDown: "Maximum drawdown percentage",
    tooltipMinDeposit: "Minimum deposit required",
    tooltipProfit: "Profit in dollars",
    labelReturn: "Margin Balance",
    labelDrawDown: "Profit, All",
    labelMinDeposit: "MDD",
    profit: portfolio?.profit?.toFixed(2) || 0,
    image: binance_rounded, // Correct: 'binance_rounded' is an image
    view: "0",
    started: " " + portfolio.started_at.slice(0, 10), // Correct: 'start' is a string
    result: "0",
    started_at: new Date(portfolio?.started_at),
    active_days: portfolio?.active_days,
    ohr: portfolio?.ohr,
  }));

  // Filter portfolios based on the search query
  const filteredPortfolios = portfoliosData?.filter((portfolio) =>
    portfolio.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="menus-khan-page">
        <h2>{portfolioLang[lang].caption}</h2>
        <div className="overview-container">
          <div className="menus-khan-card">
            <Tooltip title={portfolioLang[lang].income_tooltip}>
              <h3>{portfolioLang[lang].income}</h3>
            </Tooltip>
            {/* <p>${(portFolioData?.total_income / 1000)?.toFixed(2) || 0}K</p> */}
            <p>
              $
              {(portFolioData?.total_income
                ? (portFolioData.total_income / 1000).toFixed(2)
                : 0) + "K"}
            </p>

            <span>{portfolioLang[lang].income_desc}</span>
          </div>
          <div className="menus-khan-card">
            <Tooltip title={portfolioLang[lang].balance_tooltip}>
              <h3>{portfolioLang[lang].balance}</h3>
            </Tooltip>
            {/* <p>${(portFolioData?.total_balance / 1000).toFixed(2) || 0}K</p> */}
            <p>
              $
              {(portFolioData?.total_balance
                ? (portFolioData.total_balance / 1000).toFixed(2)
                : 0) + "K"}
            </p>
            <span>{portfolioLang[lang].balance_desc}</span>
          </div>
          <div className="menus-khan-card">
            <Tooltip title={portfolioLang[lang].volume_tooltip}>
              <h3>{portfolioLang[lang].volume}</h3>
            </Tooltip>
            {/* <p>${(portFolioData?.total_volume / 1000000).toFixed(2) || 0}M</p> */}
            <p>
              {(portFolioData?.total_volume
                ? (portFolioData.total_volume / 1000000).toFixed(2)
                : 0) + "M"}
            </p>
            <span>{portfolioLang[lang].volume_desc}</span>
          </div>
        </div>

        <div className="khan-search">
          <b>{portfolioLang[lang].search}</b>
          <Input
            className="menus-khan-search-bar"
            placeholder={portfolioLang[lang].searchInput}
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
