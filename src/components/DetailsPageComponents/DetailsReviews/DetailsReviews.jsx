import css from "./DetailsReviews.module.css";
import sprite from "../../../assets/icons/sprite.svg";

const DetailsReviews = ({ reviews }) => {
  return (
    <div className={css.reviewsTab}>
      {reviews.map((review, index) => (
        <div key={index} className={css.reviewItem}>
          <div className={css.reviewerInfo}>
            <div className={css.avatar}>
              <span className={css.avatarIcon}>
                {review.reviewer_name[0].toUpperCase()}
              </span>
            </div>
            <div className={css.ratingAndName}>
              <h4 className={css.name}>{review.reviewer_name}</h4>
              <div className={css.reviewRating}>
                {[...Array(5)].map((_, starIndex) => (
                  <svg
                    key={starIndex}
                    width="16"
                    height="16"
                    style={{
                      fill:
                        starIndex < review.reviewer_rating ? "#FFC531" : "#ccc",
                    }}
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
