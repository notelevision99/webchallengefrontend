import { NAME_PAGE } from "../NameAction";
import { DATA_STATUS } from "../../utils/config";

const initState = {
  userInfo: {
    id: 0,
    name: "",
    address: "",
    phoneNumber: "",
    email: "",
    roles: "",
  },
  status: DATA_STATUS.NONE,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case NAME_PAGE.AUTHENTICATION.USER_LOGIN:
      return {
        ...state,
        userInfo: action.payload.userInfo,
        status: DATA_STATUS.SUCCESS,
      };

    case NAME_PAGE.AUTHENTICATION.USER_LOGOUT:
      return {
        userInfo: {
          id: 0,
          name: "",
          address: "",
          phoneNumber: "",
          email: "",
          roles: "",
        },
        status: DATA_STATUS.NONE,
      };

    default:
      return state;
  }
};

export default reducer;
