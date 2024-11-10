import React, { useState, useRef, useEffect } from "react";
import "./style.css";
import "./media.css";
import Rating from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import bt_binance from "../../assets/banner/supporters.png";
import bt_passport from "../../assets/banner/passport.png";
import bt_widget from "../../assets/banner/widget.png";
import bt_benefits_faces from "../../assets/banner/benefits-faces.png";
import bt_indexes from "../../assets/banner/indexes.png";
import bt_jet from "../../assets/banner/Instagram-post.png";
import { setModalType } from "../../context/modalType";

const Banner = () => {
  const dispatch = useDispatch();
  const [selectedReview, setSelectedReview] = useState(null);
  let token = localStorage.getItem("access_token");

  const reviews = [
    {
      name: "Bogdan Miroshnichenko",
      store: 3,
      text: "very good balance-profit tracker. cozy chat, support. developing copytrading marketplace.",
      date: "Jun 10, 2024",
      image: "",
    },
    {
      name: "Zhas Ak",
      store: 5,
      text: "In total I have been working with project KYT - Know Your Trader passport for about two years. During this time, I was pleased with the convenience of displaying trading statistics, clear monitoring of the current portfolio situation, and correct dynamics graphs. The opportunity to participate in ratings provides motivation and an incentive for growth. All this data improves trading and makes it more profitable. Special thanks to the support team who are always in touch and eliminate any controversial issues. I recommend this product to all active traders and crypto investors.",
      date: "Jun 12, 2024",
      image: "",
    },
    {
      name: "Anna Petrov",
      store: 3.5,
      text: "An excellent service for monitoring your trading results. I've been using it for a long time and enjoy it. All good",
      date: "Jun 14, 2024",
      image: "",
    },
    {
      name: "Ivan Ivanov",
      store: 4,
      text: "Great resource for trading account monitoring. Works perfectly. My exp. more than 2 years, totally recomended!",
      date: "Jun 15, 2024",
      image: "",
    },
    {
      name: "Sara Lee",
      store: 2,
      text: "Good service with detailed trading account statistics. Shows not only PnL history, but also 50+ other parameters. Very convenient and clear for demonstrating to investors.",
      date: "Jun 16, 2024",
      image: "",
    },
    {
      name: "Liam Johnson",
      store: 2.7,
      text: "Among the many scammers in the market, this is one of the best ways to prove your competence and transparency for free. I really liked the service’s approach to statistics. This is much more than a regular trader's diary!",
      date: "Jun 17, 2024",
      image: "",
    },
    {
      name: "Sophia Kim",
      store: 5,
      text: "I’ve been using this platform to build my reputation as a trader, and it’s been incredibly effective. The verification of my trading history and the detailed performance stats help showcase my skills to potential investors and followers. It’s a great way to gain visibility and credibility in the trading community.",
      date: "Jun 18, 2024",
      image: "",
    },
    {
      name: "James Chen",
      store: 3.5,
      text: "With the copy trading feature, I can maximize my earnings without putting in the work of an active trader. I pick top traders to copy and let the platform handle the rest. It’s been an easy and efficient way to grow my portfolio and generate passive income. Can’t forget to add that I can always manage my assets myself, so that I don't need to worry about my money like if I manage my assets directly to a trader. Overall copy trading on this platform is fantastic and clear, highly recommend",
      date: "Jun 19, 2024",
      image: "",
    },
  ];

  // Extract initials from the name
  const getInitials = (name) => {
    const initials = name
      .split(" ")
      .map((word) => word[0])
      .join("");
    return initials.toUpperCase();
  };
  const ReviewCard = ({ review, onClick }) => {
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
              count={5} // Maximum number of stars
              value={review.store} // Rating value
              edit={false} // Makes it non-editable
              size={20} // Star size
              isHalf={true} // Enables half-star display
              activeColor="gold" // Color for active stars
              color="gray" // Color for inactive stars
            />
          </div>
        </div>
        <h4 className="review-name">{review.name}</h4>
        <p className="review-summary">{review.text.substring(0, 100)}...</p>
      </div>
    );
  };

  // Modal Component for detailed review
  const ReviewModal = ({ review, onClose }) => {
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
          <img
            src={review.image}
            alt={review.name}
            className="review-avatar-large"
          />
          <h4 className="review-name">{review.name}</h4>
          <p className="review-full-text">{review.text}</p>
          <p className="review-date">{review.date}</p>
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

  const faqData = [
    {
      question: "What is KYT - Know Your Trader?",
      answer:
        "KYT - Know Your Trader is a community project cleaning up the cryptocurrency market. Our goal is to become the “point of truth” in the cryptocurrency sea, with the help of which every user will be able to validate financial information with 100% confidence.",
    },
    {
      question: "What is KYT - Know Your Trader Passport?",
      answer:
        "KYT - Know Your Trader Passport is an independent trader verification standard that allows you to validate and analyze exchange account statistics...",
    },
    {
      question: "How does KYT - Know Your Trader help a trader?",
      answer:
        "KYT - Know Your Trader products allow a trader to obtain complete statistics on your exchange account, analyze the data...",
    },
    {
      question: "How does KYT - Know Your Trader help an investor?",
      answer:
        "KYT - Know Your Trader selects the best strategies from thousands, allowing investors to choose only among proven and high-quality strategies...",
    },
  ];

  const [activeKey, setActiveKey] = useState(null);

  const togglePanel = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  const blogPosts = [
    {
      date: "2024-08-02",
      kyt: "WHAT IS CRYPTOTRADING?",
      tags: ["Crypto", "Guides"],
      title: "What is Crypto Trading and How to Trade Cryptocurrency?",
      description:
        "Crypto trading is becoming an increasingly popular form of investment activity, attracting both professional traders and beginners...",
      image: "path/to/crypto-image.jpg",
    },
    {
      date: "2024-08-01",
      kyt: "WHAT IS COPYTRADING?",
      tags: ["Crypto", "Guides"],
      title: "What is Copy Trading?",
      description:
        "Copy trading is an investment strategy that allows inexperienced traders to execute trades made by more experienced and successful market specialists...",
      image: "path/to/copytrading-image.jpg",
    },
    {
      date: "2024-04-11",
      tags: ["News"],
      title: "Jet 2.0 launch!",
      description:
        "We have great news: we have launched a new version of Jet 2.0...",
      image: "path/to/jet2-image.jpg",
    },
  ];

  // ----------------scroll cards--------------------------

  const containerRef = useRef(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (containerRef.current) {
        containerRef.current.scrollBy({
          left: containerRef.current.offsetWidth, // Hozirgi o'lchamni qo'llash
          behavior: "smooth",
        });

        // Kartalar oxiriga yetganda boshidan boshlash
        if (
          containerRef.current.scrollLeft + containerRef.current.offsetWidth >=
          containerRef.current.scrollWidth
        ) {
          containerRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 2000); // 2 soniyadan keyin o'zgaradi

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <>
      <div className="homePage">
        <header className="homePage__header">
          <h1 className="homePage__title">
            Independent Assessment Standard of traders <br /> and investments in
            the world's best strategies
          </h1>
          <p className="homePage__subtitle">
            We help traders to verify trading statistics and attract
            investments, and we provide investors with proven low-risk trading
            strategies
          </p>
          {token ? (
            <button style={{ background: "transparent", color: "transparent" }}
              className="homePage__signUpButton"
            >

            </button>
          ) : (
            <button
              onClick={() => dispatch(setModalType("signUp"))}
              className="homePage__signUpButton"
            >
              Sign up
            </button>
          )

          }

        </header>
        <p className="homePage__subtitle-bottom">We support</p>
        <div className="homePage__support">
          <img src={bt_binance} alt="" />
        </div>
      </div>

      {/* passport */}
      <div className="marketplace">
        <div className="marketplace-passporte">
          <div className="marketplace-home_img">
            <img src={bt_passport} alt="" />
          </div>
          <div className="marketplace-container">
            <p className="marketplace-subtitle_pass ">
              International standard of trader assessment
            </p>
            <h1 className="marketplace-title">
              <span role="img" aria-label="logo">
                📊
              </span>{" "}
              KYT - Know Your Trader Passport
            </h1>
            <p className="marketplace-description">
              Objective and independent assessment of traders’ skills and
              performance.
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
                To enhance investor confidence
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
                Secure data upload via API key with read-only permissions
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
                All tools available in one place starting from statistics to
                investment attraction
              </li>
            </ul>

            <Link to="/passport">
              <button className="learn-more-button-passporte">
                Learn more
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Our mission */}
      <div className="mission-container">
        <div className="mission-content">
          <h4>Our mission</h4>
          <h2>
            We make the crypto trading market fair <br /> and transparent
          </h2>
        </div>
      </div>

      {/* For PRO-traders */}
      <div className="app-container">
        <div className="section marketplace-section">
          <div className="marketplace-header">
            <span className="badge-pro-traders">For PRO-traders</span>
            <span>
              <h2 className="marketplace-title">
                Submit your strategy on the <br />
                KYT - Know Your Trader <br />
                get new clients
              </h2>
              <p className="marketplace-subtitle">
                We take care of all other work with the investor.
              </p>
            </span>
            <button className="learn-more-btn">Learn more</button>
          </div>
          <div className="index-cards">
            <img src={bt_indexes} alt="" />
          </div>
        </div>

        <div className="marketplace-section-box">
          <div className="section widget-section">
            <div className="statistics">
              <h2 className="widget-title">
                Place KYT - Know Your Trader
                <br /> widget on your website
              </h2>
              <p className="widget-subtitle">
                Share your strategy results on your
                <br /> personal website using widget.
              </p>
            </div>
            <div className="statistics-bar-chart">
              <img src={bt_widget} alt="" />
            </div>
          </div>

          <div className="section referral-section">
            <h2 className="referral-title">
              KYT - Know Your Trader Referral Program
            </h2>
            <p className="referral-subtitle">
              Earn a commission on your invited friends' profits without hidden
              platform fees.
            </p>
            <button className="btn referral-btn">How does it work?</button>
            <div className="referral-avatars">
              <img src={bt_benefits_faces} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="faq-container">
        <h1 className="faq-title">Frequently Asked Questions</h1>
        {faqData.map((item, index) => (
          <div key={index} className="faq-card">
            <div className="faq-header" onClick={() => togglePanel(index)}>
              <h3 className="faq-question">{item.question}</h3>
              <button className="faq-question-btn">
                {activeKey === index ? <MinusOutlined /> : <PlusOutlined />}
              </button>
            </div>
            {activeKey === index && (
              <div className="faq-content">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
        <div className="faq-more-btn-box">
          {!token &&
            <button className="faq-more-btn">Sign up</button>
          }
        </div>
      </div>

      <div className="account-container">
        <h2 className="account-title">
          What traders and investors are saying about KYT - Know Your Trader
        </h2>
        <p>We take into account your opinion, it helps us to improve.</p>
        <div className="reviews-container" ref={containerRef}>
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} onClick={handleCardClick} />
          ))}
        </div>
        <ReviewModal review={selectedReview} onClose={closeModal} />

        {/* <button className="referral-btnAsked">Leave a Review</button> */}
      </div>

      {/* Blog */}
      <section className="blog-section__container">
        <h2 className="blog-section__title">Blog</h2>
        <p className="blog-section__subtitle">Recent updates</p>
        <div className="blog-section__grid">
          {blogPosts.map((post, index) => (
            <div key={index} className="blog-section__card">
              <div className="blog-section__card-imageBar">
                {!post.kyt ? (
                  <img src={bt_jet} alt="" />
                ) : (
                  <div className="blog-section__section">
                    <div className="blog-section-min">KYT</div>
                    <h2>{post.kyt}</h2>
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
                <h3 className="blog-section__card-title">{post.title}</h3>
                <p className="blog-section__card-description">
                  {post.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* <button className="referral-btnAsked">More articles</button> */}
      </section>
    </>
  );
};

export default Banner;
