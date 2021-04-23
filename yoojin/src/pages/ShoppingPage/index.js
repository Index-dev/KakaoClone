import React from "react";
import "./style.scss";
import TopBar from "../../components/Navbar/TopBar";
import BottomMenu from "../../components/Navbar/BottomMenu";
import TopMenu from "../../components/Navbar/TopMenu";
import Menu from "../../components/Shopping/Menu";
const ShoppingPage = () => {
  return (
    <div className="Frame">
      <TopBar />
      <div className="shoppings__content">
        <TopMenu tabTitle="쇼핑" />
        <div className="content">
          <div className="content__ad">
            <div>광고 영상</div>
            <div>오늘의 라이브</div>
            <div>광고 제목</div>
            <div>광고 설명</div>
          </div>
          <div className="content__menu">
            <Menu />
          </div>
          <div className="content__book">
            <div>책 사진</div>
            <div>오늘의 책</div>
            <div>책 소개 제목</div>
            <div>책 설명</div>
            <div>책 제목</div>
            <div>책 가격</div>
          </div>
          <div className="content__bag">
            <div>가방 사진</div>
            <div>오늘의 가방</div>
            <div>가방 소개 제목</div>
            <div>가방 설명</div>
            <div>가방 제목</div>
            <div>가방 가격</div>
            <hr />
            <div>
              <div>이미지</div>
              <div>상품이름</div>
              <div>상품가격</div>
            </div>
            <div>
              <div>이미지</div>
              <div>상품이름</div>
              <div>상품가격</div>
            </div>
          </div>
          <div className="content__tech">
            <div>제품 사진</div>
            <div>오늘의 테큰</div>
            <div>제품 소개 제목</div>
            <div>제품 설명</div>
            <div>제품 제목</div>
            <div>제품 가격</div>
          </div>
        </div>
        <BottomMenu />
      </div>
    </div>
  );
};

export default ShoppingPage;
