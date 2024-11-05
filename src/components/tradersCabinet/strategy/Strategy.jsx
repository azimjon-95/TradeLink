import React from "react";
import "./Strategy.css";
import { Link } from "react-router-dom";
import fileSvg from "../../../assets/file.svg";
import scamSvg from "../../../assets/scan.svg";
import gridSvg from "../../../assets/grid.svg";
import userSvg from "../../../assets/user.svg";

function Strategy() {
  return (
    <div className="strategy">
      <div className="strategy_container">
        <h1 className="strategy_caption">Benefits of listing your strategy</h1>
        <p className="strategy_text">
          Here are some of the main reasons to work with us
        </p>
        <div className="strategy_items">
          <div className="strategy_item">
            <h1 className="strategy_item_order">01</h1>
            <p className="strategy_item_info">
              Additional income with a guarantee of safety
            </p>
          </div>
          <div className="strategy_item">
            <h1 className="strategy_item_order">02</h1>
            <p className="strategy_item_info">
              We take on every communication with investors
            </p>
          </div>
          <div className="strategy_item">
            <p className="strategy_item_info">
              Passive attraction of the capital
            </p>
            <h1 className="strategy_item_order">03</h1>
          </div>
          <div className="strategy_item">
            <p className="strategy_item_info">
              Complete absence of risks for you
            </p>
            <h1 className="strategy_item_order">04</h1>
          </div>
        </div>

        <h1 className="strategy_caption">
          The most popular TradeLink Marketplace traders
        </h1>
        <p className="strategy_text">
          This is the AUM that traders have already managed to gather
        </p>

        <div className="best_marketplace_traders">
          <h1>
            Be among <br /> best of the best
          </h1>
          <div className="best_marketplace_traders_items">
            <div className="best_marketplace_traders_item">
              <div className="traders_item_left">
                <b className="traders_item_order">1</b>
                <div>
                  <p className="traders_item_name">John Doe</p>
                  <p className="traders_item_info">944 days in Marketplace</p>
                </div>
              </div>
              <div className="traders_item_right">
                <span>14 followers</span>
                <div className="traders_item_price">
                  <b>$35.07K</b> <span>AUM</span>
                </div>
                <Link to={"/"}>Read more</Link>
              </div>
            </div>
            <div className="best_marketplace_traders_item">
              <div className="traders_item_left">
                <b className="traders_item_order">1</b>
                <div>
                  <p className="traders_item_name">John Doe</p>
                  <p className="traders_item_info">944 days in Marketplace</p>
                </div>
              </div>
              <div className="traders_item_right">
                <span>14 followers</span>
                <div className="traders_item_price">
                  <b>$35.07K</b> <span>AUM</span>
                </div>
                <Link>Read more</Link>
              </div>
            </div>
            <div className="best_marketplace_traders_item">
              <div className="traders_item_left">
                <b className="traders_item_order">1</b>
                <div>
                  <p className="traders_item_name">John Doe</p>
                  <p className="traders_item_info">944 days in Marketplace</p>
                </div>
              </div>
              <div className="traders_item_right">
                <span>14 followers</span>
                <div className="traders_item_price">
                  <b>$35.07K</b> <span>AUM</span>
                </div>
                <Link>Read more</Link>
              </div>
            </div>
            <div className="best_marketplace_traders_item">
              <div className="traders_item_left">
                <b className="traders_item_order">1</b>
                <div>
                  <p className="traders_item_name">John Doe</p>
                  <p className="traders_item_info">944 days in Marketplace</p>
                </div>
              </div>
              <div className="traders_item_right">
                <span>14 followers</span>
                <div className="traders_item_price">
                  <b>$35.07K</b> <span>AUM</span>
                </div>
                <Link>Read more</Link>
              </div>
            </div>
            <div className="best_marketplace_traders_item">
              <div className="traders_item_left">
                <b className="traders_item_order">1</b>
                <div>
                  <p className="traders_item_name">John Doe</p>
                  <p className="traders_item_info">944 days in Marketplace</p>
                </div>
              </div>
              <div className="traders_item_right">
                <span>14 followers</span>
                <div className="traders_item_price">
                  <b>$35.07K</b> <span>AUM</span>
                </div>
                <Link>Read more</Link>
              </div>
            </div>
          </div>
          <div className="best_marketplace_traders_button">
            <Link to={"/"}>Apply strategy</Link>
          </div>
        </div>

        <h1 className="strategy_caption">How it works</h1>
        <p className="strategy_text">
          Just a few steps and additional AUM without any risks is yours
        </p>

        <div className="work_steps">
          <div className="work_step_item">
            <img src={fileSvg} alt="file svg" />
            <p>Fill out the investment declaration form</p>
          </div>
          <div className="work_step_item">
            <img src={scamSvg} alt="file svg" />
            <p>Fill out the investment declaration form</p>
          </div>
          <div className="work_step_item">
            <img src={gridSvg} alt="file svg" />
            <p>Fill out the investment declaration form</p>
          </div>
          <div className="work_step_item">
            <img src={userSvg} alt="file svg" />
            <p>Fill out the investment declaration form</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Strategy;
