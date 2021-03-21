import React from "react";
import IMG from "../../../../assets/images/bg/news-2.jpg";
import IMG1 from "../../../../assets/images/bg/news.jpg";
import { useSelector } from "react-redux";

//Components
import ProductItem from "./ProductItem";
import Tools from "./Tools";

function MainContent(products) {
  let arrProduct = products.products;

  let renderProductItem = (info) => {
    let result = null;
    if (info) {
      result = info.map((ele, index) => {
        return <ProductItem index={index} ele={ele} />;
      });
    }

    return result;
  };

  return (
    <div className="pdp-maincontent">
      <Tools />
      <div className="pdp-items">{renderProductItem(arrProduct)}</div>
    </div>
  );
}

export default MainContent;
