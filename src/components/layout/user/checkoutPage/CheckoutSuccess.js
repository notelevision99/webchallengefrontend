import { useHistory } from 'react-router';

function CheckoutSuccess() {
    const history = useHistory();

    const onClickContinue = () => {
        history.push('/');
    };

    return (
        <div className='empty-cart-container'>
            <div style={{ backgroundColor: 'white' }} className='empty-cart-content'>
                <div class='success-checkmark'>
                    <div class='check-icon'>
                        <span class='icon-line line-tip'></span>
                        <span class='icon-line line-long'></span>
                        <div class='icon-circle'></div>
                        <div class='icon-fix'></div>
                    </div>
                </div>

                <h3>Bạn đã đặt hàng thành công</h3>
                <button className='btn btn-success' onClick={onClickContinue}>
                    Quay lại trang chủ
                </button>
            </div>
        </div>
    );
}
export default CheckoutSuccess;
