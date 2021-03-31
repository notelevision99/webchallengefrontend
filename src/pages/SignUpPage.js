import { showToastSuccess } from '../helpers/admin/toastNotify';
import farm from '../assets/images/signup/farming.png';
import React, { Component, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
import { API_URL } from '../helpers/user/urlCallAxios';
import axios from 'axios';

import LockIcon from '@material-ui/icons/Lock';
import PersonIcon from '@material-ui/icons/Person';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { IconArrowBack, IconEmail, IconPhone, IconPlace } from '../assets/icons';
import { ToastContainer } from 'react-toastify';

function SignUpPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');

    const [error, setError] = useState('');
    const [showPass, setShowPass] = useState(false);

    const signup = (e) => {
        e.preventDefault();

        /*-----Validate-----*/
        let emailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        let phoneValid = phoneNumber.match(/^[0-9\b]+$/) && phoneNumber.length <= 10;
        let passwordValid = password.length >= 6;
        if (
            username.length === 0 ||
            password.length === 0 ||
            email.length === 0 ||
            phoneNumber.length === 0 ||
            address.length === 0
        ) {
            setError('Vui lòng điền đầy dủ thông tin');
            return;
        } else if (!passwordValid) {
            setError('Mật khẩu không hợp lệ');
            return;
        } else if (!phoneValid) {
            setError('Số điện thoại không hợp lệ');
            return;
        } else if (!emailValid) {
            setError('Email không hợp lệ');
            return;
        } else {
            setError('');
        }

        const formSignUp = {
            userName: username,
            password: password,
            email: email,
            phoneNumber: phoneNumber,
            address: address,
        };
        const url = `${API_URL}/api/auth/register`;
        axios
            .post(url, formSignUp, { withCredentials: true })
            .then(() => {
                showToastSuccess('Đăng kí thành công');
            })
            .catch((error) =>
                setError(
                    (error.response && error.response.data && error.response.data.message) ||
                        error.message ||
                        error.toString()
                )
            );
    };

    const handleUsername = (e) => {
        setUsername(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handlePhone = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleAddress = (e) => {
        setAddress(e.target.value);
    };

    const onShowPass = (e) => {
        setShowPass(!showPass);
    };

    return (
        <div className='signup-container'>
            <div className='signup-card'>
                <div className='signup-shape'>
                    <h1>C.P.SEEDS VIETNAM</h1>
                    <img src={farm} alt=''></img>
                    <svg className='shape' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 509.03 836'>
                        <g fill='#66d4b3'>
                            <path
                                class='cls-1'
                                d='M471.32,20c0-11-8.13-20-18.16-20h-435C8.16,0,0,9,0,20V816c0,11,8.13,20,18.16,20h435c10,0,18.16-9,18.16-20L509,418Z'
                            />
                        </g>
                    </svg>
                    <NavLink className='link-home' to='/'>
                        <IconArrowBack />
                    </NavLink>
                    <NavLink className='link-login' to='/dang-nhap'>
                        Đăng nhập
                    </NavLink>
                </div>
                <div className='signup-form'>
                    <div></div>
                    <form action='' onSubmit={signup}>
                        <div className='input'>
                            {/* Username input */}
                            <div className='input__box username'>
                                <div class='form__group field'>
                                    <input
                                        type='input'
                                        class='form__field'
                                        placeholder='Name'
                                        name='name'
                                        id='name'
                                        onChange={handleUsername}
                                    />

                                    <label for='name' class='form__label'>
                                        <PersonIcon /> Username
                                    </label>
                                </div>
                            </div>

                            {/* password input */}
                            <div className='input__box'>
                                <div class='form__group field'>
                                    <input
                                        type={showPass ? 'text' : 'password'}
                                        class='form__field'
                                        placeholder='Password'
                                        name='password'
                                        id='password'
                                        onChange={handlePassword}
                                    />

                                    {showPass ? (
                                        <VisibilityOffIcon className='show-pass' onClick={onShowPass} />
                                    ) : (
                                        <VisibilityIcon className='show-pass' onClick={onShowPass} />
                                    )}

                                    <label for='password' class='form__label'>
                                        <LockIcon /> Password
                                    </label>
                                </div>
                            </div>

                            {/* Phone input */}
                            <div className='input__box username'>
                                <div class='form__group field'>
                                    <input
                                        type='phone'
                                        class='form__field'
                                        placeholder='Số điện thoại'
                                        name='phone'
                                        id='phone'
                                        onChange={handlePhone}
                                    />

                                    <label for='phone' class='form__label'>
                                        <IconPhone /> Số điện thoại
                                    </label>
                                </div>
                            </div>

                            {/* Address input */}
                            <div className='input__box username'>
                                <div class='form__group field'>
                                    <input
                                        type='email'
                                        class='form__field'
                                        placeholder='Email'
                                        name='email'
                                        id='email'
                                        onChange={handleEmail}
                                    />

                                    <label for='email' class='form__label'>
                                        <IconEmail /> Email
                                    </label>
                                </div>
                            </div>

                            {/* Address input */}
                            <div className='input__box username'>
                                <div class='form__group field'>
                                    <input
                                        type='input'
                                        class='form__field'
                                        placeholder='Địa chỉ'
                                        name='address'
                                        id='address'
                                        onChange={handleAddress}
                                    />

                                    <label for='address' class='form__label'>
                                        <IconPlace /> Địa chỉ
                                    </label>
                                </div>
                            </div>
                            {error !== '' ? <p className='error'>{error} </p> : <div className='br'></div>}
                            <button type='submit'>Đăng kí tài khoản</button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}
export default SignUpPage;
