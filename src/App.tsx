import React from "react";
import RouterComponent from "./routes";
import { GlobalContextProvider } from "./context";

function App() {
  return (
    <div>
      <GlobalContextProvider>
        <RouterComponent />
      </GlobalContextProvider>
    </div>
  );
}

export default App;
