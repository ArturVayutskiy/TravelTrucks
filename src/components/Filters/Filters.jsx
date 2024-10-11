import css from "./Filters.module.css";
import { useDispatch } from "react-redux";
import { fetchCampers } from "../../redux/slice/camperSlice";
import { useState } from "react";
import sprite from "../../assets/icons/sprite.svg";

const Filters = () => {
  const [location, setLocation] = useState("");
  const [ac, setAc] = useState(false);
  const [automatic, setAutomatic] = useState(false);
  const [kitchen, setKitchen] = useState(false);
  const [tv, setTv] = useState(false);
  const [bathroom, setBathroom] = useState(false);
  const [vehicleType, setVehicleType] = useState("");

  const dispatch = useDispatch();

  const applyFilters = () => {
    const filters = {};

    if (location) filters.location = location;
    if (ac) filters.AC = ac;
    if (automatic) filters.transmission = "automatic";
    if (kitchen) filters.kitchen = kitchen;
    if (tv) filters.TV = tv;
    if (bathroom) filters.bathroom = bathroom;
    if (vehicleType) filters.form = vehicleType;
    dispatch(fetchCampers(filters));
  };

  return (
    <aside className={css.filtersSection}>
      <div className={css.location}>
        <h4 className={css.locationTitle}>Location</h4>
        <div className={css.wrapperIconInput}>
          <svg className={css.icon} width="20" height="20">
            <use href={`${sprite}#icon-location`}></use>
          </svg>
          <input
            className={css.locationInput}
            type="text"
            placeholder="City"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
      </div>

      <div className={css.filters}>
        <h4 className={css.filtersTitle}>Filters</h4>

        <div className={css.filterCategory}>
          <h3 className={css.filterVehicle}>Vehicle equipment</h3>
          <div className={css.filterEquipmentOptions}>
            <button
              className={`${css.filterButton} ${ac ? css.active : ""}`}
              onClick={() => setAc(!ac)}
            >
              <svg className={css.icons} width="32" height="32">
                <use href={`${sprite}#icon-ac`}></use>
              </svg>
              AC
            </button>

            <button
              className={`${css.filterButton} ${automatic ? css.active : ""}`}
              onClick={() => setAutomatic(!automatic)}
            >
              <svg className={css.icons} width="32" height="32">
                <use href={`${sprite}#icon-automatic`}></use>
              </svg>
              Automatic
            </button>

            <button
              className={`${css.filterButton} ${kitchen ? css.active : ""}`}
              onClick={() => setKitchen(!kitchen)}
            >
              {" "}
              <svg className={css.icons} width="32" height="32">
                <use href={`${sprite}#icon-kitchen`}></use>
              </svg>
              Kitchen
            </button>

            <button
              className={`${css.filterButton} ${tv ? css.active : ""}`}
              onClick={() => setTv(!tv)}
            >
              <svg className={css.icons} width="32" height="32">
                <use href={`${sprite}#icon-tv`}></use>
              </svg>
              TV
            </button>

            <button
              className={`${css.filterButton} ${bathroom ? css.active : ""}`}
              onClick={() => setBathroom(!bathroom)}
            >
              {" "}
              <svg className={css.icons} width="32" height="32">
                <use href={`${sprite}#icon-bathroom`}></use>
              </svg>
              Bathroom
            </button>
          </div>
        </div>

        <div className={css.filterVehicleType}>
          <h3 className={css.filterVehicle}>Vehicle type</h3>
          <div className={css.vehicleTypeOptions}>
            <button
              className={`${css.filterButton} ${
                vehicleType === "panelTruck" ? css.active : ""
              }`}
              onClick={() => setVehicleType("panelTruck")}
            >
              <svg className={css.icons} width="32" height="32">
                <use href={`${sprite}#icon-van`}></use>
              </svg>
              Van
            </button>

            <button
              className={`${css.filterButton} ${
                vehicleType === "fullyIntegrated" ? css.active : ""
              }`}
              onClick={() => setVehicleType("fullyIntegrated")}
            >
              <svg className={css.icons} width="32" height="32">
                <use href={`${sprite}#icon-fully`}></use>
              </svg>
              Fully Integrated
            </button>

            <button
              className={`${css.filterButton} ${
                vehicleType === "alcove" ? css.active : ""
              }`}
              onClick={() => setVehicleType("alcove")}
            >
              <svg className={css.icons} width="32" height="32">
                <use href={`${sprite}#icon-alcove`}></use>
              </svg>
              Alcove
            </button>
          </div>
        </div>

        <button className={css.searchButton} onClick={applyFilters}>
          Search
        </button>
      </div>
    </aside>
  );
};

export default Filters;
