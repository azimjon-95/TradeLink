import React, { useState, useEffect } from "react";
import "./style.css";
import { CgMenuGridO } from "react-icons/cg";
import { Popover, Button, message } from "antd";
import {
  // SettingOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { IoMenu } from "react-icons/io5";
import { IoChevronDown, IoChevronUpOutline } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiFillHome, AiOutlineFileText } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { FiX } from "react-icons/fi";
import { FaPassport, FaStoreAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
// import axios from "../../api";
import SignUpModal from "../../pages/register/Register";
import { setModalType as setModalType2 } from "../../context/modalType";

import logo from "../../assets/kyt.png";

function Navbar() {
  const dispatch = useDispatch();
  const modalTypeValue = useSelector((s) => s?.modalType);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const [isMediaModalOpen, setIsMediaModalOpen] = useState(false);
  const [isModalSinUp, setIsModalSinUp] = useState(false);
  const [modalType, setModalType] = useState(""); // Use a single state for modal type
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");
  const [isProductDashboard, setIsProductDashboard] = useState(false);
  const navigate = useNavigate();

  function parseJwt(token) {
    try {
      const base64Url = token?.split(".")[1]; // tokenning ikkinchi qismi - payload
      if (!base64Url) {
        throw new Error("Invalid token format");
      }
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
          .join("")
      );
      return JSON.parse(jsonPayload); // JSON formatiga o'girib qaytarish
    } catch (e) {
      console.error("Tokenni tahlil qilishda xatolik:", e);
      return null;
    }
  }

  // Tokenni olish
  let token = localStorage.getItem("access_token");
  const payload = parseJwt(token);

  useEffect(() => {
    if (modalTypeValue) {
      setModalType(modalTypeValue);
      setIsModalSinUp(true);
    }
  }, [modalTypeValue]);

  const openModal = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setIsModalOpen(true);
  };

  const closeModalWithDelay = () => {
    const id = setTimeout(() => {
      setIsModalOpen(false);
    }, 600);
    setTimeoutId(id);
  };

  const handleMouseLeave = (e, action) => {
    const relatedTarget = e.relatedTarget;
    if (
      relatedTarget instanceof Node &&
      !e.currentTarget.contains(relatedTarget)
    ) {
      action();
    }
  };

  const handleModalBlur = () => {
    setIsModalOpen(false);
    dispatch(setModalType2(null));
  };

  const [openSections, setOpenSections] = useState({
    tradeLink: false,
    passport: false,
    marketplace: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  // Function to toggle media modal visibility
  const toggleMediaModal = () => {
    setIsMediaModalOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setIsMediaModalOpen(false);
      }
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [links, setLinks] = useState([]);

  // Link to'plamlarini aniqlash
  const linkOptions = {
    "/passport": [
      { path: "/rating", label: "Rating" },
      // { path: '/passport#hub', label: 'Hub' },
    ],
    "/": [
      { path: "/#about", label: "About", scrollTo: 0 },
      { path: "/#products", label: "Passport", scrollTo: 570 },
      { path: "/faq", label: "FAQ" },
    ],
    default: [{ path: "/", label: "", scrollTo: 0 }],
  };

  // Add the '/user' link options after 'linkOptions' is fully defined
  linkOptions["/portfolio/:id"] = [...linkOptions["/passport"]];

  // Asosiy sahifa linklarini yuklash kerak bo'lgan yo'nalishlar ro'yxati
  const mainPageRoutes = ["/faq", "/main", "/about", "/contact"]; // Yangi yo'nalishlar qo'shilishi mumkin

  const passportOpenRoutes = [
    "/passport",
    "/passport/dashboard",
    "/rating",
    "/trader-cabinet/dashboard",
    "/dashboard&ctx=product",
    "/dashboard/success-fee",
    "/user/",
    "/traders-cabinet",
  ];

  useEffect(() => {
    const path = location.pathname;

    // Check if path is "/dashboard&ctx=product" and update state
    if (path === "/dashboard&ctx=product") {
      setIsProductDashboard(true);
    } else {
      setIsProductDashboard(false);
    }

    // Check if path matches '/portfolio/:id' pattern
    const isPortfolioRoute = /^\/portfolio\/\w+/.test(path);

    // Load passport links and add 'Dashboard' link if authenticated
    let passportLinks = [...linkOptions["/passport"]];
    if (token) {
      // If token is true, change the path for Trader's Cabinet
      passportLinks.unshift({
        path: "/trader-cabinet/dashboard", // Use the default path when token is false
        label: "Trader's Cabinet", // Use the correct label
      });
    } else {
      passportLinks.unshift({
        path: "/traders-cabinet",
        label: "Trader's Cabinet",
      });
    }
    if (token) {
      passportLinks.unshift({
        path: "/passport/dashboard",
        label: "Dashboard",
      });
    }

    // Check if the path is a "/user/:id" route, making it universal
    const isUserRoute = /^\/user\/\w+/.test(path); // Match '/user/anything'

    // Set the links based on route logic
    const linksToSet = mainPageRoutes.includes(path)
      ? linkOptions["/"]
      : isUserRoute || isPortfolioRoute
        ? passportLinks
        : passportOpenRoutes.includes(path)
          ? passportLinks
          : linkOptions[path] || linkOptions.default;

    setLinks(linksToSet);
  }, [location.pathname, token]);

  const handleClick = (path) => {
    setActiveLink(path);
    localStorage.setItem("activeLink", path);
  };

  const handleScroll = (scrollAmount) => {
    window.scrollTo({
      top: scrollAmount,
      behavior: "smooth",
    });
  };

  // ===========================
  const [visible, setVisible] = useState(false);

  const handleVisibleChange = (newVisible) => {
    setVisible(newVisible);
  };

  const handleLogout = async () => {
    try {
      // Send request to the server logout API endpoint with Bearer token
      // const res = await axios.post("/auth/sign-in/logout");
      // console.log(res);
      localStorage.removeItem("access_token");
      message.success("Successfully logged out!");
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
      message.error("Logout failed. Please try again.");
    }
  };

  const popoverContent = (
    <div className="popoverContent">
      <Link to={`/user/${payload?.user_id}`}>
        <Button>
          <UserOutlined /> Profile
        </Button>
      </Link>
      {/* <Link to={`/setting`}>
        <Button>
          <SettingOutlined /> Settings
        </Button>
      </Link> */}
      <Button onClick={handleLogout} type="danger">
        <LogoutOutlined /> Log Out
      </Button>
    </div>
  );
  return (
    <div
      className={`navbar_container ${isProductDashboard ? "navbar_static" : "navbar_sticky"
        }`}
    >
      <div className="nav_links-box">
        <Link to="/" onClick={() => handleClick("/")}>
          <div className="nav_logo">
            <img src={logo} alt="Logo" />
          </div>
        </Link>
        <button
          className="menu_button"
          onMouseEnter={openModal}
          onMouseLeave={(e) => handleMouseLeave(e, closeModalWithDelay)}
        >
          <CgMenuGridO />
          {isModalOpen && (
            <div
              className="navbar_modal"
              onMouseEnter={openModal}
              onMouseLeave={closeModalWithDelay}
              tabIndex={0}
              onBlur={handleModalBlur}
            >
              <Link to="/">
                <div className="trade-link-header">
                  <div className="trade-link-header-icon">
                    <FaStoreAlt size={32} style={{ color: "#6e44ff" }} />
                  </div>
                  <div className="trade-link-header-text">
                    <h3>KYT - Know Your Trader</h3>
                    <p>
                      For professional traders and investors within the crypto
                      market.
                    </p>
                  </div>
                </div>
              </Link>
              <Link to="/passport">
                <div className="trade-link-header">
                  <div className="trade-link-header-icon">
                    <FaPassport size={32} style={{ color: "#f7b267" }} />
                  </div>
                  <div className="trade-link-header-text">
                    <h3>Passport</h3>
                    <p>
                      Worldwide Independent confirmation of traders' results
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          )}
        </button>

        <button className="menu_button-media" onClick={toggleMediaModal}>
          <IoMenu />
        </button>
      </div>

      <div className="nav_links-main">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            onClick={() => {
              handleClick(link.path);
              handleScroll(link.scrollTo);
            }}
          >
            <button
              style={{
                width: "100%",
                position: "relative",
              }}
              className={activeLink === link.path ? "active-button" : ""}
            >
              {link.label}
            </button>
          </Link>
        ))}
      </div>

      {token ? (
        <Popover
          content={popoverContent}
          trigger="click"
          open={visible}
          onOpenChange={handleVisibleChange}
          overlayClassName="popoverAnimation"
        >
          <div className="userProfileName">
            <b>{payload?.user}</b>
            <img
              src="https://gravatar.com/avatar/07f9820661965f5c65726c026a58a8b3?size=80&d=retro"
              alt="Profile"
              style={{ cursor: "pointer" }}
            />
          </div>
        </Popover>
      ) : (
        <div className="right-btns">
          <button
            onClick={() => {
              setModalType("signIn");
              setIsModalSinUp(true);
            }}
          >
            Log In
          </button>
          <button
            onClick={() => {
              setModalType("signUp");
              setIsModalSinUp(true);
            }}
          >
            Sign Up
          </button>
        </div>
      )}

      {/* Media modal */}
      <div
        className={`media_modal-container ${isMediaModalOpen ? "open" : ""}`}
      >
        {token ? (
          <div className="media_modal-lang">
            <FiX onClick={() => setIsMediaModalOpen(false)} />
          </div>
        ) : (
          <div className="media_modal-btns">
            <button
              onClick={() => {
                setModalType("signIn");
                setIsModalSinUp(true);
              }}
            >
              Log In
            </button>
            <button
              onClick={() => {
                setIsModalSinUp(true);
                toggleMediaModal();
                setModalType("signUp");
              }}
            >
              Sign Up
            </button>
          </div>
        )}

        {/* KYT - Know Your Trader Section */}
        <div>
          <div
            className="nav_head-lins"
            onClick={() => toggleSection("tradeLink")}
          >
            <span>
              <AiFillHome />
              KYT - Know Your Trader
            </span>
            {openSections.tradeLink ? (
              <IoChevronDown className="nav-chevron" />
            ) : (
              <IoChevronUpOutline className="nav-chevron" />
            )}
          </div>
          {openSections.tradeLink && (
            <div className="media-nav-links">
              <p>About</p>
              <p>Products</p>
              <p>FAQ</p>
            </div>
          )}
        </div>
        {/* Passport Section */}
        <div>
          <div
            className="nav_head-lins"
            onClick={() => toggleSection("passport")}
          >
            <span>
              <AiOutlineFileText />
              Passport
            </span>
            {openSections.passport ? (
              <IoChevronDown className="nav-chevron" />
            ) : (
              <IoChevronUpOutline className="nav-chevron" />
            )}
          </div>
          {openSections.passport && (
            <div className="media-nav-links">
              <p>Trader's Cabinet</p>
              <p>Rating</p>
            </div>
          )}
        </div>
        {/* Marketplace Section */}
        {/*<div>
          <div className="nav_head-lins" onClick={() => toggleSection('marketplace')}>
            <span><BsShop />Marketplace</span>
            {openSections.marketplace ? <IoChevronDown className="nav-chevron" /> : <IoChevronUpOutline className="nav-chevron" />}
          </div>
          {openSections.marketplace && (
            <div className="media-nav-links">
              <p>Marketplace</p>
              <p>Constructor</p>
            </div>
          )}
        </div>*/}

        <div className="userProfileName media_modal_userInfo">
          <div className="userProfileName_left">
            <img
              src="https://gravatar.com/avatar/07f9820661965f5c65726c026a58a8b3?size=80&d=retro"
              alt=""
            />
            <b>{payload?.user}</b>
          </div>
          <BsThreeDots />
        </div>
      </div>
      <div
        onClick={() => setIsMediaModalOpen(false)}
        className={`${isMediaModalOpen ? "modal-open" : "close-modal"}`}
      ></div>

      <div
        className={`close-modal-signup ${isModalSinUp && "close-modal-signup-open"
          }`}
      >
        <SignUpModal
          setModalType={setModalType}
          modalType={modalType}
          setIsMediaModalOpen={setIsMediaModalOpen}
          isOpen={isModalSinUp}
          onRequestClose={() => setIsModalSinUp(false)}
        />
      </div>
    </div>
  );
}

export default Navbar;
