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

// skin-type sorting
export const skinColor = ["Dark", "Fair", "Very dark", "Very fair"].sort(
  (a, b) => (a > b ? 1 : -1),
);

// hair-type sorting
export const hairType = [
  "Side burns",
  "Normal grey",
  "Normal black",
  "Bald full",
  "Hair curly/wavy",
  "Hair bleached/dyed",
  "Bald partial",
  "Long hair",
  "Straight hair",
  "White hair",
  "Normal black/grey",
  "Wig use",
  "Short hair",
].sort((a, b) => (a > b ? 1 : -1));

// body-type sorting
export const bodyType = [
  "Normal (muscular)",
  "Stocky",
  "Thin (lanky)",
  "Handicapped",
  "Fat (stout/strong)",
].sort((a, b) => (a > b ? 1 : -1));
