import React from 'react';
import { useSelector } from 'react-redux';
import { Language } from "./Lang";
import './style.css';


const Faq = () => {
    const currentLanguage = useSelector((state) => state.language.currentLanguage);
    const subTitle = Language[currentLanguage];
    console.log(subTitle);

    return (
        <div className="faq-container_main">
            <div className="faq-header">
                <h1>FAQ</h1>
            </div>
            <div className="faq-main">
                <h2 style={{ marginTop: "0" }}>{subTitle.title1}</h2>
                <p>{subTitle.subtitle1}</p>

                <h2 >{subTitle.title2}</h2>
                <p>{subTitle.subtitle2}</p>

                <h2 >{subTitle.title3}</h2>
                <p>{subTitle.subtitle3}</p>

                <h2 >{subTitle.title4}</h2>
                <p>{subTitle.subtitle4}</p>

                <h2 >{subTitle.title5}</h2>
                <p>{subTitle.subtitle5}</p>

                <h2 >{subTitle.title6}</h2>
                <p>{subTitle.subtitle6}</p>

                <h2 >{subTitle.title7}</h2>
                <p>{subTitle.subtitle7}</p>

                <h2 >{subTitle.title8}</h2>
                <p>{subTitle.subtitle8}</p>

                <h2 >{subTitle.title9}</h2>
                <p>{subTitle.subtitle9}</p>

                <h2 >{subTitle.title10}</h2>
                <p>{subTitle.subtitle10}</p>

                <h2 >{subTitle.title11}</h2>
                <p> {subTitle.subtitle11[0]}
                    <br />{subTitle.subtitle11[1]}
                    <br />{subTitle.subtitle11[2]}
                    <br />{subTitle.subtitle11[3]}
                </p>

                <h2 >{subTitle.title12}</h2>
                <p> {subTitle.subtitle12[0]}
                    <br />{subTitle.subtitle12[1]}
                    <br />{subTitle.subtitle12[2]}
                </p>

                <h2 >{subTitle.title13}</h2>
                <p> {subTitle.subtitle13[0]}
                    <br />{subTitle.subtitle13[1]}
                    <br />{subTitle.subtitle13[2]}
                </p>

            </div>
        </div>
    );
};

export default Faq;



