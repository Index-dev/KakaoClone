import React from "react";
import "./style.scss";
import TopBar from "../../components/Navbar/TopBar";
import BottomMenu from "../../components/Navbar/BottomMenu";
import menu from "../../asset/img/list.png";
function ChannelPage() {
  const menuItems = [
    "코로나19",
    "톡업데이트",
    "뉴스",
    "카카오tv",
    "쇼핑",
    "Fun",
    "연예",
    "스포츠",
    "공연",
    "뮤직"
  ];
  return (
    <div className="Frame">
      <TopBar />
      <div className="main__content">
        <div className="channel__top">
          <div className="channel__menu">
            {menuItems.map((item, i) => {
              return <div>{item}</div>;
            })}
          </div>
          {/* 임시 사용 */}
          <div>
            <img src={menu} width="20px" alt="" />
          </div>
        </div>
        <div className="content"></div>
        <BottomMenu />
      </div>
    </div>
  );
}

export default ChannelPage;
