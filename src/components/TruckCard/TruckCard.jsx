import TruckFeatures from "../TruckFeatures/TruckFeatures";
import css from "./TruckCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../redux/slice/camperSlice";
import sprite from "../../assets/icons/sprite.svg";
import { Link } from "react-router-dom";

const TruckCard = ({ camper }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.campers.favorites);
  const isFavorite = favorites.includes(camper.id);

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(camper.id));
  };

  return (
    <div className={css.truckContainer}>
      <img
        className={css.truckCardImage}
        src={camper.gallery[0].thumb}
        alt={camper.name}
      />
      <div className={css.truckCardInfo}>
        <div className={css.cardTitle}>
          <h3 className={css.title}>{camper.name}</h3>
          <div className={css.namePriceFavorite}>
            <p className={css.truckCardPrice}>€{camper.price.toFixed(2)}</p>
            <svg
              className={`${css.favoriteIcon} ${isFavorite ? css.active : ""}`}
              onClick={handleToggleFavorite}
              width="24"
              height="21"
            >
              <use href={`${sprite}#icon-heart`}></use>
            </svg>
          </div>
        </div>
        <div className={css.truckCardRating}>
          <svg width="16" height="16" style={{ fill: "#FFC531" }}>
            <use href={`${sprite}#icon-star`}></use>
          </svg>
          {camper.rating} ({camper.reviews.length} Reviews)
          <svg width="16" height="16">
            <use href={`${sprite}#icon-location`}></use>
          </svg>
          {camper.location}
        </div>
        <p className={css.truckCardDescription}>{camper.description}</p>
        <TruckFeatures camper={camper} />
        <div className={css.truckCardFooter}>
          <Link to={`/catalog/${camper.id}`} className={css.showMoreButton}>
            Show More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TruckCard;
