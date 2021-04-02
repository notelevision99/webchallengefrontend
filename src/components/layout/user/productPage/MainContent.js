import React, { useMemo, useState } from "react";
import IMG from "../../../../assets/images/bg/news-2.jpg";
import IMG1 from "../../../../assets/images/bg/news.jpg";

//Components
import ProductItem from "./ProductItem";

//redux
import { useSelector, useDispatch } from "react-redux";

import { GetProductBusiness } from "../../../../business/product/ProductBusiness";
import { getProducts } from "../../../../redux/action/ProductAction";
import { DATA_STATUS } from "../../../../utils/config";

function MainContent({ products, searchText }) {
  const DISPATCH = useDispatch();

  const [active, setActive] = useState(1);

  let arrPagin = [1, 2, 3, 4];

  const onPagin = (ele) => {
    setActive(ele);
    GetProduct(ele);
  };

  const GetProduct = async (pageNumber) => {
    await GetProductBusiness(pageNumber).then((res) => {
      if (res.status === DATA_STATUS.SUCCESS) {
        const allProduct = res.data.item1;
        console.log("allProduct", allProduct);
        DISPATCH(getProducts(allProduct));
      }
    });
  };

  let listProduct = useMemo(() => {
    let result = products.filter((product) => {
      return (
        product.productName.toLowerCase().indexOf(searchText.toLowerCase()) !==
        -1
      );
    });

    return result;
  }, [products, searchText]);

  let renderProductItem = (info) => {
    let result = null;
    if (info) {
      result = info.map((ele, index) => {
        return <ProductItem index={index} ele={ele} key={index} />;
      });
    }

    return result;
  };

  let renderPagin = (info) => {
    let result = null;
    if (info) {
      result = info.map((ele, index) => {
        return (
          <p
            className={active === ele ? "active" : ""}
            key={index}
            onClick={() => onPagin(ele)}
          >
            {ele}
          </p>
        );
      });
    }

    return result;
  };

  return (
    <div className="pdp-maincontent">
      <div className="pdp-items">{renderProductItem(listProduct)}</div>

      <div className="pagpagination">{renderPagin(arrPagin)}</div>
    </div>
  );
}

export default MainContent;
