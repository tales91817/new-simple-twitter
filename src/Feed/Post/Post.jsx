import React from "react";
import "./post.css";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

const Post = ({ displayName, username, verified, text, image, avatar }) => {
  return (
    <div className="post">
      <div className="post_avatar">
        <img
          src="https://memeprod.sgp1.digitaloceanspaces.com/user-wtf/1678966811363.jpg"
          alt="avatar"
        />
      </div>
      <div className="post_body">
        <div className="post_header">
          <div className="postHeaderText">
            <h3>
              Xi Chairman{" "}
              <span className="post_headerAccout">
                <VerifiedUserIcon className="post_badge" />
                @Xijingping
              </span>
            </h3>
          </div>
          <div className="post_headerDescription">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptas, provident omnis eius laudantium labore impedit,
              doloremque veniam incidunt cupiditate architecto sint amet
              accusamus earum debitis repellendus! Ab nam nihil vero?
            </p>
          </div>
        </div>
        <img
          src="data:image/jpeg;base64,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"
          alt="Xi chairman"
        />
        <div className="post_footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
};

export default Post;
