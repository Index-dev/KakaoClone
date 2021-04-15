import React from "react";
import "./ChatRightBar.scss";
import arrowRight from "./../../img/right-arrow.png";
function ChatRightBar() {
  return (
    <div className="chat__rightbar__frame">
      <div className="menu_title">
        채팅방 서랍
      </div>
      <div className="menu_item1">
        사진, 동영상
        <img src={arrowRight} alt="" />
      </div>
      <div className="menu_item1">
        파일
        <img src={arrowRight} alt="" />
      </div>

      <div className="menu_item1">
        링크
        <img src={arrowRight} alt="" />
      </div>
      <hr />
      <div className="menu_item2">
        Talk 캘린더
        <img src={arrowRight} alt="" />
      </div>
      <hr />
      <div className="menu_item2">
        뮤직
        <img src={arrowRight} alt="" />
      </div>
      <hr />
      <div className="menu_item2">
        대화상대
        <img src={arrowRight} alt="" />
      </div>
    </div>
  );
}

export default ChatRightBar;
