import React, { useState, useEffect } from "react";
import { ImStarEmpty, ImStarFull } from "react-icons/im";
import { Checkbox, Select, DatePicker, Space, Switch } from "antd";
import { CheckSquareTwoTone } from "@ant-design/icons";
import { RiExpandDiagonalLine } from "react-icons/ri";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import myAxios from "axios";
import { setModalType } from "../../../context/modalType";
// import axios from "../../../api";
import bin from "../../../assets/ed_khan/binance_rounded.svg";
import MyCards from "./myCards/MyCards";
import "./style.css";
import KeyIndicators from "./myCards/KeyIndicators";
import Charts from "./myCards/Charts";
// import Investment from "./myCards/Investment";
import {
  translations,
  checkboxData,
  labels,
  labelsBar,
  drawDown,
  translationsInfo
} from './Lang'

const { RangePicker } = DatePicker;

const UtopiaOldMultiLine = () => {
  const currentLanguage = useSelector((state) => state.language.currentLanguage);
  const t = translations[currentLanguage] || translations.en;


  const dispatch = useDispatch();
  const [isLite, setIsLite] = useState(true);
  const [selectValue, setSelectValue] = useState("day");
  const [data, setData] = useState([]);
  const [topLoader, setTopLoader] = useState(false);
  const { id: baseId } = useParams();
  const [stars, setStars] = useState(0);
  const [isClicked, setIsClicked] = useState(false); // Track icon click state
  const token = localStorage.getItem("access_token");
  // const [loading, setLoading] = useState(false);
  const [isSticky, setIsSticky] = useState(true);
  const location = useLocation();


  const handleClick = () => {
    if (token) {
      // Toggle stars between 1 and 0, and switch icon
      setStars((prevStars) => (prevStars === 0 ? 1 : 0));
      setIsClicked((prevIsClicked) => !prevIsClicked);
    } else {
      dispatch(setModalType("signUp")); // Show sign-up modal if token is missing
    }
  };

  // getData;
  useEffect(() => {
    setTopLoader(true);
    let API = `https://api.kyt.systems/portfolio/main-indicators?portfolio_id=${baseId}&time_step=${selectValue}`;
    myAxios
      .get(API)
      .then((res) => {
        setData(res?.data?.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setTopLoader(false));
  }, [selectValue, baseId]);



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


  const allowedKeys = new Set([
    "benchmarkBTC",
    "return",
    "realizedReturn",
    "drawDown",
    "profit",
  ]);

  /* ---------------------------9A----------------------------------- */

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

  useEffect(() => {
    document.title = data?.user_name || "KYT-know your trader";
  }, [data?.user_name]);

  const placeholders = {
    en: ["Start Day", "End Day"],
    ru: ["Начало", "Конец"], // Russian
    de: ["Startdatum", "Enddatum"], // German
    es: ["Día de inicio", "Día final"] // Spanish
  };

  const translationsCh = {
    en: "Chart",
    ru: "График", // Russian
    de: "Diagramm", // German
    es: "Gráfico" // Spanish
  };

  useEffect(() => {
    if (location.pathname.startsWith("/portfolio/")) {
      setIsSticky(false); // Static qilish
    } else {
      setIsSticky(true); // Sticky qilish
    }
  }, [location.pathname]);
  return (
    <div className="oldMultiLine">
      <div className="oldMultiLine-header">
        <div className="imgSubtitle">
          <img width={30} src={bin} alt="" />
          <h2>{data?.portfolio_name || ""}</h2>
        </div>
        <div className="SubtitleInfo">
          <img src={data?.user_avatar || bin} alt="" />
          <p>{data?.user_name || ""}</p>
          <p>•</p>
          <p>{data?.views || 0} {t.views}</p>
          <p>•</p>
          <p>
            {(data?.stars ?? 0) + stars}{" "}
            {isClicked ? (
              <ImStarFull color="gold" onClick={handleClick} /> // Filled gold icon after click
            ) : (
              <ImStarEmpty color="black" onClick={handleClick} /> // Empty icon before click
            )}
          </p>
        </div>
        {/* <p>My copy trading: <a href={currentUrl} target="_blank" rel="noopener noreferrer">{currentUrl}</a> https://example.com</p> */}
      </div>
      <div className="oldMultiLine-main">
        {
          !isOverlayVisible &&
          <div
            style={{
              position: isSticky ? "static" : "sticky",
              top: 0,
              left: 0,
            }}
            className="oldMultiLine-main-head"
          >
            <Space className="RangePicker" direction="vertical" size={12}>
              <RangePicker placeholder={placeholders[currentLanguage]} />
            </Space>
            <div className="oldMultiLine-calendar">
              <Select
                defaultValue="day"
                style={{
                  width: 100,
                }}
                onChange={(value) => setSelectValue(value)}
                options={[
                  { value: "hour", label: t.hour },
                  { value: "day", label: t.day },
                  { value: "week", label: t.week },
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
                {/* {isLite ? t.lite : t.little}
              &nbsp;&nbsp;
              <Switch
                checked={isLite}
                onChange={handleSwitchChange}
                className={isLite ? "switch-checked" : "switch-unchecked"}
              /> */}
              </div>
            </div>
          </div>
        }
        {/* -----------------------7A------------------------- */}
        <h2 className="ket-inxTitle">{t.kIndicators}</h2>
        <KeyIndicators currentLanguage={currentLanguage} topLoader={topLoader} data={data} customKey={isLite} />
        <div
          className="overlayVisible"
          style={{
            position: isOverlayVisible ? "fixed" : "static",
            top: "65px",
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
                <RangePicker placeholder={placeholders[currentLanguage]} />
              </Space>
              <div className="oldMultiLine-calendar">
                <Select
                  defaultValue="hour"
                  style={{
                    width: 100,
                  }}
                  onChange={(value) => setSelectValue(value)}
                  options={[
                    { value: "hour", label: t.hour },
                    { value: "day", label: t.day },
                    { value: "week", label: t.week },
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
                  {/* {isLite ? t.lite : t.little}
                  &nbsp;&nbsp; */}
                  {/* <Switch
                    checked={isLite}
                    onChange={handleSwitchChange}
                    className={isLite ? "switch-checked" : "switch-unchecked"}
                  /> */}
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
            <h2>{translationsCh[currentLanguage]}</h2>
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
                  <span style={{ color }}>{label[currentLanguage]}</span>
                </div>
              ))}
          </div>
          <Charts currentLanguage={currentLanguage} labels={labels}
            selectValue={selectValue}
            id={baseId}
            // chartData={chartData}
            customKey={isLite}
            checkedItems={checkedItems}
            isOverlayVisible={isOverlayVisible}
            labelsBar={labelsBar}
            drawDown={drawDown}
          // setLoading={setLoading}
          />
          {/* {loading && (
            <div className="single-cards-container">
              <Investment key={loading} />
            </div>
          )} */}
        </div>
        <MyCards
          translationsInfo={translationsInfo}
          currentLanguage={currentLanguage}
          id={baseId}
          selectValue={selectValue}
          t={t}
        />
        {/* )} */}
      </div>
    </div>
  );
};

export default UtopiaOldMultiLine;




