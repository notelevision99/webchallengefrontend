import React from "react";
import Slider from "react-slick";
import Flip from "react-reveal/Flip";

//Images
import Icon from "../../../../assets/images/vision/vision.png";
import Icon1 from "../../../../assets/images/pro/shovel.png";
import Icon2 from "../../../../assets/images/pro/tractor.png";
import Icon3 from "../../../../assets/images/pro/watering-can.png";
import Icon4 from "../../../../assets/images/pro/farming.png";
import Icon5 from "../../../../assets/images/pro/garden.png";
import Icon6 from "../../../../assets/images/pro/tree (1).png";

function BusinessProduct() {
  let products = [
    { image: Icon1, name: "Công cụ" },
    { image: Icon2, name: "Máy móc" },
    { image: Icon3, name: "Vật dụng" },
    { image: Icon4, name: "Phân bón" },
    { image: Icon5, name: "Hạt giống" },
    { image: Icon6, name: "Nông sản" },
  ];

  const renderSlides = () =>
    products.map((num, i) => (
      <div className="bp-item" key={i}>
        <img src={num.image} alt="" />

        <h5 className="bp-item__name">{num.name}</h5>
      </div>
    ));

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Flip top>
      <div className="business-product">
        <h2 className="business-product__title">
          <span>Sản phẩm kinh doanh</span>
        </h2>

        <div className="carousel-product">
          <Slider {...settings}>{renderSlides()}</Slider>
        </div>
      </div>
    </Flip>
  );
}

export default BusinessProduct;
