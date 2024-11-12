import React, { useState, useEffect } from "react";
import { ImStarEmpty } from "react-icons/im";
import { Checkbox, Select, DatePicker, Space, Switch } from "antd";
import { CheckSquareTwoTone } from "@ant-design/icons";
import { RiExpandDiagonalLine } from "react-icons/ri";
import { useParams } from "react-router-dom";
import axios from "../../../api";
import bin from "../../../assets/ed_khan/binance_rounded.svg";
import MyCards from "./myCards/MyCards";
import "./style.css";
import KeyIndicators from "./myCards/KeyIndicators";
import Charts from "./myCards/Charts";
import Investment from "./myCards/Investment";

const { RangePicker } = DatePicker;

const UtopiaOldMultiLine = () => {
  const [isLite, setIsLite] = useState(false);
  const [activeTab, setActiveTab] = useState("main");
  const [selectValue, setSelectValue] = useState("hour");
  const [data, setData] = useState([]);
  const [topLoader, setTopLoader] = useState(false);
  const [chartData, setChartData] = useState({});
  const { id: baseId } = useParams();
  // const location = useLocation();

  // getData
  useEffect(() => {
    setTopLoader(true);
    let API = `/portfolio/main-indicators/?portfolio_id=${baseId}&time_step=${selectValue}`;
    axios
      .get(API)
      .then((res) => {
        setData(res?.data?.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setTopLoader(false));
  }, [selectValue, baseId]);

  // getData for chart
  useEffect(() => {
    let API = `/portfolio/chart/?portfolio_id=${baseId}&time_step=${selectValue}`;
    axios
      .get(API)
      .then((res) => setChartData(res?.data?.data))
      .catch((err) => console.log(err));
  }, [baseId, selectValue]); // re-fetch if baseId or selectValue changes

  // ===============useParams========================
  // const getQueryParams = () => {
  //   const params = new URLSearchParams(location.search);

  //   return {
  //     baseId, // From useParams
  //     t: params.get("t"),
  //     startDate: params.get("startDate"),
  //     endDate: params.get("endDate"),
  //     step: params.get("step"),
  //     profit: params.get("profit"),
  //     marginBalance: params.get("margin-balance"),
  //     balance: params.get("balance"),
  //   };
  // };
  // const queryData = getQueryParams();
  // console.log("queryData", queryData);

  const handleSwitchChange = (checked) => {
    setIsLite(checked);
  };

  const handleCheckboxChange = (key) => {
    setCheckedItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const [isOverlayVisible, setOverlayVisible] = useState(false);
  useEffect(() => {
    if (isOverlayVisible) {
      // Disable scrolling on the body when overlay is visible
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling on the body when overlay is hidden
      document.body.style.overflow = "";
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOverlayVisible]);

  {
    /* ---------------------------8A----------------------------------- */
  }
  const checkboxData = [
    { key: "benchmarkBTC", label: "Benchmark BTC", color: "#FFD700" },
    { key: "return", label: "Return (%)", color: "#FFA500" },
    { key: "realizedReturn", label: "Realized Return", color: "#1E90FF" },
    { key: "marginBalance", label: "Margin Balance", color: "#3CB371" },
    { key: "balance", label: "Balance", color: "#A52A2A" },
    { key: "plByday", label: "P\\L by day", color: "#20B2AA" },
    { key: "profit", label: "Profit ($)", color: "#4B0082" },
    { key: "usedLeverage", label: "Used Leverage", color: "#9370DB" },
    { key: "drawDown", label: "DrawDown", color: "#4169E1" },
    { key: "drawDownDuration", label: "DrawDown Duration", color: "#1E90FF" },
  ];
  const allowedKeys = new Set([
    "benchmarkBTC",
    "return",
    "realizedReturn",
    "drawDown",
    "profit",
  ]);

  {
    /* ---------------------------9A----------------------------------- */
  }
  const [checkedItems, setCheckedItems] = useState({
    benchmarkBTC: true,
    return: true,
    realizedReturn: true,
    marginBalance: true,
    balance: true,
    plByday: true,
    profit: true,
    usedLeverage: true,
    drawDown: true,
    drawDownDuration: true,
  });
  // const currentUrl = window.location.href;
  return (
    <div className="oldMultiLine">
      <div className="oldMultiLine-header">
        <div className="imgSubtitle">
          <img width={30} src={bin} alt="" />
          <h2>{data?.portfolio_name || ""}</h2>
        </div>
        <div className="SubtitleInfo">
          <img width={25} src={data?.user_avatar || bin} alt="" />
          <p>{data?.user_name || ""}</p>
          <p>•</p>
          <p>0 views</p>
          <p>•</p>
          <p>
            {" "}
            0 stars <ImStarEmpty />
          </p>
        </div>
        {/* <p>My copy trading: <a href={currentUrl} target="_blank" rel="noopener noreferrer">{currentUrl}</a> https://example.com</p> */}
      </div>
      <div className="oldMultiLine-main">
        <div className="oldMultiLine-main-head">
          <Space className="RangePicker" direction="vertical" size={12}>
            <RangePicker />
          </Space>
          <div className="oldMultiLine-calendar">
            <Select
              defaultValue="hour"
              style={{
                width: 100,
              }}
              onChange={(value) => setSelectValue(value)}
              options={[
                { value: "hour", label: "Hour" },
                { value: "day", label: "Day" },
                { value: "week", label: "Week" },
              ]}
            />

            <div
              style={{
                color: "#591d87",
                display: "flex",
                alignItems: "center",
                fontSize: "12px",
              }}
            >
              {isLite ? "Lite" : "A little"}
              &nbsp;&nbsp;
              <Switch
                checked={isLite}
                onChange={handleSwitchChange}
                className={isLite ? "switch-checked" : "switch-unchecked"}
              />
            </div>
          </div>
        </div>

        {/* -----------------------7A------------------------- */}
        <h2 className="ket-inxTitle">Key indicators</h2>
        <KeyIndicators topLoader={topLoader} data={data} customKey={isLite} />
        <div
          className="overlayVisible"
          style={{
            position: isOverlayVisible ? "fixed" : "static",
            top: 0,
            left: 0,
            width: "100%",
            height: isOverlayVisible ? "100vh" : "auto",
            backgroundColor: "#ffffff",
            zIndex: isOverlayVisible ? 9 : 0,
            overflow: isOverlayVisible ? "auto" : "hidden",
          }}
        >
          {isOverlayVisible && (
            <div
              style={{ padding: "10px 20px" }}
              className="oldMultiLine-main-head"
            >
              <Space className="RangePicker" direction="vertical" size={12}>
                <RangePicker />
              </Space>
              <div className="oldMultiLine-calendar">
                <Select
                  defaultValue="hour"
                  style={{
                    width: 100,
                  }}
                  onChange={(value) => setSelectValue(value)}
                  options={[
                    { value: "hour", label: "Hour" },
                    { value: "day", label: "Day" },
                    { value: "week", label: "Week" },
                  ]}
                />
                <div
                  style={{
                    color: "#591d87",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "12px",
                  }}
                >
                  {isLite ? "Lite" : "A little"}
                  &nbsp;&nbsp;
                  <Switch
                    checked={isLite}
                    onChange={handleSwitchChange}
                    className={isLite ? "switch-checked" : "switch-unchecked"}
                  />
                  &nbsp;&nbsp; &nbsp;&nbsp;
                  <button
                    className="isOverlayVisible-btn"
                    onClick={() => setOverlayVisible(!isOverlayVisible)}
                  >
                    <RiExpandDiagonalLine />
                  </button>
                </div>
              </div>
            </div>
          )}

          <div
            style={{ padding: `${isOverlayVisible && "10px 20px"}` }}
            className="ket-inxBox"
          >
            <h2>Chart</h2>
            {!isOverlayVisible && (
              <button
                className="isOverlayVisible-btn"
                onClick={() => setOverlayVisible(!isOverlayVisible)}
              >
                <RiExpandDiagonalLine />
              </button>
            )}
          </div>

          <div
            style={{ padding: `${isOverlayVisible && "10px 20px"} ` }}
            className="checkbox-old"
          >
            {checkboxData
              .filter((item) => !isLite || allowedKeys.has(item.key))
              .map(({ key, label, color }) => (
                <div key={key} className="checkbox-oldMain">
                  <Checkbox
                    checked={checkedItems[key]}
                    onChange={() => handleCheckboxChange(key)}
                    style={{ color }}
                    icon={<CheckSquareTwoTone twoToneColor={color} />}
                  />
                  <span style={{ color }}>{label}</span>
                </div>
              ))}
          </div>
          <Charts
            selectValue={selectValue}
            id={baseId}
            chartData={chartData}
            customKey={isLite}
            checkedItems={checkedItems}
            isOverlayVisible={isOverlayVisible}
          />
          {isLite && (
            <div className="single-cards-container">
              <Investment key={isLite} />
            </div>
          )}
        </div>
        {!isLite && (
          <div className="single-container-main">
            <nav className="single-tabs">
              <button
                onClick={() => setActiveTab("main")}
                className={activeTab === "main" ? "active" : ""}
              >
                Main
              </button>
              <button
                onClick={() => setActiveTab("investment")}
                className={activeTab === "investment" ? "active" : ""}
              >
                Investment
              </button>
              <button
                onClick={() => setActiveTab("trades")}
                className={activeTab === "trades" ? "active" : ""}
              >
                Trades
              </button>
            </nav>
            <br />
            {/* Render the CardList component based on the active tab */}
            <MyCards
              id={baseId}
              activeTab={activeTab}
              selectValue={selectValue}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default UtopiaOldMultiLine;
