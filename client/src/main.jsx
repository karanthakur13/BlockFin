import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";
import App from "./App";
import { StateContextProvider } from "./context";
import { RewardContextProvider } from "./context/reward";
import { Provider } from "react-redux";
import { store } from "./Store/Store.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <ThirdwebProvider activeChain={Sepolia}>
      <StateContextProvider>
        <RewardContextProvider>
        <Provider store={store}>
          <App />
        </Provider>
        </RewardContextProvider>
      </StateContextProvider>
    </ThirdwebProvider>
  </Router>
);
