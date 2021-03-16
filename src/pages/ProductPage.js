import Banner from "../components/layout/user/productPage/Banner";
import ListProduct from "../components/layout/user/productPage/ListProduct";
import MainContent from "../components/layout/user/productPage/MainContent";
import SideBar from "../components/layout/user/productPage/SideBar";

function ProductPage() {
  return (
    <div className="product-page">
      <SideBar />
      <MainContent />
    </div>
  );
}
export default ProductPage;
