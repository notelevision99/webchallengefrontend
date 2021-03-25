import { DATA_STATUS } from "../../utils/config";
import { GetSortERP }  from "../../services/ResSort";

const GetSortBusiness = (isSorting) => {
  try {
    return new Promise(async (res, rej) => {
      let sorted = await GetSortERP(isSorting);

      if (sorted.status === DATA_STATUS.SUCCESS) {
        let customData = sorted.data.data;

        res({
          data  : customData,
          status: DATA_STATUS.SUCCESS,
        });
      } else {
        rej(sorted);
      }
    });
  } catch (error) {
    error({
      data  : [],
      status: DATA_STATUS.FAILED,
    });
  }
};

export { GetSortBusiness };