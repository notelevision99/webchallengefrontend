import React from "react";
import Slider from "react-slick";
import Flip from "react-reveal/Flip";

//Images
import Icon from "../../../../assets/images/vision/vision.png";

function BusinessProduct() {
  let products = [
    { image: Icon, name: "Tên sản phẩm" },
    { image: Icon, name: "Tên sản phẩm" },
    { image: Icon, name: "Tên sản phẩm" },
    { image: Icon, name: "Tên sản phẩm" },
    { image: Icon, name: "Tên sản phẩm" },
    { image: Icon, name: "Tên sản phẩm" },
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
