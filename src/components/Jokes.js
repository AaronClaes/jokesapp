import axios from "axios";
import React, { useEffect, useState, Fragment } from "react";

// MUI Components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";

// Components
import JokeCard from "./JokeCard";

const Jokes = () => {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchJokes = async () => {
    setLoading(true);
    let allJokes = jokes;
    for (let index = 0; index < 10; index++) {
      const res = await axios.get("https://v2.jokeapi.dev/joke/Any?amount=10");
      allJokes = allJokes.concat(res.data.jokes);
    }
    setJokes(allJokes);
    setLoading(false);
  };

  useEffect(() => {
    fetchJokes();
  }, []);

  return (
    <Container fixed component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      {jokes.length > 0 ? (
        <Fragment>
          <Grid
            container
            spacing={{ xs: 2 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            alignItems="stretch"
          >
            {jokes.map((joke, index) => {
              return (
                <Grid item xs={4} sm={4} md={4} key={index}>
                  <JokeCard joke={joke} />
                </Grid>
              );
            })}
          </Grid>
          <Box
            sx={{
              width: "100%",
              height: 100,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <LoadingButton
              onClick={fetchJokes}
              loading={loading}
              loadingIndicator="Loading..."
              variant="contained"
            >
              Load more
            </LoadingButton>
          </Box>
        </Fragment>
      ) : (
        <h1>LOADING</h1>
      )}

      <Toolbar />
    </Container>
  );
};

export default Jokes;
