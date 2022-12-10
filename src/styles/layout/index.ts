import { makeStyles, Theme, alpha } from "@material-ui/core";

export default makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    alignItems: "flex-start",
    width: "85vw",
  },
  navbarWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  container: {
    flexDirection: "column",
    position: "relative",
  },
  search: {
    position: "relative",
    borderRadius: 20,
    backgroundColor: "white",
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "40vw",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  avatarWrapper: {
    display: "flex",
    alignItems: "center",
    "& h6": {
      marginLeft: 10,
    },
  },
  child: {
    marginTop: 40,
  },
}));
