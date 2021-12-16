import React, { useState } from "react";
import { signUp, useAuth } from "../firebase";
import { Link } from "react-router-dom";

import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";

import "./login.css";

function Register() {
  const currentUser = useAuth();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputs = (value, setValue) => {
    if (value !== "") {
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
          Register
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
          <TextField
            onChange={(e) => handleInputs(e.target.value, setPassword)}
            disabled={loading || currentUser}
            id="standard-basic"
            label="Password"
            variant="standard"
            type="password"
          />
          <Link to="/posts" style={{ textDecoration: "none", color: "white" }}>
            <Button
              variant="outlined"
              disabled={loading || currentUser}
              onClick={() => {
                signUp(email, password);
                setLoading(true);
              }}
            >
              Register
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
