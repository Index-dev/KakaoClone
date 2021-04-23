import React from "react";
import "./style.scss";
import TopBar from "../../components/Navbar/TopBar";
import BottomMenu from "../../components/Navbar/BottomMenu";
import TopMenu from "../../components/Navbar/TopMenu";
import Menu from "../../components/Shopping/Menu";
import videoSrc from "../../asset/video/concert_video.mp4";
import Content from "../../components/Shopping/Content";
import ContentBag from "../../components/Shopping/ContentBag";

const ShoppingPage = () => {
  return (
    <div className="Frame">
      <TopBar />
      <div className="shoppings__content">
        <TopMenu tabTitle="쇼핑" />
        <div className="content">
          <div className="content__ad">
            <div className="playerWrapper">
              <video controls>
                <source src={videoSrc}></source>
              </video>
              <div className="controlsWrapper"></div>
            </div>
            {/* <div>오늘의 라이브</div>
            <div>광고 제목</div>
            <div>광고 설명</div> */}
          </div>
          <div className="content__menu">
            <Menu />
          </div>
          <div>
            <Content category="책" />
          </div>
          <div>
            <ContentBag category="가방" />
          </div>

          <div>
            <Content category="테크" />
          </div>
        </div>
        <BottomMenu />
      </div>
    </div>
  );
};

export default ShoppingPage;
