const date = new Date();
const day = ("0" + date.getDate()).slice(-2);
const month = ("0" + (date.getMonth() + 1)).slice(-2);
const year = date.getFullYear();

export const maxDateToTime = `${year}-${month}-${day}T00:00:00`;
