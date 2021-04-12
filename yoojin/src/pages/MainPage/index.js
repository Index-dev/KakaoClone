import React from "react";
import BottomMenu from "../../components/Navbar/BottomMenu";
import TopBar from "../../components/Navbar/TopBar";
import TopMenu from "../../components/Navbar/TopMenu";
import Profile from "../../components/Profile/Profile";
import "./style.css";
const Main = () => {
  return (
    <div className="Frame">
      <TopBar />
      <div className="main__content">
        <TopMenu tabTitle="목록" />
        <div className="content">
          <Profile />
          <div className="main__divider">
              내 멀티 프로필
          </div>
          <div className="main__divider">
              생일인 친구
          </div>
          <div className="main__divider">
              즐겨찾기
          </div>
          <div className="main__divider">
              채널
          </div>
          <div className="main__divider">
              친구
          </div>
        </div>
        <BottomMenu />
      </div>
    </div>
  );
};

export default Main;
