import React from "react";
import DefaultCard from "./Components/Cards/defaultCard";
import EuroIcon from "@material-ui/icons/Euro";
import Dashboard from "./Pages/Dashbaord";
import DefaultLayout from "./Layout";
import SideBar from "./Components/Sidebar";
import RouterComponent from "./routes";
import { GlobalContextProvider } from "./context";

function App() {
  return (
    <div style={{ background: "#c7eeff" }}>
      <GlobalContextProvider>
        <RouterComponent />
      </GlobalContextProvider>
    </div>
  );
}

export default App;
