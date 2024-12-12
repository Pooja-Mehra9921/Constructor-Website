import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(""); // For displaying validation errors

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
    return emailRegex.test(email);
  };

  const handleResetPassword = () => {
    if (!email) {
      setError("Email is required.");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Clear error and proceed with password reset
    setError("");
    console.log(`Password reset link sent to: ${email}`);
    alert("Password reset link sent!");
  };

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "100px",
      }}
    >
      <Typography variant="h5" style={{ marginBottom: "20px" }}>
        Reset Your Password
      </Typography>
      <TextField
        label="Enter your email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: "300px", marginBottom: "10px" }}
        error={!!error} // Set error state
        helperText={error} // Display error message
      />
      <Button variant="contained" onClick={handleResetPassword}>
        Send Reset Link
      </Button>
    </Box>
  );
};

export default ForgotPassword;
