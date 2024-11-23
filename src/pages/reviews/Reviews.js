import React, { useState } from 'react';
import Rating from "react-rating-stars-component";
import { useSelector } from 'react-redux';
import './style.css';
import { reviewsData, translations } from "../../components/banner/Lang";


const Reviews = () => {
    const currentLanguage = useSelector((state) => state.language.currentLanguage);
    const subTitle = translations[currentLanguage];
    const [selectedReview, setSelectedReview] = useState(null);


    const handleCardClick = (review) => {
        setSelectedReview(review);
    };

    const closeModal = () => {
        setSelectedReview(null);
    };

    const getInitials = (name) => {
        return name
            .split(" ")
            .map((word) => word[0])
            .join("")
            .toUpperCase();
    };

    const ReviewCard = ({ review, language, onClick }) => {
        return (
            <div className="review-cardRow" onClick={() => onClick(review)}>
                <div className="img-stor">
                    <div className="avatar-mod-image">
                        {review.image ? (
                            <img
                                src={review.image}
                                alt={`${review.name}'s avatar`}
                                className="review-avatar"
                            />
                        ) : (
                            <div className="initials-avatar">{getInitials(review.name)}</div>
                        )}
                    </div>
                    <div className="store-box">
                        <Rating
                            count={5}
                            value={review.store}
                            edit={false}
                            size={20}
                            isHalf={true}
                            activeColor="gold"
                            color="gray"
                        />
                    </div>
                </div>
                <h4 className="review-nameRow">{review.name}</h4>
                <p className="review-summaryRow">
                    {review.text[language]?.substring(0, 100)}...
                </p>
            </div>
        );
    };

    const ReviewModal = ({ review, language, onClose }) => {
        if (!review) return null;

        return (
            <div className="modal-overlay-review" onClick={onClose}>
                <div
                    className="modal-content-review"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button className="close-button-review" onClick={onClose}>
                        X
                    </button>
                    <div className="modal-overlay-head">
                        <div className="modal-overlay-head-box">
                            <img
                                src={review.image}
                                alt={review.name}
                                className="review-avatar-large"
                            />
                            <h4 className="review-name-modal">{review.name}</h4>
                        </div>
                        <p className="review-date">{review.date}</p>
                    </div>
                    <p className="review-full-text">{review.text[language]}</p>
                </div>
            </div>
        );
    };

    return (
        <div className="faq-container_main">
            <div className="faq-headerTitle">
                <h1>Reviews</h1>
            </div>
            <div className="faq-main_reviews">
                <h2 >{subTitle.accountTitle}</h2>
                <p>{subTitle.consider}</p>
                <div className="reviews-containerRew">
                    {reviewsData.map((review, index) => (
                        <ReviewCard
                            key={index}
                            review={review}
                            language={currentLanguage}
                            onClick={handleCardClick}
                        />
                    ))}
                </div>
                <ReviewModal
                    review={selectedReview}
                    language={currentLanguage}
                    onClose={closeModal}
                />
            </div>
        </div>
    );
};

export default Reviews;



