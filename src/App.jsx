import { Routes, Route } from "react-router-dom";
import react from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import ProductListPage from "./pages/ProductListPage";
import ProductPage from "./pages/ProductPage";
import AddProductPage from "./pages/AddProductPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<ProductListPage />} />
      <Route path="/products/:id" element={<ProductPage />} />
      <Route path="/add-product" element={<AddProductPage />} />
    </Routes>
  );
}

export default App;