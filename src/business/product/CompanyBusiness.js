import { DATA_STATUS } from "../../utils/config";
import { GetCompanyERP, FilterByCpnERP } from "../../services/ResCompany";

const GetCompanyBusiness = () => {
  try {
    return new Promise(async (res, rej) => {
      let allCompany = await GetCompanyERP();

      if (allCompany.status === DATA_STATUS.SUCCESS) {
        let customData = allCompany.data.data;

        res({
          data: customData,
          status: DATA_STATUS.SUCCESS,
        });
      } else {
        rej(allCompany);
      }
    });
  } catch (error) {
    error({
      data: [],
      status: DATA_STATUS.FAILED,
    });
  }
};

const FilterByCpnBusiness = (cateId) => {
  try {
    return new Promise(async (res, rej) => {
      let filterred = await FilterByCpnERP(cateId);

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

export { GetCompanyBusiness, FilterByCpnBusiness };
