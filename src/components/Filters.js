import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import Toolbar from "@mui/material/Toolbar";
import Fab from "@mui/material/Fab";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const drawerWidth = 240;

function ResponsiveDrawer({ children, window, onChange, filters }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleChangeAll = (event) => {
    console.log(event.target.checked);
    const getCategories = () => {
      if (event.target.checked) {
        return ["Programming", "Misc", "Dark", "Pun", "Spooky", "Christmas"];
      } else {
        return [];
      }
    };
    console.log(getCategories());
    onChange({
      ...filters,
      category: getCategories(),
    });
  };

  const handleChange = (event) => {
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
  const countCheckedItems = () => {
    let counter = 0;
    filters.category.map((cat) => {
      counter++;
    });
    console.log(counter);
    return counter;
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem>
          <FormGroup>
            <FormControlLabel
              label="Categories"
              control={
                <Checkbox
                  checked={countCheckedItems() === 6}
                  indeterminate={
                    countCheckedItems() > 0 && countCheckedItems() < 6
                  }
                  onChange={handleChangeAll}
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
                  label={text}
                  control={
                    <Checkbox
                      name={text}
                      checked={filters.category.includes(text)}
                      onChange={handleChange}
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
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
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
