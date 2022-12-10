import React from "react";
import { IconButton } from "@material-ui/core";
import TvIcon from "@material-ui/icons/Tv";
import GroupIcon from "@material-ui/icons/Group";
import TimelineIcon from "@material-ui/icons/Timeline";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";

import useStyles from "../../styles/components/Sidebar/index";

function SideBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.logoContainer}>
        <h3>Shop my</h3>
        <h2>INFLUENCE</h2>
      </div>
      <IconButton>
        <TvIcon />
        <h4>Dashboard</h4>
      </IconButton>
      <IconButton>
        <GroupIcon />
        <h4>Influencers</h4>
      </IconButton>
      <IconButton>
        <TimelineIcon />
        <h4>Statistics</h4>
      </IconButton>
      <IconButton>
        <PowerSettingsNewIcon />
        <h4>Log out</h4>
      </IconButton>
    </div>
  );
}

export default SideBar;
