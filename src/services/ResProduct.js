import { GetService } from "./Services";
import { DATA_STATUS, DOMAIN } from "../utils/config";

const GetProductERP = (pageNumber) => {
  let pageSize = 12;
  const URL = `${DOMAIN.URL}/products?&pageNumber=${pageNumber}&pageSize=${pageSize}`;

  return new Promise((res, rej) => {
    GetService(URL)
      .then((resService) => {
        res({
          data: resService,
          status: DATA_STATUS.SUCCESS,
        });
      })
      .catch((rejService) => {
        res({
          status: DATA_STATUS.FAILED,
          rej: rejService,
        });
      });
  });
};

const GetCateProductERP = () => {
  const URL = `${DOMAIN.URL}/categories`;

  return new Promise((res, rej) => {
    GetService(URL)
      .then((resService) => {
        res({
          data: resService,
          status: DATA_STATUS.SUCCESS,
        });
      })
      .catch((rejService) => {
        res({
          status: DATA_STATUS.FAILED,
          rej: rejService,
        });
      });
  });
};

const FilterByCateERP = (cateId) => {
  let pageNumber = 1;
  let pageSize = 5;
  const URL = `${DOMAIN.URL}/categories/getproductsbycateid/${cateId}?pageNumber=${pageNumber}&pageSize=${pageSize}`;

  return new Promise((res, rej) => {
    GetService(URL)
      .then((resService) => {
        res({
          data: resService,
          status: DATA_STATUS.SUCCESS,
        });
      })
      .catch((rejService) => {
        res({
          status: DATA_STATUS.FAILED,
          rej: rejService,
        });
      });
  });
};

const FilterByCpnERP = (something) => {
  let pageNumber = 1;
  let pageSize = 10;
  const URL = `${DOMAIN.URL}/products?filter=2-${something}&pageSize=${pageSize}&pageNumber=${pageNumber}`;

  return new Promise((res, rej) => {
    GetService(URL)
      .then((resService) => {
        res({
          data: resService,
          status: DATA_STATUS.SUCCESS,
        });
      })
      .catch((rejService) => {
        res({
          status: DATA_STATUS.FAILED,
          rej: rejService,
        });
      });
  });
};

const FilterByWeightERP = (something) => {
  let pageNumber = 1;
  let pageSize = 10;
  const URL = `${DOMAIN.URL}/products?filter=5-${something}&pageSize=${pageSize}&pageNumber=${pageNumber}`;

  return new Promise((res, rej) => {
    GetService(URL)
      .then((resService) => {
        res({
          data: resService,
          status: DATA_STATUS.SUCCESS,
        });
      })
      .catch((rejService) => {
        res({
          status: DATA_STATUS.FAILED,
          rej: rejService,
        });
      });
  });
};

const GetProductDetailERP = (urlSeo) => {
  const URL = `${DOMAIN.URL}/products/${urlSeo}`;

  return new Promise((res, rej) => {
    GetService(URL)
      .then((resService) => {
        res({
          data: resService,
          status: DATA_STATUS.SUCCESS,
        });
      })
      .catch((rejService) => {
        res({
          status: DATA_STATUS.FAILED,
          rej: rejService,
        });
      });
  });
};

export {
  GetProductERP,
  GetCateProductERP,
  FilterByCateERP,
  GetProductDetailERP,
  FilterByCpnERP,
  FilterByWeightERP,
};
