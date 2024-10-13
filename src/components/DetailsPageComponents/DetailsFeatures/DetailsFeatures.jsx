import css from "./DetailsFeatures.module.css";
import TruckFeatures from "../../TruckFeatures/TruckFeatures";
import Loader from "../../Loader/Loader";

const DetailsFeature = ({ camper }) => {
  if (!camper) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  return (
    <div className={css.featuresTab}>
      {/* Features of the truck */}
      <TruckFeatures camper={camper} />

      <div className={css.featuresDetails}>
        <h3 className={css.featuresTitle} aria-label="Vehicle details">
          Vehicle details
        </h3>
        <ul className={css.featuresList}>
          <li className={css.featuresItem}>
            <span aria-label="Vehicle form">Form</span>
            {camper.form.charAt(0).toUpperCase() + camper.form.slice(1)}
          </li>
          <li className={css.featuresItem}>
            <span aria-label="Vehicle length">Length</span> {camper.length}
          </li>
          <li className={css.featuresItem}>
            <span aria-label="Vehicle width">Width</span> {camper.width}
          </li>
          <li className={css.featuresItem}>
            <span aria-label="Vehicle height">Height</span> {camper.height}
          </li>
          <li className={css.featuresItem}>
            <span aria-label="Vehicle tank capacity">Tank</span> {camper.tank}
          </li>
          <li className={css.featuresItem}>
            <span aria-label="Vehicle fuel consumption">Consumption</span>{" "}
            {camper.consumption}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DetailsFeature;
