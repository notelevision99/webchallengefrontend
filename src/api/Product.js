import { DATA_STATUS } from "../utils/config";
import { useDispatch } from "react-redux";

import { GetProductBusiness } from "../business/product/ProductBusiness";
import { getProducts } from "../redux/action/ProductAction";

const GetProduct = async (pageNumber) => {
  const dispatch = useDispatch();

  await GetProductBusiness(pageNumber).then((res) => {
    console.log("nam");
    if (res.status === DATA_STATUS.SUCCESS) {
      const allProduct = res.data;
      dispatch(getProducts(allProduct));
    }
  });
};

export { GetProduct };
