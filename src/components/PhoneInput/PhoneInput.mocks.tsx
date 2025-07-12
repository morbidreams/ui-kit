import { IPhoneInput } from './index';

const baseStyles: IPhoneInput = {
  placeholder: '(555) 555-5555',
};

const errorStyles: IPhoneInput = {
  placeholder: '(555) 555-5555',
  error: true,
  errorMessage: 'This field is required',
};

export const mockPhoneInputProps = {
  baseStyles,
  errorStyles,
};
