import React, { useState } from 'react';

//Images
import Logo from '../../../../assets/images/logo.png';
import Vietnamese from '../../../../assets/images/en_US.png';
import English from '../../../../assets/images/vi_VN.png';

//Icons
import { IconBasket, IconSupport } from '../../../../assets/icons';
import { NavLink } from 'react-router-dom';

function Header() {
    const [focus, setFocus] = useState(false);

    const onSearch = () => {
        setFocus(true);
    };

    return (
        <header>
            <div className='menu'>
                <div className='menu--top'>
                    <div className='menu--top__container'>
                        <div className='menu--top--left'>
                            <div className='m-tl-item language'>
                                <p className='language--title'>Chọn ngôn ngữ</p>

                                <p className='language--img'>
                                    <img src={Vietnamese} alt='' />
                                </p>

                                <p className='language--img'>
                                    <img src={English} alt='' />
                                </p>
                            </div>

                            {/* <div className="m-tl-item">
                <a>
                  <p>Tin tức</p>
                  <IconNews className="header-icon icon-mtl" />
                </a>
              </div> */}

                            <div className='m-tl-item'>
                                <a>
                                    <p>Hỗ trợ khách hàng</p>
                                    <IconSupport className='header-icon icon-mtl' />
                                </a>
                            </div>
                        </div>

                        <div className='menu--top--search'>
                            <div className='menu--top--search__container'>
                                <input type='text' placeholder='Tìm kiếm' onChange={onSearch} />
                                {/* <IconSearch className="header-icon phd-search" /> */}
                            </div>
                        </div>

                        <div className='menu--top--right'>
                            <NavLink to='/gio-hang'>
                                <IconBasket className='header-icon icon-mtr' />
                                <p>Mua Hàng</p>
                            </NavLink>

                            <NavLink to='/dang-ki'>
                                <p>Đăng kí</p>
                            </NavLink>

                            <NavLink to='/dang-nhap'>
                                <p>Đăng nhập</p>
                            </NavLink>
                        </div>
                    </div>
                </div>

                <div className='menu--bottom'>
                    <ul>
                        <li className='cate-item'>
                            <NavLink to='/'>Trang chủ</NavLink>
                        </li>
                        <li className='cate-item'>
                            <NavLink to='/bai-dang/gioi-thieu'>Giới thiệu</NavLink>
                        </li>
                        <li className='cate-item'>
                            <NavLink to='/san-pham'>Sản phẩm</NavLink>
                        </li>
                        <li className='cate-item'>
                            <NavLink to='/bai-dang/hoat-dong'>Hoạt động</NavLink>
                        </li>

                        <li className='menu-logo'>
                            <img src={Logo} alt='' />
                        </li>

                        <li className='cate-item'>
                            <NavLink to='/bai-dang/dich-vu-nong-nghiep'>DV nông nghiệp</NavLink>
                        </li>
                        <li className='cate-item'>
                            <NavLink to='/bai-dang/r-d'>R&D</NavLink>
                        </li>
                        <li className='cate-item'>
                            <NavLink to='/bai-dang/lien-he'>Liên hệ</NavLink>
                        </li>
                        <li className='cate-item'>
                            <NavLink to='/bai-dang/tin-tuyen-dung'>Tuyển dụng</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
