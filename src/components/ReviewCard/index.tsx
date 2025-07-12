import { RatingProps as MuiRatingProps } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import Colors from '../../app/theme/Colors';
import useIsMobile from '../../hooks/useIsMobile';
import Card from '../Card';
import Col from '../Col';
import Rating from '../Rating';
import Row from '../Row';

export interface IReviewCard extends MuiRatingProps {
  rating?: number | string;
  content?: string;
}

const StyledCard = styled(Card)<{ $isMobile: boolean }>`
  border-radius: 16px;
  border: 2px solid ${Colors['primary-100']};
  min-height: 104px;
  max-width: 368px;
  min-width: ${(props) => (props.$isMobile ? '288px' : '368px')};
  box-shadow: none;
`;

const Container = styled(Row)`
  height: 100%;
`;

const RatingSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 140px;
  row-gap: 8px;
  background: ${Colors['primary-100']};
`;

const RatingValue = styled.div`
  color: ${Colors['primary-800']};
  font-size: 36px;
  font-weight: 600;
`;

const ContentSection = styled(Col)`
  padding: 10px 10px 10px 0;
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 24px;
  color: ${Colors['neutral-700']};
`;

/**
 * @param {number} props.rating - The default value of the rating.
 * @param {string} props.content - The content of the review card.
 *
 * @returns {JSX}
 */
const ReviewCard: React.FC<IReviewCard> = ({ content, rating }) => {
  const isMobile = useIsMobile() ?? false;
  const formattedRating = typeof rating === 'string' ? parseFloat(rating.replace(',', '.')) : rating;
  return (
    <StyledCard $isMobile={isMobile}>
      <Container>
        <RatingSection>
          <RatingValue>{rating}</RatingValue>
          <Rating defaultValue={formattedRating} value={formattedRating} size="small" readOnly />
        </RatingSection>
        <ContentSection>
          <div>{content}</div>
        </ContentSection>
      </Container>
    </StyledCard>
  );
};

export default ReviewCard;
