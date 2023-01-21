import React from "react";
import { GlobalStyle } from "./GlobalStyle";
import { GlobalState } from "./providers/GlobalState";
import Router from "./router/Router";

function App() {
  return (
    <GlobalState>
      <GlobalStyle />
      <Router />
    </GlobalState>
  );
}

export default App;
