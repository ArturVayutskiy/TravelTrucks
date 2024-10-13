import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <main className={css.container} role="main">
      <p className={css.message}>
        We couldn’t find the page you were looking for.
      </p>
      <Link to="/" className={css.link} aria-label="Go back to the home page">
        Go back to the homepage
      </Link>
    </main>
  );
};

export default NotFoundPage;
