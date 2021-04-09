import React from "react";
import styled from "styled-components";
import F1 from "../../Photos/F1.png";
import F3 from "../../Photos/F3.png";

class Info extends React.Component{
    render(){
        return(
            <Frame>
                <ChatF>
                    <Fphoto>
                        <IMG src={F3}/>
                    </Fphoto>
                    <CInfo>
                        <Fname>친구3</Fname>
                        <Content>이거슨 내용이다.</Content>
                    </CInfo>
                    <Time>
                        <TC>오후 1:17</TC>
                    </Time>
                </ChatF>
                <ChatF>
                    <Fphoto>
                        <IMG src={F1}/>
                    </Fphoto>
                    <CInfo>
                        <Fname>친구1</Fname>
                        <Content>테스트용 내용이다.</Content>
                    </CInfo>
                    <Time>
                        <TC>오전 9:32</TC>
                    </Time>
                </ChatF>
            </Frame>
        )
    }
}

const Frame = styled.div`
    display: grid;
    grid-template-rows: repeat(auto-fill, minmax(60px, 1fr));
    overflow: auto;
`

const ChatF = styled.div`
    height: 60px;
    display: grid; 
    padding-left: 5%;
    grid-template-columns: 15% 50% 30%;
    grid-template-areas: "img info time";
    &:hover {
        cursor: pointer;
        background-color: #dbdbdb;
    }
`

const Fphoto = styled.div`
    grid-area: img;
    display: flex; 
    align-items: center;
`

const IMG = styled.img`
    display: flex;
    justify-content: center;
    text-align: center;
    width: 2.5em;
    height: 2.5em;
    object-fit: cover;
    border-radius: 50%;
    border: 1px solid gray;
`
const CInfo = styled.div`
    grid-area: info;
    display: inline;
    padding-left: 5%;
    display: flex; 
    align-items: center; 
    justify-content: left; 
    display: inline;
    padding-top: 3%;
`

const Fname = styled.div``

const Content = styled.div`
    color: lightslategray;
    font-size: medium;
`

const Time = styled.div`
   grid-area: time;
   text-align: right;
   padding-top: 10%;
`

const TC = styled.div`
    font-size: small;
    color: lightgray;
`

export default Info;

