import React from "react";
import "./passport.css";
import { useSelector } from "react-redux";
import DashbordMain from "../../components/passport/dashboards/Dashbord_main";

function Dashboard() {
  const currentLanguage = useSelector((state) => state.language.currentLanguage);
  const translations = {
    en: {
      dashboard: "Dashboard",
    },
    ru: {
      dashboard: "Панель управления", // Russian
    },
    de: {
      dashboard: "Dashboard", // German
    },
    es: {
      dashboard: "Tablero", // Spanish
    },
  };
  const t = translations[currentLanguage];

  return (
    <div className="passport_dashboard">
      <h1>{t?.dashboard}</h1>
      <DashbordMain currentLanguage={currentLanguage} />
    </div>
  );
}

export default Dashboard;
