import axios from "axios";
export const sendContactForm = async (data) => {
  fetch("http://localhost:3000/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
};

const sendRequest = (options = {}) => {
  const { token } = useUserStore.getState();

  let defaultConfig = {
    url: "/",
    method: "get",
    timeout: 10000,
    data: {},
    headers: {
      Authorization: `Bearer ${token || ""}`,
    },
    validateStatus: (status) => status >= 200 && status < 500,
  };

  // mix defaultConfig with options
  const requestConfig = {
    ...defaultConfig,
    ...options,
  };

  return axios(requestConfig);
};

export default sendRequest;
