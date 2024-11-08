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
      title: "Performance Analytics:",
      description: "Track your trading journey with precision.",
      lists: [
        "Comprehensive Trading History: Access your entire trading history from the moment your exchange account was created.",
        "60+ Statistical Indicators: Leverage over 60 detailed metrics to analyze performance.",
        "Real-Time Updates: Stay informed with continuously updated data.",
        "Position Monitor: Track your open positions with ease.",
        "Flexible Data Visualization: Customize how your data is displayed to suit your needs.",
      ],
    },
    {
      img: trader,
      title: "Showcase Your Expertise:",
      description: "Build your trading brand and visualize your trading data.",
      lists: [
        "Make an Impact: Create a portfolio that highlights your performance with a powerful results chart.",
        "Comprehensive Insights: Access detailed statistics to fully understand your crypto portfolio and strategies.",
        "Connect Easily: Include your contact details and social media links for seamless networking.",
        "Showcase Your Success: Display all your strategies and portfolios with a highly customizable system.",
      ],
    },
    {
      img: portfolio,
      title: "Manage All Your Trading Accounts:",
      description: "Effortlessly connect all of your exchange accounts.",
      lists: [
        "Merge Accounts: Combine multiple exchange accounts into a single, unified view.",
        "Total Overview: View the combined results of all your accounts in one place.",
        "Cross-Exchange Portfolios: Create and manage portfolios that span across different exchanges.",
      ],
    },
    {
      img: swiper_rating,
      title: "Climb the Global Ranks:",
      description:
        "Showcase your portfolio, compete for the top, and display your achievements with pride.",
      lists: [
        "Showcase Your Portfolio: Share your portfolio globally, compete for the top, and display your achievements with pride.",
        "Advanced Filtering: Leverage our flexible filtering system to refine your search.",
        "Connect with Top Traders: Discover leading traders from around the world.",
        "Independent Ratings: Benefit from TradeLink's innovative, transparent rating system.",
      ],
    },
    {
      img: investment_attraction,
      title: "Attract Capital with Proven Success",
      description:
        "Share your strategy, attract investors, and grow your capital together.",
      lists: [
        "Attract Investments: Share your strategy on TradeLink Marketplace, collaborate with investors, and grow your capital together.",
        "Unmatched Precision: Leverage our exclusive duplication technology for precise strategy replication.",
        "Custom Algorithmic Indexes: Tailor algorithmic indexes to meet your clients' specific needs with advanced strategies.",
        "Streamlined Billing: Revolutionize billing and commission calculations with our flexible system.",
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % serviceData.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="commandCenter">
      <div className="commandCenter_container">
        <h1 className="commandCenter_title">
          Your Ultimate Crypto Trading <br /> Command Center
        </h1>
        <div className="command_center_services">
          {serviceData.map((item, index) => (
            <Link
              className={`command_center_services_item ${
                activeIndex === index ? "active" : ""
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
