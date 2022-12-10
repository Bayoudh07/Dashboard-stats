import React from "react";

import useStyles from "../../styles/components/Cards/defaultCard";

function DefaultCard() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>Icon</div>
      <div>
        <h3>Sales</h3>
        <h5>4545554</h5>
      </div>
    </div>
  );
}

export default DefaultCard;
