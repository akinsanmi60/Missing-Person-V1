// skin-type sorting
export const gender = ["Female", "Male"];
// skin-type sorting
export const empoly = [
  "Student",
  "Artisan",
  "Trader",
  "Teacher",
  "Money Agent",
].sort((a, b) => (a > b ? 1 : -1));
export const foundInputValue = ["Found Dead Body", "Found Missing Person"];

export type TipProps = {
  lastName: string;
  firstName: string;
  address: string;
  state: string;
  employment: string;
  age: string;
  gender: string;
  lga: string;
  phoneNumber: string;
  email: string;
  tipDate: string;
  tipTime: string;
  tipType: string;
  tipContent: string;
  nearestPolice: string;
  policeAdd: string;
  policestate: string;
  policeLga: string;
  policeStation: string;
  tipComment: string;
};

export const availableNews = {
  news1: "You must be above 15years of age before you can fill this form.",
  news2:
    "Your filled personal details wont be shared with anyone which in turn will lead to voilent act against you.",
  new3: `Before reporting any information, kindly get information of police station nearby you. So that the information you reported can be passed to the police station you filled out.`,
  new4: `Kindly avoid long tip details. Make it very concise and clear`,
};
