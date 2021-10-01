import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";

// Components
import Navigation from "./components/Navigation";
import BottomNavigation from "./components/BottomNavigation";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes />
        <BottomNavigation />
      </Router>
    </div>
  );
}

export default App;
