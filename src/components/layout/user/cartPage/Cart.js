import { IconDelete } from '../../../../assets/icons';
import { useHistory } from 'react-router';
import { useEffect, useState } from 'react';
import formatVND from '../../../../helpers/user/formatVND';
import EmptyCart from './EmptyCart';

function Cart() {
    const history = useHistory();

    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const onClickNextCheckout = () => {
        history.push('/thanh-toan');
    };

    const sumPrice = () => {
        let sum = 0;
        cart.forEach((element) => {
            sum += element.price * element.quantity;
        });

        return sum;
    };

    useEffect(() => {
        let cartLocal = localStorage.getItem('cart');
        if (cartLocal) {
            setCart(JSON.parse(cartLocal));
            setTotalPrice(sumPrice);
        }
    }, []);

    const updateFieldChanged = (index) => (e) => {
        let newCart = [...cart]; // copying the old datas array
        newCart[index].quantity = Number.parseInt(e.target.value); // replace e.target.value with whatever you want to change it to
        setCart(newCart); // ??
        localStorage.setItem('cart', JSON.stringify(newCart));

        setTotalPrice(sumPrice);
    };

    const deleteItem = (index) => {
        let newCart = [...cart];

        if (index > -1) {
            newCart.splice(index, 1);
        }

        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
    };
    return (
        <>
            <div className='after-header'></div>
            {cart.length > 0 ? (
                <div className='cart-container'>
                    <div className='cart'>
                        <div className='card'>
                            <div className='card-header'>
                                <h3 className='card-title'>Giỏ hàng</h3>
                            </div>
                            <div className='card-body'>
                                {cart.map((element, index) => (
                                    <>
                                        <div className='cart-item'>
                                            <img src={element.photoUrl} className='cart-item-left'></img>
                                            <div className='cart-item-middle'>
                                                <h3>{element.productName}</h3>
                                                <br />
                                                <input
                                                    type='number'
                                                    min='1'
                                                    defaultValue='1'
                                                    value={element.quantity}
                                                    onChange={updateFieldChanged(index)}></input>
                                            </div>
                                            <h4 className='cart-item-right'>{formatVND(element.price)}</h4>
                                            <div className='icon-d' onClick={() => deleteItem(index)}>
                                                <IconDelete />
                                            </div>
                                        </div>
                                        <hr />
                                    </>
                                ))}
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
                                <h4>{formatVND(totalPrice)}</h4>
                            </div>
                            <div className='card-footer'>
                                <button onClick={onClickNextCheckout}>Đặt hàng</button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <EmptyCart />
            )}
        </>
    );
}
export default Cart;
