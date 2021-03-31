import { DATA_STATUS } from "../../utils/config";
import {
  GetProductERP,
  GetCateProductERP,
  FilterByCateERP,
  GetProductDetailERP,
} from "../../services/ResProduct";

const GetProductBusiness = (pageNumber) => {
  try {
    return new Promise(async (res, rej) => {
      let allProduct = await GetProductERP(pageNumber);

      if (allProduct.status === DATA_STATUS.SUCCESS) {
        let customData = allProduct.data.data;

        res({
          data: customData,
          status: DATA_STATUS.SUCCESS,
        });
      } else {
        rej(allProduct);
      }
    });
  } catch (error) {
    error({
      data: [],
      status: DATA_STATUS.FAILED,
    });
  }
};

const GetCateProductBusiness = () => {
  try {
    return new Promise(async (res, rej) => {
      let allCateProduct = await GetCateProductERP();

      if (allCateProduct.status === DATA_STATUS.SUCCESS) {
        let customData = allCateProduct.data.data;

        res({
          data: customData,
          status: DATA_STATUS.SUCCESS,
        });
      } else {
        rej(allCateProduct);
      }
    });
  } catch (error) {
    error({
      data: [],
      status: DATA_STATUS.FAILED,
    });
  }
};

const FilterByCateBusiness = (cateId) => {
  try {
    return new Promise(async (res, rej) => {
      let filterred = await FilterByCateERP(cateId);

      if (filterred.status === DATA_STATUS.SUCCESS) {
        let customData = filterred.data.data;

        res({
          data: customData,
          status: DATA_STATUS.SUCCESS,
        });
      } else {
        rej(filterred);
      }
    });
  } catch (error) {
    error({
      data: [],
      status: DATA_STATUS.FAILED,
    });
  }
};

const GetProductDetailBusiness = (urlSeo) => {
  try {
    return new Promise(async (res, rej) => {
      let productDetail = await GetProductDetailERP(urlSeo);

      if (productDetail.status === DATA_STATUS.SUCCESS) {
        let customData = productDetail.data.data;

        res({
          data: customData,
          status: DATA_STATUS.SUCCESS,
        });
      } else {
        rej(productDetail);
      }
    });
  } catch (error) {
    error({
      data: [],
      status: DATA_STATUS.FAILED,
    });
  }
};

export {
  GetProductBusiness,
  GetCateProductBusiness,
  FilterByCateBusiness,
  GetProductDetailBusiness,
};
