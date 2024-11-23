import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "../../../../api";
import OutlineCircle from "./OutlineCircle";
import Investment from "./Investment";
import Trades from "./Trades";

const MyCards = ({ activeTab, id, selectValue, currentLanguage, translationsInfo, }) => {

  const [stats, setStats] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchStats = async () => {
      if (!id || !selectValue) return;

      try {
        const response = await axios.get(
          `/portfolio/stats/?portfolio_id=${id}&time_step=${selectValue}`,
          { signal }
        );
        setStats(response?.data?.data);
      } catch (error) {
        if (!axios.isCancel(error)) {
          console.error("Error fetching stats:", error);
        }
      }
    };

    const debounceFetch = setTimeout(fetchStats, 300);

    return () => {
      clearTimeout(debounceFetch);
      controller.abort();
    };
  }, [id, selectValue]);



  const renderContent = () => {
    if (activeTab === "main") {
      return <OutlineCircle translationsInfo={translationsInfo} currentLanguage={currentLanguage} data={stats?.main_statistic} />;
    } else if (activeTab === "investment") {
      return <Investment currentLanguage={currentLanguage} data={stats?.investment_statistic} />;
    } else if (activeTab === "trades") {
      return <Trades currentLanguage={currentLanguage} data={stats?.trades_statistic} />;
    }

    return null;
  };

  return <div className="single-cards-container">{renderContent()}</div>;
};

export default MyCards;
