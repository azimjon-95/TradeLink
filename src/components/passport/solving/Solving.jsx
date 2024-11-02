import React, { useState } from "react";
import "./Solving.css";
import { IoCheckmarkSharp } from "react-icons/io5";

function Solving() {
  const [activeData, setActiveData] = useState("trader");
  let solvigData = {
    trader: [
      {
        title:
          "Difficulty proving your trading history is accurate and trustworthy",
        description:
          "Validate Your Expertise. With TradeLink Passport, you get independent verification of your trading performance. Confidently share your verified results with investors, the community, and partners.",
      },
      {
        title:
          "Spending too much time creating reports for investors and partners.",
        description:
          "Effortless Reporting. TradeLink Passport generates insightful reports, analyzing dozens of key metrics. Easily share comprehensive data with your team and clients, saving time and effort.",
      },
      {
        title: "Struggling to attract investors to your trading strategies.",
        description:
          "Reach a Wider Audience. Gain visibility on TradeLink Marketplace. Connect directly with investors and expand your reach without costly marketing campaigns.",
      },
      {
        title:
          "Lacking a professional online presence to showcase your trading accomplishments.",
        description:
          "Build Your Trading Brand. Create a compelling TradeLink Passport profile that acts as your digital business card. Highlight your winning strategies and track record to attract potential investors.",
      },
      {
        title:
          "Feeling isolated and seeking a community of like-minded traders.",
        description:
          "Join a Thriving Community. Connect with top traders from around the globe through TradeLink Passport. Participate in exciting tournaments, benchmark your performance, and celebrate your successes.",
      },
      {
        title:
          "The complexity and expense of managing individual client accounts.",
        description:
          "Scale Your Strategy. Set up a virtual fund on TradeLink Marketplace and effortlessly manage investors. Our platform provides precise trade duplication, personalized risk management, and automated reporting.",
      },
    ],
    investor: [
      {
        title: "Uncertainty about a trader's claimed performance.",
        description:
          "Verify Before You Invest. Always request a TradeLink Passport link. See tamper-proof trading history, sourced directly from exchanges, giving you complete confidence.",
      },
      {
        title:
          "Lack of transparency and real-time insight into your investments.",
        description:
          "Lack of transparency and real-time insight into your investments.",
      },
      {
        title: "Difficulty understanding complex trading charts and metrics.",
        description:
          "Simplify Your Analysis. Receive clear, concise weekly reports from TradeLink Passport. Gain insights into your portfolio's performance without getting lost in data overload.",
      },
      {
        title:
          "The challenge of finding trustworthy and skilled traders to manage your investments.",
        description:
          "Discover Top Talent. Explore TradeLink Marketplace, a curated platform featuring the world's best crypto traders. Find the perfect strategy to match your investment goals and unlock new opportunities.",
      },
    ],
  };

  return (
    <div className="solving">
      <div className="solving_container">
        <h1 className="solving_title">
          TradeLink Passport: Solving Key Challenges for Crypto Traders &
          Investors
        </h1>
        <p className="solving_description">
          Gain a competitive edge with these powerful solutions.
        </p>
        <div className="solving_type">
          <button
            className={activeData === "trader" ? "active" : ""}
            onClick={() => setActiveData("trader")}
          >
            For trader
          </button>
          <button
            className={activeData === "investor" ? "active" : ""}
            onClick={() => setActiveData("investor")}
          >
            For an investor
          </button>
        </div>
        <div className="solving_answers">
          {solvigData[activeData].map((item, index) => {
            return (
              <div className="solving_answer_item" key={index}>
                <h1>
                  <b>{index + 1}</b> <span>{item.title}</span>
                </h1>
                <p>
                  <IoCheckmarkSharp /> <span>{item.description}</span>
                </p>
              </div>
            );
          })}
        </div>
        <button>Get Started For FREE</button>
      </div>
    </div>
  );
}

export default Solving;
