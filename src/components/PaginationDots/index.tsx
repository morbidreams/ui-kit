import React from 'react';
import styled, { CSSProperties } from 'styled-components';

export interface IPaginationDots {
  className?: string;
  style?: CSSProperties;
  length: number;
  currentIndex: number;
}

const DotContainer = styled.div`
  background: rgba(0, 0, 0, 0.7);
  padding: 6px;
  border-radius: 999px;
  width: fit-content;
  display: flex;
  justify-content: center;
  gap: 4px;
`;

const Dot = styled.div<{ $isActive: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background-color: ${({ $isActive }) => ($isActive ? 'white' : 'rgba(249, 250, 251, 0.5)')};
  transition: background-color 0.3s ease;
`;

const PaginationDots: React.FC<IPaginationDots> = ({ className, length, currentIndex, style }) => {
  return (
    <DotContainer className={className} style={style}>
      {new Array(length).fill(null).map((_, index) => (
        <Dot key={`dot-${length}-${index}`} $isActive={index === currentIndex} />
      ))}
    </DotContainer>
  );
};

export default PaginationDots;
