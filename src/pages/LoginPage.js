import React, { Component, useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "../css/LoginPage.css";
import axios from "axios";
import Cookies from "js-cookie";
import { API_URL } from "../helpers/user/urlCallAxios";
import Login from "../components/layout/user/loginPage/Login";

function LoginPage() {
  // const history = useHistory();
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [infoUser, setUser] = useState({});
  // const [error, setError] = useState('');

  // const login = (e) => {
  //     e.preventDefault();
  //     const url = `${API_URL}/api/auth/login`;
  //     return axios
  //         .post(url, { userName: username, password: password })
  //         .then(
  //             (res) => {
  //                 Cookies.set('usrCks', `${res.data.roles}`, { expires: 2 });
  //                 Cookies.set('Usr_N', `${res.data.userName}`, { expires: 2 });
  //                 Cookies.set('Usr_I', `${res.data.userId}`);

  //                 history.push('/');
  //             },
  //             (error) =>
  //                 setError(
  //                     (error.response && error.response.data && error.response.data.message) ||
  //                         error.message ||
  //                         error.toString()
  //                 )
  //         )
  //         .catch((error) => setError(error));
  // };

  // const handleUsername = (e) => {
  //     setUsername(e.target.value);
  // };

  // const handlePassword = (e) => {
  //     setPassword(e.target.value);
  // };

  // return (
  //     <div className='login-page'>
  //         <div className='formLogin'>
  //             <div className='form-login-title'>Đăng Nhập Tài Khoản</div>
  //             <form onSubmit={login}>
  //                 <div className='input-group'>
  //                     <input type='text' id='username' name='username' onChange={handleUsername} required />
  //                     <label for='username'>Username</label>
  //                 </div>
  //                 <div className='input-group'>
  //                     <input type='password' id='password' name='password' onChange={handlePassword} required />
  //                     <label for='password'>Password</label>
  //                 </div>
  //                 {error !== '' && <p className='alert alert-danger'>{error}</p>}
  //                 <button name='submit'>Đăng nhập</button>

  //                 <NavLink to='/signup'>Đăng kí tài khoản</NavLink>
  //             </form>
  //         </div>
  //     </div>
  // );

  const [showPass, setShowPass] = useState(false);

  const onShowPass = () => {
    setShowPass(!showPass);
  };

  return <Login onShowPass={onShowPass} showPass={showPass} />;
}
export default LoginPage;
