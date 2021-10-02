import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";

// Components
import Navigation from "./components/Navigation";
import BottomNavigation from "./components/BottomNavigation";

import Box from "@mui/material/Box";

function App() {
  return (
    <div className="App">
      <Router>
        <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
          <Navigation />
          <Routes />
          <BottomNavigation />
        </Box>
      </Router>
    </div>
  );
}

export default App;
