import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export default function SimpleSnackbar({ status, text, onChange }) {
  const [open, setOpen] = React.useState(status);

  React.useEffect(() => {
    setOpen(status);
  }, [status]);

  const handleClick = () => {};

  const handleClose = (event, reason) => {
    // if (reason === "clickaway") {
    //   return;
    // }
    onChange(false);
    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={text}
        action={action}
      />
    </div>
  );
}
