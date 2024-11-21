import React from "react";
import "./SelektPortfolio.css";
import { Link } from "react-router-dom";

function SelectPortfolio({ selectPortfolio, t }) {
  const MessageComponent = ({ language }) => {
    const messages = {
      en: (
        <p>
          You don't have any available portfolios. <br /> You can create a portfolio
          <Link to={"/passport/dashboard"}> in the dashboard</Link>.
        </p>
      ),
      ru: (
        <p>
          У вас нет доступных портфелей. <br /> Вы можете создать портфель
          <Link to={"/passport/dashboard"}> в панели управления</Link>.
        </p>
      ),
      es: (
        <p>
          No tienes ningún portafolio disponible. <br /> Puedes crear un portafolio
          <Link to={"/passport/dashboard"}> en el tablero</Link>.
        </p>
      ),
      de: (
        <p>
          Sie haben keine verfügbaren Portfolios. <br /> Sie können ein Portfolio
          <Link to={"/passport/dashboard"}> im Dashboard erstellen</Link>.
        </p>
      ),
    };

    return messages[language] || messages.en; // Default to English if language is not supported
  };

  return (
    <div>
      {selectPortfolio && (
        <div className="select-portfolio-dropdown">
          <MessageComponent language={t} />
        </div>
      )}
    </div>
  );
}

export default SelectPortfolio;
