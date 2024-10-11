import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Catalog from "./pages/Catalog/Catalog";
import Details from "./pages/Details/Details";
import Navigation from "./components/Navigation/Navigation.jsx";
import Container from "./components/Container/Container.jsx";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function App() {
  const favorites = useSelector((state) => state.campers.favorites);
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);
  return (
    <>
      <Container>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:id" element={<Details />} />
          <Route path="*" element={"THE PAGE NOT FOUND"} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
