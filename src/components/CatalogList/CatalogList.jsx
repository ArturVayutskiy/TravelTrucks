import { useEffect, useState } from "react";
import TruckCard from "../TruckCard/TruckCard";

const CatalogList = () => {
  const [campers, setCampers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers")
      .then((response) => response.json())
      .then((data) => {
        setCampers(data.items);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Ошибка при загрузке данных:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="catalog-list">
      {loading ? (
        <p>Загрузка данных...</p>
      ) : (
        campers.map((camper) => <TruckCard key={camper.id} camper={camper} />)
      )}
    </div>
  );
};

export default CatalogList;
