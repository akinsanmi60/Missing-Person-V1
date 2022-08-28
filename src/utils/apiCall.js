import customAxiosMethod from "./customAxiosMethod";

export const postRequest = async ({ url, data }) => {
  const response = await customAxiosMethod.post(url, data);
  return response?.data || response;
};

export const putRequest = async ({ url, data }) => {
  const response = await customAxiosMethod.put(url, data);
  return response?.data || response;
};

export const patchRequest = async ({ url, data }) => {
  const response = await customAxiosMethod.patch(url, data);
  return response?.data || response;
};

export const getRequest = async ({ url }, formatResponse) => {
  const response = await customAxiosMethod.get(url);
  if (formatResponse) {
    return formatResponse(response?.data);
  }
  return response?.data || response;
};

export const deleteRequest = async ({ url, data }) => {
  const response = await customAxiosMethod.delete(url, { data });
  return response?.data || response;
};
