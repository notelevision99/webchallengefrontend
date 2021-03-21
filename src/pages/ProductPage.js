import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import Banner from "../components/layout/user/productPage/Banner";
import ListProduct from "../components/layout/user/productPage/ListProduct";
import MainContent from "../components/layout/user/productPage/MainContent";
import SideBar from "../components/layout/user/productPage/SideBar";

function ProductPage() {
  const products = useSelector((state) => state.ProductReducer.products);
  const categories = useSelector((state) => state.ProductReducer.categories);
  console.log("sá", categories);

  return (
    <div className="product-page">
      <SideBar categories={categories} />
      <MainContent products={products} />
    </div>
  );
}
export default ProductPage;
