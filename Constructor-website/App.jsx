import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./src/pages/LoginPage";
import ForgotPassword from "./src/component/ForgetPassword";
import SignupPage from "./src/pages/SignupPage";
import Dashboard from "./src/pages/Dashboard";




const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/forgetpassword" element={<ForgotPassword />} />
          <Route exact path="/dashboard" element={<Dashboard/>} />
          <Route exact path="/signup" element={<SignupPage />} />
      
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
