import React from 'react';
import { ListIcon } from '../Icons';
import { IButton } from './index';
const baseStyles: IButton = {
  size: 'sm',
  color: 'primary',
  outline: false,
  disabled: false,
  fontWeight: 500,
  borderRadius: '8px',
  children: 'Example',
  fullwidthMobile: false,
  loading: false,
};

const withIconStyles: IButton = {
  size: 'sm',
  color: 'primary',
  outline: false,
  disabled: false,
  fontWeight: 500,
  borderRadius: '8px',
  children: (
    <>
      <span style={{ marginRight: '8px', display: 'flex', alignItems: 'center' }}>
        <ListIcon />
      </span>{' '}
      With Icon
    </>
  ),
  fullwidthMobile: false,
  loading: false,
};

export const mockButtonProps = {
  baseStyles,
  withIconStyles,
};
