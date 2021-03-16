import React from "react";
import useInitialState from "./hooks/useInitialState";
import App from "./containers/App";
import AppContext from "./context";
function Init() {
  const initialState = useInitialState();
  return (
    <div>
      {" "}
      <AppContext.Provider value={initialState}>
        <App />
      </AppContext.Provider>
    </div>
  );
}

export default Init;
