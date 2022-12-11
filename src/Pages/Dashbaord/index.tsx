import React, { useEffect } from "react";
import EuroIcon from "@material-ui/icons/Euro";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import GroupIcon from "@material-ui/icons/Group";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import MoneyIcon from "@material-ui/icons/Money";
import { observer } from "mobx-react";
import { useParams } from "react-router-dom";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import DefaultCard from "../../Components/Cards/defaultCard";
import useStyles from "../../styles/pages/dashboard";
import { useGlobalContext } from "../../context";
import DefaultTable from "../../Components/Table";

const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 },
];

const dataChart = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

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
      <div className={classes.statBlock}>
        <div className={classes.chartBlock}>
          <h6>Sales Statistics</h6>
          <div className={classes.chartContainer}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                width={300}
                height={400}
                data={dataChart}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="uv"
                  stackId="1"
                  stroke="#8884d8"
                  fill="#8884d8"
                />
                <Area
                  type="monotone"
                  dataKey="pv"
                  stackId="1"
                  stroke="#82ca9d"
                  fill="#82ca9d"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className={classes.chartBlock}>
          <h6>Top 10 products</h6>
          <div className={classes.pieChartContainer}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart width={400} height={400}>
                <Pie
                  dataKey="value"
                  isAnimationActive={false}
                  data={data01}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      {/* Table */}
      <div>
        <div className={classes.tableWrrapper}>
          <DefaultTable />
        </div>
      </div>
    </div>
  );
});

export default Dashboard;
