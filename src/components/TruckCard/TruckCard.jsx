import TruckFeatures from "../TruckFeatures/TruckFeatures";
import css from "./TruckCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../redux/slice/camperSlice";
import sprite from "../../assets/icons/sprite.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import Loader from "../Loader/Loader";

const TruckCard = ({ camper }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.campers.favorites);
  const isFavorite = favorites.includes(camper.id);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(camper.id));
  };

  const renderStars = (rating) => {
    const totalStars = 5;
    const filledStars = Math.floor(rating);
    const emptyStars = totalStars - filledStars;
    return (
      <>
        {[...Array(filledStars)].map((_, i) => (
          <svg key={i} width="16" height="16" style={{ fill: "#FFC531" }}>
            <use href={`${sprite}#icon-star`}></use>
          </svg>
        ))}
        {[...Array(emptyStars)].map((_, i) => (
          <svg
            key={filledStars + i}
            width="16"
            height="16"
            style={{ fill: "#ccc" }}
          >
            <use href={`${sprite}#icon-star`}></use>
          </svg>
        ))}
      </>
    );
  };

  return (
    <div className={css.truckContainer}>
      {!imageLoaded && (
        <div className={css.imagePlaceholder}>
          <Loader />
        </div>
      )}
      <img
        className={css.truckCardImage}
        src={camper.gallery[0].thumb}
        alt={camper.name}
        onLoad={() => setImageLoaded(true)}
        style={{ display: imageLoaded ? "block" : "none" }}
      />
      <div className={css.truckCardInfo}>
        <div className={css.cardTitle}>
          <h3 className={css.title}>{camper.name}</h3>
          <div className={css.namePriceFavorite}>
            <p className={css.truckCardPrice}>€{camper.price.toFixed(2)}</p>
            <svg
              className={`${css.favoriteIcon} ${isFavorite ? css.active : ""}`}
              onClick={handleToggleFavorite}
              role="button"
              aria-label="Add to favorite"
              tabindex="0"
              width="24"
              height="21"
            >
              <use href={`${sprite}#icon-heart`}></use>
            </svg>
          </div>
        </div>
        <div className={css.truckCardRating}>
          {renderStars(camper.rating)}
          {camper.rating} ({camper.reviews.length} Reviews)
          <svg width="16" height="16">
            <use href={`${sprite}#icon-location`}></use>
          </svg>
          {camper.location}
        </div>
        <p className={css.truckCardDescription}>{camper.description}</p>
        <TruckFeatures camper={camper} />
        <div className={css.truckCardFooter}>
          <Link
            to={`/catalog/${camper.id}`}
            className={css.showMoreButton}
            aria-label="Show more info"
          >
            Show More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TruckCard;
