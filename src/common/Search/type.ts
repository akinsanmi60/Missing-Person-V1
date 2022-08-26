/* eslint-disable @typescript-eslint/no-explicit-any */
import * as yup from "yup";

export type FormDataProp = {
  firstName: string;
  lastName: string;
  age: string;
  gender: string;
  state: string;
  lga: string;
};

export type SearchPprop = {
  submit: (data: any) => Promise<void>;
};

export const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    age: yup.string().required(),
    gender: yup.string().required(),
    state: yup.string().required(),
    lga: yup.string().required(),
  })
  .required();
