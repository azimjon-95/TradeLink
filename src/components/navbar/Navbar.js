import React, { useState, useEffect } from "react";
import "./style.css";
import { CgMenuGridO } from "react-icons/cg";
import { IoMenu } from "react-icons/io5";
import { IoChevronDown, IoChevronUpOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { AiFillHome, AiOutlineFileText } from "react-icons/ai";
import { FaPassport, FaStoreAlt } from "react-icons/fa";
// import { BsShop } from 'react-icons/bs';
import SignUpModal from "../../pages/register/Register";

import logo from "../../assets/kyt.png";

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const [isMediaModalOpen, setIsMediaModalOpen] = useState(false); // State for media modal
  const [isModalSinUp, setIsModalSinUp] = useState(false);
  const [modalType, setModalType] = useState(""); // Use a single state for modal type
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");
  // const [hasScrolled, setHasScrolled] = useState(false);

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
    // Function to close media modal if window width exceeds 900px
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
      { path: "/passport#cabinet", label: "Trader's Cabinet" },
      { path: "/passport#rating", label: "Rating" },
      { path: "/passport#feed", label: "Feed" },
      { path: "/passport#hub", label: "Hub" },
    ],
    "/": [
      { path: "/#about", label: "About", scrollTo: 0 },
      { path: "/#products", label: "Passport", scrollTo: 570 },
      { path: "/faq", label: "FAQ" },
    ],
    default: [{ path: "/#default", label: "Default", scrollTo: 0 }],
  };

  // Add the '/user' link options after 'linkOptions' is fully defined
  linkOptions["/user"] = [...linkOptions["/"]];

  // Asosiy sahifa linklarini yuklash kerak bo'lgan yo'nalishlar ro'yxati
  const mainPageRoutes = ["/faq", "/main", "/about", "/contact"]; // Yangi yo'nalishlar qo'shilishi mumkin

  useEffect(() => {
    // `location.pathname` asosiy sahifa yo'nalishlaridan birida bo'lsa, asosiy sahifa linklarini yuklaydi
    const linksToSet = mainPageRoutes.includes(location.pathname)
      ? linkOptions["/"]
      : linkOptions[location.pathname] || linkOptions.default;
    setLinks(linksToSet);
  }, [location.pathname]);

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

  return (
    <div className="navbar_container">
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

      {/* Media modal */}
      <div
        className={`media_modal-container ${isMediaModalOpen ? "open" : ""}`}
      >
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
              <p>Feed</p>
              <p>Hub</p>
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
      </div>
      <div
        onClick={() => setIsMediaModalOpen(false)}
        className={`${isMediaModalOpen ? "modal-open" : "close-modal"}`}
      ></div>

      <div
        className={`close-modal-signup ${
          isModalSinUp && "close-modal-signup-open"
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
