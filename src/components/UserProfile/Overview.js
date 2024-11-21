import React, { useState } from "react"; // Import React at the top
import { Input, Tooltip } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LineChart from "../../hooks/LineChart";
import ed_khan from "../../assets/ed_khan/Ed_Khan.png";
import binance_rounded from "../../assets/ed_khan/binance_rounded.svg";
import "./styles/style.css"; // Import the CSS file

const OverviewCard = ({
  title,
  subtitle,
  returnPercentage,
  drawDown,
  minDeposit,
  successFee,
  leverage,
  age,
  data,
  tooltipReturn,
  tooltipDrawDown,
  tooltipMinDeposit,
  tooltipSuccessFee,
  tooltipLeverage,
  tooltipAge,
  image,
}) => {
  const currentLanguage = useSelector((state) => state.language.currentLanguage);
  return (
    <div className="over-card">
      <div className="over-header">
        <div className="image-khan-user">
          <img src={image} alt="Logo" />
          <img src={binance_rounded} alt="Logo" className="use-binance" />
        </div>
        <div>
          <h4 className="over-title">{title}</h4>
          <span>
            by <p className="over-subtitle"> {subtitle}</p>
          </span>
        </div>
      </div>

      <div className="over-stats">
        <div>
          <p className="over-value">{returnPercentage}%</p>
          <Tooltip title={tooltipReturn}>
            <p className="over-label">Return (%)</p>
          </Tooltip>
        </div>
        <div>
          <p className="over-value">{drawDown}%</p>
          <Tooltip title={tooltipDrawDown}>
            <p className="over-label">DrawDown</p>
          </Tooltip>
        </div>
        <div>
          <p className="over-value">${minDeposit}</p>
          <Tooltip title={tooltipMinDeposit}>
            <p className="over-label">Min. Deposit</p>
          </Tooltip>
        </div>
      </div>

      <LineChart data={data} />

      <div className="over-tags">
        <span
          className="over-tag"
          style={{ backgroundColor: "#5ad60d19", color: "#5ad60d" }}
        >
          Trend
        </span>
        <span
          className="over-tag"
          style={{ backgroundColor: "#2da6ae19", color: "#2da6ae" }}
        >
          Mid Term
        </span>
        <span
          className="over-tag"
          style={{ backgroundColor: "#399cf719", color: "#399cf7" }}
        >
          Algo
        </span>
        <span
          className="over-tag"
          style={{ backgroundColor: "#deae3e19", color: "#deae3e" }}
        >
          Long & Short
        </span>
        <span
          className="over-tag"
          style={{ backgroundColor: "#ff964219", color: "#ff9642" }}
        >
          Medium Risk
        </span>
      </div>

      <div className="over-details">
        <span>
          <Tooltip title={tooltipSuccessFee}>
            <p>Success Fee</p>
          </Tooltip>
          <strong>{successFee}%</strong>
        </span>
        <span>
          <Tooltip title={tooltipLeverage}>
            <p>Av. Leverage</p>
          </Tooltip>
          <strong>{leverage}</strong>
        </span>
        <span>
          <Tooltip title={tooltipAge}>
            <p>Age</p>
          </Tooltip>
          <strong>{age} days</strong>
        </span>
      </div>
    </div>
  );
};

const Overview = () => {
  const data = [
    10, 15, 20, 25, 40, 42, 41, 44, 43, 48, 40, 42, 41, 44, 43, 48, 50, 52, 50,
    55, 58, 60, 62, 65, 68, 50, 52, 50, 55, 58, 60, 62, 65, 68, 40, 42, 41, 44,
    43, 48, 50, 52, 50, 55, 58, 60, 62, 65, 68, 40, 40, 42, 41, 44, 43, 48, 50,
    52, 50, 55, 58, 60, 62, 65, 68, 42, 41, 44, 43, 48, 50, 52, 50, 55, 58, 60,
    62, 65, 68, 22, 30, 35, 32, 38, 37, 40, 42, 41, 44, 43, 48, 50, 52, 50, 55,
    58, 60, 62, 65, 68,
  ];
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle search input changes
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const portfoliosData = [
    {
      title: "Utopia",
      subtitle: "Azimjon dev",
      returnPercentage: "00.00",
      drawDown: "00.0",
      minDeposit: "00.0",
      successFee: "0.00",
      leverage: "0.00",
      age: "0",
      data: data,
      tooltipReturn: "Total return percentage achieved",
      tooltipDrawDown: "Maximum drawdown percentage",
      tooltipMinDeposit: "Minimum deposit required",
      tooltipSuccessFee: "The percentage fee for successful trades",
      tooltipLeverage: "Average leverage used in trades",
      tooltipAge: "Account age in days",
      image: ed_khan,
    },
    {
      title: "Multi_Knife",
      subtitle: "Azimjon dev",
      returnPercentage: "00",
      drawDown: "00",
      minDeposit: "00",
      successFee: "00",
      leverage: "0.00",
      age: "0",
      data: data,
      tooltipReturn: "Total return percentage achieved",
      tooltipDrawDown: "Maximum drawdown percentage",
      tooltipMinDeposit: "Minimum deposit required",
      tooltipSuccessFee: "The percentage fee for successful trades",
      tooltipLeverage: "Average leverage used in trades",
      tooltipAge: "Account age in days",
      image: ed_khan,
    },
    {
      title: "Edan",
      subtitle: "Azimjon dev",
      returnPercentage: "00",
      drawDown: "00",
      minDeposit: "00",
      successFee: "00",
      leverage: "0.00",
      age: "00",
      data: data,
      tooltipReturn: "Total return percentage achieved",
      tooltipDrawDown: "Maximum drawdown percentage",
      tooltipMinDeposit: "Minimum deposit required",
      tooltipSuccessFee: "The percentage fee for successful trades",
      tooltipLeverage: "Average leverage used in trades",
      tooltipAge: "Account age in days",
      image: ed_khan,
    },
  ];

  // Filter portfolios based on the search query
  const filteredPortfolios = portfoliosData.filter((portfolio) =>
    portfolio.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <>{false ?
      <>
        <div className="menus-khan-page">
          <h2>Overview</h2>
          <div className="overview-container">
            <div className="menus-khan-card">
              <Tooltip title="This shows the total assets under management">
                <h3>KYT AUM</h3>
              </Tooltip>
              <p>$00.00K</p>
              <span>Impressive capital!</span>
            </div>
            <div className="menus-khan-card">
              <Tooltip title="Total number of investors">
                <h3>Total Investors</h3>
              </Tooltip>
              <p>0</p>
              <span>A lot of investors respect this user!</span>
            </div>
            <div className="menus-khan-card">
              <Tooltip title="Average monthly income percentage">
                <h3>Average Monthly Income</h3>
              </Tooltip>
              <p>0.00%</p>
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
            <OverviewCard key={index} {...portfolio} />
          ))}
        </div>
      </>
      :
      <p className="user-menus">You don't have a public portfolio yet. You can either create one or choose to make an existing portfolio public in the <Link style={{ textDecoration: "underline", color: "#000" }} to="/passport/dashboard">dashboard.</Link> </p>

    }
    </>
  );
};

export default Overview;




