import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface Props {
  text: string;
  open: boolean;
  handleClose: () => void;
  isError: boolean;
}
export const SnackbarModal: React.FunctionComponent<Props> = ({
  text,
  open,
  handleClose,
  isError,
}) => {
  return (
    <>
      {isError ? (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            {text}
          </Alert>
        </Snackbar>
      ) : (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            {text}
          </Alert>
        </Snackbar>
      )}
    </>
  );
};
