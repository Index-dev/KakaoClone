import React from "react";
import "./ContentBag.scss";
import morning from "../../asset/img/morning_coffee.jpg";
const ContentBag = ({ category }) => {
  return (
    <div className="content">
      <div className="content__bag">
        <div>
          <img src={morning} alt="" />
        </div>
        <div className="content_category">오늘의 {category}</div>
        <div>{category} 소개 제목</div>
        <div>{category} 설명</div>
        <div>{category} 제목</div>
        <div>{category} 가격</div>
        <hr />
        <div className="content__item">
          <div>
            <img src={morning} alt="" />
          </div>
          <div className="content__item_info">
            <div>상품이름</div>
            <div>상품가격</div>
          </div>
        </div>
        <div className="content__item">
          <div>
            <img src={morning} alt="" />
          </div>
          <div className="content__item_info">
            <div>상품이름</div>
            <div>상품가격</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentBag;
