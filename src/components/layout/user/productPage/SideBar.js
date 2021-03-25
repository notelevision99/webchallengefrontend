import React from "react";
import CheckBox from "./CheckBox";

function Sidebar({ categories, onCategory, companies, weights }) {
  let renderCateCheckBox = (data) => {
    let result = null;
    if (data) {
      result = data.map((ele, index) => {
        return (
          <div className="check-box" key={index}>
            <input
              className="inp-cbx"
              id={ele.categoryId}
              type="checkbox"
              onChange={(event) => onCategory(event, ele)}
            />
            <label className="cbx" htmlFor={ele.categoryId}>
              <span>
                <svg width="12px" height="10px" viewBox="0 0 12 10">
                  <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                </svg>
              </span>
              <small>{ele.categoryName}</small>
            </label>
          </div>
        );
      });
    }
    return result;
  };

  let renderWeightCheckBox = (data) => {
    let result = null;
    if (data) {
      result = data.map((ele, index) => {
        return (
          <div className="check-box" key={index}>
            <input
              className="inp-cbx"
              id={`${ele.weight}w`}
              type="checkbox"
              //onChange={(event) => onCategory(event, ele)}
            />
            <label className="cbx" htmlFor={`${ele.weight}w`}>
              <span>
                <svg width="12px" height="10px" viewBox="0 0 12 10">
                  <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                </svg>
              </span>
              <small>{ele.weight} Kilogram</small>
            </label>
          </div>
        );
      });
    }
    return result;
  };

  let renderCompanyCheckBox = (data) => {
    let result = null;
    if (data) {
      result = data.map((ele, index) => {
        return (
          <div className="check-box" key={index}>
            <input
              className="inp-cbx"
              id={ele.company}
              type="checkbox"
              //onChange={(event) => onCategory(event, ele)}
            />
            <label className="cbx" htmlFor={ele.company}>
              <span>
                <svg width="12px" height="10px" viewBox="0 0 12 10">
                  <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                </svg>
              </span>
              <small>{ele.company}</small>
            </label>
          </div>
        );
      });
    }
    return result;
  };

  return (
    <div className="sidebar-pp">
      <div className="sidebar-pp__box">
        <div className="cate">
          <h5 className="cate--title">Danh mục </h5>

          <div className="cate--list">{renderCateCheckBox(categories)}</div>
        </div>
      </div>

      <div className="sidebar-pp__box">
        <div className="cate">
          <h5 className="cate--title">Công ty</h5>

          <div className="cate--list">{renderCompanyCheckBox(companies)}</div>
        </div>
      </div>

      <div className="sidebar-pp__box">
        <div className="cate">
          <h5 className="cate--title">Trọng lượng</h5>

          <div className="cate--list">{renderWeightCheckBox(weights)}</div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
