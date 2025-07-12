import React from 'react';
import styled from 'styled-components';
import Colors from '../../app/theme/Colors';

interface TableOfContentsElementProps {
  item: HTMLElement;
  index: number;
  onItemClick: (event: React.SyntheticEvent, index: number, item: HTMLElement) => void;
}

const HeadlineWrapper = styled.div`
  margin-top: 16px;
`;

const StyledLink = styled.a`
  cursor: pointer;
  font-weight: 600;
  text-decoration: none;
  font-size: 14px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  color: ${Colors['neutral-900']};

  &:hover,
  &:focus {
    color: ${Colors['primary-700']};
  }
`;

const TableOfContentsElement: React.FC<TableOfContentsElementProps> = ({ item, index, onItemClick = () => {} }) => {
  const handleClick = (event: React.SyntheticEvent) => {
    event.preventDefault();
    onItemClick(event, index, item);
  };

  return (
    <HeadlineWrapper>
      <StyledLink onClick={handleClick}>{item.innerText}</StyledLink>
    </HeadlineWrapper>
  );
};

export default TableOfContentsElement;
