import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// Comppnents
import Banner from "../components/layout/user/productPage/Banner";
import ListProduct from "../components/layout/user/productPage/ListProduct";
import MainContent from "../components/layout/user/productPage/MainContent";
import SideBar from "../components/layout/user/productPage/SideBar";
import Tools from "../components/layout/user/productPage/Tools";

// Config
import { DATA_STATUS } from "../utils/config";

// Business
import {
  FilterByCateBusiness,
  FilterByCpnBusiness,
  FilterByWeightBusiness,
} from "../business/product/ProductBusiness";
import { GetSortBusiness } from "../business/product/SortBusiness";

// Reducer
import { getFilterred, getSorted } from "../redux/action/ProductAction";
import { ToastContainer } from "react-toastify";

function ProductPage({ GetProduct }) {
  const DISPATCH = useDispatch();

  //Get value from product
  const products = useSelector((state) => state.ProductReducer.products);
  const categories = useSelector((state) => state.ProductReducer.categories);
  const companies = useSelector((state) => state.ProductReducer.companies);
  const weights = useSelector((state) => state.ProductReducer.weights);

  /* ------------------------ Filter ------------------------ */

  //Handle filter
  const onCategory = (event, ele) => {
    let isChecked = event.target.checked;

    if (isChecked) {
      let cateId = ele.categoryId;
      onFilter(cateId);
    } else {
      GetProduct(1); // if anything checked => get all prouducts
    }
  };

  const onCompany = (event, ele) => {
    let isChecked = event.target.checked;

    if (isChecked) {
      let company = ele.company;
      console.log(company);
      onSomethingCpn(company);
    } else {
      GetProduct(1); // if anything checked => get all prouducts
    }
  };

  const onWeight = (event, ele) => {
    let isChecked = event.target.checked;

    if (isChecked) {
      let weight = ele.weight;
      console.log(weight);
      onSomethingWeight(weight);
    } else {
      GetProduct(1); // if anything checked => get all prouducts
    }
  };

  const onFilter = async (cateId) => {
    await FilterByCateBusiness(cateId).then((res) => {
      if (res.status === DATA_STATUS.SUCCESS) {
        const filterred = res.data.item1;
        DISPATCH(getFilterred(filterred));
      }
    });
  };

  const onSomethingCpn = async (something) => {
    await FilterByCpnBusiness(something).then((res) => {
      if (res.status === DATA_STATUS.SUCCESS) {
        const filterred = res.data.item1;
        console.log(filterred);
        DISPATCH(getFilterred(filterred));
      }
    });
  };

  const onSomethingWeight = async (something) => {
    await FilterByWeightBusiness(something).then((res) => {
      if (res.status === DATA_STATUS.SUCCESS) {
        const filterred = res.data.item1;
        console.log(filterred);
        DISPATCH(getFilterred(filterred));
      }
    });
  };

  /* ------------x----------- Filter ------------x----------- */

  /* ------------------------ Sort ------------------------ */

  const onSelect = (e) => {
    let value = e.target.value;
    if (value === "none") {
      GetProduct(1);
    } else {
      onSort(value);
    }
  };

  const onSort = async (value) => {
    await GetSortBusiness(value).then((res) => {
      if (res.status === DATA_STATUS.SUCCESS) {
        const sortted = res.data.item1;

        DISPATCH(getSorted(sortted));
      }
    });
  };

  /* ------------x----------- Sort ------------x----------- */

  /* ------------------------ Search ------------------------ */
  const [searchText, setSearchText] = useState("");

  const onSearch = (e) => {
    let searchText = e.target.value;
    setSearchText(searchText);
  };
  /* ------------x----------- Search ------------x----------- */

  return (
    <>
      <Banner />
      <div className="product-page">
        <SideBar
          categories={categories}
          companies={companies}
          weights={weights}
          onFilter={onFilter}
          onCategory={onCategory}
          onCompany={onCompany}
          onWeight={onWeight}
        />

        <div className="pp_container">
          <Tools onSelect={onSelect} onSearch={onSearch} />

          <MainContent products={products} searchText={searchText} />
        </div>
        <ToastContainer />
      </div>
    </>
  );
}
export default ProductPage;
