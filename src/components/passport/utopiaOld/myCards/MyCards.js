import React, { useState } from "react";
import "./style.css";
import Investment from "./Investment";
import OutlineCircle from './OutlineCircle';
import Trades from './Trades';


const MyCards = ({ t, id, selectValue, currentLanguage, translationsInfo, }) => {
  const [activeTab, setActiveTab] = useState("main");
  const renderContent = () => {
    if (activeTab === "main") {
      return <Investment t={t} currentLanguage={currentLanguage} id={id} selectValue={selectValue} />;
    }
    else if (activeTab === "investment") {
      return <OutlineCircle translationsInfo={translationsInfo} currentLanguage={currentLanguage} id={id} selectValue={selectValue} />;
    } else if (activeTab === "trades") {
      return <Trades currentLanguage={currentLanguage} id={id} selectValue={selectValue} />;
    }
    return null;
  };

  return (
    <div className="single-container-main">
      <nav className="single-tabs">
        <button
          onClick={() => setActiveTab("main")}
          className={activeTab === "main" ? "active" : ""}
        >
          {t.main}
        </button>
        <button
          onClick={() => setActiveTab("investment")}
          className={activeTab === "investment" ? "active" : ""}
        >
          {t.investment}
        </button>
        <button
          onClick={() => setActiveTab("trades")}
          className={activeTab === "trades" ? "active" : ""}
        >
          {t.trades}
        </button>
      </nav>

      <br />
      <div className="single-cards-container">{renderContent()}</div>
    </div>
  );
};

export default MyCards;
