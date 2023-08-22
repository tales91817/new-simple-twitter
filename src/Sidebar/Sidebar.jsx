import React from "react";
import SidebarOption from "./SidebarOption/SidebarOption";
import "./sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Button } from "@material-ui/core";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar_twitterIcon" />

      <SidebarOption active text="Home" />
      <SidebarOption text="Explore" />
      <SidebarOption text="Notifications" />
      <SidebarOption text="Messages" />
      <SidebarOption text="Bookmarks" />
      <SidebarOption text="Lists" />
      <SidebarOption text="Profile" />
      <SidebarOption text="More" />

      <Button variant="outlined" className="sidebar_tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
};

export default Sidebar;
