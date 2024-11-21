import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GrBottomCorner } from "react-icons/gr";
import { Select, Skeleton, Switch, Table } from "antd";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { FaCheck } from "react-icons/fa6";
import { useSelector } from "react-redux";
// import moment from "moment/moment";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "../../../api";
import binance from "../../../assets/ed_khan/binance_rounded.svg";
import avatar from "../../../assets/ed_khan/avatar.png";
import ret from "../../../assets/ed_khan/ret.svg";
import InfoModal from "./InfoModal";
import "./style.css";
import scoreChartSvg from "./scoreChart.svg";
import { translations, transMonth } from './Lang'
const { Option } = Select;

const Leaderboard = () => {
  const navigate = useNavigate();
  const currentLanguage = useSelector((state) => state.language.currentLanguage);
  const subTitle = translations[currentLanguage];

  const [isModal, setIsModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState("score");
  const modalRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContentType, setModalContentType] = useState("");

  const [filterOption, setFilterOption] = useState("");
  const [showInactive, setShowInactive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingTop, setLoadingTop] = useState(true);
  const [portfolios, setPortfolios] = useState([]);
  const [leaderboardData, setLeaderboardData] = useState(null);

  const [page, setPage] = useState(0);

  useEffect(() => {
    setLoadingTop(true);
    let API = `leaderboard/three-top-units?sort_type=${selectedOption}`;
    axios
      .get(API)
      .then((res) => {
        for (const key in res?.data?.data) {
          let data = res?.data?.data[key].slice(0, 3);
          setLeaderboardData((prevData) => ({
            ...prevData,
            [key]: data,
          }));
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoadingTop(false));
  }, [selectedOption]);

  // get LeaderBoard table Data
  useEffect(() => {
    setLoading(true);
    let API = `/leaderboard/top-traders?page=${page}&show_non_active=${showInactive}&sort_type=${filterOption || selectedOption
      }`;

    axios
      .get(API)
      .then((res) => {
        // setPortfolios((p) => [...p, ...res?.data?.data]);
        setPortfolios(res?.data?.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [showInactive, filterOption, page, selectedOption]);

  // ----------------------------------------------------------------------------

  const getTimestamp = () => Math.floor(Date.now() / 1000); // Get current timestamp in seconds

  const handleOptionClick = (option) => {
    setSelectedOption(option);
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
      title: subTitle.rank,
      dataIndex: "rank",
      key: "rank",
      align: "center",
      render: (text, record, index) => {
        let rankStyle = {};
        if (index === 0) {
          rankStyle = { backgroundColor: "#FBAF3D" };
        } else if (index === 1) {
          rankStyle = { backgroundColor: "#C0C8E0" };
        } else if (index === 2) {
          rankStyle = { backgroundColor: "#D5B678" };
        }

        return (
          <div style={rankStyle} className="rank-gold">
            {index + 1}
          </div>
        );
      },
    },
    {
      title: subTitle.portfolio,
      dataIndex: "portfolio",
      key: "portfolio",
      render: (_, record) => (
        <div className="row-rating-box">
          <div className="row-rating-image">
            <img width={30} src={binance} alt="" preview={"0"} />
            <img
              width={30}
              className="row-rating-image-avatar"
              src={record?.user_avatar || avatar}
              alt=""
              preview={"0"}
            />
          </div>
          <div className="row-rating-text">
            <p className="ret-texOne">{record.portfolio_name}</p>
            <p className="ret-texTwo">by {record.user_name}</p>
          </div>
        </div>
      ),
    },
    {
      title: subTitle.return,
      dataIndex: "return",
      key: "return",
      align: "center",
      render: (_, record) => (
        <p className="ret-texOne score">
          <img src={scoreChartSvg} alt="" /> {record?.score?.toFixed(2)}
        </p>
      ),
    },
    {
      title: subTitle.mdd,
      dataIndex: "mdd",
      key: "mdd",
      align: "center",
      render: (_, record) => (
        <p className="ret-texOne">{record.max_drawdown?.toFixed(2)}%</p>
      ),
    },
    {
      title: `${subTitle.profit} ($)`,
      dataIndex: "profit",
      key: "profit",
      align: "center",
      render: (_, record) => (
        <p className="ret-texOne">{record.profit_percentage?.toFixed(2)}%</p>
      ),
    },
    {
      title: subTitle.monthlyProfits,
      dataIndex: "avgMonthlyProfit",
      key: "avgMonthlyProfit",
      align: "center",
      render: (_, record) => (
        <p className="ret-texOne">
          {record.average_monthly_profit?.toFixed(2)}%
        </p>
      ),
    },
    {
      title: subTitle.trackingFor,
      dataIndex: "tracking",
      key: "tracking",
      align: "center",
      render: (_, record) => <p className="ret-texOne">{record.days} days</p>,
    },
    {
      title: "",
      dataIndex: "tracking",
      key: "tracking",
      align: "center",
      render: (_, record) => {
        const chartWidth = 150; // Customize chart width
        const chartHeight = 40; // Customize chart height

        const maxValue =
          Math.max(...record.profits?.map((d) => Math.abs(d.value))) || 1; // Maksimal qiymatni aniqlash

        // x-o'qni miqyoslashi uchun minimal va maksimal `timestamp`larni olish
        const minTimestamp = Math.min(
          ...record.profits?.map((d) => d.timestamp)
        );
        const maxTimestamp = Math.max(
          ...record.profits?.map((d) => d.timestamp)
        );

        // `timestamp` va `value`ni SVG nuqtalariga o‘tkazish funksiyasi
        const getPoints = (data, width, maxVal, height) => {
          return data
            ?.map((point) => {
              // `timestamp` asosida x-pozitsiyani hisoblash
              const x =
                ((point.timestamp - minTimestamp) /
                  (maxTimestamp - minTimestamp)) *
                width;
              // Qiymat asosida y-pozitsiyani hisoblash
              const y = height - (point.value / maxVal) * (height / 2); // Qiymatlarni miqyoslashi va markazlash
              return `${x},${y}`;
            })
            .join(" ");
        };

        const getFilledPoints = (data, width, maxVal, height) => {
          const points = getPoints(data, width, maxVal, height);
          return `0,${height} ${points} ${width},${height}`; // Poligon shaklini yopish
        };

        return (
          <div className="chart-table">
            <svg width={chartWidth} height={chartHeight} className="jet-chart">
              <polygon
                points={getFilledPoints(
                  record.profits,
                  chartWidth,
                  maxValue,
                  chartHeight
                )}
                fill="#E2F1F0"
              />
              <polyline
                points={getPoints(
                  record.profits,
                  chartWidth,
                  maxValue,
                  chartHeight
                )}
                fill="none"
                stroke="#32C69B"
                strokeWidth="1"
              />
            </svg>
          </div>
        );
      },
    },
  ];

  // Oct 10 - Nov 9
  // const today = moment().format("MMM DD");
  // const startMonth = moment().startOf("month").format("MMM DD");
  // const endMonth = moment().endOf("month").format("MMM DD");
  // const oneMonthAgo = moment().subtract(30, "days").format("MMM DD");
  // const fourMonthAgo = moment().subtract(90, "days").format("MMM DD");
  // const oneYearAgo = moment().subtract(365, "days").format("MMM DD");
  // const weeklAgo = moment().subtract(7, "days").format("MMM DD");
  const month = transMonth[currentLanguage];
  const today = month.today
  const startMonth = month.startMonth
  const endMonth = month.endMonth
  const oneMonthAgo = month.oneMonthAgo
  const fourMonthAgo = month.fourMonthAgo
  const oneYearAgo = month.oneYearAgo
  const weeklAgo = month.weeklAgo
  return (
    <div className="leaderboard-container-box">
      <div className="leaderboard-container">
        <div className="leaderboard-btnd-text">
          <div className="leaderboard-Link">
            <h1>{subTitle.leaderboardBy}</h1>
            <h1
              style={{ cursor: "pointer", color: "#FFB700" }}
              onClick={() => setIsModal(!isModal)}
            >
              {selectedOption === "score" ? "KYT" : "Profit"} <GrBottomCorner />
              {isModal && (
                <div className="leaderboard-modal-smoll" ref={modalRef}>
                  <button onClick={() => handleOptionClick("score")}>
                    KYT-Know your trader{" "}
                    {selectedOption === "score" && <FaCheck />}
                  </button>
                  <button onClick={() => handleOptionClick("profit")}>
                    {subTitle.profit} {selectedOption === "profit" && <FaCheck />}
                  </button>
                </div>
              )}
            </h1>
          </div>
          <div className="leaderboard-btnd">
            <button onClick={() => openModal("portfolio")}>
              {subTitle.howToAdd}
            </button>
            {selectedOption === "score" && (
              <button onClick={() => openModal("score")}>
                <img src={ret} alt="Info" />  {subTitle.measure}
              </button>
            )}
            <InfoModal
              isOpen={isModalOpen}
              onClose={closeModal}
              contentType={modalContentType}
              currentLanguage={currentLanguage}
            />
          </div>
        </div>
        {selectedOption !== "score" ? (
          <div className="leaderboard-cards">
            <LeaderboardCard
              by={subTitle.by}
              title={subTitle.dailyTop}
              data={leaderboardData?.daily}
              date={today}
            />
            <LeaderboardCard
              by={subTitle.by}
              title={subTitle.weeklyTop}
              data={leaderboardData?.weekly}
              date={`${weeklAgo} - ${today}`}
            />
            <LeaderboardCard
              by={subTitle.by}
              title={subTitle.novemberTop}
              data={leaderboardData?.monthly}
              date={`${startMonth} - ${endMonth}`}
            />
          </div>
        ) : (
          <div className="leaderboard-cards">
            <LeaderboardCard
              by={subTitle.by}
              loadingTop={loadingTop}
              title={subTitle.monthlyTop}
              data={leaderboardData?.monthly}
              date={`${oneMonthAgo} - ${today}`}
            />
            <LeaderboardCard
              by={subTitle.by}
              loadingTop={loadingTop}
              title={subTitle.quarterlyTop}
              data={leaderboardData?.quarterly}
              date={`${fourMonthAgo} - ${today}`}
            />
            <LeaderboardCard
              by={subTitle.by}
              loadingTop={loadingTop}
              title={subTitle.yearlyTop}
              data={leaderboardData?.yearly}
              date={`${oneYearAgo} - ${today}`}
            />
          </div>
        )}
      </div>

      <div className="container-rating">
        <h1>{subTitle.topTradersRating}</h1>
        <div className="head-rating">
          <label>
            <Switch
              checked={showInactive}
              onChange={() => setShowInactive(!showInactive)}
              className={
                showInactive ? "switch-checked-ret" : "switch-unchecked-ret"
              }
            />
            {subTitle.showNonActive}
          </label>
          <Select
            value={filterOption}
            onChange={(value) => setFilterOption(value)}
            style={{ width: 150 }}
            popupMatchSelectWidth={false} // Adjust dropdown width if needed
          >
            <Option className="custom-option" value="score">
              {subTitle.score} <AiFillCaretDown />
            </Option>
            <Option className="custom-option" value="-profit">
              {subTitle.return} (%) <AiFillCaretDown />
            </Option>
            <Option className="custom-option" value="profit">
              {subTitle.return} (%) <AiFillCaretUp />
            </Option>
            <Option className="custom-option" value="-maxdd">
              {subTitle.mdd} <AiFillCaretDown />
            </Option>
            <Option className="custom-option" value="maxdd">
              {subTitle.mdd} <AiFillCaretUp />
            </Option>
          </Select>
        </div>
        <div className="portfolio-list">
          <InfiniteScroll
            dataLength={portfolios?.length} // Current number of portfolios
            next={() => setPage((prevPage) => prevPage + 1)} // Load more data
            hasMore={!loading} // Continue loading if not already loading
          // loader={<h4>Loading...</h4>} // Loading indicator
          // endMessage={
          // <p style={{ textAlign: "center" }}>
          //   <b>Yay! You have seen it all</b>
          // </p>
          // }
          >
            {/* O'rab turgan div InfiniteScroll uchun kerak */}
            <div>
              <Table
                loading={loading}
                columns={columns}
                dataSource={portfolios}
                rowKey={(record) => record.portfolio_id} //
                pagination={false}
                scroll={{ x: "100%" }} // Responsive scrolling
                size="small"
                onRow={(record) => ({
                  onClick: () => {
                    const timestamp = getTimestamp();
                    navigate(
                      `/portfolio/${record.portfolio_id}?t=${timestamp}`
                    );
                  },
                })}
              />

              <div className="loader_box">
                {loading && (
                  <div className="loader" style={{ height: "20px" }}></div>
                )}
              </div>
            </div>
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
};

// ====================Boshqa file bu=======================
const LeaderboardCard = ({ title, data, date, loadingTop, by }) => {
  const getTimestamp = () => Math.floor(Date.now() / 1000); // Get current timestamp in seconds

  const getRankColor = (rank) =>
    rank === 1
      ? "#FBAF3D"
      : rank === 2
        ? "#C0C8E0"
        : rank === 3
          ? "#D5B678"
          : "#fff";

  return (
    <div className="leaderboard-card">
      <div className="leaderboard-card-box">
        <h2>{title}</h2>
        <p className="leaderboard-date">{date}</p>
      </div>
      <ul>
        {loadingTop ? (
          <Skeleton
            title={false}
            active
            paragraph={{ rows: 5, width: "100%", height: "40px" }}
          />
        ) : (
          <>
            {/* `/portfolio/${record.portfolio_id}?t=${timestamp}` */}
            {data?.map((item, index) => (
              <Link
                to={`/portfolio/${item?.portfolio_id}?t=${getTimestamp()}`}
                key={index}
              >
                <li>
                  <div className="leaderboard-rank-box">
                    <span
                      className="leaderboard-rank-icon"
                      style={{ backgroundColor: getRankColor(index + 1) }}
                    >
                      {index + 1}
                    </span>
                    <img width={30} src={binance} alt="logo" />
                    <img
                      className="leaderboard-user-avatar"
                      width={30}
                      src={item?.user_avatar || avatar}
                      alt="User avatar"
                    />
                  </div>
                  <div className="leaderboard-details">
                    <p className="leaderboard-name">
                      {item?.portfolio_name.length > 19
                        ? `${item?.portfolio_name.substring(0, 19)}...`
                        : item?.portfolio_name}
                    </p>
                    <p className="leaderboard-creator">{by} {item?.user_name} </p>
                  </div>
                  <img src={ret} alt="Ret" />
                  <p className="leaderboard-score">
                    {item?.score?.toFixed(2) ||
                      item?.profit_percentage?.toFixed(2)}
                  </p>
                </li>
              </Link>
            ))}
          </>
        )}
      </ul>
    </div>
  );
};

export default Leaderboard;
