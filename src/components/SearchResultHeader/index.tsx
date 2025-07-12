import styled from 'styled-components';
import React from 'react';
import Colors from '../../app/theme/Colors';

/**
 * Props for the SearchResultHeader component.
 * @param {string} [className] - Additional class names to apply to the header.
 * @param {React.CSSProperties} [style] - Inline styles to apply to the header.
 * @param {string} [headerText] - The text content of the header.
 * @param {boolean} [disableDivider] - Removes header divider.
 */
export interface ISearchResultHeader {
  className?: string;
  style?: React.CSSProperties;
  headerText: string;
  disableDivider?: boolean;
}

const StyledSearchResultHeader = styled.div`
  padding: 10px 14px 10px 14px;
  width: 100%;
  color: ${Colors['neutral-600']};
  font-weight: 500;
  line-height: 24px;
`;

const SearchResultHeader: React.FC<ISearchResultHeader> = ({ className, style, headerText, disableDivider }) => {
  return (
    <>
      <StyledSearchResultHeader className={className} style={style}>
        <span>{headerText}</span>
      </StyledSearchResultHeader>
      {!disableDivider && (
        <hr style={{ width: '100%', margin: 0, borderTop: 0, borderBottom: `1px solid ${Colors['neutral-200']}` }} />
      )}
    </>
  );
};

export default SearchResultHeader;
