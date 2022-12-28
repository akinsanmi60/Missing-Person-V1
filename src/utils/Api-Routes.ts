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
export const NOTIFY_ROUTE = "http://localhost:3500/mailcontacts/notify_mail";

// OTP Routes
export const OTP_ROUTE = "http://localhost:3500/user/otp_number";

// RESEND-OTP Routes
export const RESEND_OTP_ROUTE = "http://localhost:3500/user/resend_otp_number";

// ADD  TIP_ROUTE
export const TIP_ROUTE = "http://localhost:3500/tip/tip_submission";

// ADD  MISSINGPERSON_ROUTE
export const ADDMISSINGPERSON_ROUTE =
  "http://localhost:3500/missing/add_missing_person";

// ADD  FOUNDPERSON_ROUTE
export const ADDFOUNDPERSON_ROUTE =
  "http://localhost:3500/found/add_found_person";

// ADD  FOUNDPERSON_ROUTE
export const ADDDEADPERSON_ROUTE = "http://localhost:3500/dead/add_dead_person";

export const SinglePerson = (personId: number | undefined) =>
  `https://dummyjson.com/users/${personId}`;

export const VideoLink =
  "https://vod-progressive.akamaized.net/exp=1672180380~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F123%2F26%2F650618257%2F2985455816.mp4~hmac=aa0ef73ccce7857a52653eafacd87ea2793b23b3579cb42f7b3ae035e4cb2f5c/vimeo-prod-skyfire-std-us/01/123/26/650618257/2985455816.mp4?download=1&filename=pexels-ron-lach-10367208.mp4";
