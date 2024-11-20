import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Popover } from "antd";
import { setLanguage } from "../context/languageSlice";
import Translate from "../assets/flags/translate.png";
import RussianFlag from "../assets/flags/Flag_of_Russia.svg"; // Rossiya bayrog'i rasmi
import EnglishFlag from "../assets/flags/Flag_of_the_United_Kingdom.svg"; // Ingliz bayrog'i rasmi
import GermanFlag from "../assets/flags/Flag_of_Germany.svg"; // Nemis bayrog'i rasmi
import SpanishFlag from "../assets/flags/Flag_of_Spain.svg"; // Ispan bayrog'i rasmi
import '../index.css';

const LanguageSwitcher = () => {
    const currentLanguage = useSelector((state) => state.language.currentLanguage);
    const dispatch = useDispatch();

    const handleLanguageChange = (lang) => {
        dispatch(setLanguage(lang));
    };

    const languageOptions = (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <button
                className={currentLanguage === "ru" ? "active-language" : "active-language-nan"}
                onClick={() => handleLanguageChange("ru")}
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
                <img src={RussianFlag} alt="Русский" width={20} />
                Русский
            </button>
            <button
                className={currentLanguage === "en" ? "active-language" : "active-language-nan"}
                onClick={() => handleLanguageChange("en")}
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
                <img src={EnglishFlag} alt="English" width={20} />
                English
            </button>
            <button
                className={currentLanguage === "de" ? "active-language" : "active-language-nan"}
                onClick={() => handleLanguageChange("de")}
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
                <img src={GermanFlag} alt="Deutsch" width={20} />
                Deutsch
            </button>
            <button
                className={currentLanguage === "es" ? "active-language" : "active-language-nan"}
                onClick={() => handleLanguageChange("es")}
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
                <img src={SpanishFlag} alt="Español" width={20} />
                Español
            </button>
        </div>
    );

    return (
        <Popover content={languageOptions} trigger="hover">
            <img
                style={{ margin: "0 10px", cursor: "pointer" }}
                width={28}
                src={Translate}
                alt="Translate"
            />
        </Popover>
    );
};

export default LanguageSwitcher;
