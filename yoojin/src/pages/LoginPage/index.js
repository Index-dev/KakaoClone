import React from 'react';
import Topbar from '../../components/Navbar/Topbar';
import "./style.css";
import logo from '../../img/chat.png'
const Login = ()=>{
    return (
        <div className = "Frame">
            <div className="title"> 77ㅏ77ㅏ오 TALK</div>
            <img className="logo"src={logo}/>
            <form>
                <input type="text" placeholder="Email"/><br/>
                <input type="password" placeholder="password"/><br/>
                <button>Login</button>
            </form>

        </div>
    )
}

export default Login;
