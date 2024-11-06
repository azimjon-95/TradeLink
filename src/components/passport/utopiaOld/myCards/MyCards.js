import React from 'react';
import './style.css';
import OutlineCircle from './OutlineCircle';
import Investment from './Investment';
import Trades from './Trades';

const MyCards = ({ activeTab }) => {

    const renderContent = () => {
        if (activeTab === "main") {
            return <OutlineCircle />
        } else if (activeTab === "investment") {
            return <Investment />
        } else if (activeTab === "trades") {
            return <Trades />
        }
        return null;
    };

    return <div className="single-cards-container">{renderContent()}</div>;
};

export default MyCards;