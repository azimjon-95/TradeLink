import React from 'react';
import '../../components/banner/style.css';
import { useSelector } from "react-redux";
import { translate } from '../../components/banner/Lang';
const Reviews = () => {

    const currentLanguage = useSelector(
        (state) => state.language.currentLanguage
    );
    const t = translate[currentLanguage];
    return (
        <div className="reviews_container" >
            <h1>{t.reviews}</h1>
            <p>{t.leaving}</p>
            <div className="reviews_box">
                <div className="reviews_card">
                    <div className="review_userImage">
                        <div className="review_userImage_img">
                            <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="User 1" />
                        </div>
                        <div className="review_userImage_info">
                            <div>
                                <p>{t.entrepreneur}</p>
                                <h2>Emma</h2>
                            </div>
                            <p>@emma_business</p>
                        </div>
                    </div>
                    <p>{t.review_texts[0]}</p>
                </div>

                <div className="reviews_card">
                    <div className="review_userImage">
                        <div className="review_userImage_img">
                            <img src="https://randomuser.me/api/portraits/men/72.jpg" alt="User 2" />
                        </div>
                        <div className="review_userImage_info">
                            <div>
                                <p>{t.entrepreneur}</p>
                                <h2>James</h2>
                            </div>
                            <p>@james_analyst</p>
                        </div>
                    </div>
                    <p>{t.review_texts[1]}</p>
                </div>

                <div className="reviews_card">
                    <div className="review_userImage">
                        <div className="review_userImage_img">
                            <img src="https://randomuser.me/api/portraits/women/52.jpg" alt="User 3" />
                        </div>
                        <div className="review_userImage_info">
                            <div>
                                <p>{t.entrepreneur}</p>
                                <h2>Sophia</h2>
                            </div>
                            <p>@sophia_trader</p>
                        </div>
                    </div>
                    <p>{t.review_texts[2]}</p>
                </div>
            </div>

        </div >
    );
};

export default Reviews;



