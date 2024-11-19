import React, { useState } from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import RigthImg from "../../assets/referral/referrals-preview.png";
import avatar_img1 from "../../assets/banner/fase2.png";
import avatar_img2 from "../../assets/banner/fase3.png";
import avatar_img3 from "../../assets/banner/fase1.png";
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
      question: "How are payments processed?",
      answer:
        "Your monthly commissions and referral profits are calculated and deposited directly into your KYT wallet. These funds are always available for withdrawal at your convenience!",
    },
    {
      question: "Will my friend’s earnings be affected by using my referral link?",
      answer:
        "Not at all. The platform’s service fee remains the same regardless of registration method, so your friend’s profits will not be impacted by signing up via your referral link.",
    },
    {
      question: "Where can I get help with additional questions?",
      answer:
        "You can reach out to our KYT support team anytime. We’re here to assist you with any queries or concerns you might have.",
    },
  ];

  return (
    <div className="referring-main-continer">
      <div className="referringBanner">
        <div className="referringBanner__container">
          <div >
            <h1>Invite Friends. <br /> Grow Your Crypto Together.</h1>
            <p>Get up to 25% commission from your friend's monthly profits on the KYT Marketplace.</p>
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
        <h2 className="referring-title">Advantages of Inviting Your Friends.</h2>
        <p className="referring-subtitle">Clear conditions, 5 referral levels, and mutual earning opportunities!</p>

        <div className="referring-grid">
          <div className="referring-card-green">
            <p>(Coming soon) highlights the top earnings from a single referee last month.</p>
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
          <div className="referring-main">
            <div className="referring-card-blue">
              <p>Comprehensive analytics panel with evolving benefits as you progress.</p>
              <p>5-Tier Referral Program.</p>
            </div>
            <div className="referring-box">
              <div className="referring-card-purple">
                <p>Earn up to 25% commission from your referral’s earnings.</p>
              </div>

              <div className="referring-card-yellow">
                <p>No minimum withdrawal limit.</p>
              </div>
            </div>
          </div>
        </div>



        <h2 className="rarn-title">How it works</h2>
        <p className="rarn-subtitle">Generate income while others do the work!</p>

        <div className="rarn-info-grid">
          <div className="rarn-info-card">
            <h3 className="rarn-info-number">01</h3>
            <p className="rarn-info-text">Invite your friends, watch your network grow, and earn together!</p>
          </div>
          <div className="rarn-info-card">
            <h3 className="rarn-info-number">02</h3>
            <p className="rarn-info-text">The larger the total AUM of your referrals, the more favorable the terms.</p>
          </div>
          <div className="rarn-info-card">
            <h3 className="rarn-info-number">03</h3>
            <p className="rarn-info-text">Earn from up to 5 referral levels and analyze detailed results at each level.</p>
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
            <h1>Affiliate Program (Earn up to 35% commission)</h1>
            <p>If you have access to significant traffic and wish to receive exclusive cooperation terms, <br /> feel free to apply for our influencer program.</p>
          </div>
          {/* <button>Apply now</button> */}
        </div>


        <div className="hottest-container">
          <h1 className="hottest-title">FAQ</h1>
          <p className="hottest-subtitle">Here are the answers to the most frequently asked questions.</p>
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



