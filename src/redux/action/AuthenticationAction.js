import { NAME_PAGE } from "../NameAction";

export const userLogin = (userInfo) => {
  return {
    type: NAME_PAGE.AUTHENTICATION.USER_LOGIN,
    payload: { userInfo },
  };
};

export const userLogout = () => {
  return {
    type: NAME_PAGE.AUTHENTICATION.USER_LOGOUT,
  };
};
