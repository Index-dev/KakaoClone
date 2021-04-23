import React from "react";
import "./Content.scss";
import morning from "../../asset/img/morning_coffee.jpg";
const Content = ({ category }) => {
  return (
    <div className="content">
      <div className="content__book">
        <div>
          <img src={morning} alt="" />
        </div>
        <div className="content_category">오늘의 {category}</div>
        <div>{category} 소개 제목</div>
        <div>{category} 설명</div>
        <div>{category} 제목</div>
        <div>{category} 가격</div>
      </div>
    </div>
  );
};

export default Content;
