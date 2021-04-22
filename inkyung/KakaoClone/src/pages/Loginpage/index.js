import React from "react";
import styled from "styled-components";
import Topbar from "../../components/Main/Topbar"
import logo from "../../Photos/logo.png";
import PWbackImg from "../../Photos/PWbackImg.png";
import LoginBG2 from "../../Photos/LoginBG2.png";

class Mainpage extends React.Component{
    count=0;

    countNum = () => {
        this.setState({
            count: this.count++
        }, () => {
                this.getNum();
            }
        )
    }

    descNum = () => {
        this.setState({
            count: this.count--
        }, () => {
                this.getNum();
            }
        )
    }

    getNum = () => {
        if(this.count === 4){
            window.location.replace("/main")
        }
        else if(this.count === 0){
            window.location.reload()
        }
    }

    render(){
        const {
            countNum,
            descNum
        } = this;
        
        return(
            <Frame>
                <Topbar></Topbar>
                <Logo>
                <Img src={logo}/>
                </Logo>
                <PadFrame>
                    <NButton onClick={countNum}>
                        <NumFrame>1</NumFrame>
                    </NButton>
                    <NButton onClick={countNum}>
                        <NumFrame>2</NumFrame>
                    </NButton>
                    <NButton onClick={countNum}>
                        <NumFrame>3</NumFrame>
                    </NButton>
                    <NButton onClick={countNum}>
                        <NumFrame>4</NumFrame>
                    </NButton>
                    <NButton onClick={countNum}>
                        <NumFrame>5</NumFrame>
                    </NButton>
                    <NButton onClick={countNum}>
                        <NumFrame>6</NumFrame>
                    </NButton>
                    <NButton onClick={countNum}>
                        <NumFrame>7</NumFrame>
                    </NButton>
                    <NButton onClick={countNum}>
                        <NumFrame>8</NumFrame>
                    </NButton>
                    <NButton onClick={countNum}>
                        <NumFrame>9</NumFrame>
                    </NButton>
                    <NButton>
                        <NumFrame>얼굴인식</NumFrame>
                    </NButton>
                    <NButton onClick={countNum}>
                        <NumFrame>0</NumFrame>
                    </NButton>
                    <NButton onClick={descNum}>
                        <NumFrame>지우기</NumFrame>
                    </NButton>
                </PadFrame>
            </Frame>
        )
    }
}

const Frame = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: 5% 45% 50%;
    grid-template-areas:
    "topbar"
    "logo"
    "pad"
    ;
`;

const Logo = styled.div`
    background: url(${LoginBG2});
    background-size: cover;
    grid-area: logo;
    display: flex; 
    align-items: center; 
    justify-content: center; 
`;

const Img = styled.img`
    display: flex;
    justify-content: center;
    text-align: center;
    width: 13em;
    height: 13em;
    object-fit: cover;
`;

const PadFrame = styled.div`
    display: grid;
    grid-template-rows: repeat(4,1fr);
    grid-template-columns: repeat(3,1fr);

`

const NumFrame = styled.div`
    display: flex; 
    align-items: center; 
    justify-content: center; 
    font-size: large;
    &:hover {
        font-size: xx-large;
    }
`

const NButton = styled.button`
    border: none;
    background-color: transparent;

    &:hover {
        background: url(${PWbackImg});
        background-repeat: no-repeat;
        background-position: center center;
    }
`

export default Mainpage;