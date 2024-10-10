import { useState } from "react";
import Filters from "../../components/Filters/Filters";
import TruckCard from "../../components/TruckCard/TruckCard";
import CatalogList from "../../components/CatalogList/CatalogList";

const Catalog = () => {
  const [campers] = useState([]);
  const [loading] = useState(true);

  return (
    <div className="catalog-container">
      <Filters />
      <CatalogList />
      {loading ? (
        <p>Загрузка данных...</p>
      ) : (
        campers.map((camper) => <TruckCard key={camper.id} camper={camper} />)
      )}
    </div>
  );
};

export default Catalog;
