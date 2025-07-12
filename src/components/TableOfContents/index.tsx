import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import Breakpoints from '../../app/theme/Breakpoints';
import Colors from '../../app/theme/Colors';
import TableOfContentsElement from './TableOfContentsElement';
import TableOfContentsHeader from './TableOfContentsHeader';
import useElementHeight from '../../hooks/useElementHeight';
import { v4 as uuidv4 } from 'uuid';

/**
 * Props for the TableOfContents component.
 * @param {React.ReactElement[]} [headlines] - The list of article headlines to display in the table of contents.
 * @param {string} [title] - The title of the table of contents.
 * @param {string} [readTime] - An estimate of the reading time.
 * @param {Function} [onClickFunction] - A function on element click.
 * @param {string} [subtractFromMaxHeight] - Value to subtract from the maximum height of the dropdown.
 * @param {number} [zIndex] - The z-index of the table of contents.
 */
export interface ITableOfContents {
  id?: string;
  style?: React.CSSProperties;
  headlines?: HTMLElement[];
  title?: string;
  readTime?: string;
  onClickFunction?: (element: Element) => void;
  subtractFromMaxHeight?: string;
  zIndex?: number;
}

const Container = styled.div<{ $zIndex?: number }>`
  border: 1px solid ${Colors['neutral-300']};
  border-radius: 16px;
  box-sizing: border-box;
  @media screen and (max-width: ${Breakpoints['mobile-end']}) {
    z-index: ${(props) => props.$zIndex ?? 5};
    transform: translate3d(0, 0, 0);
    left: 0;
    width: 100%;
    border-top: 1px solid ${Colors['neutral-200']};
    border-radius: 0px;
    border: none;
    position: sticky;
  }
`;

const Content = styled.div<{ $maxHeight?: string }>`
  max-height: ${(props) => props.$maxHeight};
  overflow-y: auto;
  box-sizing: border-box;
  padding: 0px 20px 16px 20px;
  @media screen and (max-width: ${Breakpoints['mobile-end']}) {
    width: 100%;
    padding: 0px 20px 20px 20px;
    border-bottom: 1px solid ${Colors['neutral-200']};
    background: white;
    position: fixed;
  }
`;

const TableOfContents: React.FC<ITableOfContents> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ query: `(max-width: ${Breakpoints['mobile-end']})` });
  const uniqueHeaderId = `table-of-contents-header-${uuidv4()}`;
  const headerHeight = useElementHeight(uniqueHeaderId);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (event: React.SyntheticEvent, index: number, item: HTMLElement) => {
    event.preventDefault();
    setIsOpen(!isOpen);
    props.onClickFunction?.(item);
  };

  return (
    <Container id={props.id} style={props.style} $zIndex={props.zIndex}>
      <TableOfContentsHeader
        id={uniqueHeaderId}
        isOpen={isOpen}
        handleToggle={handleToggle}
        title={props.title}
        readTime={props.readTime}
      />
      {((isMobile && isOpen) || !isMobile) && (
        <Content
          $maxHeight={`calc(100vh - ${headerHeight}px${props.subtractFromMaxHeight ? ' - ' + props.subtractFromMaxHeight : ''})`}
        >
          {props.headlines?.map((item, index) => (
            <TableOfContentsElement
              key={item.innerText.slice(0, 10)}
              item={item}
              index={index}
              onItemClick={handleItemClick}
            />
          ))}
        </Content>
      )}
    </Container>
  );
};

export default TableOfContents;
