import css from "./CamperDetails.module.css";
import sprite from "../../../assets/icons/sprite.svg";

const CamperDetails = ({ camper }) => {
  return (
    <div className={css.camperDetailsContainer}>
      <h1 className={css.camperName}>{camper.name}</h1>

      <div className={css.camperInfo}>
        <div className={css.reviews}>
          <svg width="16" height="16" aria-label="Rating">
            <use href={`${sprite}#icon-star`} className={css.starIcon}></use>
          </svg>
          <p>{`${camper.rating} (${camper.reviews.length} Reviews)`}</p>
        </div>

        <div className={css.location}>
          <svg width="16" height="16" aria-label="Location">
            <use
              href={`${sprite}#icon-location`}
              className={css.locationIcon}
            ></use>
          </svg>
          <p>{`${camper.location}`}</p>
        </div>
      </div>

      <h2 className={css.camperPrice}>€{camper.price.toFixed(2)}</h2>

      <div className={css.gallery}>
        {camper.gallery.map((image, index) => (
          <img
            key={index}
            src={image.original}
            alt={`${camper.name} gallery image ${index}`}
            className={css.galleryImage}
          />
        ))}
      </div>

      <p className={css.camperDescription}>{camper.description}</p>
    </div>
  );
};

export default CamperDetails;
