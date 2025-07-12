import { createTheme, ThemeOptions } from '@mui/material';
import Breakpoints from './Breakpoints';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    desktop: true;
  }
}

export const defaultBreakpoints = {
  mobile: parseInt(Breakpoints['mobile-start'], 10),
  desktop: parseInt(Breakpoints['mobile-end'], 10),
};

export const generateTheme = (customBreakpoints?: Partial<typeof defaultBreakpoints>): ThemeOptions => {
  const breakpoints = {
    ...defaultBreakpoints, // Use default breakpoints as base
    ...customBreakpoints, // Override with custom breakpoints if provided
  };

  return createTheme({
    breakpoints: {
      values: {
        mobile: breakpoints.mobile,
        desktop: breakpoints.desktop,
      },
    },
  });
};

export const theme = generateTheme();
