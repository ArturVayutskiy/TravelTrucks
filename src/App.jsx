import { Route, Routes } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { useSelector } from "react-redux";

import Navigation from "./components/Navigation/Navigation.jsx";
import Container from "./components/Container/Container.jsx";
import Loader from "./components/Loader/Loader.jsx";

const HomePage = lazy(() => import("../src/pages/HomePage/HomePage.jsx"));
const Catalog = lazy(() => import("../src/pages/Catalog/Catalog.jsx"));
const Details = lazy(() => import("../src/pages/Details/Details.jsx"));
const NotFoundPage = lazy(() =>
  import("../src/components/NotFoundPage/NotFoundPage.jsx")
);

function App() {
  const favorites = useSelector((state) => state.campers.favorites);
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);
  return (
    <>
      <Container>
        <Suspense fallback={<Loader />}>
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/:id" element={<Details />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Container>
    </>
  );
}

export default App;
