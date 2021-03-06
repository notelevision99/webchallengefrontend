import { NavLink } from "react-router-dom";
import banner from "../../../../assets/images/banner/banner-4.jpg";

function Banner() {
  return (
    <>
      <div className="after-header"></div>
      <div className="banner-container">
        <div className="banner">
          <h1 className="title-page">
            Sản phẩm <div className="underlined-title"></div>
          </h1>

          <img src={banner} />
        </div>
      </div>
    </>
  );
}
export default Banner;
