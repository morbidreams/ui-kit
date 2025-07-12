import React from 'react';
import styled from 'styled-components';
import Colors from '../../app/theme/Colors';
import { ChevronLeftIcon, ChevronRightIcon } from '../Icons';
import Row from '../Row';

export interface ISliderHeader {
  currentIndex: number;
  totalSlides: number;
  slideSeparator: 'sur' | 'of';
  onPrevSlide: () => void;
  onNextSlide: () => void;
  disablePrev: boolean;
  disableNext: boolean;
}

const StyledButton = styled.button`
  border-radius: 999px;
  background: white;
  border: none;
  width: 44px;
  height: 44px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.3s ease;
  cursor: pointer;
  &:hover {
    background: ${Colors['neutral-300']};
    svg path {
      stroke: ${Colors['neutral-800']};
    }
  }
  &:active {
    background: ${Colors['neutral-400']};
    svg path {
      stroke: ${Colors['neutral-800']};
    }
  }
  &:disabled {
    cursor: not-allowed;
    background: ${Colors['neutral-100']};
    svg path {
      stroke: ${Colors['neutral-400']};
    }
  }
`;

const StepNumber = styled.div`
  background: white;
  border-radius: 8px;
  width: 64px;
  height: 28px;
  box-sizing: border-box;
  padding: 4px 8px;
  font-size: 14px;
  font-weight: 600;
  color: ${Colors['neutral-700']};
  display: flex;
  justify-content: center;
`;

const HeaderWrapper = styled(Row)`
  justify-content: space-between;
  padding-bottom: 16px;
`;

const SliderHeader: React.FC<ISliderHeader> = ({
  currentIndex,
  totalSlides,
  slideSeparator,
  onPrevSlide,
  onNextSlide,
  disablePrev,
  disableNext,
}) => (
  <HeaderWrapper>
    <StepNumber>
      {currentIndex + 1} {slideSeparator} {totalSlides}
    </StepNumber>
    <Row columnSpacing="8px">
      <StyledButton onClick={onPrevSlide} disabled={disablePrev}>
        <ChevronLeftIcon />
      </StyledButton>
      <StyledButton onClick={onNextSlide} disabled={disableNext}>
        <ChevronRightIcon />
      </StyledButton>
    </Row>
  </HeaderWrapper>
);

export default SliderHeader;
