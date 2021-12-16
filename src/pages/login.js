import React, { useState } from "react";

import { signIn, useAuth } from "../firebase";

import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";

import "./login.css";

function Login() {
  const currentUser = useAuth();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputs = (value, setValue) => {
    if (typeof value !== "undefined") {
      setValue(value);
      console.log(value);
    } else {
      return null;
    }
  };

  return (
    <div className="login-page page">
      <div className="login-wrapper">
        <Typography variant="h4" component="h4">
          Login
        </Typography>
        <div className="login-form">
          <TextField
            onChange={(e) => handleInputs(e.target.value, setEmail)}
            disabled={loading || currentUser}
            id="standard-basic"
            label="Email"
            variant="standard"
            type="email"
          />
          {/* <TextField id="standard-basic" label="Email" variant="standard" /> */}
          <TextField
            onChange={(e) => handleInputs(e.target.value, setPassword)}
            disabled={loading || currentUser}
            id="standard-basic"
            label="Password"
            variant="standard"
            type="password"
          />
          
          <Button
            variant="outlined"
            disabled={loading || currentUser}
            onClick={() => {
              signIn(email, password);
              setLoading(true);
            }}
          >
            Log In
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
