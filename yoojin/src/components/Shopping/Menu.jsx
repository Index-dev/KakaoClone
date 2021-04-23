import React from "react";
import "./Menu.scss";
import gift from "../../asset/img/gift.png";
import serach from "../../asset/img/search.png";
import shopping from "../../asset/img/shopping-bag.png";
function Menu() {
  return (
    <div className="content__menu">
      <div className="menu__frame">
        <div className="menu__item">
          <img src={gift} alt="" />
          <div>선물하기</div>
        </div>

        <div className="menu__item">
          <img src={shopping} alt="" />
          <div>쇼핑하기</div>
        </div>
        <div className="menu__item">
          <img src={gift} alt="" />
          <div>메이커스</div>
        </div>
        <div className="menu__item">
          <img src={gift} alt="" />
          <div>프렌즈</div>
        </div>
        <div className="menu__item">
          <img src={gift} alt="" />
          <div>쇼핑라이브</div>
        </div>
      </div>
      <div className="content__menu_search">
        <div>
          <img src={serach} alt="" />
        </div>
        <input type="text" placeholder="Search..." />
      </div>
    </div>
  );
}

export default Menu;
