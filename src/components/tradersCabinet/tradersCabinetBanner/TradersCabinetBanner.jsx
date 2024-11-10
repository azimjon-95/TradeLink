import React, { useEffect } from "react";
import "./TradersCabinetBanner.css";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import RigthImg from "../../../assets/tradersCabinetRigthIgm.png";
import { setModalType } from "../../../context/modalType";

function TradersCabinetBanner() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let token = localStorage.getItem("access_token");

  useEffect(() => {
    if (token) {
      navigate("/trader-cabinet/dashboard");
    }
  }, [token, navigate]);

  return (
    <div className="tradersCabinetBanner">
      <div className="tradersCabinetBanner__container">
        <div>
          <h1>Earn up to 20% from the profits of your investors</h1>
          <p>Publish your strategy to the KYT-know your trader</p>
          <Link onClick={() => dispatch(setModalType("signUp"))}>Apply strategy</Link>
        </div>
        <div>
          <img src={RigthImg} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default TradersCabinetBanner;
