import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTelegramPlane } from "react-icons/fa";
import { FiX } from "react-icons/fi";

function AddKeyModal({ setOpenModal, currentLanguage }) {
  const [stock, setStock] = useState("");
  const [name, setName] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [secretKey, setSecretKey] = useState("");

  const isDisabled = !stock || !name || !apiKey || !secretKey;

  const texts = {
    en: {
      step1: "Create Your Binance Futures Account.",
      step2: "Create Binance API Key",
      description1:
        "To access the market, ensure your Binance account has an active futures account.",
      description2:
        "To access your trading statistics on the KYT Traders Passport, you need to add an API key to your exchange account with 'Read-only' permissions only.",
      warning:
        "Please note that after adding the key, you may receive emails from Binance regarding the use of Transaction History Exports. This is a standard procedure necessary to ensure that the key displays accurate information on our platform.",
      stockLabel: "Stock",
      nameLabel: "Name",
      readKeyLabel: "Read Key",
      secretKeyLabel: "Secret Key",
      buttonText: "Add",
      support: "Support",
      helpText:
        "If you encounter any issues, please don't hesitate to reach out to our support team.",
      guide: "this guide on how to open a Binance Futures account",
      completeGuide: "complete guide",
    },
    ru: {
      step1: "Создайте свою учетную запись Binance Futures.",
      step2: "Создайте API-ключ Binance",
      description1:
        "Чтобы получить доступ к рынку, убедитесь, что ваша учетная запись Binance имеет активную учетную запись фьючерсов.",
      description2:
        "Для доступа к вашей торговой статистике на KYT Traders Passport вам нужно добавить API-ключ в свою учетную запись обмена с разрешениями только для чтения.",
      warning:
        "Обратите внимание, что после добавления ключа вы можете получить электронные письма от Binance, касающиеся использования экспорта истории транзакций. Это стандартная процедура, необходимая для того, чтобы ключ отображал точную информацию на нашей платформе.",
      stockLabel: "Биржа",
      nameLabel: "Имя",
      readKeyLabel: "API ключ",
      secretKeyLabel: "Секретный ключ",
      buttonText: "Добавить",
      support: "Поддержка",
      helpText:
        "Если у вас возникнут проблемы, не стесняйтесь обращаться в нашу службу поддержки.",
      guide: "это руководство о том, как открыть учетную запись Binance Futures",
      completeGuide: "полное руководство",
    },
    de: {
      step1: "Erstellen Sie Ihr Binance Futures-Konto.",
      step2: "Erstellen Sie den Binance API-Schlüssel",
      description1:
        "Um auf den Markt zuzugreifen, stellen Sie sicher, dass Ihr Binance-Konto ein aktives Futures-Konto hat.",
      description2:
        "Um auf Ihre Handelsstatistiken im KYT Traders Passport zuzugreifen, müssen Sie einen API-Schlüssel mit nur 'Lese' -Berechtigungen zu Ihrem Exchange-Konto hinzufügen.",
      warning:
        "Bitte beachten Sie, dass Sie nach dem Hinzufügen des Schlüssels E-Mails von Binance bezüglich der Verwendung von Transaktionsverlaufsexporten erhalten können. Dies ist ein Standardverfahren, das erforderlich ist, damit der Schlüssel genaue Informationen auf unserer Plattform anzeigt.",
      stockLabel: "Börse",
      nameLabel: "Name",
      readKeyLabel: "API-Schlüssel",
      secretKeyLabel: "Geheimer Schlüssel",
      buttonText: "Hinzufügen",
      support: "Unterstützung",
      helpText:
        "Wenn Sie auf Probleme stoßen, zögern Sie bitte nicht, sich an unser Support-Team zu wenden.",
      guide: "diese Anleitung, wie man ein Binance Futures-Konto eröffnet",
      completeGuide: "komplette Anleitung",
    },
    es: {
      step1: "Crea tu cuenta de Binance Futures.",
      step2: "Crea la clave API de Binance",
      description1:
        "Para acceder al mercado, asegúrate de que tu cuenta de Binance tenga una cuenta de futuros activa.",
      description2:
        "Para acceder a tus estadísticas de trading en el KYT Traders Passport, debes agregar una clave API con permisos de 'solo lectura' a tu cuenta de intercambio.",
      warning:
        "Ten en cuenta que después de agregar la clave, puedes recibir correos electrónicos de Binance sobre el uso de exportaciones de historial de transacciones. Este es un procedimiento estándar necesario para garantizar que la clave muestre información precisa en nuestra plataforma.",
      stockLabel: "Intercambio",
      nameLabel: "Nombre",
      readKeyLabel: "Clave API",
      secretKeyLabel: "Clave secreta",
      buttonText: "Agregar",
      support: "Soporte",
      helpText:
        "Si encuentras algún problema, no dudes en ponerte en contacto con nuestro equipo de soporte.",
      guide: "esta guía sobre cómo abrir una cuenta de Binance Futures",
      completeGuide: "guía completa",
    },
  };

  const currentText = texts[currentLanguage];

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
                <h3>{currentText.step1}</h3>
                <p>{currentText.description1}</p>
                <p>
                  Check out{" "}
                  <Link to={"/"}>{currentText.guide}</Link>
                </p>
              </div>
            </div>

            <div className="addKeyModal__left__item">
              <span>2</span>
              <div>
                <h3>{currentText.step2}</h3>
                <p>{currentText.description2}</p>
              </div>
            </div>
            <p>
              Additionally, you can explore the{" "}
              <Link to={"/"}>{currentText.completeGuide}</Link> for more details.
            </p>
          </div>

          <span className="addKeyModal__left__warning">
            {currentText.warning}
          </span>
        </div>
        <form className="addKeyModal__right">
          <div className="addKeyModal__right__top">
            <h2>{currentText.buttonText}</h2>
            <label>{currentText.stockLabel}</label>
            <select onChange={(e) => setStock(e.target.value)} value={stock}>
              <option value="binance">Binance (Futures, USDT-M) </option>
              <option value="bybit">Bybit </option>
            </select>

            <label>{currentText.nameLabel}</label>
            <input
              type="text"
              placeholder={currentText.nameLabel}
              onChange={(e) => setName(e.target.value)}
              value={name}
            />

            <label>{currentText.readKeyLabel}</label>
            <input
              type="text"
              placeholder={currentText.readKeyLabel}
              onChange={(e) => setApiKey(e.target.value)}
              value={apiKey}
            />
            <input
              type="text"
              placeholder={currentText.secretKeyLabel}
              onChange={(e) => setSecretKey(e.target.value)}
              value={secretKey}
            />

            <button disabled={isDisabled}>{currentText.buttonText}</button>
          </div>
          <div className="addKeyModal__right__bottom">
            <a href="/">
              <FaTelegramPlane /> {currentText.support}
            </a>
            <p>{currentText.helpText}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddKeyModal;




