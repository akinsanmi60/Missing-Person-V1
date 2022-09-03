import * as yup from "yup";

export const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    age: yup.string().required(),
    gender: yup.string().required(),
    state: yup.string(),
    lga: yup.string(),
    hair: yup.string(),
    complexion: yup.string(),
    build: yup.string(),
    foundAd: yup.string(),
    missingAd: yup.string(),
  })
  .required();

export type FormAddProp = {
  firstName: string;
  lastName: string;
  middleName: string;
  age: string;
  gender: string;
  complexion: string;
  hair: string;
  build: string;
  foundAd: string;
  missingAd: string;
};
