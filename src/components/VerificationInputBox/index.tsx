import React from 'react';
import styled from 'styled-components';
import Breakpoints from '../../app/theme/Breakpoints';
import Colors from '../../app/theme/Colors';

export interface VerificationInputBoxProps {
  $selected: boolean;
  $disabled?: boolean;
  $filled: boolean;
  $isPlaceholder: boolean;
  $error?: boolean;
  $color?: string;
  $borderColor?: string;
  onClick: () => void;
  children: React.ReactNode;
}

const StyledVerificationInputBox = styled.div<VerificationInputBoxProps>`
  width: 64px;
  height: 80px;
  font-size: 48px;
  line-height: 60px;
  text-align: center;
  font-weight: 500;
  padding: 8px;
  box-sizing: border-box;
  color: ${({ $disabled, $color, $isPlaceholder }) =>
    $disabled || $isPlaceholder ? Colors['neutral-300'] : $color ? $color : Colors['primary-700']};
  border-radius: 10px;
  background-color: ${({ $disabled }) => ($disabled ? Colors['neutral-50'] : 'white')};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  box-shadow: ${({ $selected, $filled, $disabled, $error, $borderColor }) =>
    `inset 0 0 0 ${($selected || $filled || $error) && !$disabled ? '2px' : '1px'} ${
      $error
        ? Colors['error-300']
        : $disabled
          ? Colors['neutral-300']
          : $selected || $filled
            ? $borderColor ?? Colors['primary-700']
            : Colors['neutral-300']
    }`};
  &:focus {
    outline: none;
  }

  @media (max-width: ${Breakpoints['mobile-end']}) {
    width: 48px;
    height: 64px;
    font-size: 36px;
    line-height: 40px;
  }
`;

const VerificationInputBox: React.FC<VerificationInputBoxProps> = ({
  $selected,
  $disabled,
  $filled,
  $isPlaceholder,
  $error,
  $color,
  $borderColor,
  onClick,
  children,
}) => {
  return (
    <StyledVerificationInputBox
      $selected={$selected}
      $disabled={$disabled}
      $filled={$filled}
      $isPlaceholder={$isPlaceholder}
      $error={$error}
      $color={$color}
      $borderColor={$borderColor}
      onClick={onClick}
    >
      {children}
    </StyledVerificationInputBox>
  );
};

export default VerificationInputBox;
