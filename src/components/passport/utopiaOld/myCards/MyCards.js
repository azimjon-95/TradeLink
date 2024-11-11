import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "../../../../api";
import OutlineCircle from "./OutlineCircle";
import Investment from "./Investment";
import Trades from "./Trades";

const MyCards = ({ activeTab, id, selectValue }) => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get(
          `/portfolio/stats/?portfolio_id=${id}&time_step=${selectValue}`
        );
        setStats(response?.data?.data);
      } catch (error) {
        console.error("my_card_error", error);
      }
    };

    fetchStats();
  }, [id, selectValue]);

  const renderContent = () => {
    if (activeTab === "main") {
      return <OutlineCircle data={stats.main_statistic} />;
    } else if (activeTab === "investment") {
      return <Investment data={stats.investment_statistic} />;
    } else if (activeTab === "trades") {
      return <Trades data={stats.trades_statistic} />;
    }

    return null;
  };

  return <div className="single-cards-container">{renderContent()}</div>;
};

export default MyCards;
