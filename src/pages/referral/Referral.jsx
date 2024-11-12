import React, { useState } from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import RigthImg from "../../assets/referral/referrals-preview.png";
import benefits from "../../assets/banner/benefits-faces.png";
import { setModalType } from "../../context/modalType";

function Referral() {
  const [activeKey, setActiveKey] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let token = localStorage.getItem("access_token");

  const Effect = () => {
    if (token) {
      navigate("/trader-cabinet/dashboard");
    }
  }

  const referralLevels = [
    { position: "+8", percentage: 100, avatarUrl: 'https://randomuser.me/api/portraits/men/1.jpg', level: 1 },
    { position: "+100 new friends", percentage: 30, avatarUrl: 'https://randomuser.me/api/portraits/men/2.jpg', level: 2 },
    { position: "AUM $50,000", percentage: 15, avatarUrl: 'https://randomuser.me/api/portraits/men/3.jpg', level: 3 },
    { position: "+44", percentage: 7, avatarUrl: 'https://randomuser.me/api/portraits/men/4.jpg', level: 4 },
    { position: "+$2,400", percentage: 2.5, avatarUrl: 'https://randomuser.me/api/portraits/men/5.jpg', level: 5 }
  ];
  const togglePanel = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };


  const faqData = [
    {
      question: "How payments are made?",
      answer:
        "The user's commissions, as well as referee profits, are calculated once a month. All of your earnings are transferred to your KYT wallet, and are always available to withdraw!",
    },
    {
      question: "Does my friend lose any profit by registering with the referral link?",
      answer:
        "No, he does not. Regardless of the referral link, the service commission is fixed, so from the user's perspective, it doesn't matter if he was registered with the referral link.",
    },
    {
      question: "I have additional questions, where can I receive answers?",
      answer:
        "Feel free to contact us at KYT, we will be happy to answer any of your questions.",
    },
  ];
  return (
    <div className="referring-main-continer">
      <div className="referringBanner">
        <div className="referringBanner__container">
          <div >
            <h1>Refer Friends. <br /> Earn Crypto Together.</h1>
            <p>Earn up to 25% commission on every friend's profitable month across KYT Marketplace</p>
            {
              token ?
                <Link onClick={() => Effect()}>Log In to invite friends</Link>
                :
                <Link onClick={() => dispatch(setModalType("signUp"))}>Start building your trading Portfolio for free</Link>
            }
          </div>
          <div>
            <img src={RigthImg} alt="img" />
          </div>
        </div>
      </div>

      <div className="referring-container">
        <h2 className="referring-title">Benefits of Referring your Friends</h2>
        <p className="referring-subtitle">Transparent terms, 5 referral levels, and lots of earnings from each side!</p>

        <div className="referring-grid">
          <div className="referring-card-green">
            <p>(Coming soon) is the record earnings for 1 referee in the previous month</p>
            <div className="referring-avatar-container">
              <img src={benefits} alt="" />
            </div>
          </div>
          <div className="referring-main">
            <div className="referring-card-blue">
              <p>Detailed analytics panel, condition improvements as you go,</p>
              <p>5 levels of referral program</p>
            </div>
            <div className="referring-box">
              <div className="referring-card-purple">
                <p>Up to 25% commission from referral's profit</p>
              </div>

              <div className="referring-card-yellow">
                <p>No minimum payment threshold</p>
              </div>
            </div>
          </div>
        </div>



        <h2 className="rarn-title">How it works</h2>
        <p className="rarn-subtitle">Earn money while others work!</p>

        <div className="rarn-info-grid">
          <div className="rarn-info-card">
            <h3 className="rarn-info-number">01</h3>
            <p className="rarn-info-text">Invite your friends, watch them invite their friends, and get rich together</p>
          </div>
          <div className="rarn-info-card">
            <h3 className="rarn-info-number">02</h3>
            <p className="rarn-info-text">The greater the total AUM of your referrals, the better the terms</p>
          </div>
          <div className="rarn-info-card">
            <h3 className="rarn-info-number">03</h3>
            <p className="rarn-info-text">Earn money from up to 5 levels of referrals, and analyze in detail the results from each level</p>
          </div>
        </div>

        <div className="rarn-levels-container-box">
          <div className="rarn-levels-container">

            {referralLevels.map((level, index) => (
              <div key={index} className="rarn-level">
                <div className={`rarn-level-avatar-${index + 1}`}>
                  <img
                    src={level.avatarUrl}
                    alt="avatar"
                  />
                </div>
                <span className={`rarn-level-badge-${index + 1}`}>{level.position}</span>
                <p className="rarn-level-percentage">{level.percentage}%</p>
                <p className="rarn-level-description">Level {level.level} referrals</p>
              </div>
            ))}
          </div>

        </div>


        <div className="affiliate-levels-container-box">
          <div className="affiliate-levels">
            <h1>Affiliate Program (Up to 35% commission)</h1>
            <p>If you have access to a large amount of traffic and want to receive special conditions for cooperation, <br /> please do not hesitate to apply to our influencer program.</p>
          </div>
          {/* <button>Apply now</button> */}
        </div>


        <div className="hottest-container">
          <h1 className="hottest-title">FAQ</h1>
          <p className="hottest-subtitle">Here are the answers for the hottest questions</p>
          {faqData.map((item, index) => (
            <div key={index} className="hottest-card">
              <div className="hottest-header" onClick={() => togglePanel(index)}>
                <h3 className="hottest-question">{item.question}</h3>
                <button className="hottest-question-btn">
                  {activeKey === index ? <MinusOutlined /> : <PlusOutlined />}
                </button>
              </div>
              {activeKey === index && (
                <div className="hottest-content">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default Referral;



