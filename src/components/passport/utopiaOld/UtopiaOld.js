// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import { ImStarEmpty, ImStarFull } from "react-icons/im";
import { Checkbox, Select, DatePicker, Space } from "antd";
import { CheckSquareTwoTone } from "@ant-design/icons";
import { RiExpandDiagonalLine } from "react-icons/ri";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import myAxios from "axios";
import { setModalType } from "../../../context/modalType";
import bin from "../../../assets/ed_khan/binance_rounded.svg";
import "./style.css";
import KeyIndicators from "./myCards/KeyIndicators";
import Charts from "./myCards/Charts";
import Investment from "./myCards/Investment";
import {
  translations,
  checkboxData,
  labels,
  labelsBar,
  drawDown,
} from "./Lang";

const { RangePicker } = DatePicker;

const UtopiaOldMultiLine = () => {
  const currentLanguage = useSelector(
    (state) => state.language.currentLanguage
  );
  const t = translations[currentLanguage] || translations.en;

  const dispatch = useDispatch();
  const [selectValue, setSelectValue] = useState("day");
  const [data, setData] = useState([]);
  const [topLoader, setTopLoader] = useState(false);
  const [isLite] = useState(true);
  const { id: baseId } = useParams();
  const [stars, setStars] = useState(0);
  const [isClicked, setIsClicked] = useState(false); // Track icon click state
  const token = localStorage.getItem("access_token");
  const [loading] = useState(false);

  const handleClick = () => {
    if (token) {
      // Toggle stars between 1 and 0, and switch icon
      setStars((prevStars) => (prevStars === 0 ? 1 : 0));
      setIsClicked((prevIsClicked) => !prevIsClicked);
    } else {
      dispatch(setModalType("signUp")); // Show sign-up modal if token is missing
    }
  };

  useEffect(() => {
    setTopLoader(true);
    const API = `https://api.kyt.systems/portfolio/main-indicators?portfolio_id=${baseId}&time_step=${selectValue}`;
    const fetchData = async () => {
      try {
        const res = await myAxios.get(API);
        setData(res?.data?.data);
      } catch (err) {
        console.log(err);
      } finally {
        setTopLoader(false);
      }
    };
    fetchData();
  }, [selectValue, baseId]);

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
    "marginBalance",
    "profit",
  ]);

  /* ---------------------------9A----------------------------------- */

  const [checkedItems, setCheckedItems] = useState({
    benchmarkBTC: true,
    return: true,
    marginBalance: true,
    profit: true,
  });

  useEffect(() => {
    document.title = data?.user_name || "KYT";
  }, [data?.user_name]);

  const placeholders = {
    en: ["Start Day", "End Day"],
    ru: ["Начало", "Конец"], // Russian
    de: ["Startdatum", "Enddatum"], // German
    es: ["Día de inicio", "Día final"], // Spanish
  };

  const translationsCh = {
    en: "Chart",
    ru: "График", // Russian
    de: "Diagramm", // German
    es: "Gráfico", // Spanish
  };

  return (
    <div className="oldMultiLine">
      <div className="oldMultiLine-header">
        <div className="oldMultiLine-header_media">
          <div className="imgSubtitle">
            <img width={30} src={bin} alt="" />
            <h2>{data?.portfolio_name || ""}</h2>
          </div>
          <div className="SubtitleInfo">
            <img src={data?.user_avatar || bin} alt="" />
            <Link to={`/user/${data.user_id}`}>{data?.user_name || ""}</Link>
            <p>•</p>
            <p>
              {data?.views || 0} {t.views}
            </p>
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
        </div>
      </div>

      <div className="oldMultiLine-main">
        <div className="oldMultiLine-main-media">
          {!isOverlayVisible && (
            <div className="oldMultiLine-main-head">
              <Space className="RangePicker" direction="vertical" size={12}>
                <RangePicker placeholder={placeholders[currentLanguage]} />
              </Space>
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
            </div>
          )}
          {/* -----------------------7A------------------------- */}
          <h2 className="ket-inxTitle">{t.kIndicators}</h2>
          <KeyIndicators
            currentLanguage={currentLanguage}
            topLoader={topLoader}
            data={data}
            customKey={isLite}
          />

          <div
            className="overlayVisible"
            style={{
              position: isOverlayVisible ? "fixed" : "static",
              top: 0,
              left: 0,
              width: "100%",
              height: isOverlayVisible ? "100vh" : "auto",
              backgroundColor: "#ffffff",
              zIndex: isOverlayVisible ? 999 : 0,
              overflow: isOverlayVisible ? "auto" : "hidden",
              padding: isOverlayVisible ? "0px 10px" : "0px",
            }}
          >
            {isOverlayVisible && (
              <div className="oldMultiLine-main-head">
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
              style={{
                zIndex: 999,
                padding: `${isOverlayVisible && "10px 20px"}`,
              }}
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
            {isOverlayVisible && (
              <div
                style={{
                  position: "fixed",
                  top: "0",
                  left: "0",
                  right: "0",
                  backgroundColor: "#ffffff",
                  zIndex: 30,
                  height: "40px",
                  width: "100%",
                  boxShadow: "0px 4px 6px rgba(137, 137, 137, 0.1)",
                }}
              ></div>
            )}
            <div
              style={{ padding: `${isOverlayVisible && "10px 20px"} ` }}
              className="checkbox-old"
            >
              {checkboxData
                .filter((item) => allowedKeys.has(item.key))
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

            <Charts
              currentLanguage={currentLanguage}
              labels={labels}
              selectValue={selectValue}
              id={baseId}
              customKey={isLite}
              checkedItems={checkedItems}
              isOverlayVisible={isOverlayVisible}
              labelsBar={labelsBar}
              drawDown={drawDown}
            />

            {isLite && isOverlayVisible && (
              <div style={{ padding: "30px" }} className="single-cards-box">
                <h1>{t.main}</h1>
                <div className="single-cards-container">
                  <Investment
                    currentLanguage={currentLanguage}
                    t={t}
                    selectValue={selectValue}
                    key={loading}
                    id={baseId}
                  />
                </div>
              </div>
            )}
          </div>
          {isLite && (
            <div className="single-cards-box">
              <h1>{t.main}</h1>
              <div className="single-cards-container">
                <Investment
                  currentLanguage={currentLanguage}
                  t={t}
                  selectValue={selectValue}
                  key={loading}
                  id={baseId}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UtopiaOldMultiLine;
