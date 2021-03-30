import { useHistory } from 'react-router';
import emptyCart from '../../../../assets/images/cart/empty-cart.png';

function EmptyCart() {
    const history = useHistory();

    const onClickContinue = () => {
        history.push('/san-pham');
    };

    return (
        <div className='empty-cart-container'>
            <div className='empty-cart-content'>
                <div className='image-empty d-flex justify-content-center'>
                    <img src={emptyCart} />
                </div>

                <h3>Không có sản phẩm nào trong giỏ hàng của bạn.</h3>
                <button className='btn btn-success' onClick={onClickContinue}>
                    Tiếp tục mua sắm
                </button>
            </div>
        </div>
    );
}
export default EmptyCart;
