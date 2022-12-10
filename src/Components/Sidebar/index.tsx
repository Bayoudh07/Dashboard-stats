import React from "react";
import { IconButton } from "@material-ui/core";
import TvIcon from "@material-ui/icons/Tv";
import GroupIcon from "@material-ui/icons/Group";
import TimelineIcon from "@material-ui/icons/Timeline";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";

import useStyles from "../../styles/components/Sidebar/index";
import { EPath } from "../../routes/ePaths.enum";

const checkPath = (path: EPath, location: any) => {
  if (location.toString().includes(path.toString())) {
    return true;
  } else {
    return false;
  }
};

function SideBar() {
  console.log(
    "indow.location.pathname =====<",
    checkPath(EPath.DASHBOARD, window.location.pathname)
  );
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.logoContainer}>
        <h3>Shop my</h3>
        <h2>INFLUENCE</h2>
      </div>
      <IconButton
        className={
          checkPath(EPath.DASHBOARD, window.location.pathname)
            ? classes.isSelected
            : ""
        }
      >
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
