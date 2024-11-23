import React from 'react';
import { useSelector } from 'react-redux';
import { Language } from "./Lang";
import './style.css';


const Contact = () => {
    const currentLanguage = useSelector((state) => state.language.currentLanguage);
    const subTitle = Language[currentLanguage];

    return (
        <div className="faq-container_main">
            <div className="faq-headerTitle">
                <h1>{subTitle.about}</h1>
            </div>
            <div className="faq-main">
                <h2 style={{ marginTop: "0" }}>{subTitle.title1}</h2>
                <p>{subTitle.subtitle1}</p>

                <p>
                    <a href="https://t.me/kyt.system">{subTitle.subtitle2[0]}</a>
                    <br />
                    <a href={`mailto:${subTitle.subtitle2[1].replace("• ", "").trim()}`}>
                        {subTitle.subtitle2[1]}
                    </a>
                </p>
                <br />
                <p>{subTitle.subtitle3}</p>

            </div>
        </div>
    );
};

export default Contact;



