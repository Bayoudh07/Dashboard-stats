import React, { useEffect } from "react";
import EuroIcon from "@material-ui/icons/Euro";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import GroupIcon from "@material-ui/icons/Group";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import MoneyIcon from "@material-ui/icons/Money";
import { observer } from "mobx-react";
import { useParams } from "react-router-dom";

import DefaultCard from "../../Components/Cards/defaultCard";
import useStyles from "../../styles/pages/dashboard";
import { useGlobalContext } from "../../context";
import DefaultTable from "../../Components/Table";

const Dashboard = observer(() => {
  const classes = useStyles();
  const { brandStore } = useGlobalContext();
  const params = useParams<any>();
  useEffect(() => {
    brandStore.getBrandStore(params.id || "");
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.cardsWrapper}>
        <DefaultCard
          icon={<EuroIcon />}
          name="Sales"
          count={brandStore.brand.sales}
          color={"orange"}
        />
        <DefaultCard
          icon={<ShoppingBasketIcon />}
          name="Sales Number"
          count={brandStore.brand.salesNumber}
          color={"green"}
        />
        <DefaultCard
          icon={<GroupIcon />}
          name="Influencers"
          count={brandStore.brand.influencers}
          color={"blue"}
        />
        <DefaultCard
          icon={<LocalAtmIcon />}
          name="Commission"
          count={brandStore.brand.commission}
          color={"purple"}
        />
        <DefaultCard
          icon={<AttachMoneyIcon />}
          name="Influencers Commission"
          count={brandStore.brand.influencersCommission}
          color={"blue"}
        />
        <DefaultCard
          icon={<MoneyIcon />}
          name="Sold products number"
          count={brandStore.brand.soldProductsNumber}
          color={"red"}
        />
      </div>
      {/* statistics */}
      <div></div>
      {/* Table */}
      <div>
        <div>{/* <DefaultTable /> */}</div>
      </div>
    </div>
  );
});

export default Dashboard;
