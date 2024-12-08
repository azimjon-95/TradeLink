import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dropdown, Menu } from "antd";
import { GrLanguage } from "react-icons/gr";
import { setLanguage } from "../context/languageSlice";
import RussianFlag from "../assets/flags/Flag_of_Russia.svg"; // Rossiya bayrog'i rasmi
import EnglishFlag from "../assets/flags/Flag_of_the_United_Kingdom.svg"; // Ingliz bayrog'i rasmi
import GermanFlag from "../assets/flags/Flag_of_Germany.svg"; // Nemis bayrog'i rasmi
import SpanishFlag from "../assets/flags/Flag_of_Spain.svg"; // Ispan bayrog'i rasmi
import "../index.css";

const LanguageSwitcher = () => {
    const currentLanguage = useSelector((state) => state.language.currentLanguage);
    const dispatch = useDispatch();

    const handleLanguageChange = (lang) => {
        dispatch(setLanguage(lang));
    };

    const languages = {
        ru: { label: "Русский", flag: RussianFlag, langRes: "РУС" },
        en: { label: "English", flag: EnglishFlag, langRes: "ENG" },
        de: { label: "Deutsch", flag: GermanFlag, langRes: "GER" },
        es: { label: "Español", flag: SpanishFlag, langRes: "ESP" },
    };

    const menu = (
        <Menu>
            {Object.entries(languages).map(([langCode, { label, flag }]) => (
                <button
                    key={langCode}
                    onClick={() => handleLanguageChange(langCode)}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        padding: "10px 15px",
                    }}
                    className="btn_flg"
                >
                    <img src={flag} alt={label} width={20} />
                    {label}
                </button>
            ))}
        </Menu>
    );

    return (
        <Dropdown overlayStyle={{
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#000000",
            borderRadius: "10px",
        }} overlay={menu} trigger={['click']}>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "3px",
                    cursor: "pointer",
                    color: "#fff",
                }}
                className="GrLanguage"
            >
                <GrLanguage size={18} />
                <span style={{ fontSize: "14px" }}>{languages[currentLanguage].langRes}</span>
            </div>
        </Dropdown>
    );
};

export default LanguageSwitcher;

