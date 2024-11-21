import React, { useState } from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import RigthImg from "../../assets/referral/referrals-preview.png";
import avatar_img1 from "../../assets/banner/fase2.png";
import avatar_img2 from "../../assets/banner/fase3.png";
import avatar_img3 from "../../assets/banner/fase1.png";
import { setModalType } from "../../context/modalType";
import { translations } from './Lang';

function Referral() {
  const currentLanguage = useSelector(
    (state) => state.language.currentLanguage
  );
  const t = translations[currentLanguage];

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
    { position: t.plus100NewFriends, percentage: 30, avatarUrl: 'https://randomuser.me/api/portraits/men/2.jpg', level: 2 },
    { position: "AUM $50,000", percentage: 15, avatarUrl: 'https://randomuser.me/api/portraits/men/3.jpg', level: 3 },
    { position: "+44", percentage: 7, avatarUrl: 'https://randomuser.me/api/portraits/men/4.jpg', level: 4 },
    { position: "+$2,400", percentage: 2.5, avatarUrl: 'https://randomuser.me/api/portraits/men/5.jpg', level: 5 }
  ];
  const togglePanel = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };


  const faqData = [
    {
      question: t.faqData[0].question,
      answer: t.faqData[0].answer,
    },
    {
      question: t.faqData[1].question,
      answer: t.faqData[1].answer,
    },
    {
      question: t.faqData[2].question,
      answer: t.faqData[2].answer,
    },
  ];

  return (
    <div className="referring-main-continer">
      <div className="referringBanner">
        <div className="referringBanner__container">
          <div >
            <h1 dangerouslySetInnerHTML={t.bannerTitle} />
            <p>{t.bannerSubtitle}</p>
            {
              token ?
                <Link onClick={() => Effect()}>{t.loginCTA}</Link>
                :
                <Link onClick={() => dispatch(setModalType("signUp"))}>{t.signupCTA}</Link>
            }
          </div>
          <div>
            <img src={RigthImg} alt="img" />
          </div>
        </div>
      </div>

      <div className="referring-container">
        <h2 className="referring-title">{t.advantagesTitle}</h2>
        <p className="referring-subtitle">{t.advantagesSubtitle}</p>

        <div className="referring-grid">
          <div className="referring-card-green">
            <p>{t.greenCard}</p>
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
              <p>{t.blueCard}</p>
              <p>{t.fiveTierReferralProgram}</p>
            </div>
            <div className="referring-box">
              <div className="referring-card-purple">
                <p>{t.purpleCard}</p>
              </div>

              <div className="referring-card-yellow">
                <p>{t.yellowCard}</p>
              </div>
            </div>
          </div>
        </div>



        <h2 className="rarn-title">{t.howItWorksTitle}</h2>
        <p className="rarn-subtitle">{t.howItWorksSubtitle}</p>

        <div className="rarn-info-grid">
          <div className="rarn-info-card">
            <h3 className="rarn-info-number">01</h3>
            <p className="rarn-info-text">{t.step1}</p>
          </div>
          <div className="rarn-info-card">
            <h3 className="rarn-info-number">02</h3>
            <p className="rarn-info-text">{t.step2}</p>
          </div>
          <div className="rarn-info-card">
            <h3 className="rarn-info-number">03</h3>
            <p className="rarn-info-text">{t.step3}</p>
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
                <p className="rarn-level-description">{t.le} {level.level} {t.re}</p>
              </div>
            ))}
          </div>

        </div>


        <div className="affiliate-levels-container-box">
          <div className="affiliate-levels">
            <h1>{t.referralProgramTitle}</h1>
            <p dangerouslySetInnerHTML={t.referralProgramDescription} />
          </div>
          {/* <button>Apply now</button> */}
        </div>


        <div className="hottest-container">
          <h1 className="hottest-title">{t.faqTitle}</h1>
          <p className="hottest-subtitle">{t.faqSubtitle}</p>
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



