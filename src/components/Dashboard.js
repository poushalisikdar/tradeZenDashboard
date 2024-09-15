import React from "react";

import WatchList from "./WatchList";
import Summary from "./sumary";

import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Funds from "./Funds";
import Apps from "./Apps";
import { Route, Routes } from "react-router-dom";
import { GeneralContextProvider } from "./GeneralContext";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>

      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
}
