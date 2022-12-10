import React, { useEffect } from "react";
import EuroIcon from "@material-ui/icons/Euro";

import DefaultCard from "../../Components/Cards/defaultCard";
import useStyles from "../../styles/pages/dashboard";
import { useGlobalContext } from "../../context";

function Dashboard() {
  const classes = useStyles();
  const { brandStore } = useGlobalContext();
  useEffect(() => {
    brandStore.getBrandStore();
  }, []);

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
