import { PostService } from "./Services";
import { DATA_STATUS, DOMAIN } from "../utils/config";

const UserLoginERP = (username, password) => {
  const URL = `${DOMAIN.URL}/auth/login`;

  return new Promise((res, rej) => {
    PostService(URL, {
      userName: username,
      passWord: password,
    })
      .then((resService) => {
        res({
          data: resService,
          status: DATA_STATUS.SUCCESS,
        });
      })
      .catch((rejService) => {
        res({
          status: DATA_STATUS.FAILED,
          err: rejService,
        });
      });
  });
};

const UserLogoutERP = () => {
  const URL = `${DOMAIN.URL}/auth/logout`;

  return new Promise((res, rej) => {
    PostService(URL)
      .then((resService) => {
        res({
          data: resService,
          status: DATA_STATUS.SUCCESS,
        });
      })
      .catch((rejService) => {
        res({
          status: DATA_STATUS.FAILED,
          err: rejService,
        });
      });
  });
};

export { UserLoginERP, UserLogoutERP };
