import css from "./DetailsReviews.module.css";
import sprite from "../../../assets/icons/sprite.svg";

const DetailsReviews = ({ reviews }) => {
  return (
    <div className={css.reviewsTab}>
      {reviews.map((review, index) => (
        <div key={index} className={css.reviewItem}>
          <div className={css.reviewerInfo}>
            <div>
              <h4>{review.reviewer_name}</h4>
              <div className={css.reviewRating}>
                {[...Array(review.reviewer_rating)].map((_, index) => (
                  <svg
                    key={index}
                    width="16"
                    height="16"
                    style={{ fill: "#FFC531" }}
                  >
                    <use href={`${sprite}#icon-star`}></use>
                  </svg>
                ))}
                ({review.reviewer_rating}/5)
              </div>
            </div>
          </div>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default DetailsReviews;
