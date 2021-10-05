import React from "react";
import { useHistory } from "react-router-dom";

import emojiImage from "../images/home_header_emoji.png";

// MUI Components
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Home = () => {
  document.title = "JokeHub - Home";
  const history = useHistory();

  return (
    <Container>
      <Toolbar />
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="center"
        alignItems="center"
        spacing={12}
        sx={{
          mt: { xs: 10, md: 25, lg: 15 },
          ml: { xs: 5, md: 10, lg: 0 },
          mr: { xs: 5, md: 10, lg: 0 },
        }}
      >
        <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
          <Typography
            sx={{ fontWeight: "bold" }}
            paragraph
            variant="h3"
            component="h1"
            color="text.primary"
          >
            A Hub with Jokes I guess?
          </Typography>
          <Typography
            paragraph
            variant="h5"
            component="h3"
            color="text.primary"
          >
            In need of some funny jokes? Look no further! <br /> We got all the
            jokes you need to brighten your day!
          </Typography>
          <Button
            onClick={() => history.push("/jokes")}
            size="large"
            variant="contained"
          >
            Find jokes
          </Button>
        </Box>
        <Box sx={{ display: "flex", width: { xs: "70%", md: "45%" } }}>
          <img src={emojiImage} alt="" style={{ width: "100%" }} />
        </Box>
      </Stack>
    </Container>
  );
};

export default Home;
