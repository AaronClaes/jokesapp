import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import AppsIcon from "@mui/icons-material/Apps";
import InfoIcon from "@mui/icons-material/Info";
import SearchInput from "./SearchInput";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const Navigation = ({ onChange }) => {
  const history = useHistory();
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const [open, setOpen] = useState(false);

  const handleListItemClick = (event, index, path) => {
    setSelectedIndex(index);
    history.push(path);
    setOpen(!open);
  };

  const handleIconButtonClick = () => {
    setOpen(!open);
  };

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

  const [selectedIndex, setSelectedIndex] = useState(getValue());

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ ml: "auto", mr: "auto", zIndex: 1300 }} position="fixed">
        <Toolbar>
          <IconButton
            onClick={() => handleIconButtonClick()}
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{
              mr: 2,
              display: { xs: "none", sm: "inline-flex", md: "none" },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, marginLeft: "auto" }}
          >
            Jokes Application
          </Typography>
          <Button
            onClick={(event) => handleListItemClick(event, 0, "/")}
            sx={{ display: { xs: "none", md: "block" } }}
            color="inherit"
          >
            Home
          </Button>
          <Button
            onClick={(event) => handleListItemClick(event, 1, "/jokes")}
            sx={{ display: { xs: "none", md: "block" } }}
            color="inherit"
          >
            Jokes
          </Button>
          <Button
            onClick={(event) => handleListItemClick(event, 2, "/info")}
            sx={{ display: { xs: "none", md: "block" } }}
            color="inherit"
          >
            Info
          </Button>
          <Box
            sx={{
              whiteSpace: "nowrap",
              width: "min-content",
              color: "text.primary",
              bgcolor: "background.paper",
              borderRadius: 1,
              p: 0.5,
            }}
          >
            <IconButton onClick={onChange} color="inherit">
              {theme.palette.mode === "dark" ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {open ? (
        <Box
          sx={{
            width: "100%",
            bgcolor: "background.paper",
            display: { xs: "none", sm: "block", md: "none", zIndex: 1100 },
          }}
          position="fixed"
        >
          <Toolbar />
          <List
            disablePadding
            component="nav"
            aria-label="main mailbox folders"
          >
            <ListItemButton
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0, "/")}
            >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText sx={{ color: "text.primary" }} primary="Home" />
            </ListItemButton>
            <ListItemButton
              selected={selectedIndex === 1}
              onClick={(event) => handleListItemClick(event, 1, "/jokes")}
            >
              <ListItemIcon>
                <AppsIcon />
              </ListItemIcon>
              <ListItemText sx={{ color: "text.primary" }} primary="Jokes" />
            </ListItemButton>
            <ListItemButton
              selected={selectedIndex === 2}
              onClick={(event) => handleListItemClick(event, 2, "/info")}
            >
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText sx={{ color: "text.primary" }} primary="Info" />
            </ListItemButton>
          </List>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navigation;
