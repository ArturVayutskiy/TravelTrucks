import { Link } from "react-router-dom";
import css from "./Logo.module.css";

const Logo = () => {
  return (
    <div className="css.wrapper">
      <Link
        to="/"
        aria-label="Go to home page"
        style={{ textDecoration: "none" }}
      >
        <p className={css.logoTitle}>
          Travel<span className={css.span}>Trucks</span>
        </p>
      </Link>
    </div>
  );
};

export default Logo;
