import { GetService } from "./Services";
import { DATA_STATUS, DOMAIN } from "../utils/config";

const GetProductERP = (pageNumber) => {
  let pageSize = 5;
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

export { GetProductERP, GetCateProductERP };
