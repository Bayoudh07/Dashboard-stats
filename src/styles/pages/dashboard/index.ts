import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  root: {
    background: "#c7eeff",
    height: "100vh",
  },
  cardsWrapper: {
    display: "flex",
    justifyContent: "space-around",
    width: "80vw",
  },
  statBlock: {
    display: "flex",
    marginTop: 50,
  },
  chartBlock: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& h6": {
      fontSize: 18,
    },
  },
  chartContainer: {
    height: 200,
    margin: 15,
    borderRadius: 8,
    padding: 15,
    backgroundColor: "white",
    width: "44vw",
  },
  pieChartContainer: {
    height: 200,
    margin: 15,
    borderRadius: 8,
    padding: 15,
    backgroundColor: "white",
    width: "25vw",
  },
  tableWrrapper: {
    padding: 20,
    width: "46vw",
  },
}));
