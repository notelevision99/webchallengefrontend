import React from "react";

function SideBar(categories) {
  const arrCategory = categories.categories;

  let onRenderCheckBox = (data) => {
    let result = null;
    if (data) {
      result = data.map((ele, index) => {
        return (
          <div className="check-box" key={index}>
            <input
              className="inp-cbx"
              id={ele.categoryId}
              type="checkbox"
              //   onChange={(event) => onCategory(event, ele)}
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

  return (
    <div className="sidebar">
      <div className="sidebar__box">
        <div className="cate">
          <h5 className="cate--title">Danh mục</h5>

          <div className="cate--list">{onRenderCheckBox(arrCategory)}</div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
