import React from "react";
import "./style.scss";
import TopBar from "../../components/Navbar/TopBar";
import BottomMenu from "../../components/Navbar/BottomMenu";
import menu from "../../asset/img/list.png";
function ChannelPage() {
  return (
    <div className="Frame">
      <TopBar />
      <div className="main__content">
        {/* top menu 모양이 다름 */}
        {/* <TopMenu tabTitle="채널" /> */}
        <div className="channel__top">
          <ul>
            <li>코로나19</li>
            <li>톡업데이트</li>
            <li>#뉴스</li>
            <li>카카오TV</li>
            <li>쇼핑</li>
            <li>Fun</li>
            <li>연예</li>
            <li>스포츠</li>
            <li>공연</li>
            <li>뮤직</li>
          </ul>
          {/* 임시 사용 */}
          <div>
            <img src={menu} width="20px" alt="" />
          </div>
        </div>
        <div className="content">내용</div>
        <BottomMenu />
      </div>
    </div>
  );
}

export default ChannelPage;
