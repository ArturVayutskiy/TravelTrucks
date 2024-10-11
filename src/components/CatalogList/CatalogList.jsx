import TruckCard from "../TruckCard/TruckCard";
import css from "./CatalogList.module.css";

const CatalogList = ({ campers }) => {
  return (
    <ul className={css.catalogList}>
      {campers.map((camper) => (
        <li key={camper.id} className={css.catalogListItem}>
          <TruckCard camper={camper} />
        </li>
      ))}
    </ul>
  );
};

export default CatalogList;
