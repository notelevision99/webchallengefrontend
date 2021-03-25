import React from "react";

function ProductItem({ index, ele }) {
  return (
    <div className="product-item" key={index}>
      <div className="product-item__thumbnail">
        <img src={ele.photoUrl} alt="" />

        <div className="product-item__thumbnail--hover">
          <p className="hover-title">Chi tiết sản phẩm</p>

          <p className="btn-seen">Xem</p>
        </div>
      </div>

      <div className="product-item__info">
        <div className="product-item__info--name">
          <h3>{ele.productName}</h3>
        </div>
        <div className="product-item__info--price">
          <p>{ele.price}</p>

          <p className="btn-order">Đặt hàng</p>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
