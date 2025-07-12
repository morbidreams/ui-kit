import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import Animations from '../../app/theme/Animations';
import Breakpoints from '../../app/theme/Breakpoints';

const Content = styled.div<{ $isVisible: boolean; $height: number }>`
  @media screen and (max-width: ${Breakpoints['mobile-end']}) {
    height: ${({ $height }) => ($height ? `${$height}px` : '0')};
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    overflow: hidden;
    transition:
      height 0.3s ease,
      opacity 0.3s ease,
      transform 0.3s ease;

    ${({ $isVisible }) =>
      !$isVisible &&
      css`
        animation: ${Animations.slideUp} 0.3s forwards;
      `}
  }
`;

export interface ICollapsible {
  isVisible: boolean;
  children: React.ReactNode;
}

const Collapsible: React.FC<ICollapsible> = ({ isVisible, children }) => {
  const [contentHeight, setContentHeight] = useState<number>(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isVisible ? contentRef.current.scrollHeight : 0);
    }
  }, [isVisible]);

  return (
    <Content ref={contentRef} $isVisible={isVisible} $height={contentHeight}>
      {children}
    </Content>
  );
};
export default Collapsible;
