import React from "react";
import { Link } from "react-router-dom";
import "./Chat.scss";
import TopBar from "../Navbar/TopBar";
import TopMenu from "../Navbar/TopMenu";
import search from "../../img/search.png";
import user from "../../img/user.png";
const Chat = () => {
  return (
    <div>
      <TopBar />
      <div className="chat__frame">
        {/* <p> 지워저라잇!!!</p> */}
        {/* <TopMenu /> */}
        <div className="chat__topbar">
          <div className="chat__topbar_left">
            <Link
              to="/chattings"
              style={{ textDecoration: "none", color: "black" }}
            >
              <img src={search} alt="" />
            </Link>
            <div>username</div>
          </div>
          <div className="chat__topbar_right">
            <img src={search} alt="" />
            <img src={search} alt="" />
            <img src={search} alt="" />
          </div>
        </div>
        <div className="chat__content">
          <img src={user} alt="" />
        </div>
        <div className="chat__input">
          <img src={user} alt="menu_icon" />
          <input type="text" placeholder="메세지를 입력해주세요" />
          <img src={user} alt="emoji_icon" />
          <img src={user} alt="hash_icon" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
