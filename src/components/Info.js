import React from "react";
import { Link } from "react-router-dom";

import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Info = () => {
  document.title = "JokeHub - Info";
  return (
    <Container>
      <Toolbar />
      <Typography
        sx={{ fontWeight: "bold", mt: "2rem" }}
        paragraph
        variant="h4"
        component="h1"
        color="text.primary"
      >
        JokeHub is a portfolio project by Aaron Claes
      </Typography>
      <Typography
        sx={{ fontWeight: "bold" }}
        paragraph
        variant="h5"
        component="h3"
        color="text.primary"
      >
        Tools used for this project:
      </Typography>
      <Stack spacing={1}>
        <Typography color="text.primary">ReactJS</Typography>
        <Typography color="text.primary">Material UI</Typography>
        <Typography color="text.primary">Axios</Typography>
        <Typography color="text.primary">jokeapi.dev</Typography>
      </Stack>
      <Typography
        sx={{ fontWeight: "semiBold", mb: "0rem", mt: "1rem" }}
        paragraph
        variant="h5"
        component="h3"
        color="text.primary"
      >
        Github:
      </Typography>
      <Link
        style={{ textDecoration: "none" }}
        to={{ pathname: "https://github.com/AaronClaes/jokesapp" }}
        target="_blank"
      >
        <Typography
          sx={{ fontWeight: "light" }}
          paragraph
          variant="h6"
          component="h3"
          color="text.primary"
        >
          JokeHub Repository
        </Typography>
      </Link>
      <Typography
        sx={{ fontWeight: "semiBold", mb: "0rem", mt: "1rem" }}
        paragraph
        variant="h5"
        component="h3"
        color="text.primary"
      >
        Disclaimer:
      </Typography>
      <Typography
        sx={{ fontWeight: "light" }}
        paragraph
        variant="p"
        component="p"
        color="text.primary"
      >
        Please note that this application is made to practice my development
        skills. The jokes used on the application are not made by me and are
        fetched from an external API. I am not responsible if you feel offended
        by the jokes provided by the API. Keep the flag filter selected to
        prevent this from happening. Enjoy the app!
      </Typography>
    </Container>
  );
};

export default Info;
