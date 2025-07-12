import React, { CSSProperties, ReactNode } from 'react';
import styled, { css } from 'styled-components';

import Colors from '../../app/theme/Colors';

export interface ICard {
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
  style?: CSSProperties;
  hover?: boolean;
}

const StyledCard = styled.div<{ $hover?: boolean }>`
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  width: 100%;
  position: relative;
  border: 1px solid ${Colors['neutral-200']};
  background-color: white;
  border-radius: 12px;
  box-shadow:
    0px 4px 6px -2px rgba(16, 24, 40, 0.03),
    0px 12px 16px -4px rgba(16, 24, 40, 0.08);
  top: 0;
  ${(props) =>
    props.$hover
      ? css`
          transition: top 0.25s ease 0s;
          &:hover {
            top: -5px;
          }
        `
      : ''}
`;

/**
 *
 * @param {boolean} props.hover Adds hover effect to card
 * @returns {JSX}
 */
const Card: React.FC<ICard> = (props) => {
  return (
    <StyledCard $hover={props.hover ?? false} onClick={props.onClick} style={props.style} className={props.className}>
      <div style={{ width: '100%' }}>{props.children}</div>
    </StyledCard>
  );
};

export default Card;
