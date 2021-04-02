import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

//Images banner
import banner2 from "../../../../assets/images/banner/banner-2.jpg";
import banner1 from "../../../../assets/images/banner/banner-1.jpg";

import { API_URL } from "../../../../helpers/user/urlCallAxios";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import { useParams } from "react-router";
import { showToastSuccess } from "../../../../helpers/admin/toastNotify";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

function ProductDetail() {
  const [prodDetail, setProdDetail] = useState({});
  const location = useLocation();
  let { urlSeo } = useParams();

  let productDetail = location.state.detail;
  let arrImg = prodDetail.photos;
  console.log(prodDetail.id);

  //   useEffect(() => {
  //     fetchProdDetail();
  //   }, []);
  //   const fetchProdDetail = () => {
  //     const urlGetProdDetail = `${API_URL}/api/products/${urlSeo}`;

  //     axios
  //       .get(urlGetProdDetail)
  //       .then((res) => {
  //         setProdDetail(res.data.item1);
  //       })
  //       .catch((err) => {});
  //   };

  const addCart = () => {
    let checkProductExist = 0;
    let indexProductExist = 0;

    let product = {
      id: productDetail.id,
      photoUrl: productDetail.photoUrl,
      productName: productDetail.productName,
      price: productDetail.price,
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

  const renderSlides = (value) =>
    value.map((ele, i) => (
      <SwiperSlide key={i}>
        <div className="banner">
          <img src={ele.url} />
        </div>
      </SwiperSlide>
    ));

  return (
    <>
      <h1 className="category-title">
        Thông tin sản phẩm
        <div className="underlined-category-title"></div>
      </h1>

      <div className="info-product-box">
        {/* ===== Slide ===== */}
        <div className="slide-box">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            {renderSlides(productDetail.photos)}
          </Swiper>

          <div className="btn-container"><button className="btn btn-warning " onClick={addCart}>Đặt hàng</button></div>
        </div>
        {/* ===x=== Slide ===x=== */}
        {productDetail !== null && (
          <div className="info-detail">
            <h1>
              <strong>{productDetail.productName}</strong>
            </h1>
            <br />
            <ul>
              <li>
                <strong>Loại sản phẩm</strong>:&nbsp;
                {productDetail.categoryName}
                &nbsp;
              </li>
              <li>
                <strong>Thuộc công ty</strong>:&nbsp;{productDetail.company}
              </li>
              <li>
                <strong>Trọng lượng</strong>:&nbsp;{productDetail.weight} kg
              </li>
              <li>
                <p
                  dangerouslySetInnerHTML={{
                    __html: productDetail.description,
                  }}
                />
              </li>
            </ul>
            <br />
            <h1>
              <strong>
                {Intl.NumberFormat().format(productDetail.price)} đ
              </strong>
            </h1>
          </div>
        )}
      </div>
    </>
  );
}
export default ProductDetail;
