import React from "react";
import LightSpeed from "react-reveal/LightSpeed";

//img
import HomeNewsBG from "../../../../assets/images/bg/news.jpg";

//icons
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { NavLink } from "react-router-dom";
import Reveal from "react-reveal/Reveal";

function HomeNews() {
  const newsArr = [
    {
      title:
        "Lễ khánh thành trung tâm công nghiệp chế biến hạt giống và nông sản hiện đại bậc nhất Việt Nam",
      date: "10/10/2020",
    },

    {
      title:
        "Lễ khánh thành trung tâm công nghiệp chế biến hạt giống và nông sản hiện đại bậc nhất Việt Nam",
      date: "10/10/2020",
    },

    {
      title:
        "Lễ khánh thành trung tâm công nghiệp chế biến hạt giống và nông sản hiện đại bậc nhất Việt Nam",
      date: "10/10/2020",
    },
  ];

  const renderNews = () =>
    newsArr.map((num) => (
      <div className="hn-item">
        <h5 className="hn-item--title">{num.title}</h5>
        <small className="hn-item--date">{num.date}</small>
      </div>
    ));

  return (
    <div className="homenews">
      <LightSpeed left>
        <div className="homenews__lasted">
          <h2 className="homenews__lasted--title">Tin tức nông nghiệp</h2>
          <p className="homenews__lasted--title-s">tin mới cập nhật</p>

          {renderNews()}

          <div className="homenews__lasted--viewmore">
            <NavLink to="/tin-tuc">
              Xem tất cả tin tức <ArrowRightAltIcon />
            </NavLink>
          </div>
        </div>
      </LightSpeed>

      <LightSpeed right>
        <div className="homenews__img">
          <img src={HomeNewsBG} alt="" />
        </div>
      </LightSpeed>
    </div>
  );
}

export default HomeNews;
