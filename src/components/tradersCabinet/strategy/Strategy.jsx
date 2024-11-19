import React from "react";
import "./Strategy.css";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa6";
import fileSvg from "../../../assets/file.svg";
import scamSvg from "../../../assets/scan.svg";
import gridSvg from "../../../assets/grid.svg";
import userSvg from "../../../assets/user.svg";
import safetySvg from "../../../assets/passport/cabinet-safety.png";

function Strategy() {
  return (
    <div className="strategy">
      <div className="strategy_container">
        <h1 className="strategy_caption">Advantages of showcasing your strategy.</h1>
        <p className="strategy_text">
          Discover several compelling reasons to collaborate with us.
        </p>
        <div className="strategy_items">
          <div className="strategy_item">
            <h1 className="strategy_item_order">01</h1>
            <p className="strategy_item_info">
              Earn extra income with guaranteed security.
            </p>
          </div>
          <div className="strategy_item">
            <h1 className="strategy_item_order">02</h1>
            <p className="strategy_item_info">
              We handle all communications with investors.
            </p>
          </div>
          <div className="strategy_item">
            <p className="strategy_item_info">
              Effortless capital attraction.
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
          The most popular KYT-know your trader
        </h1>
        <p className="strategy_text">
          This is the AUM that traders have successfully accumulated.
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
                  <p className="traders_item_info">944 days in KYT-know your trader</p>
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
                  <p className="traders_item_info">944 days in KYT-know your trader</p>
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
                  <p className="traders_item_info">944 days in KYT-know your trader</p>
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
                  <p className="traders_item_info">944 days in KYT-know your trader</p>
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
                  <p className="traders_item_info">944 days in KYT-know your trader</p>
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

        <h1 className="strategy_caption">Here is why this is safe</h1>
        <p className="strategy_text">We value our reputation a lot</p>

        <div className="safety_desc">
          <div className="safety_desc_left">
            <img src={safetySvg} alt="shield svg" />
          </div>
          <div className="safety_desc_right">
            <div className="safety_desc_item">
              <FaCheck />
              <span>
                Not a single strategy has been copied without its owner's consent, nor will it be in the future.
              </span>
            </div>
            <div className="safety_desc_item">
              <FaCheck />
              <span>
                The investor does not have access to the trader's contact information unless voluntarily provided by the trader.
              </span>
            </div>
            <div className="safety_desc_item">
              <FaCheck />
              <span>
                The auto-copying process is carried out exclusively using Read-Only API keys.
              </span>
            </div>
          </div>
        </div>

        <h1 className="strategy_caption">How to get started</h1>
        <p className="strategy_text">
          Follow these simple steps to start earning more with KYT - Know Your Trader.
        </p>

        <div className="work_steps get_started_steps">
          <div className="work_step_item">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="#7B61FF"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#7B61FF"
                opacity="0.4"
                d="M57.7592 27.8394L55.1458 38.986C52.9058 48.6127 48.4792 52.506 40.1592 51.706C38.8258 51.5994 37.3858 51.3594 35.8392 50.986L31.3592 49.9194C20.2392 47.2794 16.7992 41.786 19.4125 30.6394L22.0258 19.466C22.5592 17.1994 23.1992 15.226 23.9992 13.5994C27.1192 7.14604 32.4258 5.4127 41.3325 7.51937L45.7858 8.55937C56.9592 11.1727 60.3725 16.6927 57.7592 27.8394Z"
              ></path>
              <path d="M40.1609 51.7063C38.5076 52.8263 36.4276 53.7596 33.8942 54.5863L29.6809 55.9729C19.0942 59.3863 13.5209 56.5329 10.0809 45.9463L6.66758 35.4129C3.25424 24.8263 6.08091 19.2263 16.6676 15.8129L20.8809 14.4263C21.9742 14.0796 23.0142 13.7863 24.0009 13.5996C23.2009 15.2263 22.5609 17.1996 22.0276 19.4663L19.4142 30.6396C16.8009 41.7863 20.2409 47.2796 31.3609 49.9196L35.8409 50.9863C37.3876 51.3596 38.8276 51.5996 40.1609 51.7063Z"></path>
              <path d="M46.6397 28.0261C46.4797 28.0261 46.3197 27.9994 46.133 27.9727L33.1997 24.6927C32.133 24.4261 31.493 23.3327 31.7597 22.2661C32.0263 21.1994 33.1197 20.5594 34.1863 20.8261L47.1197 24.1061C48.1863 24.3727 48.8263 25.4661 48.5597 26.5327C48.3463 27.4127 47.5197 28.0261 46.6397 28.0261Z"></path>
              <path d="M38.8257 37.0397C38.6657 37.0397 38.5057 37.013 38.319 36.9864L30.559 35.013C29.4924 34.7464 28.8524 33.6531 29.119 32.5864C29.3857 31.5197 30.479 30.8797 31.5457 31.1464L39.3057 33.1197C40.3724 33.3864 41.0124 34.4797 40.7457 35.5464C40.5324 36.453 39.7324 37.0397 38.8257 37.0397Z"></path>
            </svg>
            <p>Add your strategy to KYT-know your trader passport</p>
          </div>
          <div className="work_step_item">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="#7B61FF"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#7B61FF"
                opacity="0.4"
                d="M48.108 36.1327C46.988 37.226 46.348 38.7993 46.508 40.4793C46.748 43.3593 49.388 45.466 52.268 45.466H57.3346V48.6393C57.3346 54.1593 52.828 58.666 47.308 58.666H16.6946C11.1746 58.666 6.66797 54.1593 6.66797 48.6393V30.6927C6.66797 25.1727 11.1746 20.666 16.6946 20.666H47.308C52.828 20.666 57.3346 25.1727 57.3346 30.6927V34.5327H51.948C50.4546 34.5327 49.0946 35.1193 48.108 36.1327Z"
              ></path>
              <path
                fill="#7B61FF"
                d="M39.6013 10.5337V20.667H16.6946C11.1746 20.667 6.66797 25.1737 6.66797 30.6937V20.907C6.66797 17.7337 8.61464 14.9069 11.5746 13.7869L32.748 5.78692C36.0546 4.56025 39.6013 6.987 39.6013 10.5337Z"
              ></path>
              <path
                fill="#7B61FF"
                d="M60.1581 37.2531V42.7466C60.1581 44.2132 58.9848 45.4131 57.4915 45.4665H52.2648C49.3848 45.4665 46.7448 43.3598 46.5048 40.4798C46.3448 38.7998 46.9848 37.2265 48.1048 36.1331C49.0915 35.1198 50.4515 34.5332 51.9448 34.5332H57.4915C58.9848 34.5865 60.1581 35.7864 60.1581 37.2531Z"
              ></path>
              <path d="M37.3346 34H18.668C17.5746 34 16.668 33.0933 16.668 32C16.668 30.9067 17.5746 30 18.668 30H37.3346C38.428 30 39.3346 30.9067 39.3346 32C39.3346 33.0933 38.428 34 37.3346 34Z"></path>
            </svg>
            <p>Make sure it earns money for longer than 6 months</p>
          </div>
          <div className="work_step_item">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="#7B61FF"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M45.5994 5.33398H34.3994C25.1994 5.33398 21.466 8.98732 21.3594 18.0007H29.5994C40.7994 18.0007 45.9994 23.2007 45.9994 34.4007V42.6407C55.0127 42.534 58.666 38.8007 58.666 29.6007V18.4007C58.666 9.06732 54.9327 5.33398 45.5994 5.33398Z"
              ></path>
              <path d="M29.5987 21.334H18.3987C9.06536 21.334 5.33203 25.0673 5.33203 34.4007V45.6007C5.33203 54.934 9.06536 58.6673 18.3987 58.6673H29.5987C38.932 58.6673 42.6654 54.934 42.6654 45.6007V34.4007C42.6654 25.0673 38.932 21.334 29.5987 21.334ZM32.772 36.4007L22.8787 46.294C22.5054 46.6673 22.0254 46.854 21.5187 46.854C21.012 46.854 20.532 46.6673 20.1587 46.294L15.1987 41.334C14.452 40.5873 14.452 39.3873 15.1987 38.6407C15.9454 37.894 17.1454 37.894 17.892 38.6407L21.492 42.2407L30.052 33.6807C30.7987 32.934 31.9987 32.934 32.7454 33.6807C33.492 34.4273 33.5187 35.654 32.772 36.4007Z"></path>
            </svg>
            <p>
              Submit your strategy for listing through the Trader's Cabinet, or by clicking the button below
            </p>
          </div>
        </div>
        <div className="work_step_apply">
          <Link to={"/"}>Apply strategy</Link>
        </div>
      </div>
    </div>
  );
}

export default Strategy;
