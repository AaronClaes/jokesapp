import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Toolbar from "@mui/material/Toolbar";
import Fab from "@mui/material/Fab";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const drawerWidth = 240;

function ResponsiveDrawer({ children, window, onChange, filters }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleCategoryChangeAll = (event) => {
    const getCategories = () => {
      if (event.target.checked) {
        return ["Programming", "Misc", "Dark", "Pun", "Spooky", "Christmas"];
      } else {
        return [];
      }
    };
    onChange({
      ...filters,
      category: getCategories(),
    });
  };

  const handleCategoryChange = (event) => {
    const getFilters = () => {
      if (filters.category.includes(event.target.name)) {
        return filters.category.filter((cat) => cat !== event.target.name);
      } else {
        return [...filters.category, event.target.name];
      }
    };

    onChange({
      ...filters,
      category: getFilters(),
    });
  };

  const countCheckedCategoryItems = () => {
    let counter = 0;
    filters.category.map((cat) => {
      counter++;
    });
    return counter;
  };

  // FLAGS
  const handleFlagsChangeAll = (event) => {
    const getFlags = () => {
      if (event.target.checked) {
        return [
          "explicit",
          "nsfw",
          "political",
          "racist",
          "religious",
          "sexist",
        ];
      } else {
        return [];
      }
    };
    onChange({
      ...filters,
      flags: getFlags(),
    });
  };

  const handleFlagsChange = (event) => {
    const getFilters = () => {
      if (filters.flags.includes(event.target.name)) {
        return filters.flags.filter((flag) => flag !== event.target.name);
      } else {
        return [...filters.flags, event.target.name];
      }
    };

    onChange({
      ...filters,
      flags: getFilters(),
    });
  };

  const countCheckedFlagsItems = () => {
    let counter = 0;
    filters.flags.map((cat) => {
      counter++;
    });
    return counter;
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem key="categories">
          <FormGroup>
            <FormControlLabel
              label="Categories"
              control={
                <Checkbox
                  checked={countCheckedCategoryItems() === 6}
                  indeterminate={
                    countCheckedCategoryItems() > 0 &&
                    countCheckedCategoryItems() < 6
                  }
                  onChange={handleCategoryChangeAll}
                />
              }
            />
            <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
              {[
                "Programming",
                "Misc",
                "Dark",
                "Pun",
                "Spooky",
                "Christmas",
              ].map((text, index) => (
                <FormControlLabel
                  key={index}
                  label={text}
                  control={
                    <Checkbox
                      name={text}
                      checked={filters.category.includes(text)}
                      onChange={handleCategoryChange}
                    />
                  }
                />
              ))}
            </Box>
          </FormGroup>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem key="filters">
          <FormGroup>
            <FormHelperText error={countCheckedFlagsItems() !== 6}>
              Turning off flags will display inappropriate jokes
            </FormHelperText>
            <FormControlLabel
              label="Flags"
              control={
                <Checkbox
                  checked={countCheckedFlagsItems() === 6}
                  indeterminate={
                    countCheckedFlagsItems() > 0 && countCheckedFlagsItems() < 6
                  }
                  onChange={handleFlagsChangeAll}
                />
              }
            />
            <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
              {[
                "explicit",
                "nsfw",
                "political",
                "racist",
                "religious",
                "sexist",
              ].map((text, index) => (
                <FormControlLabel
                  key={index}
                  label={text.charAt(0).toUpperCase() + text.slice(1)}
                  control={
                    <Checkbox
                      name={text}
                      checked={filters.flags.includes(text)}
                      onChange={handleFlagsChange}
                    />
                  }
                />
              ))}
            </Box>
          </FormGroup>
        </ListItem>
      </List>
      <List>
        <ListItem>
          <Autocomplete
            disableClearable
            value={filters.language.label}
            onChange={(event, newValue) => {
              onChange({ ...filters, language: newValue }, "lang");
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            id="controllable-states-demo"
            options={[
              { label: "Spanish", id: "es" },
              { label: "English", id: "en" },
              { label: "Czech", id: "cs" },
              { label: "German", id: "de" },
              { label: "French", id: "fr" },
              { label: "Portuguese", id: "pt" },
            ]}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Language" />}
          />
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      {children}
      <Fab
        onClick={handleDrawerToggle}
        sx={{
          display: { sm: "inline-flex", md: "none" },
          position: "fixed",
          bottom: { xs: "80px", sm: "20px" },
          right: "20px",
        }}
        variant="extended"
      >
        <FilterAltIcon sx={{ mr: 1 }} />
        Filters
      </Fab>
    </Box>
  );
}

export default ResponsiveDrawer;
