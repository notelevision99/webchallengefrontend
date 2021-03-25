import { GetService } from "./Services";
import { DATA_STATUS, DOMAIN } from "../utils/config";

const GetCompanyERP = () => {
  const URL = `${DOMAIN.URL}/getfilterparams/getcompanies`;

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

const FilterByCpnERP = (cateId) => {
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

export { GetCompanyERP, FilterByCpnERP };
