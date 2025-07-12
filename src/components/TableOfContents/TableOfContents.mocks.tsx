import { ITableOfContents } from './index';

const createHTMLElement = (tagName: keyof HTMLElementTagNameMap, innerHTML: string): HTMLElement => {
  const element = document.createElement(tagName);
  element.innerHTML = innerHTML;
  return element;
};

const BaseStyles: ITableOfContents = {
  headlines: [
    createHTMLElement('h2', 'Introduction'),
    createHTMLElement('h2', 'Blog Article H-Tag Character Count Over 2 Lines In The Title'),
    createHTMLElement('h2', 'Title Placeholder'),
    createHTMLElement('h2', 'Title Placeholder'),
    createHTMLElement('h2', 'Title Placeholder'),
    createHTMLElement('h2', 'Title Placeholder'),
    createHTMLElement('h2', 'Title Placeholder'),
  ],
  title: 'Table of contents',
  readTime: '10 min read',
};

export const mockTableOfContentsProps = {
  BaseStyles,
};
