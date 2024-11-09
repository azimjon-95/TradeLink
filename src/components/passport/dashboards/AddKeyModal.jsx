import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTelegramPlane } from "react-icons/fa";
import { FiX } from "react-icons/fi";
function AddKeyModal({ setOpenModal }) {
  const [stock, setStock] = useState("");
  const [name, setName] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [secretKey, setSecretKey] = useState("");

  const isDisabled = !stock || !name || !apiKey || !secretKey;

  return (
    <div className="addKeyModal">
      <div className="addKeyModal__container">
        <FiX
          className="addKeyModal__close"
          onClick={() => setOpenModal(false)}
        />
        <div className="addKeyModal__left">
          <div>
            <div className="addKeyModal__left__item">
              <span>1</span>
              <div>
                <h3>Open Binance Futures Account</h3>
                <p>
                  Your Binance account must have open futures account to enter
                  the market.
                </p>
                <p>
                  View <Link to={"/"}>How to Open Binance Futures account</Link>
                </p>
              </div>
            </div>

            <div className="addKeyModal__left__item">
              <span>2</span>
              <div>
                <h3>Create Binance API Keyt</h3>
                <p>
                  To view your trading statistics on TradeLink Passport, add an
                  API key to your exchange account. The key must have the only
                  permission "Read-only"
                </p>
              </div>
            </div>
            <p>
              Also, you can check out the <Link to={"/"}>full guide</Link>
            </p>
          </div>

          <span className="addKeyModal__left__warning">
            Please, be aware that after adding the key you might experience
            emails from Binance, notifying you about using Transaction History
            Exports. It is a normal procedure, that is required in order for the
            key to display the right info on our platform.
          </span>
        </div>
        <form className="addKeyModal__right">
          <div className="addKeyModal__right__top">
            <h2>Add key</h2>
            <label>Stock</label>
            <select onChange={(e) => setStock(e.target.value)} value={stock}>
              <option value="binance">Binance (Futures, USDT-M) </option>
              <option value="bybit">Bybit </option>
            </select>

            <label>Name</label>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />

            <label>Read Key</label>
            <input
              type="text"
              placeholder="API Key"
              onChange={(e) => setApiKey(e.target.value)}
              value={apiKey}
            />
            <input
              type="text"
              placeholder="Secret Key"
              onChange={(e) => setSecretKey(e.target.value)}
              value={secretKey}
            />

            <button disabled={isDisabled}>Add</button>
          </div>
          <div className="addKeyModal__right__bottom">
            <a href="/">
              <FaTelegramPlane /> Support
            </a>
            <p>If you have any issues - please, contact our support tea</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddKeyModal;
