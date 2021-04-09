import React from "react";
import "./BottomBar.css";
import users from "../../img/user.png";
import chat from "../../img/messenger.png";
import channel from "../../img/global-network.png";
import shopping from "../../img/shopping-bag.png";
import etc from "../../img/menu.png";

const BottomBar = () => {
  return (
    <div className="bottom__content">
      <div>
        <img src={users} />
      </div>
      <div>
        <img src={chat} />
      </div>
      <div>
        <img src={channel} />
      </div>
      <div>
        <img src={shopping} />
      </div>
      <div>
        <img src={etc} />
      </div>
    </div>
  );
};

export default BottomBar;
