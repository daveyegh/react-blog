import React, { useState, useRef } from "react";

import { sendDataToFireStore, useAuth } from "../firebase";

import { Alert, Button, TextField, Typography } from "@mui/material";

import JoditEditor from "jodit-react";

import "./createPost.css";

function CreatePost() {
  const editor = useRef(null);
  const currentUser = useAuth();
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [buttonLoader, setButtonLoader] = useState(false);

  const config = {
    readonly: false,
  };

  const hideAlert = () => {
    setTimeout(() => {
      setButtonLoader(false);
    }, 3000);
  };

  return (
    <div className="create-post container">
      <div className="create-post-text">
        <Typography component="h4" variant="h3">
          Create Post
        </Typography>
      </div>
      <TextField
        type="text"
        variant="filled"
        label="Post Title"
        style={{ width: "100%" }}
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <div className="create-post-editor">
        <JoditEditor
          ref={editor}
          value={content}
          config={config}
          tabIndex={1}
          onBlur={(newContent) => setContent(newContent)}
        />
      </div>
      <div className="create-post-alert">
        {!buttonLoader ? null : (
          <Alert severity="success">Successfuly posted!</Alert>
        )}
      </div>
      <div className="create-post-buttons">
        <Button
          onClick={() => {
            if (title !== "" && content !== "") {
              sendDataToFireStore(title, content, currentUser?.email);
              setTitle("");
              setButtonLoader(true);
              setContent("");
              hideAlert();
            }
          }}
          variant="contained"
          color="success"
          style={{ marginRight: 15 }}
        >
          Apply
        </Button>
        <Button
          onClick={() => {
            setTitle("");
            setContent("");
          }}
          variant="contained"
          color="error"
        >
          Restore all values
        </Button>
      </div>
    </div>
  );
}

export default CreatePost;
