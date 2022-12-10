import React from "react";
import DefaultCard from "./Components/Cards/defaultCard";
import SideBar from "./Components/Sidebar";
import EuroIcon from "@material-ui/icons/Euro";
import logo from "./logo.svg";

function App() {
  return (
    <div>
      {/* <SideBar /> */}
      <DefaultCard
        icon={<EuroIcon />}
        name="Sales"
        count={2555220}
        color={"green"}
      />
    </div>
  );
}

export default App;
