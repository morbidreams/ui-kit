import { ISnackbar } from "./index";

const base: ISnackbar = {
  message: "This is a snackbar message",
  open: true,
  autoHideDuration: 3000,
};

export const mockSnackbarProps = {
  base,
};
