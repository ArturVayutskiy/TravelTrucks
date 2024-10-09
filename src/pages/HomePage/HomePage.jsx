import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.background}>
      <div className={css.wrapper}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <h2 className={css.secondText}>
          You can find everything you want in our catalog
        </h2>
        <a href="../Catalog/Catalog" className={css.button}>
          {" "}
          View Now
        </a>
      </div>
    </div>
  );
};

export default HomePage;
