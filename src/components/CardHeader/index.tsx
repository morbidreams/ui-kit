import React, { CSSProperties, ReactNode } from 'react';
import styled from 'styled-components';

import Colors from '../../app/theme/Colors';

export interface ICardHeader {
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
  style?: CSSProperties;
}

const StyledCardHeader = styled.div`
  box-sizing: border-box;
  width: 100%;
  border-radius: 12px 12px 0 0;
  background-color: ${Colors['neutral-50']};
  border-bottom: 1px solid ${Colors['neutral-200']};
  padding: 20px 24px 20px 24px;
`;

const CardHeader: React.FC<ICardHeader> = (props) => {
  return <StyledCardHeader {...props}>{props.children}</StyledCardHeader>;
};

export default CardHeader;
