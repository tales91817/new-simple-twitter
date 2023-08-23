import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import "./feed.scss";
import TweetBox from "Feed/TweetBox/TweetBox";
import Post from "Feed/Post/Post";
import { db } from "firebase.utils";
import FlipMove from "react-flip-move";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  console.log(posts);

  useEffect(() => {
    try {
      const postList = async () => {
        const postsCol = collection(db, "posts");
        const postSnapshot = await getDocs(postsCol);
        setPosts(postSnapshot.docs.map((doc) => doc.data()));
      };

      postList();

      console.log("effected!");
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="feed">
      <div className="feed_header">
        <h2>Home</h2>
      </div>
      <TweetBox />

      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
