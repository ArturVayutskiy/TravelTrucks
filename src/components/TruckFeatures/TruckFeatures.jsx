import css from "./TruckFeatures.module.css";
import sprite from "../../assets/icons/sprite.svg";

const TruckFeatures = ({ camper }) => {
  return (
    <div className={css.container}>
      <ul className={css.list}>
        {camper.transmission && (
          <li className={css.item}>
            <svg className={css.icons} width="20" height="20">
              <use href={`${sprite}#icon-automatic`}></use>
            </svg>
            <span>Automatic</span>
          </li>
        )}
        {camper.engine && (
          <li className={css.item}>
            <svg className={css.icons} width="20" height="20">
              <use href={`${sprite}#icon-petrol`}></use>
            </svg>
            <span>Petrol</span>
          </li>
        )}
        {camper.kitchen && (
          <li className={css.item}>
            <svg className={css.icons} width="20" height="20">
              <use href={`${sprite}#icon-kitchen`}></use>
            </svg>
            <span>Kitchen</span>
          </li>
        )}
        {camper.AC && (
          <li className={css.item}>
            <svg className={css.icons} width="20" height="20">
              <use href={`${sprite}#icon-ac`}></use>
            </svg>
            <span>AC</span>
          </li>
        )}
        {camper.TV && (
          <li className={css.item}>
            <svg className={css.icons} width="20" height="20">
              <use href={`${sprite}#icon-tv`}></use>
            </svg>
            <span>TV</span>
          </li>
        )}
        {camper.bathroom && (
          <li className={css.item}>
            <svg className={css.icons} width="20" height="20">
              <use href={`${sprite}#icon-bathroom`}></use>
            </svg>
            <span>Bathroom</span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default TruckFeatures;
