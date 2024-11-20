import React from "react";
import "./OurMission.css";

function OurMission() {
  return (
    <div className="ourMission">
      <div className="outMission_container">
        <div className="outMission_container_img">
          <p>Our mission</p>
          <h2>
            We bring fairness and transparency to the crypto trading market.
          </h2>
        </div>
        <div className="steps">
          <h1>Get Started in 5 Easy Steps</h1>
          <p>
            Linking you to the global crypto trading community in a simple and secure way.
          </p>
          <div className="steps_wrap">
            <div className="steps_wrap_item">
              <h1 className="steps_wrap_item_order">1</h1>
              <h2>Create Your Account</h2>
              <p>Sign up for the KYT - Know Your Trader Traders Passport in less than 5 minutes.</p>
              <button>Get Started For FREE</button>
            </div>
            <div className="steps_wrap_item">
              <h1 className="steps_wrap_item_order">2</h1>
              <h2>Connect Your Exchange:</h2>
              <p>
                Connect your exchange account securely with a Read-Only API key. KYT - Know Your Trader will automatically import your trading history.
              </p>
            </div>
            <div className="steps_wrap_item">
              <h1 className="steps_wrap_item_order">3</h1>
              <h2>Build Your Portfolio:</h2>
              <p>
                Build multiple portfolios and customize access for each. Display your top strategies to attract potential investors.
              </p>
            </div>
            <div className="steps_wrap_item">
              <h1 className="steps_wrap_item_order">4</h1>
              <h2>Gain Global Visibility:</h2>
              <p>
                Showcase your portfolio, rise through the rankings, and attract investors. Your performance is refreshed every hour for up-to-date insights.
              </p>
            </div>
            <div className="steps_wrap_item">
              <h1 className="steps_wrap_item_order">5</h1>
              <h2>Earn Recognition:</h2>
              <p>
                Validate your expertise with KYT's trusted reputation. The Trader's Passport serves as a powerful testament to your credibility, attracting potential investors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurMission;
