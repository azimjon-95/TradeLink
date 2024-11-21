import React, { useState } from "react";
import { FiChevronUp } from "react-icons/fi";
import { Skeleton } from "antd";
import "./Dashboard_main.css";
import AddKeyModal from "./AddKeyModal";
import { translations } from './Lang';

function Dashbord_main({ currentLanguage }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);
  const [isOpen3, setIsOpen3] = useState(true);

  const [openModal, setOpenModal] = useState(false);
  const t = translations[currentLanguage]

  return (
    <div className="dashbord_main">
      <div className="password_dashboard_container">
        {openModal && <AddKeyModal currentLanguage={currentLanguage} setOpenModal={setOpenModal} />}
        <div className="my_keys">
          <div onClick={() => setIsOpen(!isOpen)} className="my_keys_title">
            {t?.myKeys}
            <FiChevronUp className={"icon" + (!isOpen ? "_active" : "")} />
          </div>
          {true ? (
            <div>
              {true ? (
                <div className="empty_my_keys">
                  <h3>{t?.contentComingSoon}</h3>
                  <p>
                    {t?.connectFirstKey}
                  </p>
                  <button onClick={() => setOpenModal(true)}>{t?.addKey}</button>
                </div>
              ) : (
                <div className="my_keys_content">
                  <div className="my_keys_content_item"></div>
                  <div className="my_keys_content_item"></div>
                  <div className="my_keys_content_item"></div>
                </div>
              )}
            </div>
          ) : (
            <Skeleton
              style={{ display: isOpen ? "flex" : "none" }}
              active
              paragraph={{ rows: 2, width: "100%", height: "40px" }}
            />
          )}
        </div>
        <div className="my_keys">
          <div onClick={() => setIsOpen2(!isOpen2)} className="my_keys_title">
            {t?.myPortfolios}
            <FiChevronUp className={"icon" + (!isOpen2 ? "_active" : "")} />
          </div>
          {true ? (
            <div>
              {true ? (
                <div className="empty_my_keys">
                  <h3>{t?.nothingHereYet}</h3>
                  <p>
                    {t?.buildPortfolio}
                  </p>
                  <button>{t?.addPortfolio}</button>
                </div>
              ) : (
                <div className="my_keys_content">
                  <div className="my_keys_content_item"></div>
                  <div className="my_keys_content_item"></div>
                  <div className="my_keys_content_item"></div>
                </div>
              )}
            </div>
          ) : (
            <Skeleton
              style={{ display: isOpen2 ? "flex" : "none" }}
              active
              paragraph={{ rows: 2, width: "100%", height: "40px" }}
            />
          )}
        </div>
        <div className="my_keys">
          <div onClick={() => setIsOpen3(!isOpen3)} className="my_keys_title">
            {t?.favorites}
            <FiChevronUp className={"icon" + (!isOpen3 ? "_active" : "")} />
          </div>
          {true ? (
            <div>
              {true ? (
                <div className="empty_my_keys">
                  <h3>{t?.addToFavorites}</h3>
                  <p>
                    {t?.visitLeaderboardPage}
                  </p>
                  <button>{t?.goToLeaderboard}</button>
                </div>
              ) : (
                <div className="my_keys_content">
                  <div className="my_keys_content_item"></div>
                  <div className="my_keys_content_item"></div>
                  <div className="my_keys_content_item"></div>
                </div>
              )}
            </div>
          ) : (
            <Skeleton
              style={{ display: isOpen3 ? "flex" : "none" }}
              active
              paragraph={{ rows: 2, width: "100%", height: "40px" }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashbord_main;



