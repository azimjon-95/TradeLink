import React from "react";
import "./OurMission.css";

function OurMission() {
  return (
    <div className="ourMission">
      <div className="outMission_container">
        <div className="outMission_container_img">
          <p>Our mission</p>
          <h2>
            We make the crypto trading <br /> market fair and transparent
          </h2>
        </div>
        <div className="steps">
          <h1>Get Started in 5 Easy Steps</h1>
          <p>
            Connecting you to the global crypto trading community is simple and
            secure.
          </p>
          <div className="steps_wrap">
            <div className="steps_wrap_item">
              <h1 className="steps_wrap_item_order">1</h1>
              <h2>Create Your Account</h2>
              <p>Register on KYT-know your trader Passport in under 5 minutes.</p>
              <button>Get Started For FREE</button>
            </div>
            <div className="steps_wrap_item">
              <h1 className="steps_wrap_item_order">2</h1>
              <h2>Connect Your Exchange:</h2>
              <p>
                Securely link your exchange account using a Read-Only API key.
                KYT-know your trader automatically imports your trading history.
              </p>
            </div>
            <div className="steps_wrap_item">
              <h1 className="steps_wrap_item_order">3</h1>
              <h2>Build Your Portfolio:</h2>
              <p>
                Create multiple portfolios, customizing access for each one.
                Showcase your best strategies to potential investors.
              </p>
            </div>
            <div className="steps_wrap_item">
              <h1 className="steps_wrap_item_order">4</h1>
              <h2>Gain Global Visibility:</h2>
              <p>
                Share your portfolio, climb the rankings, and attract investors.
                Your performance is updated hourly for real-time insights.
              </p>
            </div>
            <div className="steps_wrap_item">
              <h1 className="steps_wrap_item_order">5</h1>
              <h2>Earn Recognition:</h2>
              <p>
                Validate your expertise with KYT's trusted reputation. The
                Trader's Passport is a powerful signal of credibility for
                investors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurMission;
