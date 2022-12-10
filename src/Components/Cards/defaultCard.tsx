import React from "react";
import { IDefaultCard } from "../../interfaces/card.interface";

import useStyles from "../../styles/components/Cards/defaultCard";

function DefaultCard(props: IDefaultCard) {
  const { icon, count, name, color } = props;
  const classes = useStyles({ color });
  return (
    <div className={classes.root}>
      <div>{icon}</div>
      <div>
        <h3>{name}</h3>
        <h5>{count}</h5>
      </div>
    </div>
  );
}

export default DefaultCard;
