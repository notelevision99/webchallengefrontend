import banner from '../../../../assets/images/banner/banner-2.jpg';
import { IconDelete } from '../../../../assets/icons';
import { useHistory } from 'react-router';

function Cart() {
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
                            <h3 className='card-title'>Giỏ hàng</h3>
                        </div>
                        <div className='card-body'>
                            <div className='cart-item'>
                                <img src={banner} className='cart-item-left'></img>
                                <div className='cart-item-middle'>
                                    <h3>SP1 giong lua thuong hang</h3>
                                    <br />
                                    <input type='number' min='1' defaultValue='1'></input>
                                </div>
                                <h4 className='cart-item-right'>112 330 đ</h4>
                                <div className='icon-d'>
                                    <IconDelete />
                                </div>
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>

                <div className='cart-total'>
                    <div className='card'>
                        <div className='card-header'>
                            <h3 className='card-title'>Thông tin thanh toán</h3>
                        </div>
                        <div className='card-body'>
                            <h3>Tổng tiền</h3>
                            <h4>12 333 đ</h4>
                        </div>
                        <div className='card-footer'>
                            <button onClick={onClickNextCheckout}>Đặt hàng</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Cart;
