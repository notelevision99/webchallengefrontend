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
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

function ProductDetail() {
  const [prodDetail, setProdDetail] = useState({});
  const location = useLocation();
  let { urlSeo } = useParams();

  let productDetail = location.state.detail;

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
            <SwiperSlide>
              <div className="banner">
                <img src={banner2} />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="banner">
                <img src={banner1} />
              </div>
            </SwiperSlide>
          </Swiper>
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
