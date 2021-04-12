import React from "react";
import "./BottomMenu.css";
import users from "../../img/user.png";
import chat from "../../img/messenger.png";
import channel from "../../img/global-network.png";
import shopping from "../../img/shopping-bag.png";
import etc from "../../img/menu.png";

const BottomMenu = () => {
  return (
    <div className="bottom__content">
      <div>
        <img src={users} alt="" />
      </div>
      <div>
        <img src={chat} alt=""/>
      </div>
      <div>
        <img src={channel} alt=""/>
      </div>
      <div>
        <img src={shopping} alt=""/>
      </div>
      <div>
        <img src={etc} alt=""/>
      </div>
    </div>
  );
};

export default BottomMenu;
