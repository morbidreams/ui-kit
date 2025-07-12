import React from 'react';
import styled from 'styled-components';
import Breakpoints from '../../app/theme/Breakpoints';
import Colors from '../../app/theme/Colors';

/**
 * Props for the SearchResultFooter component.
 * @param {string} [className] - Additional class names to apply to the footer container.
 * @param {React.CSSProperties} [style] - Inline styles to apply to the footer container.
 * @param {string} [footerText] - The text content of the footer.
 * @param {string} [linkText] - The text content of the link.
 * @param {string} [linkDestination] - The URL or destination of the link.
 * @param {boolean} [noDivider] - Indicates whether to hide the divider line above the footer.
 */
export interface ISearchResultFooter {
  className?: string;
  style?: React.CSSProperties;
  footerText?: string;
  linkText?: string;
  linkDestination?: string;
  noDivider?: boolean;
}

const StyledSearchResultFooter = styled.div<{ noDivider?: boolean }>`
    padding: ${(props) => (props.noDivider ? '0 14px 10px 14px' : '10px 14px 10px 14px')};
    marginTop: ${(props) => (props.noDivider ? '-2px' : '0')}
    width: 100%;
    color: ${(props) => (props.noDivider ? Colors['primary-700'] : Colors['neutral-600'])};
    font-weight: 500;
`;

const StyledLinkText = styled.span<{ noDivider?: boolean; footerText?: string }>`
  color: ${(props) => (props.noDivider ? Colors['primary-700'] : Colors['neutral-700'])};
  font-weight: 600;
  transition: color 0.3s ease-in-out;
  @media screen and (max-width: ${Breakpoints['mobile-end']}) {
    display: block;
    margin-top: ${(props) => (props.footerText ? '8px' : '0px')};
  }
`;

const StyledSearchResultContainer = styled(StyledSearchResultFooter)<{ noDivider?: boolean }>`
  line-height: 24px;
  &:hover ${StyledLinkText} {
    color: ${(props) => (props.noDivider ? Colors['primary-800'] : Colors['neutral-800'])};
  }
`;

const SearchResultFooter: React.FC<ISearchResultFooter> = ({
  className,
  style,
  linkDestination,
  linkText,
  footerText,
  noDivider,
}) => {
  return (
    <>
      {!noDivider && (
        <hr style={{ width: '100%', margin: 0, borderTop: 0, borderBottom: `1px solid ${Colors['neutral-200']}` }} />
      )}
      <a href={linkDestination ?? '#'} style={{ textDecoration: 'none' }}>
        <StyledSearchResultContainer className={className} style={style} noDivider={noDivider}>
          {footerText && <span style={{ marginRight: '8px' }}>{footerText}</span>}
          {linkText && (
            <u>
              <StyledLinkText noDivider={noDivider} footerText={footerText}>
                {linkText}
              </StyledLinkText>
            </u>
          )}
        </StyledSearchResultContainer>
      </a>
    </>
  );
};

export default SearchResultFooter;
