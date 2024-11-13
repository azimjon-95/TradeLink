import { useState, useEffect } from "react";
import { FaShare } from "react-icons/fa";
import {
  Routes,
  Route,
  Link,
  Navigate,
  Outlet,
  useParams,
  useLocation,
} from "react-router-dom"; // Import Outlet
import { Tooltip } from "antd";
import axios from "../../api";
import ed_khan from "../../assets/ed_khan/Ed_Khan.png";
import Overview from "./Overview";
import Portfolios from "./Portfolios";
import Jet from "./Jet";
import ShareModal from "./ShareModal";
import "./styles/style.css"; // Import the CSS file
import "./styles/media.css"; // Import the CSS file

const UserProfile = () => {
  //   const [telegramHandle, setTelegramHandle] = useState("");
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState("/user");
  const [isModalOpen, setModalOpen] = useState(false);
  const { id } = useParams();

  const [profileData, setProfileData] = useState(null);
  const profileInfo = profileData?.statistic;
  //   const overviewInfo = profileData?.overview;
  const portFolioData = profileData?.overview;
  const public_portfolios = profileData?.public_portfolios;
  const portfolio_chartData = profileData?.profits?.profits;
  // user_profile_header_data
  const user_profile_header_data = profileData?.user_profile_header_data || {};

  useEffect(() => {
    let API = "/user-profile/user/?user_id=" + id;
    axios
      .get(API)
      .then((res) => setProfileData(res.data?.data))
      .catch((err) => console.log(err));
  }, [id]);

  console.log(profileData);

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className="ed_khan">
      <h1>User Profile</h1>

      <div className="user-share-container">
        <div className="user-share">
          <div className="ed-khan-image">
            <img src={user_profile_header_data?.avatar || ed_khan} alt="" />
          </div>
          <div className="ed-khan-text">
            <div className="ed-khan-main">
              <h1>
                {" "}
                <img
                  className="user-image-mob"
                  src={user_profile_header_data?.avatar || ed_khan}
                  alt=""
                />{" "}
                {user_profile_header_data?.name || ""}
              </h1>
              <p>{profileInfo?.days_in_market || 0}</p>
              <Tooltip title="Days in market">
                <span>Days in market</span>
              </Tooltip>
            </div>
            <div className="ed-khan-main">
              <p>{profileInfo?.days_investing || 0}</p>
              <Tooltip title="Days investing">
                <span>Days investing</span>
              </Tooltip>
            </div>
            <div className="ed-khan-main">
              <p>{profileInfo?.active_portfolios || 0}</p>
              <Tooltip title="Active Portfolios">
                <span>Active Portfolios</span>
              </Tooltip>
            </div>
            <div className="ed-khan-main">
              <p>{profileInfo?.active_jets || 0}</p>
              <Tooltip title="Active Jets">
                <span>Active Jets</span>
              </Tooltip>
            </div>
            <div className="ed-khan-main">
              <p>{(profileInfo?.total_views / 1000 || 0)?.toFixed(2)}K</p>
              <Tooltip title="Total Views">
                <span>Total Views</span>
              </Tooltip>
            </div>
          </div>
        </div>

        {/* <div className="khan-maps">
          <button
            onClick={handleTelegramClick}
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <FaTelegramPlane />
          </button>
          <button
            onClick={handleEdvitradeClick}
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <FaGlobe />
          </button>
        </div> */}
        {/* <div className="khan-inps">
          Telegram
          <input
            type="text"
            value={telegramHandle}
            readOnly
            style={{ padding: "8px", fontSize: "16px" }}
          />
        </div> */}

        <button onClick={toggleModal}>
          <FaShare style={{ fontSize: "16px" }} />
          Share
        </button>
      </div>

      <div className="user-menus-khan">
        <div className="strategies-layout">
          <nav className="nav-bar">
            <Link
              to={`/user/${id}`}
              className={currentPath === `/user/${id}` ? "active" : ""}
            >
              Strategies
            </Link>
            <Link
              to={`/user/${id}/portfolios`}
              className={
                currentPath === `/user/${id}/portfolios` ? "active" : ""
              }
            >
              Portfolios
            </Link>
            <Link
              to={`/user/${id}/jet`}
              className={currentPath === `/user/${id}/jet` ? "active" : ""}
            >
              Jet
            </Link>
          </nav>

          <div className="user-menus">
            <div className="khan-pages">
              <Outlet />{" "}
              {/* This will render the matching route components here */}
            </div>

            <div className="menus-khan-page">
              <Routes>
                <Route path="/" element={<Overview />} />
                <Route
                  path="portfolios"
                  element={
                    <Portfolios
                      portFolioData={portFolioData}
                      public_portfolios={public_portfolios}
                      portfolio_chartData={portfolio_chartData}
                    />
                  }
                />
                <Route path="jet" element={<Jet />} />

                {/* Redirect any unknown paths under /user/:id to the Overview page */}
                <Route path="*" element={<Navigate to={`/user/${id}`} />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && <ShareModal closeModal={toggleModal} />}
    </div>
  );
};

export default UserProfile;
