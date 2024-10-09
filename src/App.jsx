import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Catalog from "./pages/Catalog/Catalog";
import Details from "./pages/Details/Details";
import Navigation from "./components/Navigation/Navigation.jsx";
import Container from "./components/Container/Container.jsx";

function App() {
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
