import { NAME_PAGE } from "../NameAction";
import { DATA_STATUS } from "../../utils/config";

const initState = {
  products: [],
  categories: [],
  status: DATA_STATUS.NONE,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case NAME_PAGE.PRODUCT_PAGE.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload.products,
        status: DATA_STATUS.SUCCESS,
      };

    case NAME_PAGE.PRODUCT_PAGE.GET_CATEGORY:
      return {
        ...state,
        categories: action.payload.categories,
        status: DATA_STATUS.SUCCESS,
      };

    default:
      return state;
  }
};

export default reducer;
