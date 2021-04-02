import { GetService } from "./Services";
import { DATA_STATUS, DOMAIN } from "../utils/config";

const GetBlogERP = (pageNumber) => {
  let pageSize = 3;
  const URL = `${DOMAIN.URL}/blogs/getblogsbyurlseo/tin-tuc-nong-nghiep?pageSize=${pageSize}&pageNumber=${pageNumber}`;

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

export { GetBlogERP };
