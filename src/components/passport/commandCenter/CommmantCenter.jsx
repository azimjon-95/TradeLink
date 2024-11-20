import React, { useEffect, useState } from "react";
import "./CommandCenter.css";
import { IoCheckmarkSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import stats_img from "../../../assets/passport/trading_stats.png";
import personal_img from "../../../assets/passport/personal_page.png";
import trading_hq from "../../../assets/passport/trading_hq.png";
import rating from "../../../assets/passport/rating.png";
import capital from "../../../assets/passport/capital.png";

import investment_attraction from "../../../assets/passport/swiper/investment_attraction.png";
import swiper_rating from "../../../assets/passport/swiper/rating.png";
import portfolio from "../../../assets/passport/swiper/portfolio.png";
import trader from "../../../assets/passport/swiper/trader.png";
import statistic from "../../../assets/passport/swiper/statistics.png";

function CommmantCenter() {
  const serviceData = [
    { img: stats_img, title: "Trading Stats" },
    { img: personal_img, title: "Personal page" },
    { img: trading_hq, title: "Trading HQ" },
    { img: rating, title: "Traders' Rating" },
    { img: capital, title: "Attract Capital" },
  ];

  const swiperData = [
    {
      img: statistic,
      title: "Track Your Trading Progress:",
      description: "Gain insights into your trading performance with detailed analysis.",
      lists: [
        "Complete Trading Log: Access a full history of all your trades since the creation of your account.",
        "Over 60 Performance Metrics: Utilize a vast array of indicators to evaluate your trading strategies.",
        "Up-to-the-Minute Data: Keep up with real-time updates on your trading activity.",
        "Monitor Active Trades: Stay on top of your open positions and their status.",
        "Customizable Data Views: Choose how you'd like to visualize your trading statistics.",
      ],
    },
    {
      img: trader,
      title: "Build Your Trader Profile:",
      description: "Showcase your trading expertise and progress with a professional portfolio.",
      lists: [
        "Create a Powerful Portfolio: Build a portfolio that highlights your best trading achievements.",
        "Deep Market Insights: Gain access to detailed metrics that help you analyze your trading strategies.",
        "Easy Networking: Include your social media and contact info to connect with other traders.",
        "Showcase Your Best Work: Display your strategies and portfolios with full customization options.",
      ],
    },
    {
      img: portfolio,
      title: "Manage Multiple Trading Accounts:",
      description: "Easily connect and manage all your exchange accounts in one place.",
      lists: [
        "Unify Your Accounts: Integrate all your trading accounts into a single platform for easy management.",
        "Unified Overview: Get a comprehensive view of your performance across all platforms.",
        "Cross-Exchange Strategies: Manage and diversify your portfolios with trades across different exchanges.",
      ],
    },
    {
      img: swiper_rating,
      title: "Rise Through the Global Rankings:",
      description: "Share your portfolio, compete globally, and showcase your achievements.",
      lists: [
        "Display Your Achievements: Share your portfolio with the global community and rise in the ranks.",
        "Advanced Search Filters: Use powerful filtering options to narrow down top traders.",
        "Connect with Leading Traders: Discover and follow successful traders from around the world.",
        "Transparent Rating System: Benefit from an objective and clear rating system for traders.",
      ],
    },
    {
      img: investment_attraction,
      title: "Attract Investors with Proven Strategies",
      description: "Share your trading strategy, attract capital, and grow together.",
      lists: [
        "Gain Investment Opportunities: Present your strategy on the KYT marketplace and attract potential investors.",
        "Perfect Replication: Use advanced tools to precisely replicate your trading strategies for investors.",
        "Customizable Algorithmic Strategies: Develop tailored strategies with custom indexes to meet the needs of investors.",
        "Flexible Billing and Commission: Streamline how commissions are calculated and billed for investors.",
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % serviceData.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [serviceData.length]);

  return (
    <div className="commandCenter">
      <div className="commandCenter_container">
        <h1 className="commandCenter_title">
          Your All-in-One Crypto Trading Hub.
        </h1>
        <div className="command_center_services">
          {serviceData.map((item, index) => (
            <Link
              className={`command_center_services_item ${activeIndex === index ? "active" : ""
                }`}
              key={index}
              onClick={() => setActiveIndex(index)}
            >
              <img src={item.img} alt="" />
              <p>{item.title}</p>
            </Link>
          ))}
        </div>
        <div className="commandCenter_img_and_text">
          <div className="commandCenter_img_and_text_left">
            <img
              src={swiperData[activeIndex]?.img}
              alt="investment_attraction"
            />
          </div>
          <div className="commandCenter_img_and_text_right">
            <h1>{swiperData[activeIndex]?.title}</h1>
            <p>{swiperData[activeIndex]?.description}</p>
            <ul>
              {swiperData[activeIndex]?.lists?.map((list, index) => (
                <li key={index}>
                  <IoCheckmarkSharp />
                  <span>{list}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommmantCenter;
