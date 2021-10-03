import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

// MUI Components
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import AppsIcon from "@mui/icons-material/Apps";
import InfoIcon from "@mui/icons-material/Info";
import Paper from "@mui/material/Paper";

export default function FixedBottomNavigation() {
  const history = useHistory();

  const getValue = () => {
    const pathname = window.location.pathname;
    switch (pathname) {
      case "/":
        return 0;
      case "/jokes":
        return 1;
      case "/info":
        return 2;
      default:
        break;
    }
  };

  const location = useLocation();

  useEffect(() => {
    setValue(getValue());
  }, [location]);

  const [value, setValue] = React.useState(getValue);

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        display: { xs: "block", sm: "none" },
      }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          onClick={(e) => history.push("/")}
          label="Home"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          onClick={(e) => history.push("/jokes")}
          label="Jokes"
          icon={<AppsIcon />}
        />
        <BottomNavigationAction
          onClick={(e) => history.push("/info")}
          label="Info"
          icon={<InfoIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
}
