import React, { useState } from "react";
import "./Solving.css";
import { IoCheckmarkSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { langText, solvigData } from "./lang";

function Solving() {
  const [activeData, setActiveData] = useState("trader");
  const lang = useSelector((state) => state.language.currentLanguage);
  // let aa = solvigData[activeData];

  // let solvigData = {
  //   trader: [
  //     {
  //       title:
  //         "Difficulty in proving the accuracy and trustworthiness of your trading history",
  //       description:
  //         "Certify Your Expertise. KYT Traders Passport provides an independent, verifiable record of your trading results. Share your proven performance with confidence, reaching investors, partners, and the crypto community.",
  //     },
  //     {
  //       title:
  //         "Spending excessive time preparing reports for investors and stakeholders",
  //       description:
  //         "Automate Your Reports. KYT Traders Passport generates in-depth reports, offering a detailed analysis of critical performance metrics. Save time by effortlessly sharing your data with your team and clients.",
  //     },
  //     {
  //       title: "Challenges in attracting investors to your trading strategies",
  //       description:
  //         "Expand Your Reach. Gain exposure on KYT Marketplace. Connect directly with investors and grow your audience without the need for expensive marketing efforts.",
  //     },
  //     {
  //       title:
  //         "Not having a professional online presence to showcase your trading success",
  //       description:
  //         "Establish Your Trading Brand. Create a standout profile on KYT Traders Passport. Present your best strategies and results to potential investors and partners.",
  //     },
  //     {
  //       title:
  //         "Feeling disconnected and looking for a network of like-minded traders",
  //       description:
  //         "Join a Thriving Network. Connect with top traders globally via KYT Traders Passport. Take part in competitions, track your progress, and celebrate your wins together.",
  //     },
  //     {
  //       title:
  //         "The complexity and costs associated with managing multiple client accounts",
  //       description:
  //         "Scale Effortlessly. Manage multiple investors with ease using KYT Marketplace. Our platform simplifies trade duplication, risk management, and automated reporting.",
  //     },
  //   ],
  //   investor: [
  //     {
  //       title: "Doubts about the authenticity of a trader’s performance claims",
  //       description:
  //         "Verify Before You Invest. Request a KYT Traders Passport link to access unaltered trading data sourced directly from exchanges, ensuring complete transparency.",
  //     },
  //     {
  //       title: "Lack of visibility and real-time updates on your investments",
  //       description:
  //         "Gain Full Transparency. Stay informed with live data and performance tracking, providing you with constant updates and insights into your investments.",
  //     },
  //     {
  //       title:
  //         "Struggling to make sense of complicated trading charts and metrics",
  //       description:
  //         "Simplify Your Investment Analysis. KYT Traders Passport offers clear and concise reports, breaking down complex data into digestible insights for your portfolio.",
  //     },
  //     {
  //       title:
  //         "Difficulty finding trustworthy and skilled traders to manage your investments",
  //       description:
  //         "Discover Top Traders. Browse KYT Marketplace to find carefully vetted crypto traders. Select the strategy that aligns with your investment goals and unlock new growth opportunities.",
  //     },
  //   ],
  // };

  return (
    <div className="solving">
      <div className="solving_container">
        <h1 className="solving_title">{langText.title[lang]}</h1>
        <p className="solving_description">{langText.description[lang]}</p>
        <div className="solving_type">
          <button
            className={activeData === "trader" ? "active" : ""}
            onClick={() => setActiveData("trader")}
          >
            {langText.solving_type.btn1[lang]}
          </button>
          <button
            className={activeData === "investor" ? "active" : ""}
            onClick={() => setActiveData("investor")}
          >
            {langText.solving_type.btn2[lang]}
          </button>
        </div>
        <div className="solving_answers">
          {solvigData[activeData][lang].map((item, index) => {
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
        <button>{langText.bottom_btn[lang]}</button>
      </div>
    </div>
  );
}

export default Solving;
