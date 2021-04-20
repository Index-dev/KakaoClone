import React from "react";
import "./Divider.scss";
import down from "../../asset/img/arrow-down.png";

const Divider = ({ dividerTitle }) => {
  return (
    <div className="divider__frame">
      <div className="divider__text">{dividerTitle}</div>
      <div className="divider__dirImg">
        <img src={down} alt="" />
      </div>
    </div>
  );
};

export default Divider;
