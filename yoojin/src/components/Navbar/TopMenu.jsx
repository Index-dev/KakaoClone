import React from "react";
import "./TopMenu.scss";
import search from "../../img/search.png";
import add from "../../img/add-user.png";
import music from "../../img/music.png";
import setting from "../../img/settings.png";
function TopMenu() {
  return (
    <div className="topbar__frame">
      <div className="topbar__title"> Tab_Name</div>
      <div className="topbar__subfunc">
        <img src={search} alt="" />
        <img src={add} alt="" />
        <img src={music} alt="" />
        <img src={setting} alt="" />
      </div>
    </div>
  );
}

export default TopMenu;
