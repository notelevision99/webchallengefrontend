import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { ParallaxBanner } from "react-scroll-parallax";

//Images
import RevenueImg from "../../../../assets/images/couter/economy.png";
import ScaleImg from "../../../../assets/images/couter/environment.png";
import CapitalImg from "../../../../assets/images/couter/society.png";
import ParallaxImg from "../../../../assets/images/bg/parallax.jpg";

function CounterUp() {
  const [viewPortEntered, setViewPortEntered] = useState(false);

  return (
    <div className="counter-up">
      <ParallaxBanner
        className="prl-bg"
        layers={[
          {
            image: ParallaxImg,
            amount: 0.7,
          },
        ]}
      ></ParallaxBanner>
      <div className="counter-up__layer">
        <div className="counter-up__container">
          <div className="counter-up__title">
            <h2 className="counter-up__title--main">
              Sự phát triển của CP Seeds
            </h2>

            <p className="counter-up__title--sub">
              Thực hiện định hướng chiến lược phát triển bền vững của Công ty
              với 3 mục tiêu: Duy trì tăng trưởng kinh tế, xậy dựng xã hội và
              bảo vệ môi trường một cách bền vững. CP Seeds đã trở thành Tập
              đoàn nông nghiệp có quy mô và thị phần lớn nhât Việt Nam
            </p>
          </div>

          <div className="counter-up__main">
            <div className="counter__box">
              <div className="counter__box--icon">
                <img src={CapitalImg} alt="" />
              </div>

              <div className="counter__box--subtitles">
                <h3 className="ctu-title">Vốn sở hữu</h3>
                {/* <h4 className="ctu-numb">1052</h4> */}

                <VisibilitySensor
                  onChange={(isVisible) => {
                    if (isVisible) {
                      setViewPortEntered(true);
                    }
                  }}
                >
                  <CountUp
                    className="ctu-numb"
                    start={viewPortEntered ? 0 : null}
                    end={1052}
                    duration={7}
                  />
                </VisibilitySensor>

                <p className="ctu-unit">Tỷ đồng</p>
              </div>
            </div>

            <div className="counter__box">
              <div className="counter__box--icon">
                <img src={ScaleImg} alt="" />
              </div>

              <div className="counter__box--subtitles">
                <h3 className="ctu-title">Quy mô kinh doanh</h3>

                <VisibilitySensor
                  onChange={(isVisible) => {
                    if (isVisible) {
                      setViewPortEntered(true);
                    }
                  }}
                >
                  <CountUp
                    className="ctu-numb"
                    decimal={3}
                    start={viewPortEntered ? 0 : null}
                    end={85000}
                    duration={7}
                  />
                </VisibilitySensor>

                <p className="ctu-unit">Tấn hạt giống</p>
              </div>
            </div>

            <div className="counter__box">
              <div className="counter__box--icon">
                <img src={RevenueImg} alt="" />
              </div>

              <div className="counter__box--subtitles">
                <h3 className="ctu-title">Doanh thu</h3>

                <VisibilitySensor
                  onChange={(isVisible) => {
                    if (isVisible) {
                      setViewPortEntered(true);
                    }
                  }}
                >
                  <CountUp
                    className="ctu-numb"
                    start={viewPortEntered ? 0 : null}
                    end={1605}
                    duration={7}
                  />
                </VisibilitySensor>

                <p className="ctu-unit">Tỷ đồng</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CounterUp;
