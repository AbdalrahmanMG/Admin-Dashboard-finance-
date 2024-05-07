import { Alert, AlertColor, Snackbar } from "@mui/material";

import React from "react";

interface ToasterProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  severity: AlertColor;
  message: string;
}

export default function Toaster({
  open,
  setOpen,
  severity,
  message,
}: ToasterProps) {
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={severity}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {message}{" "}
      </Alert>
    </Snackbar>
  );
}
