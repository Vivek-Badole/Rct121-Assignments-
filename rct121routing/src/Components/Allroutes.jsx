import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import PageNotFound from "./PageNotFound";
import Products from "./Products";
import ProductsPage from "./ProductsPage";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/Products/:id" element={<ProductsPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
export default AllRoutes;
