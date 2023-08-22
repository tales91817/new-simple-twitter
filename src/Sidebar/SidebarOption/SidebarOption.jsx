import React from "react";
import "./sidebarOption.css";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const SidebarOption = ({ active, text, Icon }) => {
  return (
    <div className={`sidebarOption ${active && "sidebarOption_active"}`}>
      {text === "Home" ? <HomeIcon className="sidebarOptionIcon" /> : null}
      {text === "Explore" ? <SearchIcon className="sidebarOptionIcon" /> : null}
      {text === "Notifications" ? (
        <NotificationsNoneIcon className="sidebarOptionIcon" />
      ) : null}
      {text === "Messages" ? (
        <MailOutlineIcon className="sidebarOptionIcon" />
      ) : null}
      {text === "Bookmarks" ? (
        <BookmarkBorderIcon className="sidebarOptionIcon" />
      ) : null}
      {text === "Lists" ? <ListAltIcon className="sidebarOptionIcon" /> : null}
      {text === "Profile" ? (
        <PermIdentityIcon className="sidebarOptionIcon" />
      ) : null}
      {text === "More" ? <MoreHorizIcon className="sidebarOptionIcon" /> : null}
      <h2>{text}</h2>
    </div>
  );
};

export default SidebarOption;
