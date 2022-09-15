// Student Routes
export const USER_REGISTER = "http://localhost:3500/auth/user/register";
export const USER_LOGIN = "http://localhost:3500/auth/user/login";

// Authentications
export const VERIFY_EMAIL = "http://localhost:3500/user/verify";
export const FORGET_PASSWORD = "http://localhost:3500/user/forgotpassword";
export const RESET_PASSWORD = "http://localhost:3500/user/resetpassword";
export const CHANGE_PASSWORD = "http://localhost:3500/user/changepassword";
export const UPDATE_USER = "http://localhost:3500/user/updateuser";

// Newsletter Subscription
export const NEWSLETTER = "http://localhost:3500/mailcontacts/subscribe_mail";
export const CONTACT_ROUTE = "http://localhost:3500/mailcontacts/contact_mail";

// OTP Routes
export const OTP_ROUTE = "http://localhost:3500/user/otp_number";

// RESEND-OTP Routes
export const RESEND_OTP_ROUTE = "http://localhost:3500/user/resend_otp_number";

export const SinglePerson = (personId: number | undefined) =>
  `https://dummyjson.com/users/${personId}`;
