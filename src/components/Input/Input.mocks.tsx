import { IInput } from './index';

const baseStyles: IInput = {
  placeholder: 'Example',
  type: 'text',
};

const errorStyles: IInput = {
  placeholder: 'Enter text',
  type: 'text',
  error: true,
  errorMessage: 'This field is required',
};

export const mockInputProps = {
  baseStyles,
  errorStyles,
};
