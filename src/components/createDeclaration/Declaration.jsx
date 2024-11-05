import React, { useEffect, useState } from "react";
import "./Declaration.css";
import { Link } from "react-router-dom";
import { Select } from "antd";
import SelectPortfolio from "./selectPortfolio/SelectPortfolio";

function Declaration() {
  const [percentage, setPercentage] = useState(0);
  const [selectPortfolio, setSelectPortfolio] = useState(false);
  const [declarationName, setDeclarationName] = useState("");
  const [openStaticSelect, setOpenStaticSelect] = useState(false);
  const [openDynamic, setOpenDynamic] = useState(false);
  const [dailyDrowdownLimit, setDailyDrowdownLimit] = useState(false);
  const [maxDrowLimit, setMaxDrowLimit] = useState(false);
  const [declarationDescription, setDeclarationDescription] = useState("");
  const [declarationDescriptionRu, setDeclarationDescriptionRu] = useState("");
  const [tradingPairs, setTradingPairs] = useState("");
  const [tradingPairsRu, setTradingPairsRu] = useState("");
  const [strategyOptimization, setStrategyOptimization] = useState("");
  const [strategyOptimizationRu, setStrategyOptimizationRu] = useState("");
  const [executionSoftware, setExecutionSoftware] = useState("");
  const [executionSoftwareRu, setExecutionSoftwareRu] = useState("");
  const [optimizationSoftware, setOptimizationSoftware] = useState("");
  const [optimizationSoftwareRu, setOptimizationSoftwareRu] = useState("");

  // open progres bar buttons

  const [openInactive, setOpenInactive] = useState(false);
  const [openActivePublish, setOpenActivePublish] = useState(false);

  useEffect(() => {
    declarationName.length ? setPercentage(5) : setPercentage(0);
  }, [declarationName]);

  const options = [
    { label: "BTCUSDT", value: "BTCUSDT" },
    { label: "ETHUSDT", value: "ETHUSDT" },
    { label: "BCHUSDT", value: "BCHUSDT" },
    { label: "XRPUSDT", value: "XRPUSDT" },
    { label: "EOSUSDT", value: "EOSUSDT" },
    { label: "LTCUSDT", value: "LTCUSDT" },
  ];

  const handleChange = (value) => {
    console.error("selected >>", value);
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
              <span>{`(${percentage}% completed)`}</span>
            </div>
            <div className="progress-index-right">
              {percentage === 100 ? (
                <div className="button-container">
                  <button className="publish-active">Publish</button>
                  <div className="hidden-buttons">
                    <span
                      onClick={() => {
                        setOpenActivePublish(!openActivePublish);
                      }}
                    >
                      ...
                    </span>
                    {openActivePublish && (
                      <div className="publish-hidden">Publish</div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="button-container">
                  <button className="publish-uncomplete">Publish</button>
                  <div className="hidden-buttons">
                    <span
                      onClick={() => {
                        setOpenInactive(!openInactive);
                      }}
                    >
                      ...
                    </span>
                    {openInactive && (
                      <div
                        style={{ color: "#d4d6d9" }}
                        className="publish-hidden"
                        onClick={() => {
                          setOpenInactive(!openInactive);
                        }}
                      >
                        Publish
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div
            className="progress-indicator"
            style={{
              background: `linear-gradient(to right, #591d87 ${
                percentage ? percentage : 0
              }%, #e7ebf3 ${percentage ? percentage : 0}% 100%)`,
            }}
          ></div>
        </div>
      </div>
      <form className="new-declaration-form">
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
            onChange={(e) => {
              setDeclarationName(e.target.value);
            }}
          />
          <label htmlFor="declaration-name">{`${declarationName?.length} /40`}</label>
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
            onChange={(e) => {
              setDeclarationDescription(e.target.value);
            }}
          ></textarea>
          <label htmlFor="declaration-description">{`${declarationDescription.length} /500`}</label>
          <p>Русский</p>
          <textarea
            name="declaration-description"
            placeholder="Why investors should follow your strategy"
            maxLength={500}
            onInput={(e) => {
              e.target.style.height = "auto";
              e.target.style.height = `${e.target.scrollHeight}px`;
            }}
            onChange={(e) => {
              setDeclarationDescriptionRu(e.target.value);
            }}
          ></textarea>
          <label htmlFor="declaration-description">{`${declarationDescriptionRu.length} /500`}</label>
        </div>
        <div className="form-item form-buttons">
          <h2>Market Direction</h2>
          <div className="trading-options-buttons market-direction">
            <button>Counter Trend</button>
            <button>Market Neutral</button>
            <button>Trend</button>
            <button>Any Direction</button>
            <button>Other</button>
          </div>
        </div>
        <div className="form-item form-buttons">
          <h2>Management Type</h2>
          <div className="trading-options-buttons manage-type">
            <button>Algo</button>
            <button>Mixed Type</button>
            <button>Hand Trading</button>
            <button>Other</button>
          </div>
        </div>
        <div className="form-item form-buttons">
          <h2>Trading Speed</h2>
          <div className="trading-options-buttons trading-speed">
            <button>HFT</button>
            <button>Scalping</button>
            <button>Short Term</button>
            <button>Mid Term</button>
            <button>Long Term</button>
            <button>Other</button>
          </div>
        </div>
        <div className="form-item form-buttons">
          <h2>Position Type</h2>
          <div className="trading-options-buttons">
            <button>Long</button>
            <button>Short</button>
            <button>Long & Short</button>
          </div>
        </div>
        <div className="form-item form-buttons">
          <h2>Risk Type</h2>
          <div className="trading-options-buttons trading-speed">
            <button>High Risk</button>
            <button>Medium Risk</button>
            <button>Conservative</button>
            <button>Safe</button>
          </div>
        </div>
        <div className="form-item form-buttons">
          <h2>Margin Type</h2>
          <div className="trading-options-buttons trading-speed">
            <button>Cross</button>
            <button>Isolated</button>
            <button>Mixed</button>
          </div>
        </div>
        <div className="form-item form-buttons">
          <h2>Lot Type</h2>
          <div className="trading-options-buttons trading-speed">
            <button>Static</button>
            <button>Dynamic</button>
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
            <input name="minimal-lot" className="minimal-lot" type="number" />
          </div>
        </div>
        <div className="form-item max-deposit">
          <h2>Max Deposit Load</h2>
          <div className="lot-pleaceholder-container">
            <span>%</span>
            <input name="max-deposit" className="max-deposit" type="number" />
          </div>
        </div>
        <div className="form-item form-buttons">
          <h2>Hedge Mode</h2>
          <div className="trading-options-buttons">
            <button>Yes</button>
            <button>No</button>
          </div>
        </div>
        <div className="form-item form-buttons">
          <h2>Margin Mode</h2>
          <div className="trading-options-buttons">
            <button>Single Asset</button>
            <button>Multi Asset</button>
          </div>
        </div>
        <div className="form-item max-deposit">
          <h2>Liquidity Cap</h2>
          <div className="lot-pleaceholder-container">
            <span>$</span>
            <input
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
            <input name="minimal-lot" className="minimal-lot" type="number" />
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
            onChange={handleChange}
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
              onChange={(e) => {
                setTradingPairs(e.target.value);
              }}
            ></textarea>
            <label htmlFor="declaration-description">{`${tradingPairs.length} /500`}</label>
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
              onChange={(e) => {
                setTradingPairsRu(e.target.value);
              }}
            ></textarea>
            <label htmlFor="declaration-description">{`${tradingPairsRu.length} /500`}</label>
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
            <input name="max-drawdown" className="max-deposit" type="number" />
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
            onChange={(e) => {
              setStrategyOptimization(e.target.value);
            }}
          ></textarea>
          <label htmlFor="declaration-description">{`${strategyOptimization.length} /500`}</label>
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
            onChange={(e) => {
              setStrategyOptimizationRu(e.target.value);
            }}
          ></textarea>
          <label htmlFor="declaration-description">{`${strategyOptimizationRu.length} /500`}</label>
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
            onChange={(e) => {
              setExecutionSoftware(e.target.value);
            }}
          ></textarea>
          <label htmlFor="declaration-description">{`${executionSoftware.length} /500`}</label>
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
            onChange={(e) => {
              setExecutionSoftwareRu(e.target.value);
            }}
          ></textarea>
          <label htmlFor="declaration-description">{`${executionSoftwareRu.length} /500`}</label>
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
            onChange={(e) => {
              setOptimizationSoftware(e.target.value);
            }}
          ></textarea>
          <label htmlFor="declaration-description">{`${optimizationSoftware.length} /500`}</label>
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
            onChange={(e) => {
              setOptimizationSoftwareRu(e.target.value);
            }}
          ></textarea>
          <label htmlFor="declaration-description">{`${optimizationSoftwareRu.length} /500`}</label>
        </div>
      </form>
    </div>
  );
}

export default Declaration;
