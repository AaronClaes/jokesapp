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
import DisclaimerDialog from "./DisclaimerDialog";

const Jokes = () => {
  document.title = "JokeHub - Jokes";
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    category: ["Programming", "Misc", "Dark", "Pun", "Spooky", "Christmas"],
    flags: ["explicit", "nsfw", "political", "racist", "religious", "sexist"],
    language: { label: "English", id: "en" },
  });
  let shownJokes = 0;
  let totalJokes = 0;

  const fetchJokes = async (lang) => {
    setLoading(true);
    let allJokes = jokes;
    for (let index = 0; index < 5; index++) {
      const url = `https://v2.jokeapi.dev/joke/Any?amount=10&lang=${filters.language.id}`;
      const res = await axios.get(url);
      allJokes = allJokes.concat(res.data.jokes);
    }

    setJokes(allJokes);
    setLoading(false);
  };

  const searchJokes = async (value) => {
    setLoading(true);
    const res = await axios.get(
      `https://v2.jokeapi.dev/joke/Any?contains=${value}&amount=10&lang=${filters.language.id}`
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
  }, [filters.language]);

  const handleFilterChange = (filters, type) => {
    if (type === "lang") {
      setJokes([]);
    }
    setFilters(filters);
  };

  const handleSearchChange = (value) => {
    searchJokes(value);
  };

  let items = [];
  for (let index = 0; index < 15; index++) {
    items.push(
      <Grid item xs={4} sm={4} lg={4} key={index}>
        <Skeleton
          animation="wave"
          variant="rectangular"
          width={"100%"}
          height={180}
        />
      </Grid>
    );
  }

  const filterJokes = (unfilteredJokes) => {
    const uniqueJokes = new Set();
    console.log(unfilteredJokes);
    console.log(uniqueJokes);
    const filteredJokes = unfilteredJokes.filter((joke) => {
      if (uniqueJokes.has(joke.id)) {
        console.log(joke.id);
        return false;
      } else {
        uniqueJokes.add(joke.id);
        totalJokes++;
      }
      if (!filters.category.includes(joke.category)) {
        return false;
      }
      let flagcounter = 0;
      for (let key in joke.flags) {
        if (joke.flags[key] === true && filters.flags.includes(key)) {
          flagcounter++;
        }
      }
      if (flagcounter > 0) {
        return false;
      }
      shownJokes++;
      return true;
    });

    return filteredJokes;
  };

  return (
    <Fragment>
      {console.log(localStorage.getItem("disclaimeragreed"))}
      {localStorage.getItem("disclaimeragreed") === "true" ? null : (
        <DisclaimerDialog />
      )}
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
                {filterJokes(jokes).map((joke, index) => {
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
                    {`No jokes to dipslay - ${totalJokes} jokes are blocked by the filter.`}
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
                  onClick={() => fetchJokes()}
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
