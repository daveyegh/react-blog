import React from "react";

import { useAuth } from "../firebase";

import { Typography } from "@mui/material";

import ProfilePic from "../images/user-profile-icon.png";

import "./userProfile.css";

export default function UserProfile() {
  const currentUser = useAuth();
  return (
    <div className="user-profile">
      <div className="user-profile-container container">
        <div className="user-profile-inner">
          <div className="user-profile-text">
            <Typography component="h3" variant="h3">
              User Profile
            </Typography>
          </div>
          <div className="user-profile-row">
            <div className="user-profile-info">
              <div className="user-profile-avatar">
                <img src={ProfilePic} />
              </div>
              <div className="user-profile-about">
                <Typography variant="h5" component="h5">
                  About {currentUser?.email}
                </Typography>
                <Typography variant="h6" component="p">
                  Email is Verified: {currentUser?.emailVerified ? "No" : "Yes"}
                </Typography>
                <Typography variant="h6" component="p">
                  Created at: {currentUser?.metadata?.creationTime}
                </Typography>
                <Typography variant="h6" component="p">
                  Last Seen: {currentUser?.metadata?.lastSignInTime}
                </Typography>
                <Typography variant="h6" component="p">
                  UID: {currentUser?.uid}
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
