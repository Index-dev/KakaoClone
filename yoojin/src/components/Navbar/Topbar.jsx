import React from 'react'
import './TopBar.css';
import wifi from './../../img/wifi.png'
import signal from './../../img/signal.png'
import lowBattery from './../../img/low-battery-level.png'
function TopBar() {
    return (
        <div className="Topbar">
            <img src={wifi}/>
            <img src={signal}/>
            <img src={lowBattery}/>
        </div>
    )
}

export default TopBar
