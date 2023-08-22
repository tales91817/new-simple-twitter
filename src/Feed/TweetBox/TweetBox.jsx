import "./tweetBox.css";
import { Button } from "@material-ui/core";

const TweetBox = () => {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <img
            src="https://memeprod.sgp1.digitaloceanspaces.com/user-wtf/1678966811363.jpg"
            alt="avatar"
          />
          <input type="text" placeholder="What's happening" />
        </div>
        <input
          type="text"
          className="tweetBox_imageInput"
          placeholder="Enter image URL"
        />

        <Button className="tweetBox_tweetButton">Tweet</Button>
      </form>
    </div>
  );
};

export default TweetBox;
