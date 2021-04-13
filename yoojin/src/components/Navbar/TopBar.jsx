import React from "react";
import "./TopBar.scss";
import wifi from "./../../img/wifi.png";
import signal from "./../../img/signal.png";
import lowBattery from "./../../img/low-battery-level.png";
const TopBar = () => {
  return (
    <div className="Topbar">
      <img src={wifi} alt="" />
      <img src={signal} alt="" />
      <img src={lowBattery} alt="" />
    </div>
  );
};

export default TopBar;
