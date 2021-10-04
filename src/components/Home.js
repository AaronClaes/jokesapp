import React from "react";
import { useHistory } from "react-router-dom";

import headerImage from "../images/home_header_image.png";

// MUI Components
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const Home = () => {
  document.title = "Joke Application - Home";
  const history = useHistory();

  return (
    <Container>
      <Toolbar />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={3}
        columnSpacing={{ xs: 0, md: 10, lg: 20 }}
        sx={{
          mt: { xs: 2, md: 10, lg: 20 },
          height: "100%",
        }}
      >
        <Grid item xs={8} sm={8} lg={6}>
          <Typography
            paragraph
            variant="h3"
            component="h1"
            color="text.primary"
          >
            Jokes Application
          </Typography>
          <Typography
            paragraph
            variant="h5"
            component="h3"
            color="text.primary"
          >
            In need of some funny jokes? Look no more! <br /> We got all the
            jokes you need to brighten your day!
          </Typography>
          <Button
            onClick={() => history.push("/jokes")}
            size="large"
            variant="contained"
          >
            Find jokes
          </Button>
        </Grid>
        <Grid item xs={8} sm={8} lg={6}>
          <img
            style={{ transform: "rotate(-5deg)", width: "100%" }}
            src={headerImage}
            alt=""
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
