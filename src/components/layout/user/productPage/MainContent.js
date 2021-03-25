import React, { useMemo } from "react";
import IMG from "../../../../assets/images/bg/news-2.jpg";
import IMG1 from "../../../../assets/images/bg/news.jpg";

//Components
import ProductItem from "./ProductItem";

//redux
import { useSelector } from "react-redux";

function MainContent({ products, searchText }) {

  console.log('searchText =>', searchText);
  

  let listProduct = useMemo(() => {
    let result = products.filter((product) => {
      return product.productName.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
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

  return (
    <div className="pdp-maincontent">
      <div className="pdp-items">{renderProductItem(listProduct)}</div>
    </div>
  );
}

export default MainContent;
