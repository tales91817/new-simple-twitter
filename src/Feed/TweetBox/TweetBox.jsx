import { useState } from "react";
import "./tweetBox.scss";
import { Button } from "@material-ui/core";
import { db } from "firebase.utils";
import { collection, addDoc } from "firebase/firestore";

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const addPost = async function add() {
    await addDoc(collection(db, "posts"), {
      displayName: "Xi Jing Ping",
      username: "xijingping",
      verified: false,
      text: tweetMessage,
      avatar:
        "https://memeprod.sgp1.digitaloceanspaces.com/user-wtf/1678966811363.jpg",
      image: tweetImage,
    });
  };

  const setTweet = (e) => {
    e.preventDefault();

    addPost();

    setTweetMessage("");
    setTweetImage("");
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <img
            src="https://memeprod.sgp1.digitaloceanspaces.com/user-wtf/1678966811363.jpg"
            alt="avatar"
          />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            type="text"
            placeholder="What's happening"
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          type="text"
          className="tweetBox_imageInput"
          placeholder="Enter image URL"
        />

        <Button
          onClick={setTweet}
          type="submit"
          className="tweetBox_tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
