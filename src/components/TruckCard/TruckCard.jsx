import TruckFeatures from "../TruckFeatures/TruckFeatures";

const TruckCard = ({ camper }) => {
  return (
    <div className="truck-card">
      <div className="truck-card__image">
        <img src={camper.gallery[0].thumb} alt={camper.name} />
      </div>
      <div className="truck-card__info">
        <h3>{camper.name}</h3>
        <div className="truck-card__rating">
          ⭐ {camper.rating} ({camper.reviews.length} Reviews) |{" "}
          {camper.location}
        </div>
        <p className="truck-card__description">{camper.description}</p>

        {/* Вставляем TruckFeatures для иконок характеристик */}
        <TruckFeatures camper={camper} />

        <div className="truck-card__footer">
          <p className="truck-card__price">€{camper.price.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default TruckCard;
