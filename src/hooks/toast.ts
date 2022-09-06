import { Theme, ToastPosition } from "react-toastify";

type ToastProp = {
  position: ToastPosition | undefined;
  autoClose: number;
  pauseOnHover: boolean;
  draggable: boolean;
  theme: Theme | undefined;
};

const toastOptions: ToastProp = {
  position: "bottom-left",
  autoClose: 4000,
  pauseOnHover: false,
  draggable: true,
  theme: "dark",
};
export default toastOptions;
