import React, { CSSProperties } from 'react';
import styled, { css } from 'styled-components';

import Colors from '../../app/theme/Colors';
import { colors } from '../../types';

export interface ICircleBadge {
  color?: colors;
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  style?: CSSProperties;
  dark?: boolean;
  size?: string;
}

const StyledContainer = styled.div<{ $color?: colors; $dark?: boolean; $size?: string; onClick?: () => void }>`
  box-sizing: border-box;
  width: ${(props) => props.$size ?? '48px'};
  height: ${(props) => props.$size ?? '48px'};
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 50%;
  ${(props) =>
    props.$dark
      ? css`
          background-color: ${Colors[`${props.$color ?? 'primary'}-700`]};
        `
      : css`
          background-color: ${Colors[`${props.$color ?? 'primary'}-50`]};
        `}
`;

const StyledInner = styled.div<{ $color?: colors; $dark?: boolean }>`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 50%;
  ${(props) =>
    props.$dark
      ? css`
          background-color: ${Colors[`${props.$color ?? 'primary'}-600`]};
          color: white;
        `
      : css`
          background-color: ${Colors[`${props.$color ?? 'primary'}-100`]};
          color: ${Colors[`${props.$color ?? 'primary'}-600`]};
        `}
`;

/**
 *
 * @param {colors} props.color Color theme of the badge
 * @returns {JSX}
 */
const CircleBadge: React.FC<ICircleBadge> = (props) => {
  return (
    <StyledContainer
      $color={props.color}
      onClick={props.onClick}
      className={props.className}
      style={props.style}
      $dark={props.dark}
      $size={props.size}
    >
      <StyledInner $color={props.color} $dark={props.dark}>
        {props.children}
      </StyledInner>
    </StyledContainer>
  );
};

export default CircleBadge;
