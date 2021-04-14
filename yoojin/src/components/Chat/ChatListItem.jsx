import React from "react";
import chatRoomImg from "../../img/conversation.png";
import "./ChatListItem.scss";
const ChatListItem = () => {
  return (
    <div className="chatlistitem__form">
      <div className="chatlistitem__image">
        <img src={chatRoomImg} alt="" />
      </div>
      <div className="chatlistitem__name">
        <div>chat room name</div>
        <div>last message</div>
      </div>
      <div className="chatlistitem__message">time</div>
    </div>
  );
};

export default ChatListItem;
