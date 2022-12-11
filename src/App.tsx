import React from "react";
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
