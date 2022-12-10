import React from "react";
import EuroIcon from "@material-ui/icons/Euro";

import DefaultCard from "../../Components/Cards/defaultCard";
import useStyles from "../../styles/pages/dashboard";

function Dashboard() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.cardsWrapper}>
        <DefaultCard
          icon={<EuroIcon />}
          name="Sales"
          count={2555220}
          color={"green"}
        />
        <DefaultCard
          icon={<EuroIcon />}
          name="Sales"
          count={2555220}
          color={"green"}
        />
        <DefaultCard
          icon={<EuroIcon />}
          name="Sales"
          count={2555220}
          color={"green"}
        />
        <DefaultCard
          icon={<EuroIcon />}
          name="Sales"
          count={2555220}
          color={"green"}
        />
        <DefaultCard
          icon={<EuroIcon />}
          name="Sales"
          count={2555220}
          color={"green"}
        />
        <DefaultCard
          icon={<EuroIcon />}
          name="Sales"
          count={2555220}
          color={"green"}
        />
      </div>
    </div>
  );
}

export default Dashboard;
