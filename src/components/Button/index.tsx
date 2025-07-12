import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import React, { CSSProperties } from 'react';
import styled, { css } from 'styled-components';

import Colors from '../../app/theme/Colors';
import { colors, fontWeights, sizes } from '../../types';

export interface IButton {
  size?: sizes;
  color?: colors;
  children?: React.ReactNode;
  borderRadius?: string;
  fontWeight?: fontWeights;
  outline?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  fullwidthMobile?: boolean;
  style?: CSSProperties;
  loading?: boolean;
}

const getColor = (color: colors, outline: boolean) => {
  if (!outline) {
    if (color != 'primary') {
      return css`
        &:disabled {
          background-color: ${Colors[`neutral-100`]};
          border: 1px solid ${Colors[`neutral-200`]};
          color: ${Colors['neutral-400']};
        }
        &:hover:enabled {
          background-color: ${Colors[`${color}-500`]};
          border: 1px solid ${Colors[`${color}-500`]};
        }
        &:active:enabled {
          border: 1px solid ${Colors[`${color}-100`]};
        }
        border: 1px solid ${Colors[`${color}-400`]};
        background-color: ${Colors[`${color}-400`]};
        color: white;
      `;
    }
    return css`
      &:disabled {
        background-color: ${Colors[`neutral-100`]};
        border: 1px solid ${Colors[`neutral-200`]};
        color: ${Colors['neutral-400']};
      }
      &:hover:enabled {
        background-color: ${Colors['primary-800']};
        border: 1px solid ${Colors['primary-800']};
      }
      &:active:enabled {
        border: 1px solid ${Colors['primary-100']};
      }
      border: 1px solid ${Colors['primary-700']};
      background-color: ${Colors['primary-700']};
      color: white;
    `;
  } else {
    switch (color) {
      case 'neutral':
        return css`
          &:disabled {
            background-color: white;
            border: 1px solid ${Colors['neutral-200']};
            color: ${Colors['neutral-400']};
          }
          &:hover:enabled {
            background-color: ${Colors['neutral-50']};
            border: 1px solid ${Colors['neutral-400']};
            color: ${Colors['neutral-800']};
          }
          &:active:enabled {
            border: 1px solid ${Colors['neutral-300']};
          }
          border: 1px solid ${Colors['neutral-300']};
          background-color: white;
          color: ${Colors['neutral-700']};
        `;
      case 'primary':
        return css`
          &:disabled {
            background-color: white;
            border: 1px solid ${Colors['primary-200']};
            color: ${Colors['neutral-400']};
          }
          &:hover:enabled {
            background-color: ${Colors['primary-50']};
            border: 1px solid ${Colors['primary-700']};
            color: ${Colors['primary-800']};
          }
          &:active:enabled {
            border: 1px solid ${Colors['primary-100']};
          }
          border: 1px solid ${Colors['primary-300']};
          background-color: white;
          color: ${Colors['primary-700']};
        `;
      default:
        return css`
          &:disabled {
            background-color: white;
            border: 1px solid ${Colors[`${color}-200`]};
            color: ${Colors[`neutral-400`]};
          }
          &:hover:enabled {
            background-color: ${Colors[`${color}-25`]};
            border: 1px solid ${Colors[`${color}-600`]};
            color: ${Colors[`${color}-600`]};
          }
          &:active:enabled {
            border: 1px solid ${Colors[`${color}-100`]};
          }
          border: 1px solid ${Colors[`${color}-300`]};
          background-color: white;
          color: ${Colors[`${color}-400`]};
        `;
    }
  }
};

const getSizing = (size: sizes) => {
  switch (size) {
    case 'sm':
      return css`
        min-height: 22px;
        padding: 8px 12px 8px 12px;
        height: 36px;
        font-size: 14px;
      `;
    case 'md':
      return css`
        min-height: 30px;
        padding: 10px 14px 10px 14px;
        height: 40px;
        font-size: 16px;
      `;
    case 'xl':
      return css`
        min-height: 44px;
        padding: 12px 18px 12px 18px;
        height: 48px;
        font-size: 16px;
      `;
    case 'xxl':
      return css`
        min-height: 56px;
        padding: 16px 22px 16px 22px;
        height: 60px;
        font-size: 18px;
      `;
    case 'lg':
    default:
      return css`
        min-height: 36px;
        padding: 10px 16px 10px 16px;
        height: 44px;
        font-size: 16px;
      `;
  }
};

const getMobileStyles = (fullwidth: boolean) => {
  if (fullwidth) {
    return css`
      @media screen and (max-width: 767px) {
        width: 100%;
      }
    `;
  }
};

const StyledButton = styled.button<{
  $borderRadius?: string;
  $fontWeight?: fontWeights;
  $color?: colors;
  $size?: sizes;
  $fullwidthMobile?: boolean;
  $outline?: boolean;
  onClick?: () => void;
}>`
  position: relative;
  justify-content: center;
  display: flex;
  align-items: center;
  text-align-center;
  transition: all .25s ease;
  user-select: none;
  line-height: 1.5;
  box-shadow: none;
  &:hover:enabled{
    top: -1px;
  }
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  border-radius: ${(props) => props.$borderRadius ?? '8px'} !important;
  font-weight: ${(props) => props.$fontWeight ?? '600'};
  ${(props) => getColor(props.$color ?? 'primary', props.$outline ?? false)}
  ${(props) => getSizing(props.$size ?? 'md')}
  ${(props) => getMobileStyles(props.$fullwidthMobile ?? false)}
`;

/**
 *
 * @param {sizes} props.size The button size, this will modify values such as the overall padding and min-height
 * @param {colors} props.color The button color, this will modify the background color, text color, hover effects, etc.
 * @param {string} props.borderRadius Modifies the border radius of the button, provide values in the following formats: 12px, 25%, etc.
 * @param {fontWeights} props.fontWeight Modifies the font weight of the text inside the button, values such as 400, 500, 600
 * @param {boolean} props.outline Changes the styling of the button to be outlined or filled
 * @param {boolean} props.fullwidthMobile On mobile the button will take the full width of the screen
 * @returns {JSX}
 */
const Button = React.forwardRef<HTMLButtonElement, IButton>((props, ref) => {
  return (
    <StyledButton
      $size={props.size}
      $color={props.color}
      $borderRadius={props.borderRadius}
      $fontWeight={props.fontWeight}
      $outline={props.outline}
      $fullwidthMobile={props.fullwidthMobile}
      onClick={props.onClick}
      disabled={props.disabled || props.loading}
      className={props.className}
      style={props.style}
      ref={ref}
    >
      {props.children}
      {props.loading && (
        <Box sx={{ display: 'flex', marginLeft: '6px' }}>
          <CircularProgress size={16.67} color="inherit" />
        </Box>
      )}
    </StyledButton>
  );
});

Button.displayName = 'Button';

export default Button;
