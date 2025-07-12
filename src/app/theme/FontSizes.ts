import { FontSize } from '../../types';

export const fontSizeMap: Map<FontSize, { fontSize: string; lineHeight: string; letterSpacing?: string }> = new Map([
  [
    'display2xl',
    {
      fontSize: '4.5rem',
      lineHeight: '5.625rem',
      letterSpacing: '-0.02em',
    },
  ],
  [
    'displayXl',
    {
      fontSize: '3.75rem',
      lineHeight: '4.5rem',
      letterSpacing: '-0.02em',
    },
  ],
  [
    'displayLg',
    {
      fontSize: '3rem',
      lineHeight: '3.75rem',
      letterSpacing: '-0.02em',
    },
  ],
  [
    'displayMd',
    {
      fontSize: '2.25rem',
      lineHeight: '2.75rem',
      letterSpacing: '-0.02em',
    },
  ],
  [
    'displaySm',
    {
      fontSize: '1.875rem',
      lineHeight: '2.375rem',
    },
  ],
  [
    'displayXs',
    {
      fontSize: '1.5rem',
      lineHeight: '2rem',
    },
  ],
  [
    'textXl',
    {
      fontSize: '1.25rem',
      lineHeight: '1.875rem',
    },
  ],
  [
    'textLg',
    {
      fontSize: '1.125rem',
      lineHeight: '1.75rem',
    },
  ],
  [
    'textMd',
    {
      fontSize: '1rem',
      lineHeight: '1.5rem',
    },
  ],
  [
    'textSm',
    {
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
    },
  ],
  [
    'textXs',
    {
      fontSize: '0.75rem',
      lineHeight: '1.125rem',
    },
  ],
]);

export default fontSizeMap;
