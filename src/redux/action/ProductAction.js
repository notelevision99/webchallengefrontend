import { NAME_PAGE } from "../NameAction";

export const getProducts = (products) => {
  return {
    type   : NAME_PAGE.PRODUCT_PAGE.GET_PRODUCTS,
    payload: { products },
  };
};

export const getCategory = (categories) => {
  return {
    type   : NAME_PAGE.PRODUCT_PAGE.GET_CATEGORY,
    payload: { categories },
  };
};

export const getCompany = (companies) => {
  return {
    type   : NAME_PAGE.PRODUCT_PAGE.GET_COMPANY,
    payload: { companies },
  };
};

export const getWeight = (weights) => {
  return {
    type   : NAME_PAGE.PRODUCT_PAGE.GET_WEIGHT,
    payload: { weights },
  };
};

export const getFilterred = (filterred) => {
  return {
    type   : NAME_PAGE.PRODUCT_PAGE.GET_FILTERRED,
    payload: { filterred },
  };
};

export const getSorted = (sorted) => {
  return {
    type   : NAME_PAGE.PRODUCT_PAGE.GET_SORTED,
    payload: { sorted },
  };
};
