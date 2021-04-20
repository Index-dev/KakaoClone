import React from "react";
import { Link } from "react-router-dom";
import "./BottomMenu.css";
import users from "../../asset/img/user.png";
import chat from "../../asset/img/messenger.png";
import channel from "../../asset/img/global-network.png";
import shopping from "../../asset/img/shopping-bag.png";
import etc from "../../asset/img/menu.png";

const BottomMenu = () => {
  return (
    <div className="bottom__content">
      <Link to="/main">
        <img className="bottom__item" src={users} alt="" />
      </Link>
      <Link to="/chattings">
        <img className="bottom__item" src={chat} alt="" />
      </Link>
      <Link to="/channel">
        <img className="bottom__item" src={channel} alt="" />
      </Link>
      <Link to="/chattings">
        <img className="bottom__item" src={shopping} alt="" />
      </Link>
      <Link to="/chattings">
        <img className="bottom__item" src={etc} alt="" />
      </Link>
    </div>
  );
};

export default BottomMenu;
