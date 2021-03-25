import { DATA_STATUS } from "../../utils/config";
import { GetWeightERP, FilterByWeightERP } from "../../services/ResWeight";

const GetWeightBusiness = () => {
  try {
    return new Promise(async (res, rej) => {
      let allWeight = await GetWeightERP();

      if (allWeight.status === DATA_STATUS.SUCCESS) {
        let customData = allWeight.data.data;

        res({
          data: customData,
          status: DATA_STATUS.SUCCESS,
        });
      } else {
        rej(allWeight);
      }
    });
  } catch (error) {
    error({
      data: [],
      status: DATA_STATUS.FAILED,
    });
  }
};

const FilterByWeightBusiness = (cateId) => {
  try {
    return new Promise(async (res, rej) => {
      let filterred = await FilterByWeightERP(cateId);

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

export { GetWeightBusiness, FilterByWeightBusiness };
