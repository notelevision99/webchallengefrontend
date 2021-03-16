import React from "react";
import IMG from "../../../../assets/images/bg/news-2.jpg";
import IMG1 from "../../../../assets/images/bg/news.jpg";

//Components
import ProductItem from "./ProductItem";
import Tools from "./Tools";

function MainContent() {
  const arr = [
    { img: IMG, name: "Product's name 2", price: "400.000$" },
    { img: IMG, name: "Product's name 1", price: "400.000$" },
    { img: IMG, name: "Product's name 3", price: "400.000$" },
    { img: IMG, name: "Product's name 4", price: "400.000$" },
    { img: IMG, name: "Product's name 5", price: "400.000$" },
  ];

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
      <div className="pdp-items">{renderProductItem(arr)}</div>
    </div>
  );
}

export default MainContent;
