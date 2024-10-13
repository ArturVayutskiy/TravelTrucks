import TruckCard from "../TruckCard/TruckCard";
import css from "./CatalogList.module.css";

const CatalogList = ({ campers }) => {
  if (!campers || campers.length === 0) {
    return <p className={css.noResults}>No campers available at the moment.</p>;
  }

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
