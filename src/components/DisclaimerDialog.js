import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

import { useHistory } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DisclaimerDialog() {
  let history = useHistory();
  const [open, setOpen] = React.useState(true);

  const handleAgree = () => {
    localStorage.setItem("disclaimeragreed", "true");
    setOpen(false);
  };

  const handleDisagree = () => {
    history.push("/");
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"Disclaimer"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          When flags are turned off the website might display inappropriate
          jokes. I am not responsible for the jokes that are displayed or if you
          feel offended by them. The jokes come from an API and are not mine.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDisagree}>Disagree</Button>
        <Button onClick={handleAgree}>Agree</Button>
      </DialogActions>
    </Dialog>
  );
}
