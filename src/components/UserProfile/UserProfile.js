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
import { useSelector } from "react-redux";
import axios from "../../api";
import ed_khan from "../../assets/ed_khan/avatar.png";
// import Overview from "./Overview";
import Portfolios from "./Portfolios";
// import Jet from "./Jet";
import ShareModal from "./ShareModal";
import "./styles/style.css"; // Import the CSS file
import "./styles/media.css"; // Import the CSS file

import { profileLang } from "./lang";

const UserProfile = () => {
  const lang = useSelector((state) => state.language.currentLanguage);

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

  // user_profile_header_data
  const user_profile_header_data = profileData?.user_profile_header_data || {};

  useEffect(() => {
    // Update the current path in localStorage whenever it changes
    localStorage.setItem("currentPath", location.pathname);
    setCurrentPath(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    // Retrieve the stored path from localStorage on component mount
    const storedPath = localStorage.getItem("currentPath");
    if (storedPath) {
      setCurrentPath(storedPath);
    }
  }, []);

  useEffect(() => {
    let API = "/user-profile/user/?user_id=" + id;
    axios
      .get(API)
      .then((res) => {
        setProfileData(res.data?.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className="ed_khan">
      <h1>{profileLang[lang].title}</h1>

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
              <Tooltip title={profileLang[lang].market}>
                <span>{profileLang[lang].market}</span>
              </Tooltip>
            </div>
            <div className="ed-khan-main">
              <p>{profileInfo?.days_investing || 0}</p>
              <Tooltip title={profileLang[lang].investing}>
                <span>{profileLang[lang].investing}</span>
              </Tooltip>
            </div>
            <div className="ed-khan-main">
              <p>{profileInfo?.active_portfolios || 0}</p>
              <Tooltip title={profileLang[lang].portfolio}>
                <span>{profileLang[lang].portfolio}</span>
              </Tooltip>
            </div>
            <div className="ed-khan-main">
              <p>{profileInfo?.active_jets || 0}</p>
              <Tooltip title={profileLang[lang].jet}>
                <span>{profileLang[lang].jet}</span>
              </Tooltip>
            </div>
            <div className="ed-khan-main">
              <p>{(profileInfo?.total_views / 1000 || 0)?.toFixed(2)}K</p>
              <Tooltip title={profileLang[lang].views}>
                <span>{profileLang[lang].views}</span>
              </Tooltip>
            </div>
          </div>
        </div>

        <button onClick={toggleModal}>
          <FaShare style={{ fontSize: "16px" }} />
          {profileLang[lang].share}
        </button>
      </div>

      <div className="user-menus-khan">
        <div className="strategies-layout">
          {true ? (
            <nav className="nav-bar">
              {/* <Link
                to={`/user/${id}`}
                className={currentPath === `/user/${id}` ? "active" : ""}
                style={{
                  color: currentPath === `/user/${id}` ? "#4A27A9" : "gray",
                  fontWeight: currentPath === `/user/${id}` ? "bold" : "normal", // Bold for active
                }}
              >
                Strategies
              </Link> */}
              <Link
                to={`/user/${id}/portfolios`}
                className={currentPath === `/user/${id}` ? "active" : ""}
                style={{
                  color: currentPath === `/user/${id}` ? "#4A27A9" : "gray",
                  fontWeight: currentPath === `/user/${id}` ? "bold" : "normal",
                }}
              >
                {profileLang[lang].tabs_1}
              </Link>
              {/* <Link
                to={`/user/${id}/jet`}
                className={currentPath === `/user/${id}/jet` ? "active" : ""}
                style={{
                  color: currentPath === `/user/${id}/jet` ? "#4A27A9" : "gray",
                  fontWeight:
                    currentPath === `/user/${id}/jet` ? "bold" : "normal",
                }}
              >
                Jet
              </Link> */}
            </nav>
          ) : (
            <nav className="nav-bar">
              <Link className="active">Overview</Link>
            </nav>
          )}

          {true ? (
            <div className="user-menus">
              <div className="khan-pages">
                <Outlet />{" "}
              </div>

              <div className="menus-khan-page">
                <Routes>
                  {/* <Route path="/" element={<Overview />} /> */}
                  <Route
                    path="/"
                    element={
                      <Portfolios
                        portFolioData={portFolioData}
                        public_portfolios={public_portfolios}
                      />
                    }
                  />
                  {/* <Route path="jet" element={<Jet />} /> */}

                  {/* Redirect any unknown paths under /user/:id to the Overview page */}
                  <Route path="*" element={<Navigate to={`/user/${id}`} />} />
                </Routes>
              </div>
            </div>
          ) : (
            <p className="user-menus">
              You don't have a public portfolio yet. You can either create one
              or choose to make an existing portfolio public in the{" "}
              <Link
                style={{ textDecoration: "underline", color: "#000" }}
                to="/passport/dashboard"
              >
                dashboard.
              </Link>{" "}
            </p>
          )}
        </div>
      </div>
      {isModalOpen && <ShareModal closeModal={toggleModal} />}
    </div>
  );
};

export default UserProfile;
