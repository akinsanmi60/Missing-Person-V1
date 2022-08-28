import CryptoJS from "crypto-js";

const decodedToken = token => {
  try {
    if (!token) return null;
    const bytes = CryptoJS.AES.decrypt(token, process.env.REACT_APP_TOKEN_KEY);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  } catch (error) {
    return null;
  }
};

export default decodedToken;
