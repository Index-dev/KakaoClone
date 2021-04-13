import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import TopBar from "../../components/Navbar/TopBar";
import close from "../../img/close.png";
import qr_scan from "../../img/qr-code-scan.png";
import gift_box from "../../img/gift-box.png";
import userImage from "../../img/user.png";
import chat from "../../img/chat_1.png";
import setting from "../../img/settings.png";
import edit from "../../img/edit.png";
import story from "../../img/hangouts.png";

const Profile = () => {
  return (
    <div className="Frame">
      <TopBar />
      <div className="profile__frame_content">
        <div className="profile__topbar">
          <div className="profile__topbar__left">
            <Link to="/main">
              <img className="profile__topbar__menuItem" src={close} alt="" />
            </Link>
          </div>
          <div className="profile__topbar__right">
            <img className="profile__topbar__menuItem" src={qr_scan} alt="" />
            <img className="profile__topbar__menuItem" src={gift_box} alt="" />
            <img className="profile__topbar__menuItem" src={setting} alt="" />
          </div>
        </div>
        <div className="profile__user_content">
          <div className="profile__user_info">
            <div className="profile__image">
              <img src={userImage} alt="" />
            </div>
            <div className="profile__name">
              username
            </div>
          </div>
          <div className="profile__bottombar">
            <div className="profile__bottombar__menuitem">
              <img src={chat} alt="" />
              채팅하기
            </div>
            <div className="profile__bottombar__menuitem">
              <img src={edit} alt="" />
              프로필편집
            </div>
            <div className="profile__bottombar__menuitem">
              <img src={story} alt="" />
              까까오스토리
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
