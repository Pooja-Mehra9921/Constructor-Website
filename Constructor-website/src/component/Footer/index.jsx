import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%", // Ensures full width
        backgroundColor: "black", // Same color as the header
        color: "#fff", // White text for readability
        padding: "10px 20px", // Padding for spacing
        position: "relative", // Ensures it stays at the bottom
        textAlign: "center", // Center-align text
      }}
    >
      <Typography variant="body2">
        © 2024 Your Company Name. All Rights Reserved.
      </Typography>
      <Typography variant="body2">
        Privacy Policy | Terms of Service | Contact Us
      </Typography>
    </Box>
  );
};

export default Footer;