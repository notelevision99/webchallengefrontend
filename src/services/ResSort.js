import { GetService } from "./Services";
import { DATA_STATUS, DOMAIN } from "../utils/config";

const GetSortERP = (isSort) => {
  
  const URL = `${DOMAIN.URL}/products?filter=6-${isSort == "price-ascending" ? 2 : 1}&pageSize=10&pageNumber=1`;

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

export { GetSortERP };