import banner from '../../../../assets/images/banner/banner-2.jpg';
import { IconEdit, IconPerson, IconPhone, IconPlace } from '../../../../assets/icons';
import { useHistory } from 'react-router';

function Checkout() {
    const history = useHistory();
    const onClickNextCheckout = () => {
        history.push('/thanh-toan');
    };

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
                                <IconPlace className='icon' />: 304/13 Hoa Hung P.13 Q.10
                            </h3>
                            <h3>
                                <IconPhone className='icon' />: 0938582362
                            </h3>
                            <h3>
                                <IconPerson className='icon' />: Vo Tri Luan
                            </h3>
                        </div>
                        <div className='card-footer'>
                            <div className='cart-item'>
                                <img src={banner} className='cart-item-left' />
                                <div className='cart-item-middle'>
                                    <h3>SP1 giong lua thuong hang</h3>
                                    <br />
                                    <h4> SL: 1</h4>
                                </div>
                                <h4 className='cart-item-right'>112 330 đ</h4>
                            </div>
                            <hr />
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
                            <h4>32 000 đ</h4>
                            <h3>Phí vận chuyển:</h3>
                            <h4>22 000 đ</h4>
                        </div>
                        <div className='card-footer'>
                            <h3>Thành tiền: 54 000</h3>
                            <button onClick={onClickNextCheckout}>Xác nhận</button>
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
                            <div class='input-group mb-3'>
                                <span className='input-group-text'>
                                    <IconPlace />
                                </span>

                                <input type='text' class='form-control' name='address' placeholder='Địa chỉ' />
                            </div>

                            {/* Input Phone Number */}
                            <div class='input-group mb-3'>
                                <span className='input-group-text'>
                                    <IconPhone />
                                </span>

                                <input type='phone' class='form-control' name='phone' placeholder='Số điện thoại' />
                            </div>

                            {/* Input Name */}
                            <div class='input-group'>
                                <span className='input-group-text'>
                                    <IconPerson />
                                </span>

                                <input type='text' class='form-control' name='name' placeholder='Tên người nhận' />
                            </div>
                        </div>
                        <div class='modal-footer'>
                            <button type='button' class='btn btn-default' data-dismiss='modal'>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Checkout;
