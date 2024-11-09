import React, { useEffect, useState } from "react";
import { Progress, Select } from "antd";
import { Link } from "react-router-dom";
import SelectPortfolio from "./selectPortfolio/SelectPortfolio";
import "./Declaration.css";

function Declaration() {
  const [selectPortfolio, setSelectPortfolio] = useState(false);
  const [openDynamic, setOpenDynamic] = useState(false);
  const [dailyDrowdownLimit, setDailyDrowdownLimit] = useState(false);
  const [maxDrowLimit, setMaxDrowLimit] = useState(false);
  const [openStaticSelect, setOpenStaticSelect] = useState(false);

  const options = [
    { label: "BTCUSDT", value: "BTCUSDT" },
    { label: "ETHUSDT", value: "ETHUSDT" },
    { label: "BCHUSDT", value: "BCHUSDT" },
    { label: "XRPUSDT", value: "XRPUSDT" },
    { label: "EOSUSDT", value: "EOSUSDT" },
    { label: "LTCUSDT", value: "LTCUSDT" },
  ];

  const [inputs, setInputs] = useState({
    name: "",
    description_english: "",
    description_russian: "",
    minimal_lot: 0,
    max_deposit_load: 0,
    minimum_deposit: 0,
    maximum_drawdown: 0,
    maximum_drawdown_limit: 0,
    declaration_description_eng: "",
    declaration_description_rus: "",
    used_trading_pairs: "",
    strategy_rus: "",
    strategy_eng: "",
    execution_rus: "",
    execution_eng: "",
    optimization_rus: "",
    optimization_eng: "",
    market_direction: "",
    management_type: "",
    trading_speed: "",
    position_type: "",
    risk_type: "",
    margin_type: "",
    lot_type: "",
    hedge_mode: "",
    margin_mode: "",
    liquidity_cap: "",
  });

  const [progressPercent, setProgressPercent] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  // Update progress percentage based on filled fields
  useEffect(() => {
    const filledFieldsCount = Object.values(inputs).filter(
      (value) => value !== "" && value !== 0
    ).length;
    // setProgressPercent(filledFieldsCount * 4.5); // Each filled field adds 4.5%
    const progress = Math.min(filledFieldsCount * 4.5, 100); // Cap progress at 100%

    setProgressPercent(progress);
    setIsComplete(progress === 100);
  }, [inputs]);

  // Handle input changes
  const handleInputChange = (field, value) => {
    setInputs((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Submit function
  const handleSubmit = () => {
    const dataToSubmit = { ...inputs };
    console.log("Submitted data:", dataToSubmit);
    // Add server submission logic here
  };




  return (
    <div className="Declaration">
      <div className="declaration-title">
        <h1>
          <Link to={"/dashboard"}>
            <svg
              aria-hidden="true"
              role="img"
              className="h-9 w-auto iconify iconify--ic"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42a.996.996 0 0 0-1.41 0l-6.59 6.59a.996.996 0 0 0 0 1.41l6.59 6.59a.996.996 0 1 0 1.41-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1"
              ></path>
            </svg>
          </Link>
          New declaration
        </h1>
      </div>
      <div className="progres-padding">
        <div className="publish-progress-bar">
          <div className="progress-index">
            <div className="progress-index-left">
              <h4>
                <svg
                  aria-hidden="true"
                  role="img"
                  className="h-6 w-6 iconify iconify--ion"
                  width="1em"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth="32"
                    d="M416 221.25V416a48 48 0 0 1-48 48H144a48 48 0 0 1-48-48V96a48 48 0 0 1 48-48h98.75a32 32 0 0 1 22.62 9.37l141.26 141.26a32 32 0 0 1 9.37 22.62Z"
                  ></path>
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                    d="M256 56v120a32 32 0 0 0 32 32h120m-232 80h160m-160 80h160"
                  ></path>
                </svg>
                Investment declaration
              </h4>
              <span>{`(${Math.floor(progressPercent)}% completed)`}</span>
            </div>
            <button
              className={`publish-btn ${isComplete ? "active" : "disabled"}`}
              onClick={handleSubmit}
              disabled={!isComplete}
            >
              Publish
            </button>
          </div>
          <Progress percent={Math.floor(progressPercent)} strokeColor={progressPercent === 100 ? "#52c41a" : "#591D87"} status={progressPercent === 100 ? "success" : "active"} />
        </div>
      </div>
      <div className="new-declaration-form">
        <div className="form-item">
          <h2>Statistics confirmation</h2>
          <p>Attach your portfolio from TradeLink Passport</p>
          <div
            className="select-portfolio"
            onClick={() => setSelectPortfolio(!selectPortfolio)}
          >
            <span>Select a portfolio</span>
            <SelectPortfolio
              selectPortfolio={selectPortfolio}
              setSelectPortfolio={setSelectPortfolio}
            />
          </div>
        </div>
        <div className="form-item">
          <h2>Start date</h2>
          <p>
            The day you started trading by the current rules of your investment
            declaration
          </p>
          <div className="select-date-cover">
            <button>
              <svg width="1em" height="1em" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22zm0-2h14V10H5zM5 8h14V6H5zm0 0V6z"
                ></path>
              </svg>
            </button>
            <input
              type="text"
              className="select-date"
              placeholder="Select a date"
              disabled
            />
          </div>
        </div>
        <div className="form-item">
          <h2>Name</h2>
          <p>The name of your declaration</p>
          <input
            name="declaration-name"
            className="declaration-name"
            type="text"
            maxLength="40"
            value={inputs.name} onChange={(e) => handleInputChange("name", e.target.value)}
          />
          <label htmlFor="declaration-name">{`40`}</label>
        </div>
        <div className="form-item form-textArea">
          <h2>Description</h2>
          <p>English</p>
          <textarea
            name="declaration-description"
            placeholder="Why investors should follow your strategy"
            maxLength={500}
            onInput={(e) => {
              e.target.style.height = "auto";
              e.target.style.height = `${e.target.scrollHeight}px`;
            }}
            value={inputs.description_english}
            onChange={(e) => handleInputChange("description_english", e.target.value)}
          ></textarea>
          <label htmlFor="declaration-description">{`500`}</label>
          <p>Русский</p>
          <textarea
            name="declaration-description"
            placeholder="Why investors should follow your strategy"
            maxLength={500}
            onInput={(e) => {
              e.target.style.height = "auto";
              e.target.style.height = `${e.target.scrollHeight}px`;
            }}
            value={inputs.description_russian}
            onChange={(e) => handleInputChange("description_russian", e.target.value)}
          ></textarea>
          <label htmlFor="declaration-description">{`500`}</label>
        </div>
        {/* <div className="form-item form-buttons">
          <h2>Market Direction</h2>
          <div className="trading-options-buttons market-direction">
            <button onClick={() => handleInputChange("market_direction", "Counter Trend")}>Counter Trend</button>
            <button onClick={() => handleInputChange("market_direction", "Market Neutral")}>Market Neutral</button>
            <button onClick={() => handleInputChange("market_direction", "Trend")}>Trend</button>
            <button onClick={() => handleInputChange("market_direction", "Any Direction")}>Any Direction</button>
            <button onClick={() => handleInputChange("market_direction", "Other")}>Other</button>
          </div>
        </div>
        <div className="form-item form-buttons">
          <h2>Management Type</h2>
          <div className="trading-options-buttons manage-type">
            <button onClick={() => handleInputChange("management_type", "Algo")}>Algo</button>
            <button onClick={() => handleInputChange("management_type", "Mixed Type")}>Mixed Type</button>
            <button onClick={() => handleInputChange("management_type", "Hand Trading")}>Hand Trading</button>
            <button onClick={() => handleInputChange("management_type", "Other")}>Other</button>
          </div>
        </div>
        <div className="form-item form-buttons">
          <h2>Trading Speed</h2>
          <div className="trading-options-buttons trading-speed">
            <button onClick={() => handleInputChange("trading_speed", "HFT")}>HFT</button>
            <button onClick={() => handleInputChange("trading_speed", "Scalping")}>Scalping</button>
            <button onClick={() => handleInputChange("trading_speed", "Short Term")}>Short Term</button>
            <button onClick={() => handleInputChange("trading_speed", "Mid Term")}>Mid Term</button>
            <button onClick={() => handleInputChange("trading_speed", "Long Term")}>Long Term</button>
            <button onClick={() => handleInputChange("trading_speed", "Other")}>Other</button>
          </div>
        </div>
        <div className="form-item form-buttons">
          <h2>Position Type</h2>
          <div className="trading-options-buttons">
            <button onClick={() => handleInputChange("position_type", "Long")}>Long</button>
            <button onClick={() => handleInputChange("position_type", "Short")}>Short</button>
            <button onClick={() => handleInputChange("position_type", "Long & Short")}>Long & Short</button>
          </div>
        </div>
        <div className="form-item form-buttons">
          <h2>Risk Type</h2>
          <div className="trading-options-buttons trading-speed">
            <button onClick={() => handleInputChange("risk_type", "High Risk")}>High Risk</button>
            <button onClick={() => handleInputChange("risk_type", "Medium Risk")}>Medium Risk</button>
            <button onClick={() => handleInputChange("risk_type", "Conservative")}>Conservative</button>
            <button onClick={() => handleInputChange("risk_type", "Safe")}>Safe</button>
          </div>
        </div>
        <div className="form-item form-buttons">
          <h2>Margin Type</h2>
          <div className="trading-options-buttons trading-speed">
            <button onClick={() => handleInputChange("margin_type", "Cross")}>Cross</button>
            <button onClick={() => handleInputChange("margin_type", "Isolated")}>Isolated</button>
            <button onClick={() => handleInputChange("margin_type", "Mixed")}>Mixed</button>
          </div>
        </div> */}
        <div className="form-item form-buttons">
          <h2>Market Direction</h2>
          <div className="trading-options-buttons market-direction">
            <button
              onClick={() => handleInputChange("market_direction", "Counter Trend")}
              className={inputs.market_direction === "Counter Trend" ? "active" : ""}
            >
              Counter Trend
            </button>
            <button
              onClick={() => handleInputChange("market_direction", "Market Neutral")}
              className={inputs.market_direction === "Market Neutral" ? "active" : ""}
            >
              Market Neutral
            </button>
            <button
              onClick={() => handleInputChange("market_direction", "Trend")}
              className={inputs.market_direction === "Trend" ? "active" : ""}
            >
              Trend
            </button>
            <button
              onClick={() => handleInputChange("market_direction", "Any Direction")}
              className={inputs.market_direction === "Any Direction" ? "active" : ""}
            >
              Any Direction
            </button>
            <button
              onClick={() => handleInputChange("market_direction", "Other")}
              className={inputs.market_direction === "Other" ? "active" : ""}
            >
              Other
            </button>
          </div>
        </div>

        <div className="form-item form-buttons">
          <h2>Management Type</h2>
          <div className="trading-options-buttons manage-type">
            <button
              onClick={() => handleInputChange("management_type", "Algo")}
              className={inputs.management_type === "Algo" ? "active" : ""}
            >
              Algo
            </button>
            <button
              onClick={() => handleInputChange("management_type", "Mixed Type")}
              className={inputs.management_type === "Mixed Type" ? "active" : ""}
            >
              Mixed Type
            </button>
            <button
              onClick={() => handleInputChange("management_type", "Hand Trading")}
              className={inputs.management_type === "Hand Trading" ? "active" : ""}
            >
              Hand Trading
            </button>
            <button
              onClick={() => handleInputChange("management_type", "Other")}
              className={inputs.management_type === "Other" ? "active" : ""}
            >
              Other
            </button>
          </div>
        </div>

        <div className="form-item form-buttons">
          <h2>Trading Speed</h2>
          <div className="trading-options-buttons trading-speed">
            <button
              onClick={() => handleInputChange("trading_speed", "HFT")}
              className={inputs.trading_speed === "HFT" ? "active" : ""}
            >
              HFT
            </button>
            <button
              onClick={() => handleInputChange("trading_speed", "Scalping")}
              className={inputs.trading_speed === "Scalping" ? "active" : ""}
            >
              Scalping
            </button>
            <button
              onClick={() => handleInputChange("trading_speed", "Short Term")}
              className={inputs.trading_speed === "Short Term" ? "active" : ""}
            >
              Short Term
            </button>
            <button
              onClick={() => handleInputChange("trading_speed", "Mid Term")}
              className={inputs.trading_speed === "Mid Term" ? "active" : ""}
            >
              Mid Term
            </button>
            <button
              onClick={() => handleInputChange("trading_speed", "Long Term")}
              className={inputs.trading_speed === "Long Term" ? "active" : ""}
            >
              Long Term
            </button>
            <button
              onClick={() => handleInputChange("trading_speed", "Other")}
              className={inputs.trading_speed === "Other" ? "active" : ""}
            >
              Other
            </button>
          </div>
        </div>

        <div className="form-item form-buttons">
          <h2>Position Type</h2>
          <div className="trading-options-buttons">
            <button
              onClick={() => handleInputChange("position_type", "Long")}
              className={inputs.position_type === "Long" ? "active" : ""}
            >
              Long
            </button>
            <button
              onClick={() => handleInputChange("position_type", "Short")}
              className={inputs.position_type === "Short" ? "active" : ""}
            >
              Short
            </button>
            <button
              onClick={() => handleInputChange("position_type", "Long & Short")}
              className={inputs.position_type === "Long & Short" ? "active" : ""}
            >
              Long & Short
            </button>
          </div>
        </div>

        <div className="form-item form-buttons">
          <h2>Risk Type</h2>
          <div className="trading-options-buttons">
            <button
              onClick={() => handleInputChange("risk_type", "High Risk")}
              className={inputs.risk_type === "High Risk" ? "active" : ""}
            >
              High Risk
            </button>
            <button
              onClick={() => handleInputChange("risk_type", "Medium Risk")}
              className={inputs.risk_type === "Medium Risk" ? "active" : ""}
            >
              Medium Risk
            </button>
            <button
              onClick={() => handleInputChange("risk_type", "Conservative")}
              className={inputs.risk_type === "Conservative" ? "active" : ""}
            >
              Conservative
            </button>
            <button
              onClick={() => handleInputChange("risk_type", "Safe")}
              className={inputs.risk_type === "Safe" ? "active" : ""}
            >
              Safe
            </button>
          </div>
        </div>

        <div className="form-item form-buttons">
          <h2>Margin Type</h2>
          <div className="trading-options-buttons">
            <button
              onClick={() => handleInputChange("margin_type", "Cross")}
              className={inputs.margin_type === "Cross" ? "active" : ""}
            >
              Cross
            </button>
            <button
              onClick={() => handleInputChange("margin_type", "Isolated")}
              className={inputs.margin_type === "Isolated" ? "active" : ""}
            >
              Isolated
            </button>
            <button
              onClick={() => handleInputChange("margin_type", "Mixed")}
              className={inputs.margin_type === "Mixed" ? "active" : ""}
            >
              Mixed
            </button>
          </div>
        </div>
        <div className="form-item form-buttons">
          <h2>Lot Type</h2>
          <div className="trading-options-buttons trading-speed">
            <button onClick={() => handleInputChange("lot_type", "Static")}>Static</button>
            <button onClick={() => handleInputChange("lot_type", "Dynamic")}>Dynamic</button>
          </div>
        </div>
        <div className="form-item">
          <h2>Minimal Lot</h2>
          <p>
            The minimum deposit amount for which the strategy can enter a
            position. For example, if you have a distributed entry position or
            grid, then the minimum lot will be the volume of one order in the
            grid.
          </p>
          <div className="lot-pleaceholder-container">
            <span>%</span>
            <input value={inputs.minimal_lot} onChange={(e) => handleInputChange("minimal_lot", e.target.value)} name="minimal-lot" className="minimal-lot" type="number" />
          </div>
        </div>
        <div className="form-item max-deposit">
          <h2>Max Deposit Load</h2>
          <div className="lot-pleaceholder-container">
            <span>%</span>
            <input value={inputs.max_deposit_load} onChange={(e) => handleInputChange("max_deposit_load", e.target.value)} name="max-deposit" className="max-deposit" type="number" />
          </div>
        </div>
        <div className="form-item form-buttons">
          <h2>Hedge Mode</h2>
          <div className="trading-options-buttons">
            <button onClick={() => handleInputChange("hedge_mode", "Yes")}>Yes</button>
            <button onClick={() => handleInputChange("hedge_mode", "No")}>No</button>
          </div>
        </div>
        <div className="form-item form-buttons">
          <h2>Margin Mode</h2>
          <div className="trading-options-buttons">
            <button onClick={() => handleInputChange("margin_mode", "Single Asset")}>Single Asset</button>
            <button onClick={() => handleInputChange("margin_mode", "Multi Asset")}>Multi Asset</button>
          </div>
        </div>
        <div className="form-item max-deposit">
          <h2>Liquidity Cap</h2>
          <div className="lot-pleaceholder-container">
            <span>$</span>
            <input value={inputs.liquidity_cap} onChange={(e) => handleInputChange("liquidity_cap", e.target.value)}
              name="liquidity-cap"
              className="max-deposit liquidity-cap"
              type="number"
            />
          </div>
        </div>
        <div className="form-item">
          <h2>Minimum deposit</h2>
          <p>
            Minimum deposit for the strategy to work correctly at the settings
            specified in the current declaration
          </p>
          <div className="lot-pleaceholder-container">
            <span>$</span>
            <input value={inputs.minimum_deposit} onChange={(e) => handleInputChange("minimum_deposit", e.target.value)} name="minimal-lot" className="minimal-lot" type="number" />
          </div>
        </div>
        <div className="form-item form-buttons">
          <h2>Used Trading Pairs</h2>
          <div className="trading-options-buttons">
            <button
              onClick={() => {
                setOpenStaticSelect(true);
                setOpenDynamic(false);
              }}
            >
              Static
            </button>
            <button
              onClick={() => {
                setOpenDynamic(true);
                setOpenStaticSelect(false);
              }}
            >
              Dynamic
            </button>
          </div>
          <Select
            style={{ display: openStaticSelect ? "block" : "none" }}
            className="static-trading-options"
            mode="multiple"
            allowClear
            placeholder="Select trading pairs"
            value={inputs.used_trading_pairs}
            onChange={(value) => handleInputChange("used_trading_pairs", value)}
            options={options}
          />
          <div
            style={{ display: openDynamic ? "block" : "none" }}
            className="form-item form-textArea"
          >
            <p>English</p>
            <textarea
              name="declaration-description"
              id=""
              placeholder="Why investors should follow your strategy"
              maxLength={500}
              onInput={(e) => {
                e.target.style.height = "auto";
                e.target.style.height = `${e.target.scrollHeight}px`;
              }}
              value={inputs.declaration_description_eng} onChange={(e) => handleInputChange("declaration_description_eng", e.target.value)}
            ></textarea>
            <label htmlFor="declaration-description">{`500`}</label>
            <p>Русский</p>
            <textarea
              name="declaration-description"
              id=""
              placeholder="Why investors should follow your strategy"
              maxLength={500}
              onInput={(e) => {
                e.target.style.height = "auto";
                e.target.style.height = `${e.target.scrollHeight}px`;
              }}
              value={inputs.declaration_description_rus} onChange={(e) => handleInputChange("declaration_description_rus", e.target.value)}
            ></textarea>
            <label htmlFor="declaration-description">{`500`}</label>
          </div>
        </div>
        <div className="form-item form-buttons">
          <h2>Is there a limit to the maximum possible drawdown per day?</h2>
          <div className="trading-options-buttons">
            <button
              onClick={() => {
                setDailyDrowdownLimit(true);
              }}
            >
              Yes
            </button>
            <button
              onClick={() => {
                setDailyDrowdownLimit(false);
              }}
            >
              No
            </button>
          </div>
        </div>
        <div
          className="form-item max-deposit"
          style={{ display: dailyDrowdownLimit ? "block" : "none" }}
        >
          <h2>Maximum drawdown limit per day</h2>
          <div className="lot-pleaceholder-container">
            <span>$</span>
            <input
              name="max-drawdown-limit"
              className="max-deposit max-drawdown-limit"
              type="number"
              value={inputs.maximum_drawdown} onChange={(e) => handleInputChange("maximum_drawdown", e.target.value)}
            />
          </div>
        </div>
        <div className="form-item form-buttons">
          <h2>Is there a maximum drawdown limit?</h2>
          <div className="trading-options-buttons">
            <button
              onClick={() => {
                setMaxDrowLimit(true);
              }}
            >
              Yes
            </button>
            <button
              onClick={() => {
                setMaxDrowLimit(false);
              }}
            >
              No
            </button>
          </div>
        </div>
        <div
          style={{ display: maxDrowLimit ? "block" : "none" }}
          className="form-item max-deposit"
        >
          <h2>Maximum drawdown limit</h2>
          <div className="lot-pleaceholder-container">
            <span>$</span>
            <input value={inputs.maximum_drawdown_limit} onChange={(e) => handleInputChange("maximum_drawdown_limit", e.target.value)} name="max-drawdown" className="max-deposit" type="number" />
          </div>
        </div>
        <div className="form-item form-textArea">
          <h2>Strategy Optimization</h2>
          <p>English</p>
          <textarea
            name="declaration-description"
            id=""
            placeholder="Why investors should follow your strategy"
            maxLength={500}
            onInput={(e) => {
              e.target.style.height = "auto";
              e.target.style.height = `${e.target.scrollHeight}px`;
            }}
            value={inputs.strategy_eng} onChange={(e) => handleInputChange("strategy_eng", e.target.value)}
          ></textarea>
          <label htmlFor="declaration-description">{`500`}</label>
          <p>Русский</p>
          <textarea
            name="declaration-description"
            id=""
            placeholder="Why investors should follow your strategy"
            maxLength={500}
            onInput={(e) => {
              e.target.style.height = "auto";
              e.target.style.height = `${e.target.scrollHeight}px`;
            }}
            value={inputs.strategy_rus} onChange={(e) => handleInputChange("strategy_rus", e.target.value)}

          ></textarea>
          <label htmlFor="declaration-description">{`500`}</label>
        </div>
        <div className="form-item form-textArea">
          <h2>Execution Software</h2>
          <p>English</p>
          <textarea
            name="declaration-description"
            id=""
            placeholder="Why investors should follow your strategy"
            maxLength={500}
            onInput={(e) => {
              e.target.style.height = "auto";
              e.target.style.height = `${e.target.scrollHeight}px`;
            }}
            value={inputs.execution_eng} onChange={(e) => handleInputChange("execution_eng", e.target.value)}
          ></textarea>
          <label htmlFor="declaration-description">{`500`}</label>
          <p>Русский</p>
          <textarea
            name="declaration-description"
            id=""
            placeholder="Why investors should follow your strategy"
            maxLength={500}
            onInput={(e) => {
              e.target.style.height = "auto";
              e.target.style.height = `${e.target.scrollHeight}px`;
            }}
            value={inputs.execution_rus} onChange={(e) => handleInputChange("execution_rus", e.target.value)}
          ></textarea>
          <label htmlFor="declaration-description">{`500`}</label>
        </div>
        <div className="form-item form-textArea">
          <h2>Optimization Software</h2>
          <p>English</p>
          <textarea
            name="declaration-description"
            id=""
            placeholder="Why investors should follow your strategy"
            maxLength={500}
            onInput={(e) => {
              e.target.style.height = "auto";
              e.target.style.height = `${e.target.scrollHeight}px`;
            }}
            value={inputs.optimization_eng} onChange={(e) => handleInputChange("optimization_eng", e.target.value)}
          ></textarea>
          <label htmlFor="declaration-description">{`500`}</label>
          <p>Русский</p>
          <textarea
            name="declaration-description"
            id=""
            placeholder="Why investors should follow your strategy"
            maxLength={500}
            onInput={(e) => {
              e.target.style.height = "auto";
              e.target.style.height = `${e.target.scrollHeight}px`;
            }}
            value={inputs.optimization_rus} onChange={(e) => handleInputChange("optimization_rus", e.target.value)}
          ></textarea>
          <label htmlFor="declaration-description">{`500`}</label>
        </div>
      </div>
    </div>
  );
}

export default Declaration;
