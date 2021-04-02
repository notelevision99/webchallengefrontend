import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import userLoginImage from "../../../../assets/images/bg/login2.jpg";

import LockIcon from "@material-ui/icons/Lock";
import PersonIcon from "@material-ui/icons/Person";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

function Login({
  showPass,
  onShowPass,
  onUsername,
  onPassword,
  onLogin,
  showAlert,
}) {
  /* ===================== Handle UI ===================== */
  const [username, setUsername] = useState(false);
  const [password, setPassword] = useState(false);

  return (
    <div className="user-login">
      <div className="image">
        <img src={userLoginImage} alt="" />
      </div>

      <div className="user-login__container">
        <div className="form-input">
          <h3>
            <span>"CPSEEDs</span> &nbsp;
            <span>CO."</span>
          </h3>

          <form action="">
            <div className="input">
              {/* Username input */}
              <div className="input__box username">
                <div class="form__group field">
                  <input
                    type="input"
                    class="form__field"
                    placeholder="Name"
                    name="name"
                    id="name"
                    required
                    onChange={onUsername}
                  />

                  <label for="name" class="form__label">
                    <PersonIcon /> Name
                  </label>
                </div>
              </div>

              {/* password input */}
              <div className="input__box">
                <div class="form__group field">
                  <input
                    type={showPass ? "text" : "password"}
                    class="form__field"
                    placeholder="Password"
                    name="password"
                    id="password"
                    required
                    onChange={onPassword}
                  />

                  {showPass ? (
                    <VisibilityOffIcon
                      className="show-pass"
                      onClick={onShowPass}
                    />
                  ) : (
                    <VisibilityIcon
                      className="show-pass"
                      onClick={onShowPass}
                    />
                  )}

                  <label for="password" class="form__label">
                    <LockIcon /> Password
                  </label>
                </div>
              </div>

              <button onClick={onLogin}>Đăng nhập</button>
            </div>
          </form>

          <div className="forgot-pass">
            <Link to="/">Quên mật khẩu?</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
