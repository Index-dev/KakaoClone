import React from "react";
import { Link } from "react-router-dom";
import ChatListItem from "../../components/Chat/ChatListItem";
import BottomMenu from "../../components/Navbar/BottomMenu";
import TopBar from "../../components/Navbar/TopBar";
import TopMenu from "../../components/Navbar/TopMenu";
import "./style.scss";

function ChatPage() {
  return (
    <div className="Frame">
      <TopBar />
      <div className="main__content">
        <TopMenu tabTitle="채팅" />
        <div className="content">
          <Link
            to="/chattings/chat"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ChatListItem />
          </Link>
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
        </div>
        <BottomMenu />
      </div>
    </div>
  );
}

export default ChatPage;
