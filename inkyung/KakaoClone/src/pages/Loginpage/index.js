import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import Topbar from "../../components/Main/Topbar"
import logo from "../Loginpage/title.png";

class Mainpage extends React.Component{
    render(){
        return(
            <Frame>
                <Topbar></Topbar>
                <Logo>
                    <ImgF>
                    </ImgF>
                </Logo>
                <IFrame>
                    <IPFrame><ID placeholder="이름을 입력하세요."></ID></IPFrame>
                    <IPFrame><PW placeholder="비밀번호를 입력하세요." type="password"></PW></IPFrame>
                </IFrame>
                <BFrame>
                <Link to={"/main"} style={{ textDecoration: "none" }}>로그인</Link>
                </BFrame>
            </Frame>
        )
    }
}

const Frame = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: 5% 10% 25% 30% 15% 15%;
    grid-template-areas:
    "topbar"
    "."
    "logo"
    "iframe"
    "button"
    "."
    ;
`;

const Logo = styled.div`
    grid-area: logo;
    display: flex;
    justify-content: center;
    text-align: center;
`;

const ImgF = styled.div`
    width: 50%;
`

const Img = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: 100%;
    object-fit: cover;
`;

const IFrame = styled.div`
    grid-area: iframe;
    display: grid;
    grid-template-rows: 50% 50%;
    grid-template-areas: "ID" "PW";

`;

const IPFrame = styled.div`
    padding-left: 5%;
    padding-top: 10%;
`;

const ID = styled.input`
    grid-area: ID;
    font-size: 1rem;
    width: 90%;
    height: 2rem;
`;

const PW = styled.input`
    grid-area: PW;
    font-size: 1rem;
    width: 90%;
    height: 2rem;
`;

const BFrame = styled.div`
    grid-area: button;
    display: flex; 
    align-items: center; 
    justify-content: center; 
`;

export default Mainpage;