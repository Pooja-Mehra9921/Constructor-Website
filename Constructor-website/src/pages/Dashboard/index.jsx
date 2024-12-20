import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Footer from "../../component/Footer";
import logo from "../../images/logo.png";
import { IconButton } from "@mui/material";

const drawerWidth = 240;

const Dashboard = () => {
  return (
    <>
     <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
  <CssBaseline />
  {/* Header */}
  <AppBar
    position="fixed"
    sx={{
      zIndex: (theme) => theme.zIndex.drawer + 1,
      backgroundColor: "#2196f3",
      color: "#fff",
      width: "100%",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    }}
  >
    <Toolbar style={{ backgroundColor: "white" }} variant="dense">
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <img style={{ height: "50px" }} className="logo" src={logo} alt="logo" />
      </IconButton>
      <Typography variant="h6" color="#0082c9" component="div">
        Company Name
        <Typography>This is a dummy text for company slogan</Typography>
      </Typography>
    </Toolbar>
  </AppBar>

  {/* Main Content */}
  <Box sx={{ display: "flex", flex: 1, marginTop: "64px" }}>
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {[
            "HomePage",
            "2D Plan",
            "3D Plan",
            "Estimation Calculator",
            "Terms and Conditions",
          ].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>

    {/* Main Content */}
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        backgroundColor: "#f9f9f9",
      }}
    >
      <Toolbar />
      <Typography variant="h6" gutterBottom>
        Welcome to the Dashboard
      </Typography>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
    </Box>
  </Box>

  {/* Footer */}
  <Footer />
</Box>

    </>
  );
};

export default Dashboard;
