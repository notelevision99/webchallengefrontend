import axios from "axios";

const PostService = (url = "", params = {}) => {
  return new Promise((res, rej) => {
    axios
      .post(url, params)
      .then((response) => {
        if (!!response && response.status === 200) {
          res(response);
          if (response.data.result === undefined) {
            res(response);
          } else {
            res(response.data.result);
          }
        } else {
          rej(response);
        }
      })
      .catch((exception) => {
        rej(exception);
      });
  });
};

const GetService = (url = "") => {
  return new Promise((res, rej) => {
    axios
      .get(url)
      .then((response) => {
        if (!!response && response.status === 200) {
          res(response);
          if (response.data.result === undefined) {
            res(response);
          } else {
            res(response.data.result);
          }
        } else {
          rej(response);
        }
      })
      .catch((exception) => {
        rej(exception);
      });
  });
};

export { PostService, GetService };
