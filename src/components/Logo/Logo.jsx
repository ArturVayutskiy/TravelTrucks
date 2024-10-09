import css from "./Logo.module.css";
const Logo = () => {
  return (
    <div className="css.wrapper">
      <p className={css.logoTitle}>
        Travel<span className={css.span}>Trucks</span>
      </p>
    </div>
  );
};

export default Logo;
