import React, { useState } from "react";
import { FiChevronUp } from "react-icons/fi";
import { Skeleton } from "antd";
import "./Dashboard_main.css";
import AddKeyModal from "./AddKeyModal";

function Dashbord_main() {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);
  const [isOpen3, setIsOpen3] = useState(true);

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="dashbord_main">
      <div className="password_dashboard_container">
        {openModal && <AddKeyModal setOpenModal={setOpenModal} />}
        <div className="my_keys">
          <div onClick={() => setIsOpen(!isOpen)} className="my_keys_title">
            My Keys
            <FiChevronUp className={"icon" + (!isOpen ? "_active" : "")} />
          </div>
          {true ? (
            <div>
              {true ? (
                <div className="empty_my_keys">
                  <h3>Content is coming soon, stay tuned!</h3>
                  <p>
                    Connect your first exchange API key to access trading stats and build your portfolio.
                  </p>
                  <button onClick={() => setOpenModal(true)}>Add key</button>
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
            My Portfolios
            <FiChevronUp className={"icon" + (!isOpen2 ? "_active" : "")} />
          </div>
          {true ? (
            <div>
              {true ? (
                <div className="empty_my_keys">
                  <h3>There's nothing here yet</h3>
                  <p>
                    Build a portfolio to showcase to clients or take part in the trader ranking.
                  </p>
                  <button>Add portfolio</button>
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
            Favorites
            <FiChevronUp className={"icon" + (!isOpen3 ? "_active" : "")} />
          </div>
          {true ? (
            <div>
              {true ? (
                <div className="empty_my_keys">
                  <h3>Add your preferred strategy to your favorites</h3>
                  <p>
                    Visit the user's page from the leaderboard and add your favorite strategy to your list of favorites.
                  </p>
                  <button>Go to leraderboard page</button>
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
