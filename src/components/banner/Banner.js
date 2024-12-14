import React, { useEffect, useState, useRef } from "react";
import "./style.css";
import "./media.css";
import AOS from "aos";
import { Collapse, Skeleton } from "antd";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { BsQuestionCircle } from "react-icons/bs";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowUpRight } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { BsCheck2 } from "react-icons/bs";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import axios from "../../api";
import InfoModal from "../passport/rating/InfoModal";
import shadow_1 from "../../assets/banner/shadow_1.png";
import shadow_2 from "../../assets/banner/shadow_2.png";
import corner_1 from "../../assets/banner/corner1.png";
import corner_2 from "../../assets/banner/corner2.png";
import Frame1 from "../../assets/newBanners/Frame1.png";
import Frame2 from "../../assets/newBanners/Frame2.png";
import Frame3 from "../../assets/newBanners/Frame3.png";
import Frame4 from "../../assets/newBanners/Frame4.png";
import Frame5 from "../../assets/newBanners/Frame5.png";
import my_img1 from "../../assets/banner/my_img1.png";
import ret from "../../assets/newBanners/Frame6.png";
import Ellipse from "../../assets/newBanners/image2.png";
import ForTrader from "../../components/forTrader/ForTrader";
import "aos/dist/aos.css";
import { transMonth } from "../passport/rating/Lang";
import { translate } from "./Lang";
import "swiper/css";
import "swiper/css/pagination";
import Support from "./Support";
// import { IoRadioButtonOn } from "react-icons/io5";

const Banner = () => {
  const location = useLocation();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [slider, setSlider] = useState(1); // Faol slayd raqami (1 dan boshlanadi)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContentType, setModalContentType] = useState("");
  const [loadingTop, setLoadingTop] = useState(true);
  const [leaderboardData, setLeaderboardData] = useState(null);
  const [selectedOption] = useState("score");
  const current = useSelector((state) => state.language.currentLanguage);
  const month = transMonth[current];

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openModal = (contentType) => {
    setModalContentType(contentType);
    setIsModalOpen(true);
  };

  useEffect(() => {
    const new_token = new URLSearchParams(location.search).get("token");
    if (new_token) {
      localStorage.setItem("access_token", new_token);
    }
  }, [location]);

  const currentLanguage = useSelector(
    (state) => state.language.currentLanguage
  );
  const t = translate[currentLanguage];

  useEffect(() => {
    AOS.init({
      duration: 900, // Animatsiya davomiyligi (ms)
      easing: "ease-in-out", // Animatsiya harakati
      once: true, // Faqat bir marta animatsiya ishlashi
    });
  }, []);

  useEffect(() => {
    setLoadingTop(true);
    let API = `leaderboard/three-top-units?sort_type=${selectedOption}`;
    axios
      .get(API)
      .then((res) => {
        for (const key in res?.data?.data) {
          let data = res?.data?.data[key].slice(0, 5);
          setLeaderboardData((prevData) => ({
            ...prevData,
            [key]: data,
          }));
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoadingTop(false));
  }, [selectedOption]);

  const createData = (data, frames) =>
    data?.map((item, index) => ({
      id: item?.portfolio_id,
      rank: index + 1,
      name: item?.user_name || "N/A",
      icons: frames[index],
      reting: ret,
      org: item?.portfolio_name || "N/A",
      score: typeof item?.score === "number" ? item.score.toFixed(2) : "0.00",
    })) || [];

  const frames = [Frame1, Frame2, Frame3, Frame4, Frame5];

  const data = {
    monthly: createData(leaderboardData?.monthly, frames),
    quarterly: createData(leaderboardData?.quarterly, frames),
  };

  const customIcons = ({ isActive }) =>
    isActive ? (
      <MinusOutlined style={{ fontSize: "22px" }} />
    ) : (
      <PlusOutlined style={{ fontSize: "22px" }} />
    );
  return (
    <>
      <div className="homePage">
        <div className="banner_main_container">
          <header className="homePage__header">
            <div className="homePage__texts">
              <h1 className="homePage__title">{t.theMost}</h1>
              <h1
                style={{ color: "#7241d3" }}
                className="homePage__title homePage__title_x"
              >
                {t.monitoring}
              </h1>
              <p className="homePage__subtitle">{t.global}</p>
            </div>

            <div className="homePage__images">
              <img src={Ellipse} alt="" />
            </div>
          </header>
        </div>

        <div className="slider-container">
          <div className="banner_main_container">
            <Swiper
              slidesPerView={1.1} // Displays parts of both previous and next slides
              spaceBetween={30} // Space between slides
              centeredSlides={true} // Center the active slide
              pagination={{
                clickable: true,
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              initialSlide={1}
              onSwiper={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              onSlideChange={(swiper) => setSlider(swiper.activeIndex + 1)}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <div className="simple-btn">
                <p>0{slider}</p>
                <button ref={prevRef} className="prev-btn">
                  <BsArrowLeftShort />
                </button>
                <button ref={nextRef} className="next-btn">
                  <BsArrowRightShort />
                </button>
              </div>

              <SwiperSlide className="swiper-slide_cert">
                <div className="swiper-slide-main_img"></div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <div className="swiper-slide-main">
                  <div className="homeslide__left">
                    <div>
                      <p>{t.passportSubtitle}</p>
                      <h1>{t.passportTitle}</h1>
                    </div>
                    <Link to="/passport">
                      <button>{t.learnMore}</button>
                    </Link>
                  </div>
                  <div className="homeslide__right">
                    <img src={my_img1} alt="" />
                    <div className="homeslide__right_box">
                      <div>
                        <div>
                          <BsCheck2 />
                        </div>
                        <p>{t.passportBenefits[0]}</p>
                      </div>
                      <div>
                        <div>
                          <BsCheck2 />
                        </div>
                        <p>{t.passportBenefits[1]}</p>
                      </div>
                      <div>
                        <div>
                          <BsCheck2 />
                        </div>
                        <p>{t.passportBenefits[2]}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide_cert_slide_3">
                <div className="swiper-slide-main_slide_3">
                  <div className="swiper-slide-main_slide_3_info_img"></div>
                  <div className="swiper-slide-main_slide_3_info">
                    <h1>{t.analyzing_trader}</h1>
                    <span>
                      <p>{t.track_trader}</p>
                      <Link to="/rating">
                        <button className="homeslide__left_btn">
                          {t.learnMore}
                        </button>
                      </Link>
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      {/* passport */}
      <div className="marketplace">
        <h1 className="marketplace-subtitle_pass">
          {t.kytreat} <p>KYT</p>
        </h1>

        <div className="reting_btns-banner">
          <button onClick={() => openModal("portfolio")}>
            <BsQuestionCircle /> {t.addMod1}
          </button>
          <button onClick={() => openModal("score")}>
            <BsQuestionCircle /> {t.addMod2}
          </button>
        </div>

        <InfoModal
          isOpen={isModalOpen}
          onClose={closeModal}
          contentType={modalContentType}
          currentLanguage={current}
        />

        <div className="reating_banner_conts">
          <div className="reating_banner_box">
            <span>
              <strong className="reating_banner_box_title">
                {t.monthlyTop}
              </strong>
              <p>{`${month.oneMonthAgo} - ${month.today}`}</p>
            </span>
            <div className="reting_banner_cards">
              {loadingTop ? (
                <Skeleton
                  title={false}
                  active
                  paragraph={{ rows: 5, width: "100%", height: "75px" }}
                />
              ) : (
                <>
                  {data.monthly.map((item) => (
                    <Link key={item.rank} to={`/portfolio/${item?.id}`}>
                      <div className="card_ret-bann">
                        <span>
                          <p
                            className={`${
                              item.rank === 1 ? "item-rank" : "item-rank-circle"
                            }`}
                          >
                            {item.rank}
                          </p>
                          <img width={28} src={item.icons} alt="" />
                          <div className="name_reting_user">
                            {item.name} <br />{" "}
                            <p>
                              {t.by} {item.org}
                            </p>
                          </div>
                        </span>

                        <span className="name_reting_res">
                          <img width={28} src={item.reting} alt="" />
                          <p> {item.score}</p>
                        </span>
                      </div>
                    </Link>
                  ))}
                </>
              )}
            </div>
          </div>

          <div className="reating_banner_box">
            <span>
              <strong className="reating_banner_box_title">
                {t.quarterlyTop}
              </strong>
              <p>{`${month.oneMonthAgo} - ${month.today}`}</p>
            </span>
            <div className="reting_banner_cards">
              {loadingTop ? (
                <Skeleton
                  title={false}
                  active
                  paragraph={{ rows: 5, width: "100%", height: "45px" }}
                />
              ) : (
                <>
                  {data.quarterly.map((item) => (
                    <Link key={item.rank} to={`/portfolio/${item?.id}`}>
                      <div className="card_ret-bann">
                        <span>
                          <p
                            className={`${
                              item.rank === 1 ? "item-rank" : "item-rank-circle"
                            }`}
                          >
                            {item.rank}
                          </p>
                          <img width={28} src={item.icons} alt="" />
                          <div className="name_reting_user">
                            {item.name} <br />{" "}
                            <p>
                              {t.by} {item.org}
                            </p>
                          </div>
                        </span>

                        <span className="name_reting_res">
                          <img width={28} src={item.reting} alt="" />
                          <p> {item.score}</p>
                        </span>
                      </div>
                    </Link>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Как начать */}
      <ForTrader />

      {/* Мы поддерживаем */}
      <Support />

      {/* Наши тарифы */}
      <div className="ourTariffs">
        <div className="ourTariffs_img_box">
          <h1>{t.ourTariffs}</h1>

          <div className="ourTariffs-box">
            <div className="ourTariffs-card">
              <div className="ourTariffs-main">
                <h2>{t.start}</h2>
                <p>300 USDT / {t.yer}</p>
                <button>
                  <BsArrowUpRight />
                </button>
              </div>
              <div className="ourTariffs__right_box">
                <div>
                  <div>
                    <BsCheck2 />
                  </div>{" "}
                  <p>{t.forStart[0]}</p>
                </div>
                <div>
                  <div>
                    <BsCheck2 />
                  </div>{" "}
                  <p>{t.forStart[1]}</p>
                </div>
                <div>
                  <div>
                    <BsCheck2 />
                  </div>{" "}
                  <p>{t.forStart[2]}</p>
                </div>
              </div>
            </div>
            <div className="ourTariffs-card">
              <div className="ourTariffs-main">
                <h2>{t.profi}</h2>
                <p>1 500 USDT / {t.yer}</p>
                <button>
                  <BsArrowUpRight />
                </button>
              </div>

              <div className="ourTariffs__right_box">
                <div>
                  <div>
                    <BsCheck2 />
                  </div>{" "}
                  <p>{t.forProfi[0]}</p>
                </div>
                <div>
                  <div>
                    <BsCheck2 />
                  </div>{" "}
                  <p>{t.forProfi[1]}</p>
                </div>
                <div>
                  <div>
                    <BsCheck2 />
                  </div>{" "}
                  <p>{t.forProfi[2]}</p>
                </div>
                <div>
                  <div>
                    <BsCheck2 />
                  </div>{" "}
                  <p>{t.forProfi[3]}</p>
                </div>
              </div>
            </div>
            <div className="ourTariffs-card">
              <div className="ourTariffs-main">
                <h2>{t.profi}</h2>
                <p>5 000 USDT / {t.yer}</p>
                <button>
                  <BsArrowUpRight />
                </button>
              </div>
              <div className="ourTariffs__right_box">
                <div>
                  <div>
                    <BsCheck2 />
                  </div>{" "}
                  <p>{t.forTarif[0]}</p>
                </div>
                <div>
                  <div>
                    <BsCheck2 />
                  </div>{" "}
                  <p>{t.forTarif[1]}</p>
                </div>
                <div>
                  <div>
                    <BsCheck2 />
                  </div>{" "}
                  <p>{t.forTarif[2]}</p>
                </div>
                <div>
                  <div>
                    <BsCheck2 />
                  </div>{" "}
                  <p>{t.forTarif[3]}</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <img className="corner_1" src={corner_1} alt="" />
            <img className="corner_2" src={corner_2} alt="" />
          </div>
        </div>
        <div>
          <img className="shadow_1" src={shadow_1} alt="" />
          <img className="shadow_2" src={shadow_2} alt="" />
        </div>
      </div>

      {/* Отзывы */}
      <div className="reviews_container">
        <h1>{t.reviews}</h1>
        <p>{t.leaving}</p>
        <div className="reviews_box">
          <div className="reviews_card">
            <div className="review_userImage">
              <div className="review_userImage_img">
                <img
                  src="https://randomuser.me/api/portraits/women/90.jpg"
                  alt="User 1"
                />
              </div>
              <div className="review_userImage_info">
                <div>
                  <p>{t.entrepreneur}</p>
                  <h2>Emma</h2>
                </div>
                <p>@emma_business</p>
              </div>
            </div>
            <p>{t.review_texts[0]}</p>
            <p>{t.review_texts[1]}</p>
          </div>

          <div className="reviews_card">
            <div className="review_userImage">
              <div className="review_userImage_img">
                <img
                  src="https://randomuser.me/api/portraits/men/72.jpg"
                  alt="User 2"
                />
              </div>
              <div className="review_userImage_info">
                <div>
                  <p>{t.entrepreneur}</p>
                  <h2>James</h2>
                </div>
                <p>@james_analyst</p>
              </div>
            </div>
            <p>{t.review_texts[0]}</p>
            <p>{t.review_texts[1]}</p>
          </div>

          <div className="reviews_card">
            <div className="review_userImage">
              <div className="review_userImage_img">
                <img
                  src="https://randomuser.me/api/portraits/women/52.jpg"
                  alt="User 3"
                />
              </div>
              <div className="review_userImage_info">
                <div>
                  <p>{t.entrepreneur}</p>
                  <h2>Sophia</h2>
                </div>
                <p>@sophia_trader</p>
              </div>
            </div>
            <p>{t.review_texts[1]}</p>
            <p>{t.review_texts[2]}</p>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="FAQ_container">
        <h1>{t.faq_title}</h1>
        <div className="FAQ_main_container">
          <Collapse
            size="middle"
            expandIcon={customIcons}
            expandIconPosition="end"
            items={t.open_info.map((info, index) => ({
              key: `${index + 1}`,
              label: [
                t.WhatIsKYT,
                t.KYT_passport,
                t.what_benefits,
                t.how_connect,
                t.what_information,
              ][index],
              children: (
                <div className="open_info">
                  <p style={{ fontSize: "14px" }}>{info}</p>
                </div>
              ),
            }))}
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
