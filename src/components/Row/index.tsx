import Grid from '@mui/material/Grid2';
import React from 'react';

export interface RowProps extends Omit<React.ComponentProps<typeof Grid>, 'container'> {
  noGutters?: boolean;
  rowSpacing?: number;
  columnSpacing?: number | string;
}

const Row: React.FC<RowProps> = ({
  children,
  noGutters,
  spacing = 2,
  columnSpacing = '12px',
  rowSpacing = 0,
  ...props
}) => {
  return (
    <Grid container spacing={noGutters ? 0 : spacing} rowSpacing={rowSpacing} columnSpacing={columnSpacing} {...props}>
      {children}
    </Grid>
  );
};

export default Row;
