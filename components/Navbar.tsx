import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import Login from "./Login";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          ChatPDF
        </Typography>
        <Login />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
