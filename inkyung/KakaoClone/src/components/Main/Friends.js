import React from 'react';
import styled from "styled-components";
import pt from "../../pages/Loginpage/title.png";

class Friends extends React.Component {
    render(){
        return(
            <Frame>
                <Fprofile>
                    <Fphoto>
                    </Fphoto>
                    <Fname>친구1</Fname>
                    <MDiv>
                        <Balloon>
                            <Fmessage>메세지1~</Fmessage>
                        </Balloon>
                   </MDiv>
                </Fprofile>
                <Fprofile>
                    <Fphoto>
                        <IMG></IMG>
                    </Fphoto>
                    <Fname>친구2</Fname>
                    <MDiv>
                        <Balloon>
                            <Fmessage>메세지2~</Fmessage>
                        </Balloon>
                   </MDiv>
                </Fprofile>
                <Fprofile>
                    <Fphoto>
                        <IMG></IMG>
                    </Fphoto>
                    <Fname>친구3</Fname>
                   <MDiv>
                        <Balloon>
                            <Fmessage>메세지3~</Fmessage>
                        </Balloon>
                   </MDiv>
                </Fprofile>
            </Frame>
        )
    }
}

const Frame = styled.div`
    grid-area: friendlist;
    display: grid;
    grid-template-rows: repeat(auto-fill, minmax(60px, 1fr));
    overflow: auto;
`

const Fprofile = styled.div`
    height: 60px;
    display: grid; 
    grid-template-columns: 15% 30% 50%;
    grid-template-areas: "img name msg";
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

const IMG = styled.div`
    height: 70%;
    width: 100%;
    border-radius: 50%;
    background-color: pink;
`

const Fname = styled.div`   
    padding-left: 10%;
    grid-area: name;
    display: flex; 
    align-items: center; 
`

const MDiv = styled.div`
    grid-area: msg;
    display: flex; 
    align-items: center; 
    justify-content: center;
`

const Fmessage = styled.div`
    display: flex; 
    align-items: center; 
    justify-content: center;  
`

const Balloon = styled.div`
    position: relative;
    width: 100%; 
    height: 70%;
    background: #f5f5f5; 
    border-radius: 10px;
    display: flex; 
    align-items: center; 
    justify-content: center;  

    &:after{
        border-top: 10px solid #f5f5f5; 
        border-left: 10px solid transparent; 
        border-right: 10px solid transparent; 
        border-bottom: 0px solid transparent; 
        content:""; 
        position:absolute;
        bottom:-10px;
        left: 30px;  
    }
`

export default Friends;