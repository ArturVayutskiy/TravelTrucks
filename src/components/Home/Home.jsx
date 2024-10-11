import { useNavigate } from "react-router-dom";
import css from "./Home.module.css";
const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/catalog");
  };
  return (
    <main>
      <div className={css.background}>
        <div className={css.wrapper}>
          <h1 className={css.title}>Campers of your dreams</h1>
          <h2 className={css.secondText}>
            You can find everything you want in our catalog
          </h2>
          <button type="button" className={css.button} onClick={handleClick}>
            View Now
          </button>
        </div>
      </div>
    </main>
  );
};

export default Home;
