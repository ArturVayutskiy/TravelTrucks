import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import Catalog from "./pages/Catalog/Catalog";
import Details from "./pages/Details/Detalis";
import Navigation from "./components/Navigation/Navigation.jsx";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<Details />} />
        <Route path="*" element={"THE PAGE NOT FOUND"} />
      </Routes>
    </>
  );
}

export default App;
