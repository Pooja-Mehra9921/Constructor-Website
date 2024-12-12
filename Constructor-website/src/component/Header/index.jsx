import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React from "react";
import logo from "../../images/logo.png"

const Header =()=>{
    return(
        <>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{backgroundColor:"white", padding:"5px", boxShadow:"0px 0px 20px grey"}} position="static">
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
    </Box>
        </>
    )
};

export default Header;