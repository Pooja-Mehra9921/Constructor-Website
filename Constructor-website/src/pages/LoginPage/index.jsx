import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import Tooltip from "@mui/material/Tooltip";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { Visibility, VisibilityOffOutlined } from "@mui/icons-material";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";
import "./style.css";
import Header from "../../component/Header";
import Logo from "../../images/logo.png";
import Footer from "../../component/Footer";

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [isSubmit, setIsSubmit] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false); // New state for toggling views
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState(""); // State for forgot password email
  const [isForgotSubmit, setIsForgotSubmit] = useState(false); // State for forgot password validation

  // Mock registered emails
  const REGISTERED_EMAILS = ["pooja@gmail.com"];

  const STATIC_CREDENTIALS = {
    email: "pooja@gmail.com",
    password: "pooja123",
  };

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    setIsSubmit(true);
    setErrorMessage("");
    setSuccessMessage("");

    if (!captchaVerified) {
      setErrorMessage("Please complete the CAPTCHA verification.");
      return;
    }

    if (
      loginData.email === STATIC_CREDENTIALS.email &&
      loginData.password === STATIC_CREDENTIALS.password
    ) {
      setSuccessMessage("Login successful!");
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } else {
      setErrorMessage("Invalid email or password. Please try again.");
    }
  };

  const handleForgotPasswordSubmit = () => {
    setIsForgotSubmit(true);
    setErrorMessage("");
    setSuccessMessage("");

    if (forgotPasswordEmail.length <= 5 || !forgotPasswordEmail.includes("@")) {
      setErrorMessage("Please enter a valid email.");
      return;
    }

    if (!REGISTERED_EMAILS.includes(forgotPasswordEmail)) {
      setErrorMessage("This email is not registered. Please enter a valid registered email.");
      return;
    }

    setSuccessMessage("Password reset link sent to your email!");
  };

  const handleChange = (type) => (event) => {
    setLoginData({ ...loginData, [type]: event.target.value });
  };

  const handleForgotPasswordChange = (event) => {
    setForgotPasswordEmail(event.target.value);
  };

  const handleCaptcha = (value) => {
    setCaptchaVerified(!!value);
  };

  const emailErr = isSubmit && loginData.email.length <= 5;
  const passErr = isSubmit && loginData.password.length <= 6;
  const forgotEmailErr =
    isForgotSubmit && (forgotPasswordEmail.length <= 5 || !forgotPasswordEmail.includes("@"));

  return (
    <>
      <Header />
      <Box className="main-body-container">
        <Box className="body-container">
          {/* Left Section with Logo */}
          <Box className="left-section">
            <Box className="left-logo">
              <img src={Logo} alt="Company Logo" className="company-logo" />
              <Typography className="company-name">Company Name</Typography>
              <Typography className="company-slogan">
                This is a dummy text for the company slogan
              </Typography>
            </Box>
          </Box>

          {/* Right Section with Login Form or Forgot Password */}
          <Box className="right-section">
            <Paper elevation={5} className="form-container">
              {showForgotPassword ? (
                // Forgot Password Section
                <>
                  <Typography variant="h5" className="form-title">
                    Forgot Password
                  </Typography>
                  <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    size="small"
                    margin="normal"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <EmailOutlinedIcon />
                        </InputAdornment>
                      ),
                    }}
                    onChange={handleForgotPasswordChange}
                    error={forgotEmailErr || !!errorMessage}
                    helperText={forgotEmailErr ? "Please enter a valid email." : errorMessage}
                  />
                  <Box className="login-btn-container">
                    <Chip
                      className="submit-btn"
                      label="Reset Password"
                      onClick={handleForgotPasswordSubmit}
                    />
                  </Box>
                  <Typography
                    className="forgot-password"
                    onClick={() => setShowForgotPassword(false)}
                  >
                    Back to Login
                  </Typography>
                  {successMessage && (
                    <Typography className="success-message">{successMessage}</Typography>
                  )}
                </>
              ) : (
                // Login Form
                <>
                  <Typography variant="h5" className="form-title">
                    Admin Login
                  </Typography>
                  <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    size="small"
                    margin="normal"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <EmailOutlinedIcon />
                        </InputAdornment>
                      ),
                    }}
                    onChange={handleChange("email")}
                    error={emailErr}
                    helperText={emailErr && "Please enter a valid email."}
                  />
                  <TextField
                    fullWidth
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    variant="outlined"
                    size="small"
                    margin="normal"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handlePasswordToggle}>
                            {showPassword ? <Visibility /> : <VisibilityOffOutlined />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    onChange={handleChange("password")}
                    error={passErr}
                    helperText={passErr && "Please enter a valid password."}
                  />
                  <Typography
                    className="forgot-password"
                    onClick={() => setShowForgotPassword(true)}
                  >
                    Forgot Password?
                  </Typography>
                  <ReCAPTCHA
                    sitekey="6LfHmZcqAAAAAO52aZvUVFAiz1nWuCStsAtcgKOz"
                    onChange={handleCaptcha}
                    className="recaptcha-container"
                  />
                  <Tooltip title="Ensure all fields are valid.">
                    <Box className="login-btn-container">
                      <Chip
                        className="submit-btn"
                        label="Login"
                        onClick={handleLogin}
                        disabled={emailErr || passErr || !captchaVerified}
                      />
                    </Box>
                  </Tooltip>

                  {errorMessage && (
                    <Typography className="error-message">{errorMessage}</Typography>
                  )}
                  {successMessage && (
                    <Typography className="success-message">{successMessage}</Typography>
                  )}
                </>
              )}
            </Paper>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default LoginPage;

