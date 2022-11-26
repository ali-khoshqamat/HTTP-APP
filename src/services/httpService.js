import axios from "axios";

// baseURL
axios.defaults.baseURL = "http://localhost:3001";

// headers
// axios.defaults.headers.common["Authorization"] = "AUTH_TOKEN";

// request, response
axios.interceptors.request.use(
  (request) => {
    console.log("request", request);
    // Edit request...
    return request;
  },
  (error) => {
    console.log(error);
    return Promise.reject();
  }
);

axios.interceptors.response.use(
  (response) => {
    console.log("response", response);
    // Edit response...
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject();
  }
);

const http = {
  get: axios.get,
  put: axios.put,
  delete: axios.delete,
  post: axios.post,
};

export default http;
