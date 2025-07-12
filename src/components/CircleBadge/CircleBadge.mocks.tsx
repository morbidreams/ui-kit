import { ICircleBadge } from './index';
import React from 'react';
import { ListIcon } from '../Icons';

const baseStyles: ICircleBadge = {
  color: 'primary',
  children: '1',
  dark: false,
  size: '48px',
};

const withIconStyles: ICircleBadge = {
  color: 'primary',
  children: <ListIcon />,
};

export const mockCircleBadgeProps = {
  baseStyles,
  withIconStyles,
};
