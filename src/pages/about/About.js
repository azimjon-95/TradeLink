import React from 'react';
import { useSelector } from 'react-redux';
import { Language } from "./Lang";
import './style.css';


const About = () => {
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

                <h2 >{subTitle.title2}</h2>
                <p>{subTitle.subtitle2}</p>

                <h2 >{subTitle.title3}</h2>
                <p> {subTitle.subtitle3[0]}
                    <br />{subTitle.subtitle3[1]}
                </p>

                <h2 >{subTitle.title4}</h2>
                <p> {subTitle.subtitle4[0]}
                    <br />{subTitle.subtitle4[1]}
                    <br />{subTitle.subtitle4[2]}
                </p>
            </div>
        </div>
    );
};

export default About;



