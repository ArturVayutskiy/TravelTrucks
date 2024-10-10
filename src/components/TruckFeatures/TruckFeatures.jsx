import css from "./TruckFeatures.module.css";
const TruckFeatures = ({ camper }) => {
  //   if (!camper) return null;

  return (
    <div className={css.container}>
      <div>
        {/* Например, перечисляем фичи кемпера */}
        {camper.AC && <span>AC</span>}
        {camper.kitchen && <span>{camper.kitchen}</span>}
        {camper.TV && <span>TV</span>}
        {<span>{camper.transmission}</span>}
        {camper.engine && <span>petrol</span>}
      </div>
      <div className={css.vehiclePrice}>€{camper.price.toFixed(2)}</div>
      <button className={css.showMoreButton}>Show More</button>
    </div>
  );
};

export default TruckFeatures;
