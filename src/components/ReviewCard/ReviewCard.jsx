import { FaStar } from "react-icons/fa6";
import css from "./ReviewCard.module.css";
import { useState } from "react";

const ReviewCard = ({ truckId }) => {
  const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, index) => (
      <FaStar key={index} className={css.icon_review} />
    ));
  };

  return (
    <div className={css.review_card_container}>
      <ul className={css.trucks_list}>
        {truckId.reviews.map((truck, index) => (
          <li key={index}>
            <div className={css.name_container}>
              <div className={css.container}>
                <p className={css.first_letter}>
                  {truck.reviewer_name[0].toUpperCase()}
                </p>
              </div>
              <div>
                <p className={css.name}>{truck.reviewer_name}</p>
                <div className={css.rating_container}>
                  {renderStars(truck.reviewer_rating)}
                </div>
              </div>
            </div>
            <p className={css.comment}>{truck.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewCard;
