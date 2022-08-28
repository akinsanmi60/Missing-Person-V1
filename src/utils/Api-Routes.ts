// Student Routes
export const STUDENT_REGISTER = "http://localhost:5500/auth/student/register";
export const STUDENT_LOGIN = "http://localhost:5500/auth/student/login";

// Business Routes
export const BUSINESS_REGISTER = "http://localhost:5500/auth/business/register";
export const BUSINESS_LOGIN = "http://localhost:5500/auth/business/login";

// Authentications
export const VERIFY_EMAIL = "http://localhost:5500/user/verify";
export const FORGET_PASSWORD = "http://localhost:5500/user/forgotpassword";
export const RESET_PASSWORD = "http://localhost:5500/user/resetpassword";
export const CHANGE_PASSWORD = "http://localhost:5500/user/changepassword";
export const UPDATE_USER = "http://localhost:5500/user/updateuser";

// Third Party API
export const CoinList = (currency: string) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=200&page=1&sparkline=false`;
export const SingleCoin = (id: string | undefined) =>
  `https://api.coingecko.com/api/v3/coins/${id}`;
export const HistoricalChart = (id: string, currency: string, days = 365) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;
export const TrendingCoins = (currency: string) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;
