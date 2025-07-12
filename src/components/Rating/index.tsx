import StarIcon from '@mui/icons-material/Star';
import { Rating as MuiRating, RatingProps as MuiRatingProps } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import Colors from '../../app/theme/Colors';

export interface IRating extends MuiRatingProps {
  color?: string;
  size?: 'small' | 'medium' | 'large';
  emptyIconColor?: string;
  defaultValue?: number;
  value?: number;
  readOnly?: boolean;
}

const StyledRating = styled(MuiRating)<{
  $color?: string;
  $emptyIconColor?: string;
}>`
  & .MuiRating-iconFilled {
    color: ${(props) => props.$color};
  }
  & .MuiRating-iconEmpty {
    color: ${(props) => props.$emptyIconColor};
  }
  & .MuiRating-iconFraction {
    color: ${(props) => props.$color};
  }
`;

const getStarIconStyle = (size: 'small' | 'medium' | 'large') => {
  switch (size) {
    case 'small':
      return { fontSize: '20px' };
    case 'large':
      return { fontSize: '40px' };
    case 'medium':
    default:
      return { fontSize: '30px' };
  }
};

/**
 * @param {string} props.color - The color of the filled stars.
 * @param {string} props.emptyIconColor - Custom color for empty stars.
 * @param {'small' | 'medium' | 'large'} props.size - The size of the rating component.
 * @param {number} props.defaultValue - The default value of the rating.
 * @param {number} props.value - The controlled value of the rating.
 * @param {boolean} props.readOnly - If true, the rating will be read-only.
 * @returns {JSX}
 */
const Rating: React.FC<IRating> = ({
  color = Colors['warning-400'],
  size = 'medium',
  emptyIconColor = Colors['neutral-100'],
  defaultValue,
  value,
  readOnly = false,
  ...props
}) => {
  const starStyle = getStarIconStyle(size);
  return (
    <StyledRating
      size={size}
      $color={color}
      $emptyIconColor={emptyIconColor}
      precision={0.1}
      icon={<StarIcon style={starStyle} />}
      emptyIcon={<StarIcon style={{ ...starStyle }} />}
      defaultValue={defaultValue}
      value={value}
      readOnly={readOnly}
      {...props}
    />
  );
};

export default Rating;
