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
                <h3>Create Your Binance Futures Account.</h3>
                <p>
                  To access the market, ensure your Binance account has an active futures account.
                </p>
                <p>
                  Check out <Link to={"/"}>this guide on how to open a Binance Futures account</Link>
                </p>
              </div>
            </div>

            <div className="addKeyModal__left__item">
              <span>2</span>
              <div>
                <h3>Create Binance API Keyt</h3>
                <p>
                  To access your trading statistics on the KYT Traders Passport, you need to add an API key to your exchange account with 'Read-only' permissions only.
                </p>
              </div>
            </div>
            <p>
              Additionally, you can explore the <Link to={"/"}>complete guide</Link> for more details.
            </p>
          </div>

          <span className="addKeyModal__left__warning">
            Please note that after adding the key, you may receive emails from Binance regarding the use of Transaction History Exports. This is a standard procedure necessary to ensure that the key displays accurate information on our platform.
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
            <p>If you encounter any issues, please don't hesitate to reach out to our support team.</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddKeyModal;
