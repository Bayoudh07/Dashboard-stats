import { makeStyles, Theme } from "@material-ui/core";

export default makeStyles(() => ({
  root: {
    display: "flex",
    alignItems: "center",
    paddingLeft: 20,
    width: "12vw",
    background: "white",
    position: "relative",
    borderRadius: 20,
    "& .MuiSvgIcon-root": {
      fontSize: "3.5rem",
      color: (props: any) => props.color,
    },
    "& div": {
      marginLeft: 10,
    },
  },
}));
