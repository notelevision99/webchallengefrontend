import { DATA_STATUS } from "../../utils/config";
import { UserLoginERP, UserLogoutERP } from "../../services/ResAuthentication";

const UserLoginBusiness = (username, password) => {
  try {
    return new Promise(async (res, rej) => {
      let user = await UserLoginERP(username, password);

      if (user.status === DATA_STATUS.SUCCESS) {
        let customData = {
          id: user.data.data.userId !== undefined ? user.data.data.userId : "",

          name:
            user.data.data.userName !== undefined
              ? user.data.data.userName
              : "",

          address:
            user.data.data.address !== undefined ? user.data.data.address : "",

          phoneNumber:
            user.data.data.phoneNumber !== undefined
              ? user.data.data.phoneNumber
              : "",

          email: user.data.data.email !== undefined ? user.data.data.email : "",
          roles: user.data.data.roles !== undefined ? user.data.data.roles : "",
        };
        //let customData = user.data.data;

        res({
          data: customData,
          status: DATA_STATUS.SUCCESS,
        });
      } else {
        rej(user);
      }
    });
  } catch (error) {
    error({
      data: [],
      status: DATA_STATUS.FAILED,
    });
  }
};

const UserLogoutBusiness = () => {
  try {
    return new Promise(async (res, rej) => {
      let logout = await UserLogoutERP();

      if (logout.status === DATA_STATUS.SUCCESS) {
        let customData = logout.data.data;

        res({
          data: customData,
          status: DATA_STATUS.SUCCESS,
        });
      } else {
        rej(logout);
      }
    });
  } catch (error) {
    error({
      data: [],
      status: DATA_STATUS.FAILED,
    });
  }
};

export { UserLoginBusiness, UserLogoutBusiness };
