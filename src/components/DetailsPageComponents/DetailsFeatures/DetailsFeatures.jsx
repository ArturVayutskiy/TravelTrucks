import css from "./DetailsFeatures.module.css";
import TruckFeatures from "../../TruckFeatures/TruckFeatures";

const DetailsFeature = ({ camper }) => {
  if (!camper) {
    return <div>Loading camper details...</div>;
  }
  return (
    <div className={css.featuresTab}>
      <TruckFeatures camper={camper} />

      <div className={css.featuresDetails}>
        <h3 className={css.featuresTitle}>Vehicle details</h3>
        <ul className={css.featuresList}>
          <li className={css.featuresItem}>
            <span>Form</span>{" "}
            {camper.form.charAt(0).toUpperCase() + camper.form.slice(1)}
          </li>
          <li className={css.featuresItem}>
            <span>Length</span> {camper.length}
          </li>
          <li className={css.featuresItem}>
            <span>Width</span> {camper.width}
          </li>
          <li className={css.featuresItem}>
            <span>Height</span> {camper.height}
          </li>
          <li className={css.featuresItem}>
            <span>Tank</span> {camper.tank}
          </li>
          <li className={css.featuresItem}>
            <span>Consumption</span> {camper.consumption}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DetailsFeature;
