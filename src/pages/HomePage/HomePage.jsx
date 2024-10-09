import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <main>
      <div className={css.container}>
        <img src="../../assets/images/Picture.png" alt="" />
        <h1 className={css.title}>
          Campers of your dreams You can find everything you want in our catalog
        </h1>
        <a href="../Catalog/Catalog" className={css.button}>
          {" "}
          View Now
        </a>
      </div>
    </main>
  );
};

export default HomePage;
