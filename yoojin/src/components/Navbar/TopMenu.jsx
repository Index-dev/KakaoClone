import React from "react";
import "./TopMenu.scss";
import search from "../../asset/img/search.png";
import addUser from "../../asset/img/add-user.png";
import addChat from "../../asset/img/add-text.png";
import qrScan from "../../asset/img/qr-code-scan.png";
import music from "../../asset/img/music.png";
import setting from "../../asset/img/settings.png";
const TopMenu = ({ tabTitle }) => {
  return (
    <div className="topmenu__frame">
      <div className="topmenu__title"> {tabTitle}</div>
      <div className="topmenu__subfunc">
        {tabTitle !== "쇼핑" ? <img src={search} alt="" /> : null}
        {tabTitle === "목록" ? <img src={addUser} alt="" /> : null}
        {tabTitle === "채팅" ? <img src={addChat} alt="" /> : null}
        {tabTitle === "쇼핑" || tabTitle === "etc" ? (
          <img src={qrScan} alt="" />
        ) : null}
        <img src={music} alt="" />
        <img src={setting} alt="" />
      </div>
    </div>
  );
};

export default TopMenu;
