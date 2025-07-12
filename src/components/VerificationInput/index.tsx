import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Breakpoints from "../../app/theme/Breakpoints";
import Colors from "../../app/theme/Colors";
import VerificationInputBox from "../VerificationInputBox/index";

export interface IVerificationInputProps {
  value?: string;
  length: number;
  placeholder?: string;
  autoFocus?: boolean;
  passwordMode?: boolean;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  color?: string;
  borderColor?: string;
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onComplete?: (value: string) => void;
}

const Container = styled.div`
  display: flex;
  justify-content: left;
  gap: 12px;

  @media (max-width: ${Breakpoints["mobile-end"]}) {
    gap: 8px;
  }
`;

const HiddenInput = styled.input`
  position: absolute;
  opacity: 0;
  pointer-events: none;
`;

const ErrorMessage = styled.div`
  color: ${Colors["error-600"]};
  margin-top: 6px;
  font-size: 14px;
  line-height: 20px;
  text-align: left;
  width: 100%;
`;

const VerificationInput: React.FC<IVerificationInputProps> = ({
  value,
  length,
  placeholder = "",
  autoFocus,
  passwordMode = false,
  inputProps = {},
  containerProps = {},
  disabled,
  error,
  errorMessage,
  color,
  borderColor,
  onChange,
  onFocus,
  onBlur,
  onComplete,
}) => {
  const [localValue, setLocalValue] = useState<string>("");
  const [isActive, setActive] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  useEffect(() => {
    if (disabled || error) {
      setActive(false);
    }
  }, [disabled, error]);

  const handleVerificationInputBoxClicked = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)
    ) {
      event.preventDefault();
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newInputVal = event.target.value.replace(/\D/g, ""); // this to accept only numbers

    if (newInputVal.length <= length) {
      if (onChange) {
        onChange(newInputVal);
      }
      setLocalValue(newInputVal);

      if (newInputVal.length === length) {
        onComplete?.(newInputVal);
      }
    }
  };

  const getValue = () => {
    return value ?? localValue;
  };

  const isCharacterSelected = (i: number) => {
    const value = getValue();
    return (
      (value.length === i || (value.length === i + 1 && length === i + 1)) &&
      isActive
    );
  };

  const isCharacterFilled = (i: number) => getValue().length > i;

  const { className: inputClassName, ...restInputProps } = inputProps;
  const { className: containerClassName, ...restContainerProps } =
    containerProps;

  return (
    <div style={{ width: "min-content" }}>
      <Container
        className={containerClassName}
        onClick={() => inputRef.current?.focus()}
        {...restContainerProps}
      >
        <HiddenInput
          aria-label="verification input"
          spellCheck={false}
          value={getValue()}
          disabled={disabled}
          onChange={handleInputChange}
          autoComplete="one-time-code"
          ref={inputRef}
          className={inputClassName}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            setActive(true);
            onFocus?.();
          }}
          onBlur={() => {
            setActive(false);
            onBlur?.();
          }}
          onSelect={(e) => {
            const target = e.target as HTMLInputElement;
            const val = target.value;
            target.setSelectionRange(val.length, val.length);
          }}
          type="text"
          inputMode="numeric"
          {...restInputProps}
        />
        {[...Array(length)].map((_, i) => (
          <VerificationInputBox
            key={i}
            $selected={isCharacterSelected(i)}
            $disabled={disabled}
            $color={color}
            $borderColor={borderColor}
            $error={error}
            $filled={isCharacterFilled(i)}
            $isPlaceholder={!getValue()[i]}
            onClick={handleVerificationInputBoxClicked}
          >
            {passwordMode && getValue()[i] ? "*" : getValue()[i] || placeholder}
          </VerificationInputBox>
        ))}
      </Container>
      {error && errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
};

export default VerificationInput;
