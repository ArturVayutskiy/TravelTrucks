import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";
import Logo from "../Logo/Logo";

const Navigation = () => {
  return (
    <div className={css.container}>
      <Logo />
      <nav className={css.nav}>
        <NavLink
          to="/"
          className={({ isActive }) => {
            return clsx(css.link, isActive && css.isActive);
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/catalog"
          className={({ isActive }) => {
            return clsx(css.link, isActive && css.isActive);
          }}
        >
          Catalog
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
