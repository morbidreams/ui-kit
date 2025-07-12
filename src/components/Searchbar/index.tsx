import styled from 'styled-components';
import Colors from '../../app/theme/Colors';
import React, { ChangeEventHandler, HTMLInputTypeAttribute, useEffect, useRef, useState } from 'react';
import { BaseInputStyles } from '../Input';
import { MagnifyingGlassIcon } from '../Icons';
import Card from '../Card';
import { ClipLoader } from 'react-spinners';

/**
 * Props for the SearchInput component.
 * @param {string} [placeholder] - Placeholder text for the search input.
 * @param {string} [className] - Additional class names to apply to the search input container.
 * @param {React.CSSProperties} [style] - Inline styles to apply to the search input container.
 * @param {HTMLInputTypeAttribute} [type] - The type of input element to render (e.g., text, number, etc.).
 * @param {(query: string) => void} [onChange] - Callback function invoked when the search query changes.
 * @param {boolean} [debounce] - Indicates whether to debounce the onChange callback.
 * @param {React.ReactNode} [children] - Optional children to render inside the search input container.
 */
export interface ISearchInput {
  placeholder?: string;
  className?: string;
  style?: React.CSSProperties;
  type?: HTMLInputTypeAttribute;
  onChange?: (query: string) => void;
  debounce?: boolean;
  debounceDuration?: number;
  hideResults?: boolean;
  children?: React.ReactNode;
  isLoading?: boolean;
  onFocus?: () => void;
  forceShowResults?: boolean;
  onClickOutside?: () => void;
}

const SearchContainer = styled.div`
  position: relative;
`;

const StyledSearchbar = styled.input`
  ${BaseInputStyles}
  padding-left: 42px;
  border: 1px solid ${Colors['neutral-300']};
`;

const SearchIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 14px;
  transform: translateY(-50%);
  color: ${Colors['neutral-600']};
  display: flex;
  align-items: center;
`;

interface SearchResultCardProps {
  show: boolean;
}

const SearchResultCard = styled(Card)<SearchResultCardProps>`
  position: absolute;
  left: 0;
  right: 0;
  top: calc(100% + 4px);
  z-index: 1;
  opacity: ${({ show }) => (show ? 1 : 0)};
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  transition:
    opacity 0.3s ease-in-out,
    visibility 0.3s ease-in-out;
  padding: 0;
  border: 1px solid ${Colors['neutral-200']};
`;

const SearchInput: React.FC<ISearchInput> = ({
  placeholder,
  className,
  style,
  onChange,
  debounce,
  debounceDuration,
  children,
  hideResults = false,
  isLoading = false,
  onFocus,
  forceShowResults = false,
  onClickOutside,
}) => {
  const [showResults, setShowResults] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDebouncedChange = (value: string) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      onChange && onChange(value);
      setShowResults(value !== '');
    }, debounceDuration ?? 400);
  };

  let timeoutId: NodeJS.Timeout | null = null;

  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [onChange]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.target;
    if (debounce) {
      handleDebouncedChange(value);
    } else {
      onChange && onChange(value);
      setShowResults(forceShowResults || value !== '');
    }
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    if (onFocus) {
      onFocus();
    }
    if (window.visualViewport && window.visualViewport.scale !== 1) {
      event.preventDefault();
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (onClickOutside) {
      onClickOutside();
    }
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
      setShowResults(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <SearchContainer className={className} style={style}>
      <SearchIcon>
        {isLoading && <ClipLoader color={Colors['neutral-600']} size={'18px'} />}
        {!isLoading && <MagnifyingGlassIcon />}
      </SearchIcon>
      <StyledSearchbar ref={inputRef} onChange={handleChange} onFocus={handleFocus} placeholder={placeholder} />
      <SearchResultCard show={(showResults && !hideResults) || forceShowResults}>{children}</SearchResultCard>
    </SearchContainer>
  );
};

export default SearchInput;
