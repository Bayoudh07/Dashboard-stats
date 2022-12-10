import { makeStyles, Theme } from "@material-ui/core";

export default makeStyles((theme: Theme) => ({
  root: {
    width: "18vw",
    height: "100vh",
    background: "white",
    display: "flex",
    flexDirection: "column",
    borderEndEndRadius: "1px solid red",
    "& .MuiIconButton-root": {
      cursor: "pointer",
      display: "flex",
      height: 60,
      color: "black",
      margin: "20px 0px 0px 0px",
      alignItems: "center",
      borderRadius: 0,
      "& h4": {
        marginLeft: 10,
        marginBottom: 20,
        fontSize: 18,
      },
      "& :hover": {
        color: "#e00078",
      },
    },
    "& .MuiButtonBase-root.MuiIconButton-root": {
      borderTopRightRadius: 30,
      borderBottomRightRadius: 30,
    },
    "& .MuiButtonBase-root.MuiIconButton-root:hover": {
      background: "rgb(255,217,238)",
      borderTopRightRadius: 30,
      borderBottomRightRadius: 30,
    },
  },
  logoContainer: {
    marginTop: 20,
    alignSelf: "center",
    "& h3": {
      fontStyle: "italic",
      color: "#de8900",
    },
    "& h2": {
      marginTop: -30,
    },
  },
  isSelected: {
    "&.MuiIconButton-root": {
      color: "red",
      borderRight: `3px solid green`,
    },
  },
}));
