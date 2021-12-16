import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Post from "../components/Post/Post";
import { getDataFromFireStore } from "../firebase";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPostsData() {
      const posts = await getDataFromFireStore();
      setPosts(posts);
    }
    getPostsData();
  }, []);
  return (
    <div className="posts container">
      <div className="posts-text">
        <Typography variant="h4" component="h3">
          Posts
        </Typography>
      </div>
      <div className="posts-items">
        {posts.length > 0 ? (
          posts.map((post) => {
            return (
              <Post
                time={post.time}
                title={post?.title}
                content={post?.content}
              />
            );
          })
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress />
          </Box>
        )}
      </div>
    </div>
  );
}
