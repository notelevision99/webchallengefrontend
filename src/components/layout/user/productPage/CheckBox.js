import React from "react";

function CheckBox({ onCategory, ele, index }) {
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
}

export default CheckBox;
