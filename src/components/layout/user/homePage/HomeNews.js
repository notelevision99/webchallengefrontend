import React from "react";
import LightSpeed from "react-reveal/LightSpeed";

//img
import HomeNewsBG from "../../../../assets/images/bg/news.jpg";

//icons
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { NavLink, useHistory } from "react-router-dom";
import Reveal from "react-reveal/Reveal";

function HomeNews({ blog }) {
  console.log(blog);
  const HISTORY = useHistory();
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

  const onClickTitle = (id) => {
    HISTORY.push("/bai-dang/tin-tuc-nong-nghiep/" + id)
  }

  const renderNews = () =>
    blog.map((num, i) => (
      <div className="hn-item" key={i}>
        <h5 className="hn-item--title" onClick = {() => onClickTitle(num.blogId)}>{num.title}</h5>
        <small className="hn-item--date">{num.createdDate}</small>
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
            <NavLink to="/bai-dang/tin-tuc-nong-nghiep" className="cta">
              <span>Xem tất cả các tin</span>
              <svg width="13px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
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
