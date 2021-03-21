import { NAME_PAGE } from "../NameAction";

export const getProducts = (products) => {
  return {
    type: NAME_PAGE.PRODUCT_PAGE.GET_PRODUCTS,
    payload: { products },
  };
};

export const getCategory = (categories) => {
  return {
    type: NAME_PAGE.PRODUCT_PAGE.GET_CATEGORY,
    payload: { categories },
  };
};
