import { makeStyles, Theme } from "@material-ui/core";

export default makeStyles(() => ({
  root: {
    display: "flex",
    alignItems: "center",
    paddingLeft: 1,
    paddingRight: 18,
    width: "10.5vw",
    background: "white",
    position: "relative",
    borderRadius: 20,
    "& h3": {
      fontSize: 16,
    },
    "& .MuiSvgIcon-root": {
      fontSize: "3.5rem",
      color: (props: any) => props.color,
    },
    "& div": {
      marginLeft: 10,
    },
  },
}));
