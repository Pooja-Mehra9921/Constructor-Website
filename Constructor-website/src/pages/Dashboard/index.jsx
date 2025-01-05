import React, { useState } from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import CssBaseline from "@mui/material/CssBaseline";
import { Divider, IconButton } from "@mui/material";
import Plan2D from "../../component/2DPlan";
import Plan3D from "../../component/3DPlan";
import Estimation from "../../component/EstimationCalculation";
import TermsConditions from "../../component/TermsCondition";
import logo from "../../images/logo.png"


const drawerWidth = 240;

// Components for Default Home
const Home = () => <Typography variant="h6">Welcome to the Home Page!</Typography>;


const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Home");

  // Mapping components to tabs
  const tabs = {
    Home: <Home />,
    "2D Plan": <Plan2D />,
    "3D Plan": <Plan3D />,
    "Estimation Calculator": <Estimation />,
    "Terms & Condition": <TermsConditions />
  };

  return (
    <Box sx={{ display: "flex"}}>
      <CssBaseline />

      {/* Header */}
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "white",
        }}
      >
        <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <img style={{height:"50px"}} className="logo" src={logo} alt="logo" />
          </IconButton>
          <Typography variant="h6" color="#0082c9" component="div">
            Company Name
            <Typography>
            This is s dummy text for company slogan
            </Typography>
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
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
        <Divider />
        <List>
          {["Home", "2D Plan", "3D Plan", "Estimation Calculator", "Terms & Condition"].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                selected={activeTab === text}
                onClick={() => setActiveTab(text)}
              >
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        {/* Footer in Sidebar */}
        <Box sx={{ p: 2, mt: "auto", textAlign: "center" }}>
          <Typography variant="body2">© 2025 Your Company</Typography>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: "#f9f9f9",
          minHeight: "100vh",
        }}
      >
        <Toolbar />
        {tabs[activeTab]}
      </Box>
    </Box>
  );
};

export default Dashboard;
