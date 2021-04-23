import React, { useState } from "react";
import BottomMenu from "../../components/Navbar/BottomMenu";
import Divider from "../../components/Navbar/Divider";
import TopBar from "../../components/Navbar/TopBar";
import TopMenu from "../../components/Navbar/TopMenu";
import ProfileListItem from "../../components/Profile/ProfileListItem";
import "./style.css";
const Main = () => {
  return (
    <div className="Frame">
      <TopBar />
      <div className="main__content">
        <TopMenu tabTitle="목록" />
        <div className="content">
          <ProfileListItem />
          <Divider dividerTitle="내 멀티 프로필" />
          <Divider dividerTitle="생일인 친구" />
          <Divider dividerTitle="즐겨찾기" />
          <Divider dividerTitle="채널" />
          <Divider dividerTitle="친구" />
        </div>
        <BottomMenu />
      </div>
    </div>
  );
};

export default Main;
