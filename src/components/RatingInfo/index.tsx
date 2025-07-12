import React from 'react';
import styled from 'styled-components';
import Colors from '../../app/theme/Colors';
import Spacing from '../../app/theme/Spacing';
import { StarIcon } from '../Icons';

const StyledRatingAndReviewContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${Spacing['md']};
  color: ${Colors['neutral-600']};

  svg {
    color: ${Colors['warning-400']};
  }
`;

const StyledRatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${Spacing['sm']};
  color: ${Colors['neutral-600']};
`;

export interface IRatingInfo {
  ratingLabel: string;
  reviewLabel: string;
}

const RatingInfo: React.FC<IRatingInfo> = ({ ratingLabel, reviewLabel }) => {
  return (
    <StyledRatingAndReviewContainer>
      <StyledRatingContainer>
        <span style={{ fontWeight: 600 }}>{ratingLabel}</span>
        <StarIcon />
      </StyledRatingContainer>
      <span style={{ color: Colors['neutral-300'] }}>|</span>
      <span>{reviewLabel}</span>
    </StyledRatingAndReviewContainer>
  );
};

export default RatingInfo;
