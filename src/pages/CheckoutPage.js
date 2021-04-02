import { ToastContainer } from 'react-toastify';
import Footer from '../components/atom/user/footer/Footer';
import Header from '../components/atom/user/header/Header';
import Checkout from '../components/layout/user/checkoutPage/Checkout';

function CheckoutPage() {
    return (
        <>
            <Checkout />
            <ToastContainer />
        </>
    );
}
export default CheckoutPage;
