import { IVerificationInputProps } from "./index";

const base: IVerificationInputProps = {
  length: 6,
  placeholder: "",
  autoFocus: false,
  passwordMode: false,
  inputProps: {},
  containerProps: {},
  disabled: false,
  onChange: (value: string) => console.log("Changed:", value),
  onFocus: () => console.log("Focused"),
  onBlur: () => console.log("Blurred"),
  onComplete: (value: string) => console.log("Completed:", value),
};

const filled: IVerificationInputProps = {
  ...base,
  value: "123456",
};

const passwordMode: IVerificationInputProps = {
  ...base,
  value: "123456",
  passwordMode: true,
};

const errorState: IVerificationInputProps = {
  ...base,
  error: true,
  value: "123456",
  errorMessage: "Incorrect verification code. Please try again.",
};

export const mockVerificationInputProps = {
  base,
  filled,
  passwordMode,
  errorState,
};
