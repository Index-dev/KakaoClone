import React from "react";
import { Link } from "react-router-dom";
import user from "../../asset/img/user.png";
import "./ProfileListItem.scss";
const ProfileListItem = () => {
  return (
    <Link to="/main/profile" style={{ textDecoration: "none", color: "black" }}>
      <div className="profileListItem__form">
        <div className="profileListItem__image">
          <img src={user} alt="" />
        </div>
        <div className="profileListItem__name">사용자 이름</div>
        <div className="profileListItem__message">상태메세지</div>
      </div>
    </Link>
  );
};

export default ProfileListItem;
