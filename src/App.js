import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Components
import Navigation from "./components/Navigation";
import BottomNavigation from "./components/BottomNavigation";

import Box from "@mui/material/Box";

function App() {
  const [darkState, setDarkState] = useState(true);
  const palletType = darkState ? "dark" : "light";

  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const lightTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#c2c2c2",
      },
      background: {
        default: "#e7e7e7",
        paper: "#f1f1f1",
      },
      common: {
        white: "#000000",
      },
    },
  });

  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={darkState ? darkTheme : lightTheme}>
          <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
            <Navigation onChange={handleThemeChange} />
            <Routes />
            <BottomNavigation />
          </Box>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
