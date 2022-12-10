import React from "react";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

import useStyles from "../styles/layout";
import SideBar from "../Components/Sidebar";

function DefaultLayout(props: any) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <SideBar />
      </div>
      <div className={classes.container}>
        <div className={classes.navbarWrapper}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <Typography component="div">
            <Grid component="label" container alignItems="center" spacing={1}>
              <Grid item>En</Grid>
              <Grid item>
                <Switch />
              </Grid>
              <Grid item>Fr</Grid>
            </Grid>
          </Typography>
          <div className={classes.avatarWrapper}>
            <Avatar
              alt="Remy Sharp"
              src="https://firebasestorage.googleapis.com/v0/b/shopmyinfluens.appspot.com/o/shopmyinfluens%2FBrands%2Fclassic_brands%2Fkiabi_512.jpg?alt=media"
            />
            <h6>Name</h6>
          </div>
        </div>
        <div className={classes.child}>{props.children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
