import { AsYouType, CountryCode, isValidPhoneNumber } from 'libphonenumber-js';
import React, { useEffect, useState } from 'react';
import Input, { IInput } from '../Input';

export interface IPhoneInput extends Omit<IInput, 'type'> {
  countryCode?: CountryCode;
  onValidation?: (isValid: boolean) => void;
}

const normalizePhoneNumber = (value: string, countryCode: CountryCode) => {
  if (!value) return value;

  const asYouType = new AsYouType(countryCode);
  return asYouType.input(value);
};

const PhoneInput: React.FC<IPhoneInput> = (props) => {
  const {
    value: propValue,
    onChange,
    placeholder,
    countryCode = 'CA' as CountryCode,
    maxLength = 20,
    onValidation = () => {},
    ...restProps
  } = props;

  const [value, setValue] = useState(propValue ?? '');

  useEffect(() => {
    const isValid = isValidPhoneNumber(value, countryCode);
    onValidation(isValid);
  }, [value, countryCode, onValidation]);

  useEffect(() => {
    setValue(propValue ? normalizePhoneNumber(propValue, countryCode) : '');
  }, [propValue, countryCode]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/\D/g, '');
    const lastValueChar = value[value.length - 1];

    // Check if the last character of the previous value is a non-decimal so i don't format the number
    const isLastCharNonDecimal = /\D$/.test(lastValueChar);

    if (e.target.value.length < value.length && isLastCharNonDecimal) {
      setValue(inputValue);
    } else {
      const formattedValue = normalizePhoneNumber(inputValue, countryCode);
      setValue(formattedValue);
    }

    if (onChange) {
      // Create a synthetic event to pass the formatted value to the onChange handler
      const syntheticEvent = {
        ...e,
        target: {
          ...e.target,
          value: inputValue, // Pass the raw inputValue to the onChange handler
        },
      };
      onChange(syntheticEvent as React.ChangeEvent<HTMLInputElement>);
    }
  };

  return (
    <Input
      {...restProps}
      type="tel"
      value={value}
      onChange={handleChange}
      maxLength={maxLength}
      placeholder={placeholder ?? '(555) 555-5555'}
      inputMode="numeric"
    />
  );
};

export default PhoneInput;
