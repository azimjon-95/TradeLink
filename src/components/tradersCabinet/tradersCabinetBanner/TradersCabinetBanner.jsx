import React from "react";
import { Link } from "react-router-dom";
import RigthImg from "../../../assets/tradersCabinetRigthIgm.png";
import "./TradersCabinetBanner.css";

function TradersCabinetBanner() {
  return (
    <div className="tradersCabinetBanner">
      <div className="tradersCabinetBanner__container">
        <div>
          <h1>Earn up to 20% from the profits of your investors</h1>
          <p>Publish your strategy to the TradeLink Marketplace</p>
          <Link>Apply strategy</Link>
        </div>
        <div>
          <img src={RigthImg} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default TradersCabinetBanner;
