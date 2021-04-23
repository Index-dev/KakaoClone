import React, { useState } from "react";
import { Link } from "react-router-dom";
import chatRoomImg from "../../asset/img/conversation.png";
import "./ChatListItem.scss";
const ChatListItem = () => {
  const [username, setUsername] = useState("nickname");
  return (
    <Link
      to={`/chattings/${username}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div className="chatlistitem__form">
        <div className="chatlistitem__image">
          <img src={chatRoomImg} alt="" />
        </div>
        <div className="chatlistitem__name">
          <div>{username}</div>
          <div>last message</div>
        </div>
        <div className="chatlistitem__message">time</div>
      </div>
    </Link>
  );
};

export default ChatListItem;
