import React, { useState } from "react";
import "./Divider.scss";
import down from "../../asset/img/arrow-down.png";
import up from "../../asset/img/arrow-up.png";
import ProfileListItem from "../../components/Profile/ProfileListItem";
const Divider = ({ dividerTitle, divState }) => {
  const [divFrnd, setDivFrnd] = useState(true);
  const stateHandler = () => {
    setDivFrnd(!divFrnd);
  };
  return (
    <div>
      <div className="divider__frame">
        <div className="divider__text">{dividerTitle}</div>
        <div className="divider__dirImg">
          {divFrnd ? (
            <img src={up} alt="" onClick={stateHandler} />
          ) : (
            <img src={down} alt="" onClick={stateHandler} />
          )}
        </div>
      </div>
      {divFrnd ? (
        <div>
          <ProfileListItem />
          <ProfileListItem />
          <ProfileListItem />
          <ProfileListItem />
          <ProfileListItem />
        </div>
      ) : null}
    </div>
  );
};

export default Divider;
