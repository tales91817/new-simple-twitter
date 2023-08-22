import React from "react";
import "./feed.css";
import TweetBox from "./TweetBox/TweetBox";
import Post from "./Post/Post";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed_header">
        <h2>Home</h2>
      </div>

      <TweetBox />

      <Post />
    </div>
  );
};

export default Feed;
