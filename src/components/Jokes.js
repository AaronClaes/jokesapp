import axios from "axios";
import React, { useEffect, useState, Fragment } from "react";

// MUI Components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";

// Components
import JokeCard from "./JokeCard";
import Filters from "./Filters";
import SearchInput from "./SearchInput";

const Jokes = () => {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    category: ["Programming", "Misc", "Dark", "Pun", "Spooky", "Christmas"],
    flags: ["Explicit", "Nsfw", "Political", "Racist", "Religious", "Sexist"],
  });
  let shownJokes = 0;

  const fetchJokes = async () => {
    setLoading(true);
    let allJokes = jokes;
    for (let index = 0; index < 5; index++) {
      const res = await axios.get("https://v2.jokeapi.dev/joke/Any?amount=10");
      allJokes = allJokes.concat(res.data.jokes);
    }

    setJokes(allJokes);
    setLoading(false);
  };

  const searchJokes = async (value) => {
    setLoading(true);
    const res = await axios.get(
      `https://v2.jokeapi.dev/joke/Any?contains=${value}&amount=10`
    );
    if (res.data.error) {
      setJokes([]);
    } else {
      setJokes(res.data.jokes);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchJokes();
  }, []);

  var items = [];

  for (let index = 0; index < 15; index++) {
    items.push(
      <Grid item xs={4} sm={4} md={4} key={index}>
        <Skeleton
          animation="wave"
          variant="rectangular"
          width={"100%"}
          height={180}
        />
      </Grid>
    );
  }

  const handleFilterChange = (filters) => {
    setFilters(filters);
  };

  const handleSearchChange = (value) => {
    searchJokes(value);
  };

  return (
    <Fragment>
      <Filters onChange={handleFilterChange} filters={filters}>
        <Container fixed component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Stack direction="row" spacing={2}>
            <SearchInput onChange={handleSearchChange} />
          </Stack>
          {jokes.length > 0 ? (
            <Fragment>
              <Grid
                container
                spacing={{ xs: 2 }}
                columns={{ xs: 4, sm: 8, lg: 12 }}
                alignItems="stretch"
              >
                {jokes
                  .filter((joke) => {
                    if (!filters.category.includes(joke.category)) {
                      return false;
                    }
                    let flagcounter = 0;
                    for (let key in joke.flags) {
                      if (
                        joke.flags[key] === true &&
                        filters.flags.includes(key)
                      ) {
                        flagcounter++;
                      }
                    }
                    if (flagcounter > 0) {
                      return false;
                    }
                    shownJokes++;
                    return true;
                  })
                  .map((joke, index) => {
                    return (
                      <Grid item xs={4} sm={4} lg={4} key={index}>
                        <JokeCard joke={joke} />
                      </Grid>
                    );
                  })}
              </Grid>
              {shownJokes > 0 ? null : (
                <Box
                  sx={{
                    mt: 2,
                  }}
                >
                  <Alert severity="error">
                    {`No jokes to dipslay - ${jokes.length} jokes are blocked by the filter.`}
                  </Alert>
                </Box>
              )}
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
          ) : loading ? (
            <Grid
              container
              spacing={{ xs: 2 }}
              columns={{ xs: 4, sm: 8, lg: 12 }}
              alignItems="stretch"
            >
              {items}
            </Grid>
          ) : (
            <Alert severity="error">
              {`There are no jokes found - please try a different searchterm.`}
            </Alert>
          )}
          <Toolbar />
        </Container>
      </Filters>
    </Fragment>
  );
};

export default Jokes;
