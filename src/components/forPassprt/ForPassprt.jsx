import React, { useState } from "react";
import "./ForPassprt.css";
import { useSelector } from "react-redux";
import SignUpModal from "../../pages/register/Register";
import { langText } from "./lang";

function ForPassprt() {
  const [isModalSinUp, setIsModalSinUp] = useState(false);
  const lang = useSelector((state) => state.language.currentLanguage);
  let token = localStorage.getItem("access_token");
  const t = langText[lang];

  const [activeCard, setActiveCard] = useState(0);

  const handleButtonClick = (index) => {
    setActiveCard(index);
  };



  const cardData = [
    {
      id: 1,
      title: '01',
      description: t.cardData[0],
    },
    {
      id: 2,
      title: '02',
      description: t.cardData[1],
    },
    {
      id: 3,
      title: '03',
      description: t.cardData[2],
    },
    {
      id: 4,
      title: '04',
      description: t.cardData[3],

    },
    {
      id: 5,
      title: '05',
      description: t.cardData[4],

    },
    {
      id: 6,
      title: '06',
      description: t.cardData[5],

    },
  ];
  const cardOnes = [
    {
      id: 1,
      title: '01',
      description: t.cardOnes[0],
    },
    {
      id: 2,
      title: '02',
      description: t.cardOnes[1],
    },
    {
      id: 3,
      title: '03',
      description: t.cardOnes[2],
    },
    {
      id: 4,
      title: '04',
      description: t.cardOnes[3],

    },
    {
      id: 5,
      title: '05',
      description: t.cardOnes[4],

    },
    {
      id: 6,
      title: '06',
      description: t.cardOnes[5],

    },
  ];
  const buttons = [
    { id: 0, label: t.label1 },
    { id: 1, label: t.label2 },
  ];

  return (
    <div className="forPaspport">
      <SignUpModal
        onRequestClose={() => setIsModalSinUp(false)}
        isOpen={isModalSinUp}
        modalType={"signUp"}
        setIsMediaModalOpen={() => { }}
      />
      <div className="forPaspport_top">
        <div className="forPaspport_top_left">

          <span>
            <p>{langText[lang].subtitle}</p>
            <div>
              <h1>{t.mainProblems}</h1>
              <h1 className="forPaspport_top_text">{t.investors}</h1>
            </div>
          </span>

          <div className="ps_btns">
            {buttons.map((button) => (
              <button
                key={button.id}
                className={activeCard === button.id ? "ps_btns_active" : "ps_btns_none"}
                onClick={() => handleButtonClick(button.id)}
              >
                {button.label}
              </button>
            ))}
          </div>
        </div>


        <div className="ps_card_container">
          <div className={`ps_card ${activeCard === 0 ? "active" : ""}`} >
            {
              cardData.map((card) => (
                <div key={card.id} className="ps_card_main">
                  <p>{card.title}</p>
                  <div>
                    <span>{card.description}</span>
                  </div>
                </div>
              ))
            }
          </div>
          <div className={`ps_card ${activeCard === 1 ? "active" : ""}`}  >
            {
              cardOnes.map((card) => (
                <div key={card.id} className="ps_card_main">
                  <p>{card.title}</p>
                  <div>
                    <span>{card.description}</span>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>

      <div className="forTrader_bottom">
        <h2 className="forTrader_bottom_caption">{langText[lang].caption}</h2>
        <div className="forTrader_bottom_steps">
          <div className="forTrader_bottom_step">
            <div className="forTrader_bottom_step-icon">
              <svg
                width="149"
                height="68"
                viewBox="0 0 149 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32.5 39.4167C22.0296 39.4167 13.5417 47.9047 13.5417 58.3751H51.4583C51.4583 47.9047 42.9704 39.4167 32.5 39.4167Z"
                  stroke="url(#paint0_linear_28_170)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M32.5 31.2917C38.4831 31.2917 43.3333 26.4414 43.3333 20.4583C43.3333 14.4752 38.4831 9.625 32.5 9.625C26.5169 9.625 21.6667 14.4752 21.6667 20.4583C21.6667 26.4414 26.5169 31.2917 32.5 31.2917Z"
                  stroke="url(#paint1_linear_28_170)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M94.42 60.748C91.9267 60.748 89.592 60.3627 87.416 59.592C85.2853 58.8213 83.4267 57.5067 81.84 55.648C80.2533 53.744 79.0067 51.228 78.1 48.1C77.1933 44.9267 76.74 40.96 76.74 36.2V34.84C76.74 30.4427 77.1933 26.7707 78.1 23.824C79.0067 20.832 80.2533 18.452 81.84 16.684C83.4267 14.8707 85.2853 13.5787 87.416 12.808C89.592 12.0373 91.9267 11.652 94.42 11.652C96.9133 11.652 99.2253 12.0373 101.356 12.808C103.532 13.5787 105.413 14.8707 107 16.684C108.587 18.452 109.833 20.832 110.74 23.824C111.647 26.7707 112.1 30.4427 112.1 34.84V36.2C112.1 40.96 111.647 44.9267 110.74 48.1C109.833 51.228 108.587 53.744 107 55.648C105.413 57.5067 103.532 58.8213 101.356 59.592C99.2253 60.3627 96.9133 60.748 94.42 60.748ZM94.42 53.676C95.6893 53.676 96.8907 53.4267 98.024 52.928C99.1573 52.4293 100.155 51.5453 101.016 50.276C101.923 48.9613 102.625 47.1707 103.124 44.904C103.668 42.6373 103.94 39.736 103.94 36.2V34.84C103.94 31.6667 103.668 29.0373 103.124 26.952C102.625 24.8667 101.923 23.212 101.016 21.988C100.155 20.764 99.1573 19.9253 98.024 19.472C96.8907 18.9733 95.6893 18.724 94.42 18.724C93.1507 18.724 91.9493 18.9733 90.816 19.472C89.6827 19.9253 88.6627 20.764 87.756 21.988C86.8947 23.212 86.192 24.8667 85.648 26.952C85.1493 29.0373 84.9 31.6667 84.9 34.84V36.2C84.9 39.736 85.1493 42.6373 85.648 44.904C86.192 47.1707 86.8947 48.9613 87.756 50.276C88.6627 51.5453 89.6827 52.4293 90.816 52.928C91.9493 53.4267 93.1507 53.676 94.42 53.676ZM117.872 52.928H129.092V21.036L117.872 28.992V20.56L129.364 12.4H137.252V52.928H146.432V60H117.872V52.928Z"
                  fill="white"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_28_170"
                    x1="13.5417"
                    y1="48.8959"
                    x2="51.4583"
                    y2="48.8959"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#35009E" />
                    <stop offset="0.519" stop-color="#8F41D3" />
                    <stop offset="1" stop-color="#CD11EE" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_28_170"
                    x1="21.6667"
                    y1="20.4583"
                    x2="43.3333"
                    y2="20.4583"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#35009E" />
                    <stop offset="0.519" stop-color="#8F41D3" />
                    <stop offset="1" stop-color="#CD11EE" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <p className="step-description">{langText[lang].step1}</p>
          </div>
          <div className="forTrader_bottom_step">
            <div className="forTrader_bottom_step-icon">
              <svg
                width="158"
                height="68"
                viewBox="0 0 158 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M50 16.5H10C8.61929 16.5 7.5 17.6193 7.5 19V49C7.5 50.3807 8.61929 51.5 10 51.5H50C51.3807 51.5 52.5 50.3807 52.5 49V19C52.5 17.6193 51.3807 16.5 50 16.5Z"
                  stroke="url(#paint0_linear_28_175)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.5 41.5H27.5"
                  stroke="url(#paint1_linear_28_175)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.5 31.5H52.5"
                  stroke="url(#paint2_linear_28_175)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.5 26.5H52.5"
                  stroke="url(#paint3_linear_28_175)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M97.42 60.748C94.9267 60.748 92.592 60.3627 90.416 59.592C88.2853 58.8213 86.4267 57.5067 84.84 55.648C83.2533 53.744 82.0067 51.228 81.1 48.1C80.1933 44.9267 79.74 40.96 79.74 36.2V34.84C79.74 30.4427 80.1933 26.7707 81.1 23.824C82.0067 20.832 83.2533 18.452 84.84 16.684C86.4267 14.8707 88.2853 13.5787 90.416 12.808C92.592 12.0373 94.9267 11.652 97.42 11.652C99.9133 11.652 102.225 12.0373 104.356 12.808C106.532 13.5787 108.413 14.8707 110 16.684C111.587 18.452 112.833 20.832 113.74 23.824C114.647 26.7707 115.1 30.4427 115.1 34.84V36.2C115.1 40.96 114.647 44.9267 113.74 48.1C112.833 51.228 111.587 53.744 110 55.648C108.413 57.5067 106.532 58.8213 104.356 59.592C102.225 60.3627 99.9133 60.748 97.42 60.748ZM97.42 53.676C98.6893 53.676 99.8907 53.4267 101.024 52.928C102.157 52.4293 103.155 51.5453 104.016 50.276C104.923 48.9613 105.625 47.1707 106.124 44.904C106.668 42.6373 106.94 39.736 106.94 36.2V34.84C106.94 31.6667 106.668 29.0373 106.124 26.952C105.625 24.8667 104.923 23.212 104.016 21.988C103.155 20.764 102.157 19.9253 101.024 19.472C99.8907 18.9733 98.6893 18.724 97.42 18.724C96.1507 18.724 94.9493 18.9733 93.816 19.472C92.6827 19.9253 91.6627 20.764 90.756 21.988C89.8947 23.212 89.192 24.8667 88.648 26.952C88.1493 29.0373 87.9 31.6667 87.9 34.84V36.2C87.9 39.736 88.1493 42.6373 88.648 44.904C89.192 47.1707 89.8947 48.9613 90.756 50.276C91.6627 51.5453 92.6827 52.4293 93.816 52.928C94.9493 53.4267 96.1507 53.676 97.42 53.676ZM119.852 53.608L137.6 38.24C139.051 36.9707 140.275 35.8373 141.272 34.84C142.315 33.8427 143.153 32.9133 143.788 32.052C144.468 31.1453 144.944 30.2613 145.216 29.4C145.533 28.5387 145.692 27.632 145.692 26.68C145.692 24.368 144.989 22.4867 143.584 21.036C142.224 19.5853 140.32 18.86 137.872 18.86C134.971 18.86 132.704 19.6533 131.072 21.24C129.485 22.7813 128.692 25.1613 128.692 28.38H120.532C120.532 25.8867 120.94 23.62 121.756 21.58C122.572 19.4947 123.728 17.7267 125.224 16.276C126.72 14.78 128.533 13.6467 130.664 12.876C132.795 12.06 135.197 11.652 137.872 11.652C140.456 11.652 142.745 12.0373 144.74 12.808C146.735 13.5333 148.389 14.576 149.704 15.936C151.064 17.2507 152.084 18.8373 152.764 20.696C153.489 22.5093 153.852 24.504 153.852 26.68C153.852 28.312 153.58 29.8533 153.036 31.304C152.537 32.7547 151.812 34.1373 150.86 35.452C149.953 36.7667 148.843 38.0587 147.528 39.328C146.259 40.5973 144.853 41.844 143.312 43.068L131.208 52.928H154.532V60H119.852V53.608Z"
                  fill="white"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_28_175"
                    x1="7.5"
                    y1="34"
                    x2="52.5"
                    y2="34"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#35009E" />
                    <stop offset="0.519" stop-color="#8F41D3" />
                    <stop offset="1" stop-color="#CD11EE" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_28_175"
                    x1="17.5"
                    y1="42"
                    x2="27.5"
                    y2="42"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#35009E" />
                    <stop offset="0.519" stop-color="#8F41D3" />
                    <stop offset="1" stop-color="#CD11EE" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_28_175"
                    x1="7.5"
                    y1="32"
                    x2="52.5"
                    y2="32"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#35009E" />
                    <stop offset="0.519" stop-color="#8F41D3" />
                    <stop offset="1" stop-color="#CD11EE" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_28_175"
                    x1="7.5"
                    y1="27"
                    x2="52.5"
                    y2="27"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#35009E" />
                    <stop offset="0.519" stop-color="#8F41D3" />
                    <stop offset="1" stop-color="#CD11EE" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <p className="step-description">{langText[lang].step2}</p>
          </div>
          <div className="forTrader_bottom_step">
            <div className="forTrader_bottom_step-icon">
              <svg
                width="155"
                height="68"
                viewBox="0 0 155 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8334 33.9999C10.8334 45.9661 20.5339 55.6666 32.5 55.6666C44.4662 55.6666 54.1667 45.9661 54.1667 33.9999C54.1667 22.0338 44.4662 12.3333 32.5 12.3333C20.5339 12.3333 10.8334 22.0338 10.8334 33.9999Z"
                  stroke="url(#paint0_linear_28_187)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M24.375 34C24.375 38.4873 28.0127 42.125 32.5 42.125C36.9873 42.125 40.625 38.4873 40.625 34C40.625 29.5127 36.9873 25.875 32.5 25.875C28.0127 25.875 24.375 29.5127 24.375 34Z"
                  stroke="url(#paint1_linear_28_187)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M94.42 60.748C91.9267 60.748 89.592 60.3627 87.416 59.592C85.2853 58.8213 83.4267 57.5067 81.84 55.648C80.2533 53.744 79.0067 51.228 78.1 48.1C77.1933 44.9267 76.74 40.96 76.74 36.2V34.84C76.74 30.4427 77.1933 26.7707 78.1 23.824C79.0067 20.832 80.2533 18.452 81.84 16.684C83.4267 14.8707 85.2853 13.5787 87.416 12.808C89.592 12.0373 91.9267 11.652 94.42 11.652C96.9133 11.652 99.2253 12.0373 101.356 12.808C103.532 13.5787 105.413 14.8707 107 16.684C108.587 18.452 109.833 20.832 110.74 23.824C111.647 26.7707 112.1 30.4427 112.1 34.84V36.2C112.1 40.96 111.647 44.9267 110.74 48.1C109.833 51.228 108.587 53.744 107 55.648C105.413 57.5067 103.532 58.8213 101.356 59.592C99.2253 60.3627 96.9133 60.748 94.42 60.748ZM94.42 53.676C95.6893 53.676 96.8907 53.4267 98.024 52.928C99.1573 52.4293 100.155 51.5453 101.016 50.276C101.923 48.9613 102.625 47.1707 103.124 44.904C103.668 42.6373 103.94 39.736 103.94 36.2V34.84C103.94 31.6667 103.668 29.0373 103.124 26.952C102.625 24.8667 101.923 23.212 101.016 21.988C100.155 20.764 99.1573 19.9253 98.024 19.472C96.8907 18.9733 95.6893 18.724 94.42 18.724C93.1507 18.724 91.9493 18.9733 90.816 19.472C89.6827 19.9253 88.6627 20.764 87.756 21.988C86.8947 23.212 86.192 24.8667 85.648 26.952C85.1493 29.0373 84.9 31.6667 84.9 34.84V36.2C84.9 39.736 85.1493 42.6373 85.648 44.904C86.192 47.1707 86.8947 48.9613 87.756 50.276C88.6627 51.5453 89.6827 52.4293 90.816 52.928C91.9493 53.4267 93.1507 53.676 94.42 53.676ZM134.192 60.748C131.427 60.748 128.979 60.408 126.848 59.728C124.763 59.0027 122.995 58.0053 121.544 56.736C120.139 55.4667 119.051 53.9707 118.28 52.248C117.555 50.48 117.192 48.5307 117.192 46.4H125.352C125.352 48.6667 126.055 50.4347 127.46 51.704C128.911 52.928 131.155 53.54 134.192 53.54C137.139 53.54 139.337 52.928 140.788 51.704C142.284 50.4347 143.032 48.6667 143.032 46.4C143.032 44.088 142.352 42.2747 140.992 40.96C139.632 39.6 137.365 38.92 134.192 38.92H129.432V32.12H134.192C136.912 32.12 138.952 31.5533 140.312 30.42C141.672 29.2413 142.352 27.564 142.352 25.388C142.352 23.212 141.695 21.58 140.38 20.492C139.111 19.404 137.048 18.86 134.192 18.86C131.381 18.86 129.296 19.4267 127.936 20.56C126.621 21.6933 125.964 23.28 125.964 25.32H117.804C117.804 21.1947 119.187 17.8853 121.952 15.392C124.763 12.8987 128.843 11.652 134.192 11.652C136.867 11.652 139.224 11.992 141.264 12.672C143.304 13.352 145.004 14.2813 146.364 15.46C147.724 16.5933 148.744 17.9307 149.424 19.472C150.149 21.0133 150.512 22.668 150.512 24.436C150.512 27.156 149.787 29.4453 148.336 31.304C146.885 33.1173 144.891 34.4093 142.352 35.18C145.117 35.996 147.271 37.3787 148.812 39.328C150.399 41.232 151.192 43.816 151.192 47.08C151.192 48.984 150.829 50.7747 150.104 52.452C149.379 54.1293 148.291 55.58 146.84 56.804C145.435 58.028 143.667 59.0027 141.536 59.728C139.405 60.408 136.957 60.748 134.192 60.748Z"
                  fill="white"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_28_187"
                    x1="10.8334"
                    y1="33.9999"
                    x2="54.1667"
                    y2="33.9999"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#35009E" />
                    <stop offset="0.519" stop-color="#8F41D3" />
                    <stop offset="1" stop-color="#CD11EE" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_28_187"
                    x1="24.375"
                    y1="34"
                    x2="40.625"
                    y2="34"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#35009E" />
                    <stop offset="0.519" stop-color="#8F41D3" />
                    <stop offset="1" stop-color="#CD11EE" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <p className="step-description">{langText[lang].step3}</p>
          </div>
        </div>
        {!token ? (
          <button
            onClick={() => setIsModalSinUp(true)}
            className="create-account-button"
          >
            {langText[lang].createAccBTn}
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default ForPassprt;