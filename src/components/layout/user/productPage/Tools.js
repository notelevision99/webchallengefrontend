import React from "react";

//Icons
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ViewModuleSharpIcon from "@material-ui/icons/ViewModuleSharp";

function Tools() {
  return (
    <div className="tools">
      <div className="notificate">
        <button
        //   onClick={handleNotificate}
        //   className={notificate ? "active" : ""}
        >
          <NotificationsNoneIcon />
        </button>
        <small>Tạo thông báo tìm kiếm?</small>
      </div>

      <div className="sort">
        <p>Sắp xếp theo:</p>
        <select
        //   onClick={(event) => {
        //     onSelect(event);
        //   }}
        >
          <option value="0">Sắp xếp</option>
          <option value="1">Lương tăng dần</option>
          <option value="2">Lương giảm dần</option>
        </select>
      </div>

      <div className="another">
        <button>
          <FormatListBulletedIcon />
        </button>

        <button>
          <ViewModuleSharpIcon />
        </button>
      </div>
    </div>
  );
}

export default Tools;
