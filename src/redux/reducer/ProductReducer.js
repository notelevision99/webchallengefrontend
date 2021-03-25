import { NAME_PAGE } from "../NameAction";
import { DATA_STATUS } from "../../utils/config";

const initState = {
  products  : [],
  categories: [],
  companies : [],
  weights   : [],
  status    : DATA_STATUS.NONE,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case NAME_PAGE.PRODUCT_PAGE.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload.products,
        status  : DATA_STATUS.SUCCESS,
      };

    case NAME_PAGE.PRODUCT_PAGE.GET_CATEGORY:
      return {
        ...state,
        categories: action.payload.categories,
        status    : DATA_STATUS.SUCCESS,
      };

    case NAME_PAGE.PRODUCT_PAGE.GET_COMPANY:
      return {
        ...state,
        companies: action.payload.companies,
        status   : DATA_STATUS.SUCCESS,
      };

    case NAME_PAGE.PRODUCT_PAGE.GET_WEIGHT:
      return {
        ...state,
        weights: action.payload.weights,
        status : DATA_STATUS.SUCCESS,
      };

    case NAME_PAGE.PRODUCT_PAGE.GET_FILTERRED:
      return {
        ...state,
        products: action.payload.filterred,
        status  : DATA_STATUS.SUCCESS,
      };

    case NAME_PAGE.PRODUCT_PAGE.GET_SORTED:
      return {
        ...state,
        products: action.payload.sorted,
        status  : DATA_STATUS.SUCCESS,
      };

    default:
      return state;
  }
};

export default reducer;
