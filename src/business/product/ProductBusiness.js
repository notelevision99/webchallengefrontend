import { DATA_STATUS } from "../../utils/config";
import { GetProductERP, GetCateProductERP } from "../../services/ResProduct";

const GetProductBusiness = (pageNumber) => {
  try {
    return new Promise(async (res, rej) => {
      let allProduct = await GetProductERP(pageNumber);
      console.log("all product business =>", allProduct);

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

const GetCateProductBusiness = (pageNumber) => {
  try {
    return new Promise(async (res, rej) => {
      let allCateProduct = await GetCateProductERP(pageNumber);
      console.log("all product business =>", allCateProduct);

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

export { GetProductBusiness, GetCateProductBusiness };
