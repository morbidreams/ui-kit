import React from 'react';
import styled, { css } from 'styled-components';
import Colors from '../../app/theme/Colors';

/**
 * Props for the SearchResult component.
 * @param {string} [className] - Additional class names to apply to the SearchResult container.
 * @param {React.CSSProperties} [style] - Inline styles to apply to the SearchResult container.
 * @param {string} result - The text content of the search result.
 * @param {string} [resultDestination] - The destination URL of the search result. If not provided, clicking on the result will trigger a console log.
 * @param {boolean} [noDestination] - Indicates whether the search result has no destination link. If true, the result will not be clickable.
 * @param {React.ReactNode} [children] - Optional children to render inside the search result container.
 */
export interface ISearchResult {
  className?: string;
  style?: React.CSSProperties;
  result: string;
  resultDestination?: string;
  noDestination?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}

const sharedStyles = css`
  padding: 10px 14px 10px 14px;
  width: 100%;
  color: ${Colors['neutral-900']};
  line-height: 24px;
`;

const StyledDestination = styled.div`
  ${sharedStyles}
  font-weight: 600;
  transition: color 0.3s ease-in-out;
  &:hover {
    background-color: ${Colors['neutral-50']};
    color: ${Colors['primary-800']};
  }
`;

const StyledNoDestination = styled.div`
  ${sharedStyles}
  font-weight: 600;
`;

const SearchResult: React.FC<ISearchResult> = ({
  className,
  style,
  result,
  resultDestination,
  noDestination,
  children,
  onClick,
}) => {
  if (noDestination) {
    return (
      <StyledNoDestination className={className} style={style}>
        {result}
      </StyledNoDestination>
    );
  } else if (children) {
    return (
      <StyledNoDestination className={className} style={style}>
        {children}
      </StyledNoDestination>
    );
  }

  return (
    <a href={resultDestination ?? '#'} style={{ textDecoration: 'none' }} onClick={onClick}>
      <StyledDestination className={className} style={style}>
        {result}
      </StyledDestination>
    </a>
  );
};

export default SearchResult;
