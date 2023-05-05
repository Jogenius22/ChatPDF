import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { GoogleLogin } from "react-google-login";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  const handleLoginSuccess = (response) => {
    // TODO: Authenticate with the backend
    // Redirect to the main page
    router.push("/");
  };

  const handleLoginFailure = (error) => {
    console.error("Google Login Failed:", error);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          ChatPDF
        </Typography>
        <GoogleLogin
          clientId="YOUR_GOOGLE_CLIENT_ID"
          buttonText="Login with Google"
          onSuccess={handleLoginSuccess}
          onFailure={handleLoginFailure}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
