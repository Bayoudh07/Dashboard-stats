import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

function createData(name: string, sales: string, salesNumber: string) {
  return { name, sales, salesNumber };
}

const rows = [
  createData("Frozen", "55478$", "454"),
  createData("Ice cube", "9988$", "854"),
  createData("Eclair", "5688$", "9663"),
  createData("CupcDone", "98896$", "365"),
  createData("King", "78988$", "1588"),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function DefaultTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell>Top 5 Influencers</TableCell>
            <TableCell align="right">Sales</TableCell>
            <TableCell align="right">Sales Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.sales}</TableCell>
              <TableCell align="right">{row.salesNumber}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
