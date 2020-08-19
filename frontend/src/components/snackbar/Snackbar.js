import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

export default function PositionedSnackbar({ open, message, alert, onClose }) {
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  return (
    <div>
      <Snackbar
        autoHideDuration={6000}
        onClose={onClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        key={`top, right`}
        open={open}
      >
        <Alert severity={alert} onClose={onClose}>{message}</Alert>
      </Snackbar>
    </div>
  );
}
