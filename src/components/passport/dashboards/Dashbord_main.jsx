import React, { useState } from "react";
import { FiChevronUp } from "react-icons/fi";
import { Skeleton } from "antd";
import "./Dashboard_main.css";

function Dashbord_main() {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);
  const [isOpen3, setIsOpen3] = useState(true);
  return (
    <div className="dashbord_main">
      <div className="password_dashboard_container">
        <div className="my_keys">
          <div onClick={() => setIsOpen(!isOpen)} className="my_keys_title">
            My Keys
            <FiChevronUp className={"icon" + (!isOpen ? "_active" : "")} />
          </div>
          {false ? (
            <div className="my_keys_content">
              <div className="my_keys_content_item"></div>
              <div className="my_keys_content_item"></div>
              <div className="my_keys_content_item"></div>
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
          {false ? (
            <div className="my_keys_content">
              <div className="my_keys_content_item"></div>
              <div className="my_keys_content_item"></div>
              <div className="my_keys_content_item"></div>
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
          {false ? (
            <div className="my_keys_content">
              <div className="my_keys_content_item"></div>
              <div className="my_keys_content_item"></div>
              <div className="my_keys_content_item"></div>
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
