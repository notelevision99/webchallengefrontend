import React, { useState } from "react";
import { useDispatch } from "react-redux";
import cookie from "js-cookie";

//config
import { DATA_STATUS } from "../../../../utils/config";

//Images
import Logo from "../../../../assets/images/logo-notitle.png";
import Vietnamese from "../../../../assets/images/en_US.png";
import English from "../../../../assets/images/vi_VN.png";

//Icons
import { IconBasket, IconSupport } from "../../../../assets/icons";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { NavLink, Link } from "react-router-dom";

//Business
import { UserLogoutBusiness } from "../../../../business/authentication/Login";
import { userLogout } from "../../../../redux/action/AuthenticationAction";

function Header({ userOnRedux, user }) {
  const [focus, setFocus] = useState(false);
  const [menu, setMenu] = useState(false);
  const DISPATCH = useDispatch();

  const onSearch = () => {
    setFocus(true);
  };

  const UserLogout = async () => {
    await UserLogoutBusiness().then((res) => {
      if (res.status === DATA_STATUS.SUCCESS) {
        cookie.remove("Usr_N");
        cookie.remove("usrCks");
        cookie.remove("Usr_I");
        window.location.reload(false);
        DISPATCH(userLogout());
      }
    });
  };

  const onHamberger = () => {
    setMenu(!menu);
  };

  console.log(menu);

  return (
    <header>
      <div className="menu">
        <div className="menu--top">
          <div className="menu--top__container">
            <div className="menu--top--left">
              <div className="m-tl-item language">
                <p className="language--title">Chọn ngôn ngữ</p>

                <p className="language--img">
                  <img src={Vietnamese} alt="" />
                </p>

                <p className="language--img">
                  <img src={English} alt="" />
                </p>
              </div>

              {/* <div className="m-tl-item">
                <a>
                  <p>Tin tức</p>
                  <IconNews className="header-icon icon-mtl" />
                </a>
              </div> */}

              <div className="m-tl-item">
                <a>
                  <p>Hỗ trợ khách hàng</p>
                  <IconSupport className="header-icon icon-mtl" />
                </a>
              </div>
            </div>

            <div className="menu--top--search">
              <div className="menu--top--search__container">
                <input type="text" placeholder="Tìm kiếm" onChange={onSearch} />
                {/* <IconSearch className="header-icon phd-search" /> */}
              </div>
            </div>

            {user || userOnRedux.id !== 0 ? (
              <div className="menu--top--right">
                <NavLink to="/gio-hang">
                  <IconBasket className="header-icon icon-mtr" />
                  <p>Mua Hàng</p>
                </NavLink>

                <Link>
                  <p>Xin chào {user ? user : userOnRedux.name}!</p>
                </Link>

                <Link onClick={UserLogout} className="logout">
                  <p>
                    Đăng xuất <ExitToAppIcon />
                  </p>
                </Link>
              </div>
            ) : (
              <div className="menu--top--right">
                <NavLink to="/gio-hang">
                  <IconBasket className="header-icon icon-mtr" />
                  <p>Mua Hàng</p>
                </NavLink>

                <NavLink to="/dang-ki">
                  <p>Đăng kí</p>
                </NavLink>

                <NavLink to="/dang-nhap">
                  <p>Đăng nhập</p>
                </NavLink>
              </div>
            )}
          </div>
        </div>

        <div className="menu--bottom">
          <ul>
            <li className="cate-item">
              <NavLink to="/">Trang chủ</NavLink>
            </li>
            <li className="cate-item">
              <NavLink to="/bai-dang/gioi-thieu">Giới thiệu</NavLink>
            </li>
            <li className="cate-item">
              <NavLink to="/san-pham">Sản phẩm</NavLink>
            </li>
            <li className="cate-item">
              <NavLink to="/bai-dang/hoat-dong">Hoạt động</NavLink>
            </li>

            <li className="menu-logo">
              <NavLink to="/">
                <img src={Logo} />
              </NavLink>
            </li>

            <li className="cate-item">
              <NavLink to="/bai-dang/dich-vu-nong-nghiep">
                DV nông nghiệp
              </NavLink>
            </li>
            <li className="cate-item">
              <NavLink to="/bai-dang/r-d">R&D</NavLink>
            </li>
            <li className="cate-item">
              <NavLink to="/bai-dang/lien-he">Liên hệ</NavLink>
            </li>
            <li className="cate-item">
              <NavLink to="/bai-dang/tuyen-dung">Tuyển dụng</NavLink>
            </li>
          </ul>
        </div>

        <div className="m-white">
          <div className="menu--res">
            <div className="left">
              <NavLink to="/">
                <img src={Logo} />
              </NavLink>
            </div>

            <div className="middle">
              {user || userOnRedux.id !== 0 ? (
                <div className="mid-size">
                  <Link>
                    <p>Xin chào {user ? user : userOnRedux.name}!</p>
                  </Link>

                  <Link onClick={UserLogout} className="logout">
                    <p>
                      Đăng xuất <ExitToAppIcon />
                    </p>
                  </Link>
                </div>
              ) : (
                <div className="mid-size">
                  <NavLink to="/dang-ki">
                    <p>Đăng kí</p>
                  </NavLink>

                  <NavLink to="/dang-nhap">
                    <p>Đăng nhập</p>
                  </NavLink>
                </div>
              )}
            </div>

            <div className="right">
              <label for="hamburger">
                <input
                  type="checkbox"
                  name="hamburger"
                  id="hamburger"
                  onChange={onHamberger}
                />
                <div className="hamburger">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </label>
            </div>
          </div>
        </div>
        {menu ? (
          <div className="menu--res-click">
            <ul>
              <li className="cate-item">
                <NavLink to="/">Trang chủ</NavLink>
              </li>
              <li className="cate-item">
                <NavLink to="/bai-dang/gioi-thieu">Giới thiệu</NavLink>
              </li>
              <li className="cate-item">
                <NavLink to="/san-pham">Sản phẩm</NavLink>
              </li>
              <li className="cate-item">
                <NavLink to="/bai-dang/hoat-dong">Hoạt động</NavLink>
              </li>

              <li className="cate-item">
                <NavLink to="/bai-dang/dich-vu-nong-nghiep">
                  DV nông nghiệp
                </NavLink>
              </li>
              <li className="cate-item">
                <NavLink to="/bai-dang/r-d">R&D</NavLink>
              </li>
              <li className="cate-item">
                <NavLink to="/bai-dang/lien-he">Liên hệ</NavLink>
              </li>
              <li className="cate-item">
                <NavLink to="/bai-dang/tuyen-dung">Tuyển dụng</NavLink>
              </li>

              <li className="cate-item">
                <NavLink to="/gio-hang">
                  Giỏ hàng <IconBasket className="header-icon icon-mtr" />
                </NavLink>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </header>
  );
}

export default Header;
