import React, { CSSProperties, HTMLInputTypeAttribute, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Colors from '../../app/theme/Colors';
import { InputModeType } from '../../types';

export interface IInput {
  placeholder?: string;
  className?: string;
  style?: CSSProperties;
  type?: HTMLInputTypeAttribute;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  color?: string;
  borderColor?: string;
  value?: string;
  defaultValue?: string;
  maxLength?: number;
  inputMode?: InputModeType;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export const BaseInputStyles = css<{
  $error?: boolean;
  $color?: string;
  $borderColor?: string;
  $focused?: boolean;
  disabled?: boolean;
}>`
  box-sizing: border-box;
  border-radius: 8px;
  font-size: 16px;
  line-height: 22px;
  color: ${(props) => (props.disabled ? Colors['neutral-400'] : props.$color ?? Colors['neutral-900'])};
  border: 1px solid ${(props) => (props.$error ? Colors['error-600'] : props.$borderColor ?? Colors['neutral-300'])};
  padding: 10px 14px 10px 14px;
  width: 100%;
  background-color: ${(props) => (props.disabled ? Colors['neutral-100'] : '#fff')};
  outline: none;
  transition:
    box-shadow 0.25s,
    border-color 0.25s;
  box-shadow: ${(props) => (props.$focused ? `0 0 0 2px ${Colors['primary-700']}` : 'none')};

  &:disabled {
    cursor: not-allowed;
  }
`;

const StyledInput = styled.input<{
  $error?: boolean;
  $color?: string;
  $borderColor?: string;
  $focused?: boolean;
  disabled?: boolean;
}>`
  ${BaseInputStyles}
`;

const ErrorMessage = styled.div`
  color: ${Colors['error-600']};
  margin-top: 6px;
  font-size: 14px;
  line-height: 20px;
  text-align: left;
  width: 100%;
`;

const InputContainer = styled.div`
  text-align: left;
`;

const Input: React.FC<IInput> = (props) => {
  const {
    error,
    errorMessage,
    color,
    borderColor,
    disabled,
    value: propValue,
    defaultValue,
    type,
    onChange,
    onBlur,
    onFocus,
    maxLength,
    inputMode,
    ...restProps
  } = props;

  const [value, setValue] = useState(propValue ?? defaultValue ?? '');
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (propValue !== undefined) {
      setValue(propValue);
    }
  }, [propValue]);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true);
    onFocus && onFocus(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(false);
    onBlur && onBlur(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (propValue === undefined) {
      setValue(e.target.value);
    }
    onChange && onChange(e);
  };

  return (
    <InputContainer>
      <StyledInput
        {...restProps}
        value={value}
        type={type}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        placeholder={props.placeholder}
        $error={error}
        $color={color}
        $borderColor={borderColor}
        $focused={focused}
        disabled={disabled}
        maxLength={maxLength}
        inputMode={inputMode}
      />
      {error && errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputContainer>
  );
};

export default Input;
