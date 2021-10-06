import React, { useState } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";

import SimpleSnackbar from "./Snackbar";

export const JokeCard = ({ joke }) => {
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState(false);

  const handleCopyJoke = async () => {
    try {
      const text =
        joke.type === "single"
          ? joke.joke
          : joke.setup + "\r\n \r\n" + joke.delivery;

      var type = "text/plain";
      var blob = new Blob([text], { type });
      var data = [new window.ClipboardItem({ [type]: blob })];
      await navigator.clipboard.write(data);
      setShowSnackbar(false);
      setShowSnackbar(true);
      setSnackbarMessage("Joke copied to clipboard!");
    } catch (error) {
      setShowSnackbar(false);
      setShowSnackbar(true);
      setSnackbarMessage("Failed to copy joke!");
    }
  };

  const handleSnackbar = (status) => {
    setShowSnackbar(status);
  };

  return (
    <Card style={{ height: "100%" }}>
      <CardContent style={{ height: "100%" }}>
        <SimpleSnackbar
          onChange={handleSnackbar}
          status={showSnackbar}
          text={snackbarMessage}
        />
        <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ mr: "auto" }}
          >
            {joke.category}
          </Typography>
          <IconButton
            onClick={handleCopyJoke}
            aria-label="copy joke button"
            sx={{ ml: "auto" }}
          >
            <ContentCopyIcon />
          </IconButton>
        </Stack>
        <Typography
          paragraph={joke.type !== "single" ? true : false}
          variant="body2"
          color="text.secondary"
        >
          {joke.type === "single" ? joke.joke : joke.setup}
        </Typography>
        {joke.type !== "single" ? (
          <Typography variant="body2" color="text.secondary">
            {joke.delivery}
          </Typography>
        ) : null}
      </CardContent>
    </Card>
  );
};

export default JokeCard;
