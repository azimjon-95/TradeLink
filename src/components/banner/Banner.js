import React, { useState } from "react";
import "./style.css";
import "./media.css";
import Rating from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import bt_binance from "../../assets/banner/supporters.png";
import bt_passport from "../../assets/banner/passport.png";
import bt_widget from "../../assets/banner/widget.png";
import avatar_img1 from "../../assets/banner/fase2.png";
import avatar_img2 from "../../assets/banner/fase3.png";
import avatar_img3 from "../../assets/banner/fase1.png";
import bt_indexes from "../../assets/banner/indexes.png";
import bt_jet from "../../assets/banner/Instagram-post.png";
import { setModalType } from "../../context/modalType";

const Banner = () => {
  const dispatch = useDispatch();
  const [selectedReview, setSelectedReview] = useState(null);
  let token = localStorage.getItem("access_token");


  const reviews = [
    {
      name: "Maria Ivanova",
      store: 5,
      text: "I absolutely love this service! It provides detailed trading analytics, easy portfolio management, and the support team is always responsive. A must-have for any trader.",
      date: "Jun 21, 2024",
      image: "https://randomuser.me/api/portraits/women/13.jpg",
    },
    {
      name: "Alexey Smirnov",
      store: 4,
      text: "The platform offers a user-friendly interface for tracking trading results. I’ve been using it for a year, and it has helped me improve my strategies. Highly recommended!",
      date: "Jun 20, 2024",
      image: "https://randomuser.me/api/portraits/men/8.jpg",
    },
    {
      name: "Dmitry Petrov",
      store: 3.5,
      text: "A good platform for monitoring trades and keeping track of performance. The analytics could be more detailed, but overall, it’s a solid choice.",
      date: "Jun 22, 2024",
      image: "https://randomuser.me/api/portraits/men/21.jpg",
    },
    {
      name: "Svetlana Kuznetsova",
      store: 4.5,
      text: "Great experience so far. The charts and performance metrics are clear and helpful. This service has become a key part of my trading routine.",
      date: "Jun 23, 2024",
      image: "https://randomuser.me/api/portraits/women/14.jpg",
    },
    {
      name: "Igor Sokolov",
      store: 2.5,
      text: "The platform is decent but needs improvements in some areas, like loading times and UI design. It’s useful, but not perfect.",
      date: "Jun 24, 2024",
      image: "https://randomuser.me/api/portraits/men/17.jpg",
    },
    {
      name: "Elena Morozova",
      store: 5,
      text: "This is a fantastic service for showcasing my trading skills to investors. The detailed reports and verification system make it very reliable.",
      date: "Jun 25, 2024",
      image: "https://randomuser.me/api/portraits/women/15.jpg",
    },
    {
      name: "Vladimir Pavlov",
      store: 3,
      text: "The copy trading feature is interesting but could use more transparency about trader risks. Still, it’s a great addition to the platform.",
      date: "Jun 26, 2024",
      image: "https://randomuser.me/api/portraits/men/18.jpg",
    },
    {
      name: "Olga Novikova",
      store: 4.8,
      text: "I’ve been using this tool for months now, and it’s helped me stay organized and improve my trading results. The support team is amazing too!",
      date: "Jun 27, 2024",
      image: "https://randomuser.me/api/portraits/women/33.jpg",
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
          <p className="review-full-text">{review.text}</p>
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
      question: "What is KYT - Know Your Trader all about?",
      answer:
        "KYT - Know Your Trader is a revolutionary platform designed to bring transparency to the cryptocurrency market, enabling users to confidently validate trading data and make informed decisions.",
    },
    {
      question: "What is the KYT Passport, and how does it work?",
      answer:
        "The KYT Passport is a trusted standard for trader verification, offering detailed analytics and insights into exchange account performance, ensuring transparency and credibility.",
    },
    {
      question: "How can KYT - Know Your Trader benefit traders?",
      answer:
        "KYT provides traders with comprehensive exchange account statistics and tools to analyze their performance, optimize trading strategies, and build trust with potential investors.",
    },
    {
      question: "What advantages does KYT offer to investors?",
      answer:
        "KYT helps investors by curating a selection of top-performing strategies, allowing them to invest confidently in verified and reliable trading plans.",
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
      title: "Understanding Crypto Trading: A Beginner's Guide",
      description:
        "Crypto trading has gained immense popularity, offering opportunities for both seasoned investors and newcomers alike to explore the digital currency market...",
      image: "path/to/crypto-image.jpg",
    },
    {
      date: "2024-08-01",
      kyt: "WHAT IS COPYTRADING?",
      tags: ["Crypto", "Guides"],
      title: "Exploring Copy Trading: How to Follow Expert Traders",
      description:
        "Copy trading lets you mimic the trades of seasoned traders, making it easier for novices to participate in the financial markets without in-depth knowledge...",
      image: "path/to/copytrading-image.jpg",
    },
    {
      date: "2024-04-11",
      tags: ["News"],
      title: "Introducing Jet 2.0: The Next Generation of Trading Tools",
      description:
        "We're excited to unveil Jet 2.0, a new version packed with enhanced features and better performance for all your trading needs...",
      image: "path/to/jet2-image.jpg",
    },
  ];


  // ----------------scroll cards--------------------------

  // const containerRef = useRef(null);

  // useEffect(() => {
  //   const scrollInterval = setInterval(() => {
  //     if (containerRef.current) {
  //       containerRef.current.scrollBy({
  //         left: containerRef.current.offsetWidth, // Hozirgi o'lchamni qo'llash
  //         behavior: "smooth",
  //       });

  //       // Kartalar oxiriga yetganda boshidan boshlash
  //       if (
  //         containerRef.current.scrollLeft + containerRef.current.offsetWidth >=
  //         containerRef.current.scrollWidth
  //       ) {
  //         containerRef.current.scrollTo({ left: 0, behavior: "smooth" });
  //       }
  //     }
  //   }, 2000); // 2 soniyadan keyin o'zgaradi

  //   return () => clearInterval(scrollInterval);
  // }, []);

  return (
    <>
      <div className="homePage">
        <header className="homePage__header">
          <h1 className="homePage__title">
            Global standard for the independent evaluation of traders and investments in the best strategies
          </h1>
          <p className="homePage__subtitle">
            We support traders in validating their trading performance and securing investments, and provide investors with verified, low-risk trading strategies.
          </p>
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
              Sign up
            </button>
          )}
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
              Global standard for trader evaluation.
            </p>
            <h1 className="marketplace-title">
              <span role="img" aria-label="logo">
                📊
              </span>{" "}
              KYT - Know Your Trader Passport
            </h1>
            <p className="marketplace-description">
              An objective and unbiased evaluation of traders' skills and performance.
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
                To build greater confidence among investors.
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
                Securely upload your data with an API key that has read-only permissions.
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
                Everything you need, from statistics to investment attraction, all in one place.
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
            We make the cryptocurrency trading market fair <br /> and transparent.
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
                Submit your strategy on the <br /> KYT - Know Your Trader <br /> to acquire new clients.
              </h2>
              <p className="marketplace-subtitle">
                We take care of everything else with the investor.
              </p>
            </span>
            <Link to="/traders-cabinet">
              <button className="learn-more-btn">Learn more</button>
            </Link>
          </div>
          <div className="index-cards">
            <img src={bt_indexes} alt="" />
          </div>
        </div>

        <div className="marketplace-section-box">
          <div className="section widget-section">
            <div className="statistics">
              <h2 className="widget-title">
                Integrate the KYT - Know Your Trader widget into your website.
              </h2>
              <p className="widget-subtitle">
                Share your strategy performance on your <br /> personal website with the help of the widget.
              </p>
            </div>
            <div className="statistics-bar-chart">
              <img src={bt_widget} alt="" />
            </div>
          </div>

          <div className="section referral-section">
            <h2 className="referral-title">
              KYT - Know Your Trader Invitation Program
            </h2>
            <p className="referral-subtitle">
              Get a commission from the profits of your referrals, free from any hidden platform charges.
            </p>
            <Link to="/referral">
              <button className="btn referral-btn">How does it function?</button>
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
        <h1 className="faq-title">Questions We Get Asked Often</h1>
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
          {!token && <button className="faq-more-btn">Sign up</button>}
        </div>
      </div>

      <div className="account-container">
        <h2 className="account-title">
          Discover what traders and investors love about KYT - Know Your Trader.
        </h2>
        <p>We consider your input, as it helps us enhance our service.</p>
        <div className="reviews-container">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} onClick={handleCardClick} />
          ))}
        </div>
        <ReviewModal review={selectedReview} onClose={closeModal} />

        {/* <button className="referral-btnAsked">Leave a Review</button> */}
      </div>

      {/* Blog */}
      <section className="blog-section__container">
        <h2 className="blog-section__title">Our Posts</h2>
        <p className="blog-section__subtitle">Updates & News</p>
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
