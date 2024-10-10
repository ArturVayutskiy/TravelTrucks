import css from "./Filters.module.css";
const Filters = () => {
  return (
    <aside className={css.filtersSection}>
      <div className={css.location}>
        <h4>Location</h4>
        <input type="text" placeholder="Enter the location" />
      </div>

      <div className={css.filters}>
        <h4>Filters</h4>

        <div className={css.filterCategory}>
          <h5>Vehicle equipment</h5>
          <div className={css.equipmentOptions}>
            <button className={css.filterButton}>AC</button>
            <button className={css.filterButton}>Automatic</button>
            <button className={css.filterButton}>Kitchen</button>
            <button className={css.filterButton}>TV</button>
            <button className={css.filterButton}>Bathroom</button>
          </div>
        </div>

        <div className={css.filterCategory}>
          <h5>Vehicle type</h5>
          <div className={css.vehicleTypeOptions}>
            <button className={css.filterButton}>Van</button>
            <button className={css.filterButton}>Fully Integrated</button>
            <button className={css.filterButton}>Alcove</button>
          </div>
        </div>

        <button className={css.searchButton}>Search</button>
      </div>
    </aside>
  );
};

export default Filters;
