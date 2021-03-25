import React, {useState} from "react";

//Icons
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import NotificationsNoneIcon  from "@material-ui/icons/NotificationsNone";
import ViewModuleSharpIcon    from "@material-ui/icons/ViewModuleSharp";

function Tools({ onSelect, onSearch }) {
  
  return (
    <div className="tools">
      <div className="tools__notificate">
        <button
        //   onClick={handleNotificate}
        //   className={notificate ? "active" : ""}
        >
          <NotificationsNoneIcon />
        </button>
        <p>Tạo thông báo tìm kiếm?</p>
      </div>

      <div className="tools__search">
        <input 
          onChange={(event) => onSearch(event) } 
          type="text"
          placeholder="Tìm kiếm" 
        />
      </div>

      <div className="tools__sort">
        <p>Sắp xếp theo:</p>
        <select
          onChange={(event) => {
            onSelect(event);
          }}
        >
          <option value="none"> --- Sắp xếp ---</option>
          <option value="price-ascending" >Giá: Tăng dần</option>
          <option value="price-descending">Giá: Giảm dần</option>
        </select>
      </div>    
    </div>
  );
}

export default Tools;
