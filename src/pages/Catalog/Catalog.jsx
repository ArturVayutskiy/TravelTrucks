import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/slice/camperSlice";
import Filters from "../../components/Filters/Filters";
import CatalogList from "../../components/CatalogList/CatalogList";
import css from "./Catalog.module.css";

const Catalog = () => {
  const dispatch = useDispatch();
  const { campers, status, error } = useSelector((state) => state.campers);
  const [visibleCampers, setVisibleCampers] = useState(4);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const loadMore = () => {
    setVisibleCampers((prevVisible) => prevVisible + 4);
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <main>
      <div className={css.catalog}>
        <Filters />
        <div className={css.cardContainer}>
          <CatalogList campers={campers.slice(0, visibleCampers)} />
          {visibleCampers < campers.length && (
            <button onClick={loadMore} className={css.loadMoreBtn}>
              Load More
            </button>
          )}
        </div>
      </div>
    </main>
  );
};

export default Catalog;
