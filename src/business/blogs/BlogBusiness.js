import { DATA_STATUS } from "../../utils/config";
import { GetBlogERP } from "../../services/ResBlog";

const GetBlogBusiness = (pageNumber) => {
  try {
    return new Promise(async (res, rej) => {
      let blogs = await GetBlogERP(pageNumber);

      if (blogs.status === DATA_STATUS.SUCCESS) {
        let customData = blogs.data.data;

        res({
          data: customData,
          status: DATA_STATUS.SUCCESS,
        });
      } else {
        rej(blogs);
      }
    });
  } catch (error) {
    error({
      data: [],
      status: DATA_STATUS.FAILED,
    });
  }
};

export { GetBlogBusiness };
