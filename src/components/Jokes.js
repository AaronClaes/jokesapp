import axios from "axios";
import React, { useEffect, useState } from "react";

// MUI Components
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Components
import JokeCard from "./JokeCard";

const Jokes = () => {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchJokes = async () => {
    const res = await axios.get("https://v2.jokeapi.dev/joke/Any?amount=10");
    setJokes(res.data.jokes);
    setLoading(false);
    console.log(res.data.jokes);
  };

  useEffect(() => {
    fetchJokes();
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container fixed>
        {!loading ? (
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
        ) : null}
      </Container>
    </Box>
  );
};

export default Jokes;
