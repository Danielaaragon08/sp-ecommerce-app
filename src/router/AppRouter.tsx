import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { CartPage } from "../pages/CartPage";
import { CategoryPage } from "../pages/CategoryPage";
import { HomePage } from "../pages/HomePage";
import { ProductDetailPage } from "../pages/ProductDetailPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/category" element={<CategoryPage />} />
      <Route path="/product/:productId" element={<ProductDetailPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
