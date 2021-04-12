import React from "react";
import "./TopMenu.scss";
import search from "../../img/search.png";
import add from "../../img/add-user.png";
import music from "../../img/music.png";
import setting from "../../img/settings.png";
const TopMenu = ({ tabTitle }) => {
  return (
    <div className="topmenu__frame">
      <div className="topmenu__title"> {tabTitle}</div>
      <div className="topmenu__subfunc">
        <img src={search} alt="" />
        <img src={add} alt="" />
        <img src={music} alt="" />
        <img src={setting} alt="" />
      </div>
    </div>
  );
};

export default TopMenu;
