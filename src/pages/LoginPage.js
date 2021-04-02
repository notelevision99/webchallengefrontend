import React, { Component, useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import axios from "axios";
import Cookies from "js-cookie";
import Login from "../components/layout/user/loginPage/Login";

//Config
import { DATA_STATUS } from "../utils/config";

//Business
import { UserLoginBusiness } from "../business/authentication/Login";

//Reducer
import { userLogin } from "../redux/action/AuthenticationAction";

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

  // Handle UI
  const [showPass, setShowPass] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const onShowPass = () => {
    setShowPass(!showPass);
  };

  // Handle logic
  const DISPATCH = useDispatch();
  const HISTORY = useHistory();

  const [formLogin, SetFormLogin] = useState({
    username: "",
    password: "",
  });

  const onUsername = (e) => {
    SetFormLogin({ ...formLogin, username: e.target.value });
  };

  const onPassword = (e) => {
    SetFormLogin({ ...formLogin, password: e.target.value });
  };

  const onLogin = async (event) => {
    event.preventDefault();
    const { username, password } = formLogin;

    await UserLoginBusiness(username, password).then((response) => {
      console.log("nam", response.status);
      if (response.status === DATA_STATUS.SUCCESS) {
        const user = response.data;
        console.log("nammm", user);
        if (user) {
          Cookies.set("usrCks", `${user.roles}`, { expires: 2 });
          Cookies.set("Usr_N", `${user.name}`, { expires: 2 });
          Cookies.set("Usr_I", `${user.id}`, { expires: 2 });
          DISPATCH(userLogin(user));
          HISTORY.push("/");
        }
      } else {
        setShowAlert(true);
      }
    });
  };

  return (
    <Login
      onShowPass={onShowPass}
      showPass={showPass}
      showAlert={showAlert}
      onUsername={onUsername}
      onPassword={onPassword}
      onLogin={onLogin}
    />
  );
}
export default LoginPage;
