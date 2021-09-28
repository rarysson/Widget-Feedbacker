import axios from "axios";

const API_ENVS = {
  local: "http://localhost:3000",
};

const httpCliente = axios.create({
  baseURL: API_ENVS.local,
});

httpCliente.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const canThrowError =
      error.request.status === 0 || error.request.status === 500;

    if (canThrowError) {
      throw new Error(error.message);
    }

    return error;
  }
);

export default {};
