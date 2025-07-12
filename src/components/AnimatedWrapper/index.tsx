import React from 'react';
import styled, { css } from 'styled-components';
import Animations from '../../app/theme/Animations';
import { Animation } from '../../types';

const Wrapper = styled.div<{
  $animation: Animation;
}>`
  width: 100%;
  ${({ $animation }) =>
    $animation &&
    css`
      animation:
        ${Animations[$animation]} 0.4s ease-in-out forwards,
        ${Animations.fade} 0.3s ease-in;
    `}
`;

export interface IAnimatedWrapper {
  animation: Animation;
  children?: React.ReactNode;
}

const AnimatedWrapper: React.FC<IAnimatedWrapper> = ({ animation, children }) => {
  return <Wrapper $animation={animation}>{children}</Wrapper>;
};

export default AnimatedWrapper;
