import React, { CSSProperties } from 'react';
import styled, { css } from 'styled-components';

import Colors from '../../app/theme/Colors';
import { colors } from '../../types';

export interface IBadge {
  color?: colors;
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  style?: CSSProperties;
}

const getColor = (color: colors) => {
  return css`
    color: ${Colors[`${color}-700`]};
    background-color: ${Colors[`${color}-${color === 'neutral' ? '100' : '50'}`]};
  `;
};

const StyledBadge = styled.div<{ $color?: colors; onClick?: () => void }>`
  display: inline-flex;
  font-weight: 500;
  border-radius: 16px;
  font-size: 12px;
  padding: 2px 8px 2px 8px;
  ${(props) => getColor(props.$color ?? 'primary')}
`;

/**
 *
 * @param {colors} props.color Color theme of the badge
 * @returns {JSX}
 */
const Badge: React.FC<IBadge> = (props) => {
  return (
    <StyledBadge $color={props.color} onClick={props.onClick} className={props.className} style={props.style}>
      {props.children}
    </StyledBadge>
  );
};

export default Badge;
