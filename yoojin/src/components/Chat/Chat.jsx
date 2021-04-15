import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Chat.scss";
import TopBar from "../Navbar/TopBar";
import TopMenu from "../Navbar/TopMenu";
import search from "../../img/search.png";
import user from "../../img/user.png";
import message from "../../img/message.png";
import menu_btn from "../../img/menu_btn.png";
import emoji from "../../img/smile.png";
import hash from "../../img/sharp.png";
import back from "../../img/arrow.png";
import add from "../../img/add.png";
import ChatRightBar from "./ChatRightBar";
const Chat = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [messages,setMessage] = useState("안녕하세요");
  const onClickRightMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const backToChat = ()=>{
    setMenuOpen(!menuOpen);
  }
  return (
    <div>
      <TopBar />
      <div className="chat__frame">
        {/* <p> 지워저라잇!!!</p> */}
        {/* <TopMenu /> */}
        {menuOpen ? (
          <div className="chat__frame_blur">
            <div className="div_blank" onClick={backToChat}></div>
            <ChatRightBar />
          </div>
        ) : null}
        <div className="chat__topbar">
          <div className="chat__topbar_left">
            <Link
              to="/chattings"
              style={{ textDecoration: "none", color: "black" }}
            >
              <img src={back} alt="" className="chat__back" />
            </Link>
            <div>username</div>
          </div>
          <div className="chat__topbar_right">
            <img src={search} alt="" />
            <img src={menu_btn} alt="" onClick={onClickRightMenu} />
          </div>
        </div>
        <div className="chat__content">
          <div className="chat__content_row">
          <img className="user_profile" src={user} alt="" />
          {/* <img className="user_message"src={message} alt="" /> */}
          <div className="user_message">{messages}</div>
          </div>
        </div>
        <div className="chat__input">
          <img src={add} alt="menu_icon" />
          <input type="text" placeholder="메세지를 입력해주세요" />
          <img src={emoji} alt="emoji_icon" />
          <img src={hash} alt="hash_icon" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
