import React from "react";

import { Typography } from "@mui/material";
import TodayIcon from "@mui/icons-material/Today";

import "./Post.css";

export default function Post({ title, content, time }) {
  return (
    <div className="post">
      <div className="post-inner">
        <div className="post-top">
          <div className="post-title">
            <Typography className="post-name" variant="h5" component="h5">
              {title}
            </Typography>
            <Typography className="post-date" variant="h6" component="h6">
              <TodayIcon />
              {new Date(time).toLocaleDateString()}
            </Typography>
          </div>
        </div>
        <Typography
          dangerouslySetInnerHTML={{ __html: content }}
          variant="h6"
          component="h6"
        />
      </div>
    </div>
  );
}
