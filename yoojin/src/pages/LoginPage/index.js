import React from "react";
import { Link } from "react-router-dom";
import Topbar from "../../components/Navbar/TopBar";
import "./style.css";
import logo from "../../img/chat.png";
const Login = () => {
  return (
    <div className="frame">
      <Topbar />
      <div className="login__content">
        <div className="title"> 77ㅏ77ㅏ오 TALK</div>
        <img className="logo" src={logo} alt="" />
        <form>
          <input type="text" placeholder="Email" />
          <br />
          <input type="password" placeholder="password" />
          <br />
          <Link to="/main">
            <button className="login__button">Login</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
