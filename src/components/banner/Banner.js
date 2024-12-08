import React, { useState, useEffect } from "react";
import "./style.css";
import "./media.css";
import Rating from "react-rating-stars-component";
import AOS from "aos";
import { Link } from "react-router-dom";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import bt_binance from "../../assets/banner/supporters.png";
import bt_passport from "../../assets/banner/my_img1.png";
import bigX from "../../assets/banner/bigX.png";
import BitGet from "../../assets/banner/BitGet.png";
import htx from "../../assets/banner/htx.png";
import bt_widget from "../../assets/banner/my_img2.png";
import avatar_img1 from "../../assets/banner/fase2.png";
import avatar_img2 from "../../assets/banner/fase3.png";
import avatar_img3 from "../../assets/banner/fase1.png";
// import Ellipse from "../../assets/newBanners/banner_img.png";
import bt_indexes from "../../assets/banner/my_img3.png";
import bt_jet from "../../assets/banner/Instagram-post.png";
import { setModalType } from "../../context/modalType";
import Ellipse from "./image2.png";
import { reviewsData, faqData, translations, blogPosts } from "./Lang";
import "aos/dist/aos.css"; // AOS uslublarini import qilish

const Banner = () => {
  const location = useLocation();

  useEffect(() => {
    const new_token = new URLSearchParams(location.search).get("token");
    if (new_token) {
      localStorage.setItem("access_token", new_token);
    }
  }, [location]);

  const dispatch = useDispatch();
  const [selectedReview, setSelectedReview] = useState(null);
  let token = localStorage.getItem("access_token");
  const currentLanguage = useSelector(
    (state) => state.language.currentLanguage
  );
  const subTitle = translations[currentLanguage];

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };

  const ReviewCard = ({ review, language, onClick }) => {
    return (
      <div className="review-card" onClick={() => onClick(review)}>
        <div className="img-stor">
          <div className="avatar-mod-image">
            {review.image ? (
              <img
                src={review.image}
                alt={`${review.name}'s avatar`}
                className="review-avatar"
              />
            ) : (
              <div className="initials-avatar">{getInitials(review.name)}</div>
            )}
          </div>
          <div className="store-box">
            <Rating
              count={5}
              value={review.store}
              edit={false}
              size={20}
              isHalf={true}
              activeColor="gold"
              color="gray"
            />
          </div>
        </div>
        <h4 className="review-name">{review.name}</h4>
        <p className="review-summary">
          {review.text[language]?.substring(0, 100)}...
        </p>
      </div>
    );
  };

  const ReviewModal = ({ review, language, onClose }) => {
    if (!review) return null;

    return (
      <div className="modal-overlay-review" onClick={onClose}>
        <div
          className="modal-content-review"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="close-button-review" onClick={onClose}>
            X
          </button>
          <div className="modal-overlay-head">
            <div className="modal-overlay-head-box">
              <img
                src={review.image}
                alt={review.name}
                className="review-avatar-large"
              />
              <h4 className="review-name-modal">{review.name}</h4>
            </div>
            <p className="review-date">{review.date}</p>
          </div>
          <p className="review-full-text">{review.text[language]}</p>
        </div>
      </div>
    );
  };

  const handleCardClick = (review) => {
    setSelectedReview(review);
  };

  const closeModal = () => {
    setSelectedReview(null);
  };

  const [activeKey, setActiveKey] = useState(null);

  const togglePanel = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  useEffect(() => {
    AOS.init({
      duration: 900, // Animatsiya davomiyligi (ms)
      easing: "ease-in-out", // Animatsiya harakati
      once: true, // Faqat bir marta animatsiya ishlashi
    });
  }, []);
  return (
    <>
      <div className="homePage">
        <header className="homePage__header">
          <div className="homePage__texts">
            <h1 className="homePage__title">
              Самая мощная международная платформа по
            </h1>
            <h1 style={{ color: "#7241d3" }} className="homePage__title">
              крипто-мониторингу
            </h1>
            <p className="homePage__subtitle">
              Глобальный стандарт для независимой оценки трейдеров и инвестиций
              в лучшие стратегии.
            </p>
          </div>
          <div className="homePage__images">
            <img src={Ellipse} alt="" />
          </div>

          {/* <h1 className="homePage__title">{subTitle.title}</h1>
          <p className="homePage__subtitle">{subTitle.subtitle}</p>
          {token ? (
            <button
              style={{ background: "transparent", color: "transparent" }}
              className="homePage__signUpButton"
            ></button>
          ) : (
            <button
              onClick={() => dispatch(setModalType("signUp"))}
              className="homePage__signUpButton"
            >
              {subTitle.signUp}
            </button>
          )} */}
        </header>
        <p className="homePage__subtitle-bottom">{subTitle.support}</p>
        <div className="homePage__support">
          <img src={bt_binance} alt="" />
        </div>

        <div className="homePage__supportLogos">
          <div className="homePage__support-img">
            <img src={bigX} alt="" />
          </div>
          <div style={{ margin: "0 20px" }} className="homePage__support-img">
            <img src={BitGet} alt="" />
          </div>
          <div className="homePage__support-img">
            <img src={htx} alt="" />
          </div>
        </div>
      </div>

      {/* passport */}
      <div data-aos="zoom-in-up" className="marketplace">
        <div className="marketplace-passporte">
          <div className="marketplace-container">
            <p className="marketplace-subtitle_pass">
              {subTitle.passportSubtitle}
            </p>
            <h1 className="marketplace-title">
              <span role="img" aria-label="logo">
                📊
              </span>{" "}
              {subTitle.passportTitle}
            </h1>
            <p className="marketplace-description">
              {subTitle.passportDescription}
            </p>

            <ul className="marketplace-benefits">
              <li>
                <span className="check-icon-pass">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#333"
                  >
                    <path d="M20.285 2.586l-11.949 11.95-4.95-4.95-1.416 1.415 6.365 6.364 13.364-13.364z" />
                  </svg>
                </span>
                {subTitle.passportBenefits[0]}
                {/* To build greater confidence among investors. */}
              </li>
              <li>
                <span className="check-icon-pass">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#333"
                  >
                    <path d="M20.285 2.586l-11.949 11.95-4.95-4.95-1.416 1.415 6.365 6.364 13.364-13.364z" />
                  </svg>
                </span>
                {subTitle.passportBenefits[1]}
              </li>
              <li>
                <span className="check-icon-pass">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#333"
                  >
                    <path d="M20.285 2.586l-11.949 11.95-4.95-4.95-1.416 1.415 6.365 6.364 13.364-13.364z" />
                  </svg>
                </span>
                {subTitle.passportBenefits[2]}
              </li>
            </ul>

            <Link to="/passport">
              <button className="learn-more-button-passporte">
                {subTitle.learnMore}
              </button>
            </Link>
          </div>
          <div className="marketplace-home_img">
            <img src={bt_passport} alt="" />
            <div className="marketplace-home_img_text">
              <h3>Traders Passport</h3>
            </div>
          </div>
        </div>
      </div>

      {/* For PRO-traders */}
      <div className="app-container">
        <div data-aos="zoom-in-right" className="section marketplace-section">
          <div className="marketplace-header">
            <span className="badge-pro-traders">
              {subTitle.proTradersTitle}
            </span>
            <span>
              <h2
                className="marketplace-title"
                dangerouslySetInnerHTML={subTitle.proTradersDescription}
              />
              <p className="marketplace-subtitle">{subTitle.weTake}</p>
            </span>
            <Link to="/traders-cabinet">
              <button className="learn-more-btn">{subTitle.learnMore}</button>
            </Link>
          </div>
          <div className="index-cards">
            <img src={bt_indexes} alt="" />
          </div>
        </div>

        <div data-aos="flip-up" className="marketplace-section-box">
          <div className="section widget-section">
            <div className="statistics">
              <h2 className="widget-title">{subTitle.widgetTitle}</h2>
              <p
                className="widget-subtitle"
                dangerouslySetInnerHTML={subTitle.strategy}
              />
              <br />
              {!token && (
                <button
                  style={{ marginTop: "6px" }}
                  onClick={() => dispatch(setModalType("signUp"))}
                  className="btn referral-btn"
                >
                  {subTitle.signUp}
                </button>
              )}
            </div>
            <div className="statistics-bar-chart">
              <img src={bt_widget} alt="" />
            </div>
          </div>

          <div className="section referral-section">
            <h2 className="referral-title">{subTitle.referralTitle}</h2>
            <p className="referral-subtitle">{subTitle.commission}</p>
            <Link to="/referral">
              <button className="btn referral-btn"> {subTitle.function}</button>
            </Link>
            <div className="referral-avatars">
              <div className="referral-avatars_box1">
                <img src={avatar_img1} alt="" />
              </div>
              <div className="referral-avatars_box2">
                <img src={avatar_img2} alt="" />
              </div>
              <div className="referral-avatars_box3">
                <img src={avatar_img3} alt="" />
              </div>
              <div className="referral-avatars_box4">+</div>
            </div>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="faq-container">
        <h1 className="faq-title">{subTitle.often}</h1>
        {faqData.map((item, index) => (
          <div key={index} className="faq-card">
            <div className="faq-header" onClick={() => togglePanel(index)}>
              <h3 className="faq-question">{item.question[currentLanguage]}</h3>
              <button className="faq-question-btn">
                {activeKey === index ? <MinusOutlined /> : <PlusOutlined />}
              </button>
            </div>
            {activeKey === index && (
              <div className="faq-content">
                <p>{item.answer[currentLanguage]}</p>
              </div>
            )}
          </div>
        ))}
        <div className="faq-more-btn-box">
          {!token && (
            <button className="faq-more-btn">{subTitle.signUp}</button>
          )}
        </div>
      </div>

      <div className="account-container">
        <h2 className="account-title">{subTitle.accountTitle}</h2>
        <p>{subTitle.consider}</p>
        <div className="reviews-container">
          {reviewsData.map((review, index) => (
            <ReviewCard
              key={index}
              review={review}
              language={currentLanguage}
              onClick={handleCardClick}
            />
          ))}
        </div>
        <ReviewModal
          review={selectedReview}
          language={currentLanguage}
          onClose={closeModal}
        />
      </div>

      {/* Blog */}
      <section className="blog-section__container">
        <h2 className="blog-section__title">{subTitle.blogTitle}</h2>
        <p className="blog-section__subtitle">{subTitle.blogSubtitle}</p>
        <div className="blog-section__grid">
          {blogPosts.map((post, index) => (
            <div key={index} className="blog-section__card">
              <div className="blog-section__card-imageBar">
                {!post.kyt ? (
                  <img src={bt_jet} alt="" />
                ) : (
                  <div className="blog-section__section">
                    <div className="blog-section-min">KYT</div>
                    <h2>{post.kyt[currentLanguage]}</h2>
                  </div>
                )}
              </div>
              <div className="blog-section__card-content">
                <div className="blog-section__card-bottom">
                  <span className="blog-section__card-date">{post.date}</span>
                  <div className="blog-section__card-tags">
                    {post.tags.map((tag, i) => (
                      <span key={i} className="blog-section__card-tag">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="blog-section__card-title">
                  {post.title[currentLanguage]}
                </h3>
                <p className="blog-section__card-description">
                  {post.description[currentLanguage]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Banner;
