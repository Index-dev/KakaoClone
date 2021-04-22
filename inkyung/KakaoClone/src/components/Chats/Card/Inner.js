import React from "react";
import styled from "styled-components";

const Inner = ({ post }) => {
    const { PImg, showMessage,cTime,NAME} = post;
    return(
            <ChatF>
                    <Fphoto>
                        <IMG src={PImg}/>
                    </Fphoto>
                    <CInfo>
                        <Fname>{NAME}</Fname>
                        <Content>{showMessage}</Content>
                    </CInfo>
                    <Time>
                        <TC>{cTime}</TC>
                    </Time>            
            </ChatF>
    )
}


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
    width: 90%;
    object-fit: cover;
    border-radius: 15px;
    border: 1px solid #ededed;
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



export default Inner;