import banner from '../../../../assets/images/banner/banner-2.jpg';
import { IconEdit, IconHome, IconLocationCity, IconPerson, IconPhone, IconPlace } from '../../../../assets/icons';
import { Redirect, useHistory } from 'react-router';
import { useEffect, useState } from 'react';
import formatVND from '../../../../helpers/user/formatVND';
import axios from 'axios';
import { API_URL } from '../../../../helpers/user/urlCallAxios';
import { showToastSuccess } from '../../../../helpers/admin/toastNotify';
import CheckoutSuccess from './CheckoutSuccess';

function Checkout() {
    const history = useHistory();
    const [checkoutSuccess, setCheckoutSuccess] = useState(false);

    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')));
    const [totalPrice, setTotalPrice] = useState(0);
    const shippingFee = 22000;

    // Province
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);

    //Info checkout
    const [userID, setUserID] = useState('890ef943-fda8-4ac4-9fb7-812e75854450');
    const [username, setUsername] = useState('client');
    const [province, setProvince] = useState('Thành phố Hồ Chí Minh');
    const [district, setDistrict] = useState('Quận 10');
    const [address, setAddress] = useState('304/13 Hòa Hưng P13 Q.10');

    const [provinceModal, setProvinceModal] = useState(province);
    const [districtModal, setDistrictModal] = useState(district);
    const [addressModal, setAddressModal] = useState(address);

    useEffect(() => {
        let cartLocal = localStorage.getItem('cart');
        if (cartLocal) {
            setCart(JSON.parse(cartLocal));
        }

        setTotalPrice(sumPrice);

        getProvinces();
    }, [cart, checkoutSuccess]);

    const sumPrice = () => {
        let sum = 0;
        cart.forEach((element) => {
            sum += element.price * element.quantity;
        });

        return sum;
    };

    const getProvinces = () => {
        axios.get('https://vapi.vnappmob.com/api/province').then((res) => {
            setProvinces(res.data.results);
        });
    };

    /* ------Form On Change----- */
    const handleChangeProvince = (e) => {
        const provinceLocal = provinces.find((element) => element.province_name === province);

        axios.get('https://vapi.vnappmob.com/api/province/district/' + provinceLocal.province_id).then((res) => {
            setDistricts(res.data.results);
        });

        setProvinceModal(e.target.value);
    };

    const handleChangeAddress = (e) => {
        setAddressModal(e.target.value);
    };

    const handleChangeDistrict = (e) => {
        setDistrictModal(e.target.value);
    };

    const onClickClose = () => {
        setAddressModal(address);
        setProvinceModal(province);
        setDistrictModal(district);
    };

    const onClickSubmit = () => {
        setAddress(addressModal);
        setProvince(provinceModal);
        setDistrict(districtModal);
    };

    /* ----- On Click Checkout ----- */
    const onClickCheckout = () => {
        const formData = {
            shipAddress: address,
            shipCity: province,
            shipProvince: district,
            userId: userID,
            userName: username,
            items: cart.map((element) => ({ productId: element.id, quantity: element.quantity })),
        };

        axios.post(API_URL + '/api/orders', formData).then(() => {
            showToastSuccess('Thanh toán thành công');
            localStorage.removeItem('cart');
            setCheckoutSuccess(true);
        });
    };

    /* ----- Render ----- */
    if (cart !== null && checkoutSuccess === false) {
        return (
            <>
                <div className='after-header'></div>
                <div className='cart-container'>
                    <div className='cart'>
                        <div className='card'>
                            <div className='card-header'>
                                <h3 className='card-title'>Thông tin đơn hàng</h3>
                            </div>
                            <div className='card-body'>
                                <div className='icon-edit' data-toggle='modal' data-target='#myModal'>
                                    <IconEdit />
                                </div>
                                <h3>
                                    <IconHome className='icon' />: {address}
                                </h3>
                                <h3>
                                    <IconLocationCity className='icon' />: {province}
                                </h3>
                                <h3>
                                    <IconPlace className='icon' />: {district}
                                </h3>
                                <h3>
                                    <IconPerson className='icon' />: {username}
                                </h3>
                            </div>
                            <div className='card-footer'>
                                {cart.map((element) => (
                                    <>
                                        <div className='cart-item'>
                                            <img src={element.photoUrl} className='cart-item-left' />
                                            <div className='cart-item-middle'>
                                                <h3>{element.productName}</h3>
                                                <br />
                                                <h4> SL: {element.quantity}</h4>
                                            </div>
                                            <h4 className='cart-item-right'>{formatVND(element.price)}</h4>
                                        </div>
                                        <hr />
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/*  */}
                    <div className='cart-total'>
                        <div className='card'>
                            <div className='card-header'>
                                <h3 className='card-title'>Thông tin thanh toán</h3>
                            </div>
                            <div className='card-body'>
                                <h3>Tạm tính:</h3>
                                <h4>{formatVND(totalPrice)}</h4>
                                <h3>Phí vận chuyển:</h3>
                                <h4>{formatVND(shippingFee)} </h4>
                            </div>
                            <div className='card-footer'>
                                <h3>Thành tiền: {formatVND(totalPrice + shippingFee)}</h3>
                                <button onClick={onClickCheckout}>Xác nhận</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal */}
                <div class='modal fade' id='myModal' role='dialog'>
                    <div class='modal-dialog'>
                        <div class='modal-content'>
                            <div class='modal-header'>
                                <h4 class='modal-title'>Thông tin người nhận</h4>
                                <button type='button' class='close' data-dismiss='modal'>
                                    &times;
                                </button>
                            </div>
                            <div class='modal-body'>
                                {/* Input Place */}
                                <div class='form-group md-6'>
                                    <label for='address'>Địa chỉ</label>

                                    <input
                                        type='text'
                                        class='form-control'
                                        id='address'
                                        name='address'
                                        value={addressModal}
                                        placeholder='Địa chỉ'
                                        onChange={handleChangeAddress}
                                    />
                                </div>

                                {/* Select Province And District */}
                                <div class='form-row'>
                                    <div class='form-group col-md-6'>
                                        <label for='inputEmail4'>Tỉnh Thành</label>
                                        <select
                                            class='custom-select mr-sm-2'
                                            id='inlineFormCustomSelect'
                                            value={provinceModal}
                                            onChange={handleChangeProvince}>
                                            <option selected>Chọn tỉnh thành</option>
                                            {provinces.map((province) => (
                                                <option value={province.province_name}>{province.province_name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div class='form-group col-md-6'>
                                        <label for='inputPassword4'>Quận/Huyện</label>
                                        <select
                                            class='custom-select mr-sm-2'
                                            id='inlineFormCustomSelect'
                                            value={districtModal}
                                            onChange={handleChangeDistrict}>
                                            <option selected>Chọn Quận/Huyện</option>
                                            {districts.map((district) => (
                                                <option value={district.district_name}>{district.district_name}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class='modal-footer'>
                                <button
                                    type='button'
                                    class='btn btn-default'
                                    data-dismiss='modal'
                                    onClick={onClickClose}>
                                    Close
                                </button>
                                <button
                                    type='button'
                                    class='btn btn-success'
                                    data-dismiss='modal'
                                    onClick={onClickSubmit}>
                                    Xác nhận
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    } else if (checkoutSuccess === true) {
        return <CheckoutSuccess />;
    } else {
        return <Redirect to='/gio-hang' />;
    }
}
export default Checkout;
