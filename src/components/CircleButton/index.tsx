import React, { CSSProperties } from 'react';
import styled, { css } from 'styled-components';

import Colors from '../../app/theme/Colors';
import { colors } from '../../types';

export interface ICircleButton {
  color?: colors;
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  style?: CSSProperties;
  size?: string;
  disabled?: boolean;
}

const getColor = (color: colors) => {
  return css`
    color: ${Colors[`${color}-500`]};
    border: 1px solid ${Colors[`${color}-200`]};
  `;
};

const StyledCircleButton = styled.button<{ $color?: colors; $size?: string; onClick?: () => void }>`
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  box-sizing: border-box;
  border-radius: 50%;
  width: ${(props) => props.$size ?? '48px'};
  height: ${(props) => props.$size ?? '48px'};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  background-color: white;
  ${(props) => getColor(props.$color ?? 'primary')}
  &:disabled {
    background-color: white;
    border: 1px solid ${(props) => Colors[`${props.$color ?? 'primary'}-100`]};
    color: ${(props) => Colors[`${props.$color ?? 'primary'}-400`]};
  }
  &:hover:enabled {
    background-color: ${(props) => Colors[`${props.$color ?? 'primary'}-50`]};
  }
  &:active:enabled {
    border: 1px solid ${(props) => Colors[`${props.$color ?? 'primary'}-100`]};
  }
`;

/**
 *
 * @param {colors} props.color Color theme of the CircleButton
 * @param {string} props.size Size of the button
 * @returns {JSX}
 */
const CircleButton: React.FC<ICircleButton> = (props) => {
  return (
    <StyledCircleButton
      $color={props.color}
      $size={props.size}
      onClick={props.onClick}
      className={props.className}
      style={props.style}
      disabled={props.disabled}
    >
      {props.children}
    </StyledCircleButton>
  );
};

export default CircleButton;
