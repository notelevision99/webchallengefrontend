import React from 'react';
import { showToastSuccess } from '../../../../helpers/admin/toastNotify';

function ProductItem({ index, ele }) {
    const addCart = () => {
        let checkProductExist = 0;
        let indexProductExist = 0;
        let product = {
            id: ele.id,
            photoUrl: ele.photoUrl,
            productName: ele.productName,
            price: ele.price,
            quantity: 1,
        };
        let cart = [];
        let cartLocal = localStorage.getItem('cart');
        if (cartLocal) {
            cart = JSON.parse(cartLocal);
        }

        cart.forEach((element, index) => {
            if (element.id === product.id) {
                console.log('index = ' + indexProductExist);
                checkProductExist = 1;
                indexProductExist = index;
                return;
            }
        });

        if (checkProductExist === 1) {
            cart[indexProductExist].quantity += 1;
        }
        if ((checkProductExist === 0 && cart.length === 0) || checkProductExist === 0) {
            cart.push(product);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        showToastSuccess('Đã thêm sản phẩm vào giỏ hàng');
    };

    return (
        <div className='product-item' key={index}>
            <div className='product-item__thumbnail'>
                <img src={ele.photoUrl} alt='' />

                <div className='product-item__thumbnail--hover'>
                    <p className='hover-title'>Chi tiết sản phẩm</p>

                    <p className='btn-seen'>Xem</p>
                </div>
            </div>

            <div className='product-item__info'>
                <div className='product-item__info--name'>
                    <h3>{ele.productName}</h3>
                </div>
                <div className='product-item__info--price'>
                    <p>{ele.price}</p>

                    <p className='btn-order' onClick={addCart}>
                        Đặt hàng
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
