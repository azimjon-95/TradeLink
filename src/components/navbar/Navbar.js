import React, { useState, useEffect } from "react";
import './style.css';
import { CgMenuGridO } from "react-icons/cg";
import { IoMenu } from "react-icons/io5";
import { IoChevronDown, IoChevronUpOutline } from "react-icons/io5";
import { AiFillHome, AiOutlineFileText } from 'react-icons/ai';
import { BsShop } from 'react-icons/bs';
import SignUpModal from '../../pages/register/Register';

import logo from '../../assets/logo.png';

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const [isMediaModalOpen, setIsMediaModalOpen] = useState(false); // State for media modal
  const [isModalSinUp, setIsModalSinUp] = useState(false);
  const [modalType, setModalType] = useState(''); // Use a single state for modal type

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
    }, 1000);
    setTimeoutId(id);
  };

  const handleMouseLeave = (e, action) => {
    const relatedTarget = e.relatedTarget;
    if (relatedTarget instanceof Node && !e.currentTarget.contains(relatedTarget)) {
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
    setOpenSections(prevState => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  // Function to toggle media modal visibility
  const toggleMediaModal = () => {
    setIsMediaModalOpen(prev => !prev);
  };

  useEffect(() => {
    // Function to close media modal if window width exceeds 900px
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setIsMediaModalOpen(false);
      }
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="navbar_container">
      <div className="nav_links-box">
        <div className="nav_logo">
          <img src={logo} alt="Logo" />
        </div>
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
              <p>Menu Content</p>
            </div>
          )}
        </button>
        <button className="menu_button-media" onClick={toggleMediaModal}>
          <IoMenu />
        </button>
      </div>
      <div className="nav_links-main">
        <button>About</button>
        <button>Products</button>
        <button>FAQ</button>
        <button>Careers</button>
      </div>
      <div className="right-btns">
        <button onClick={() => { setModalType('signIn'); setIsModalSinUp(true); }}>Log In</button>
        <button onClick={() => { setModalType('signUp'); setIsModalSinUp(true); }}>Sign Up</button>
      </div>

      {/* Media modal */}
      <div className={`media_modal-container ${isMediaModalOpen ? 'open' : ''}`}>
        <div className="media_modal-btns">
          <button onClick={() => { setModalType('signIn'); setIsModalSinUp(true); }}>Log In</button>
          <button onClick={() => {
            setIsModalSinUp(true);
            toggleMediaModal();
            setModalType('signUp');
          }} >Sign Up</button>
        </div>
        {/* TradeLink Section */}
        <div>
          <div className="nav_head-lins" onClick={() => toggleSection('tradeLink')}>
            <span><AiFillHome />TradeLink</span>
            {openSections.tradeLink ? <IoChevronDown className="nav-chevron" /> : <IoChevronUpOutline className="nav-chevron" />}
          </div>
          {openSections.tradeLink && (
            <div className="media-nav-links">
              <p>About</p>
              <p>Products</p>
              <p>FAQ</p>
              <p>Careers</p>
            </div>
          )}
        </div>
        {/* Passport Section */}
        <div>
          <div className="nav_head-lins" onClick={() => toggleSection('passport')}>
            <span><AiOutlineFileText />Passport</span>
            {openSections.passport ? <IoChevronDown className="nav-chevron" /> : <IoChevronUpOutline className="nav-chevron" />}
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
        <div>
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
        </div>
      </div>
      <div onClick={() => setIsMediaModalOpen(false)} className={`${isMediaModalOpen ? 'modal-open' : 'close-modal'}`}></div>

      <div className={`close-modal-signup ${isModalSinUp && "close-modal-signup-open"}`}>
        <SignUpModal modalType={modalType} setIsMediaModalOpen={setIsMediaModalOpen} isOpen={isModalSinUp} onRequestClose={() => setIsModalSinUp(false)} />
      </div>
    </div>
  );
}

export default Navbar;


