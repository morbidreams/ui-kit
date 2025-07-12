import Grid from '@mui/material/Grid2';
import React from 'react';

export interface ColProps extends Omit<React.ComponentProps<typeof Grid>, 'mobile' | 'desktop'> {
  mobile?: number | 'grow';
  desktop?: number;
  rowSpacing?: number;
}

const Col: React.FC<ColProps> = ({ children, mobile = 'grow', desktop = mobile, rowSpacing = 0, ...props }) => {
  return (
    <Grid size={{ mobile, desktop }} rowSpacing={rowSpacing} {...props}>
      {children}
    </Grid>
  );
};

export default Col;
