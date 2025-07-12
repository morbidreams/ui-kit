import {
  Snackbar as MuiSnackbar,
  SnackbarProps as MuiSnackbarProps,
} from "@mui/material";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Breakpoints from "../../app/theme/Breakpoints";
import Colors from "../../app/theme/Colors";
import { CheckCircleIcon, CloseIcon } from "../Icons";

export interface ISnackbar extends MuiSnackbarProps {
  message: string;
  autoHideDuration?: number;
  open?: boolean;
  onClose?: (event: React.SyntheticEvent | Event, reason?: string) => void;
  anchorOrigin?: {
    vertical: "top" | "bottom";
    horizontal: "left" | "center" | "right";
  };
}

const StyledAlert = styled(Alert)`
  background-color: #ffffff !important;
  color: ${Colors["neutral-900"]} !important;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px !important;
  border: 1px solid ${Colors["neutral-300"]};
  box-shadow: 0 4px 6px -2px rgba(16, 24, 40, 0.03),
    0 12px 16px -4px rgba(16, 24, 40, 0.08) !important;
  width: 400px;
  padding: 16px !important;

  @media (max-width: ${Breakpoints["mobile-end"]}) {
    width: calc(100% - 16px);
    max-width: 400px;
  }

  .MuiAlert-icon {
    padding: 0 !important;
    margin: 0 !important;
  }

  .MuiAlert-message {
    flex-grow: 1;
    padding: 0 !important;
    margin: 0 !important;
  }

  .MuiAlert-action {
    margin: 0 !important;
    padding: 0 !important;
  }
`;

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  padding: 0;
  margin: 0;
`;

const MessageWrapper = styled.span`
  margin-left: 8px;
  margin-right: 8px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  color: ${Colors["neutral-900"]};
  flex-grow: 1;
  padding: 0;
  font-family: "Inter", sans-serif;
  text-align: left;
`;

const CheckCircleIconWrapper = styled(CheckCircleIcon)`
  flex-shrink: 0;
  padding: 0 !important;
  margin: 0 !important;
`;

const CloseIconWrapper = styled(CloseIcon)`
  width: 10px;
  height: 10px;
`;

const IconButtonWrapper = styled(IconButton)`
  margin: 0 !important;
  padding: 0 !important;
`;

const StyledSnackbar = styled(MuiSnackbar)`
  @media (max-width: ${Breakpoints["mobile-end"]}) {
    &.MuiSnackbar-root {
      top: 16px;
    }
  }
`;

const Snackbar: React.FC<ISnackbar> = ({
  message,
  autoHideDuration = 3000,
  onClose,
  open: propOpen,
  anchorOrigin = { vertical: "top", horizontal: "right" },
  ...props
}) => {
  const [open, setOpen] = useState(propOpen);

  useEffect(() => {
    if (propOpen) {
      setOpen(true);
    }
  }, [propOpen]);

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        setOpen(false);
        if (onClose) {
          onClose({} as React.SyntheticEvent, "timeout");
        }
      }, autoHideDuration);
      return () => clearTimeout(timer);
    }
  }, [open, autoHideDuration, onClose]);

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    if (onClose) {
      onClose(event, reason);
    }
  };

  return (
    <StyledSnackbar
      onClose={handleClose}
      anchorOrigin={anchorOrigin}
      open={open}
      {...props}
    >
      <StyledAlert
        icon={<CheckCircleIconWrapper />}
        action={
          <IconButtonWrapper onClick={handleClose}>
            <CloseIconWrapper />
          </IconButtonWrapper>
        }
      >
        <MessageContainer>
          <MessageWrapper>{message}</MessageWrapper>
        </MessageContainer>
      </StyledAlert>
    </StyledSnackbar>
  );
};

export default Snackbar;
