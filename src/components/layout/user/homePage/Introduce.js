import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import { ParallaxBanner } from "react-scroll-parallax";

//Images
import ParallaxImg from "../../../../assets/images/bg/paralax-2.jpg";

function Introduce() {
  // const [offsetY, setOffsetY] = useState(0);
  // const handleScroll = () => setOffsetY(window.pageYOffset);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    // <div
    //   className="nam"
    //   style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
    // >
    //   <div className="huy"></div>

    <div className="introduce">
      {/* <ParallaxBanner
        className="test"
        layers={[
          {
            image: ParallaxImg,
            amount: 0.7,
          },
        ]}
        </ParallaxBanner>
      > */}
      <Fade left>
        <h1 className="introduce--title">
          Vinaseed là đoan nghiệp độc lập trực thuộc Bộ Nông Nghiệp và Phát
          Triển Nông thôn
        </h1>
      </Fade>

      <Fade right>
        <p className="introduce--text">
          Được thành lập từ năm 1968. Với sự đổi mới quản trị DN, chiến lược lấy
          KHCN làm nền tảng và động lực nâng cao năng lực cạnh tranh, huy động
          tối đa các nguồn lực xã hội cùng tham gia phát triển công ty, sau 15
          năm CPH, Vinaseed đã trở thành Tập đoàn nông nghiệp có quy mô và thị
          phần lớn nhất Việt Nam.
        </p>
      </Fade>
    </div>
    // </div>
  );
}

export default Introduce;
