import React from "react";
import { GetProductDetailBusiness } from "../../../../business/product/ProductBusiness";
import { DATA_STATUS } from "../../../../utils/config";
import { useHistory } from "react-router-dom";
import { showToastSuccess } from "../../../../helpers/admin/toastNotify";
import { ToastContainer } from "react-toastify";

function ProductItem({ index, ele }) {
  const HISTORY = useHistory();

  const addCart = () => {
    let checkProductExist = 0;
    let indexProductExist = 0;
    let product = {
      id: ele.id,
      photoUrl: ele.photoUrl,
      productName: ele.productName,
      price: ele.price,
      quantity: 1,
    };
    let cart = [];
    let cartLocal = localStorage.getItem("cart");
    if (cartLocal) {
      cart = JSON.parse(cartLocal);
    }

    cart.forEach((element, index) => {
      if (element.id === product.id) {
        console.log("index = " + indexProductExist);
        checkProductExist = 1;
        indexProductExist = index;
        return;
      }
    });

    if (checkProductExist === 1) {
      cart[indexProductExist].quantity += 1;
    }
    if (
      (checkProductExist === 0 && cart.length === 0) ||
      checkProductExist === 0
    ) {
      cart.push(product);     
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    showToastSuccess("Thêm giỏ hàng thành công!!");
  };

  //Product detail
  const onDetailProduct = async (ele) => {
    let urlSeo = ele.urlSeo;

    await GetProductDetailBusiness(urlSeo).then((res) => {
      if (res.status === DATA_STATUS.SUCCESS) {
        const productDetail = res.data.item1;
        console.log("allProduct", productDetail);
        HISTORY.push({
          pathname: `/san-pham/${urlSeo}`,

          state: { detail: productDetail },
        });
      }
    });
  };

  return (
    <>
    <div className="product-item" key={index}>
      <div className="product-item__thumbnail">
        <img src={ele.photoUrl} alt="" />

        <div className="product-item__thumbnail--hover">
          <p className="hover-title">Chi tiết sản phẩm</p>

          <p className="btn-seen" onClick={() => onDetailProduct(ele)}>
            Xem
          </p>
        </div>
      </div>

      <div className="product-item__info">
        <div className="product-item__info--name">
          <h3>{ele.productName}</h3>
        </div>
        <div className="product-item__info--price">
          <p>{ele.price}</p>

          <p className="btn-order" onClick={addCart}>
            Đặt hàng
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default ProductItem;
