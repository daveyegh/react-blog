import * as React from "react";
import { Link } from "react-router-dom";

import { useAuth, handleLogout } from "../../firebase";


import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Menu, MenuItem } from "@mui/material";


import "./Header.css";

export default function Header() {
  const currentUser = useAuth();
  const [openDropdown, setOpenDropdown] = React.useState(false);
  return (
    <header>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
            </IconButton>
            <div className="header-wrapper">
              <Link className="header-logo" to="/">
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  react-blog
                </Typography>
              </Link>
              <div className="header-menu">
                {!currentUser ? (
                  <div className="header-links">
                    <Link className="login" to="/login">
                      <Button color="inherit">Login</Button>
                    </Link>

                    <Link className="login" to="/register">
                      <Button color="inherit">Register</Button>
                    </Link>
                  </div>
                ) : null}
              </div>
              {currentUser ? (
                <div className="header-user">
                  <Typography
                    component="h6"
                    className="user-text"
                    onClick={() => {
                      setOpenDropdown(true);
                    }}
                  >
                    {currentUser?.email}
                  </Typography>
                  <div className="user-dropdown">
                    <Menu
                      id="simple-menu"
                      open={openDropdown}
                      onClose={() => {
                        setOpenDropdown(false);
                      }}
                    >
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        to="/user-profile"
                      >
                        <MenuItem>My Profile</MenuItem>
                      </Link>
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        to="/create-post"
                      >
                        <MenuItem>Create Post</MenuItem>
                      </Link>
                      <MenuItem
                        onClick={() => {
                          handleLogout();
                          setOpenDropdown(false);
                        }}
                      >
                        Logout
                      </MenuItem>
                    </Menu>
                  </div>
                </div>
              ) : null}
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
}
