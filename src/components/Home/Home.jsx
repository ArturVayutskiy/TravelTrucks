import css from "./Home.module.css";
const Home = () => {
  return (
    <main>
      <div className={css.background}>
        <div className={css.wrapper}>
          <h1 className={css.title}>Campers of your dreams</h1>
          <h2 className={css.secondText}>
            You can find everything you want in our catalog
          </h2>
          <a href="/catalog" className={css.button}>
            {" "}
            View Now
          </a>
        </div>
      </div>
    </main>
  );
};

export default Home;
