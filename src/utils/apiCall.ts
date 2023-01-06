import customAxiosMethod from "./customAxiosMethod";

type Prop = {
  url: string;
  data?: {
    [index: string]: string | number | undefined | string[];
  };
};

export const postRequest = async ({ url, data }: Prop) => {
  const response = await customAxiosMethod.post(url, data);
  return response?.data || response;
};

export const putRequest = async ({ url, data }: Prop) => {
  const response = await customAxiosMethod.put(url, data);
  return response?.data || response;
};

export const patchRequest = async ({ url, data }: Prop) => {
  const response = await customAxiosMethod.patch(url, data);
  return response?.data || response;
};

export const getRequest = async ({ url }: Prop) => {
  const response = await customAxiosMethod.get(url);
  return response?.data || response;
};

export const deleteRequest = async ({ url, data }: Prop) => {
  const response = await customAxiosMethod.delete(url, { data });
  return response?.data || response;
};
