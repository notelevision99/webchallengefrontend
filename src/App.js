import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import cookie from "js-cookie";

import ListCategories from "./components/atom/admin/categories/ListCategories";
import EditCategories from "./components/atom/admin/categories/EditCategories";
import Login from "./components/atom/admin/auth/Login";
import ListAdmins from "./components/atom/admin/users/ListAdmins";
import CreateAdmin from "./components/atom/admin/users/CreateAdmin";

import Product from "./components/atom/admin/Products/Product";
import Home from "./components/atom/admin/home/Home";
import CreateProduct from "./components/atom/admin/Products/CreateProduct";
import EditProduct from "./components/atom/admin/Products/EditProduct";
import ProtectedRoute from "./helpers/admin/checkRolesAuth";
import EditCurrentAdmin from "./components/atom/admin/users/EditCurrentAdmin";
import Banners from "./components/atom/admin/banners/Banners";
import CreateBanner from "./components/atom/admin/banners/CreateBanner";
import Orders from "./components/atom/admin/orders/Orders";
import OrderDetails from "./components/atom/admin/orders/OrderDetails";
import CreateBlog from "./components/atom/admin/blogs/CreateBlog";
import Blog from "./components/atom/admin/blogs/Blog";
import EditBlog from "./components/atom/admin/blogs/EditBlog";
import CreateCategories from "./components/atom/admin/categories/CreateCategories";
import CategoriesBlog from "./components/atom/admin/categoriesBlog/CategoriesBlog";
import CreateCategoriesBlog from "./components/atom/admin/categoriesBlog/CreateCategoriesBlog";
import EditCategoriesBlog from "./components/atom/admin/categoriesBlog/EditCategoriesBlog";

// Client
import "./styles/App.scss";
import HomePage from "./pages/HomePage";
import Header from "./components/atom/user/header/Header";
import Footer from "./components/atom/user/footer/Footer";
import ProductPage from "./pages/ProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUpPage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import NoMatch from "./pages/NoMatch";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";

// Config
import { DATA_STATUS } from "./utils/config";

// Business
import {
  GetProductBusiness,
  GetCateProductBusiness,
} from "./business/product/ProductBusiness";
import { GetCompanyBusiness } from "./business/product/CompanyBusiness";
import { GetWeightBusiness } from "./business/product/WeightBusiness";
import { GetBlogBusiness } from "./business/blogs/BlogBusiness";
// Action redux
import {
  getProducts,
  getCategory,
  getCompany,
  getWeight,
} from "./redux/action/ProductAction";

import BeginAtTop from "./components/atom/user/action/BeginAtTop";
import ScrollTopTop from "./components/atom/user/action/ScrollTopTop";

/* GET cookie */
let getCookie = () => {
  const userCookie = cookie.get("Usr_N");
  if (userCookie) {
    console.log("nam dung");
    return userCookie;
  } else {
    return false;
  }
};

function App() {
  const DISPATCH = useDispatch();

  //Authentication
  const [user, setUser] = useState(getCookie());
  const userOnRedux = useSelector(
    (state) => state.AuthenticationReducer.userInfo
  );

  // Get products from API
  const GetProduct = async (pageNumber) => {
    await GetProductBusiness(pageNumber).then((res) => {
      if (res.status === DATA_STATUS.SUCCESS) {
        const allProduct = res.data.item1;
        console.log("allProduct", allProduct);
        DISPATCH(getProducts(allProduct));
      }
    });
  };

  // Get categories from API
  const GetCateProduct = async () => {
    await GetCateProductBusiness().then((res) => {
      if (res.status === DATA_STATUS.SUCCESS) {
        const allCategory = res.data;
        DISPATCH(getCategory(allCategory));
      }
    });
  };

  // Get companies from API
  const GetCompany = async () => {
    await GetCompanyBusiness().then((res) => {
      if (res.status === DATA_STATUS.SUCCESS) {
        const companies = res.data;
        DISPATCH(getCompany(companies));
      }
    });
  };

  // Get weight from API
  const GetWeight = async () => {
    await GetWeightBusiness().then((res) => {
      if (res.status === DATA_STATUS.SUCCESS) {
        const weights = res.data;
        DISPATCH(getWeight(weights));
      }
    });
  };

  // Get blogs from API
  const [blog, setBlog] = useState([]);

  const GetBlog = async (pageNumber) => {
    await GetBlogBusiness(pageNumber).then((res) => {
      if (res.status === DATA_STATUS.SUCCESS) {
        const blogs = res.data.data;
        setBlog(blogs);
      }
    });
  };

  useEffect(() => {
    GetProduct(1);
    GetCateProduct();
    GetCompany();
    GetWeight();
    GetBlog(1);
  }, []);

  return (
    <Router>
      <BeginAtTop />
      <ScrollTopTop showBelow={250} />
      {/** -------------Chat FB Plugin --------------- */}
      <div id="fb-root"></div>
      <div
        className="fb-customerchat"
        attribution="setup_tool"
        page_id="2360198777531909"
        theme_color="#67b868"
        logged_in_greeting="Xin ch??o. R???t vui ???????c h??? tr??? b???n!!!"
        logged_out_greeting="Xin ch??o. R???t vui ???????c h??? tr??? b???n!!!"
      ></div>
      {/** ------------ End Chat FB Plugin ------------ */}
      <Switch>
        {/* ----------- Client ----------- */}
        <Route exact path="/">
          <Header user={user} userOnRedux={userOnRedux} />
          <HomePage blog={blog} />
          <Footer />
        </Route>

        <Route exact path="/dang-ki">
          <SignUp />
        </Route>

        {user ? null : (
          <Route exact path="/dang-nhap">
            <LoginPage />
          </Route>
        )}

        {/* <Route exact path="/dang-nhap">
          <LoginPage />
        </Route> */}

        <Route exact path="/gioi-thieu">
          <Header user={user} userOnRedux={userOnRedux} />
          <AboutPage />
          <Footer />
        </Route>

        <Route exact path="/san-pham">
          <Header user={user} userOnRedux={userOnRedux} />
          <ProductPage GetProduct={GetProduct} />
          <Footer />
        </Route>

        <Route exact path="/gio-hang">
          <Header user={user} userOnRedux={userOnRedux} />
          <CartPage />
          <Footer />
        </Route>

        <Route exact path="/thanh-toan">
          <Header user={user} userOnRedux={userOnRedux} />
          <CheckoutPage />
          <Footer />
        </Route>

        <Route path="/san-pham/:urlSeo">
          <Header user={user} userOnRedux={userOnRedux} />
          <ProductDetailPage />
          <Footer />
        </Route>

        <Route exact path="/bai-dang/:urlSeoCategoryBlog">
          <Header user={user} userOnRedux={userOnRedux} />
          <BlogPage />
          <Footer />
        </Route>

        <Route exact path="/bai-dang/:urlSeoCategoryBlog/:urlSeoBlog">
          <Header user={user} userOnRedux={userOnRedux} />
          <BlogDetailPage />
          <Footer />
        </Route>

        {/* -----x----- Client -----x----- */}

        {/* ----------- Admin ----------- */}

        <Route path="/admin/login" component={Login} />

        <ProtectedRoute exact path="/admin/products" component={Product} />
        <ProtectedRoute exact path="/admin/home" component={Home} />

        <ProtectedRoute
          path="/admin/products/create"
          component={CreateProduct}
        />

        <ProtectedRoute path="/admin/editproduct/:id" component={EditProduct} />

        <ProtectedRoute
          exact
          path="/admin/categories"
          component={ListCategories}
        />
        <ProtectedRoute
          path="/admin/categories/create"
          component={CreateCategories}
        />
        <ProtectedRoute
          path="/admin/editcategory/:categoryId"
          component={EditCategories}
        />

        <ProtectedRoute exact path="/admin/users" component={ListAdmins} />
        <ProtectedRoute
          path="/admin/listadmins/create"
          component={CreateAdmin}
        />
        <ProtectedRoute
          path="/admin/editusers/:id"
          component={EditCurrentAdmin}
        />

        <ProtectedRoute exact path="/admin/banners" component={Banners} />
        <ProtectedRoute path="/admin/banners/create" component={CreateBanner} />

        <ProtectedRoute exact path="/admin/orders" component={Orders} />
        <ProtectedRoute
          path="/admin/orders/:orderId"
          component={OrderDetails}
        />

        <ProtectedRoute exact path="/admin/blogs" component={Blog} />
        <ProtectedRoute path="/admin/blogs/create" component={CreateBlog} />
        <ProtectedRoute path="/admin/blogs/edit/:blogId" component={EditBlog} />

        <ProtectedRoute
          exact
          path="/admin/categoriesblog"
          component={CategoriesBlog}
        />
        <ProtectedRoute
          path="/admin/categoriesblog/create"
          component={CreateCategoriesBlog}
        />
        <ProtectedRoute
          path="/admin/categoriesblog/edit/:categoriesBlogId"
          component={EditCategoriesBlog}
        />

        {/* -----x----- Admin -----x----- */}

        <Route exact path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
