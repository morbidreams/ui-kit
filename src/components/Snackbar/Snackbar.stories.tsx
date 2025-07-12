import { Meta, StoryFn } from '@storybook/react';
import React, { useEffect, useState } from 'react';
import Snackbar, { ISnackbar } from './index';
import { mockSnackbarProps } from './Snackbar.mocks';

export default {
  title: 'Controls/Snackbar',
  component: Snackbar,
  argTypes: {
    message: { control: 'text' },
    open: { control: 'boolean' },
    autoHideDuration: { control: 'number' },
    anchorOrigin: { control: 'object' },
    onClose: { action: 'closed' },
  },
} as Meta;

const Template: StoryFn<ISnackbar> = (args) => {
  const [open, setOpen] = useState(args.open);

  useEffect(() => {
    if (args.open !== open) {
      setOpen(args.open);
    }
  }, [args.open, open]);

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    args.onClose?.(event, reason);
  };

  return <Snackbar {...args} open={open} onClose={handleClose} />;
};

export const Base = Template.bind({});
Base.args = {
  ...mockSnackbarProps.base,
};
