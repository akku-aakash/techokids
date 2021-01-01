import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import store from "../store";
import Notify from "devextreme/ui/notify";
import { beginAjaxCall, endAjaxCall } from "../store/loading/action";

const axiosInstance = axios.create({
  baseURL: "https://techokids.herokuapp.com/",
});

axiosInstance.defaults.headers={
  'Access-Control-Allow-Origin':"*",
  "Content-Type":'application/json;charset=utf-8'
}

const requestHandler = (request) => {
  const { dispatch } = store;
  dispatch(beginAjaxCall());
  return request;
};

const errorHandler = (error) => {
  Notify({
    message: `Unfortunately error happened during request: ${error.message}`,
    type: "error",
  });
  const { dispatch } = store;
  dispatch(endAjaxCall());

  return Promise.reject({ ...error });
};

const successHandler = (response) => {

  debugger;
  const { dispatch } = store;
  dispatch(endAjaxCall());

  return response;
};

axiosInstance.interceptors.request.use((request) => requestHandler(request));

axiosInstance.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error)
);

export default axiosInstance;
