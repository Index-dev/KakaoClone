import React from 'react';
import styled from "styled-components";
import Bprofile from "../../Photos/profile.png";
import { BsChatFill } from "react-icons/bs";
import { ImPhone } from "react-icons/im";
import { AiOutlineClose } from "react-icons/ai";
import { HiPencil } from "react-icons/hi";
import { AiOutlineGift } from "react-icons/ai";
import { TiStarOutline } from "react-icons/ti";
import { BsPerson } from "react-icons/bs";

class Profile extends React.Component {

    render(){
        return(
            <Frame>
                <Cancel>
                    <CClick onClick={this.props.cancelProfile}><Close/></CClick>
                    <GridIcons>
                        <Icons>
                            <IOut><Change/></IOut>
                            <IOut>￦</IOut>
                            <IOut><Gift/></IOut>
                            <IOut><Fav/></IOut>
                        </Icons>
                    </GridIcons>
                </Cancel>
                <ImgF>
                    <MDiv>
                        <Music>작은 것들을 위한 시 - 방탄소년단 ▷</Music>
                    </MDiv>
                    <Area>
                        <Fphoto>
                            <IMG src={Bprofile}></IMG>
                        </Fphoto>
                        <Fname>홍길동<EditI/></Fname>
                        <Fmessage>부릉부릉</Fmessage>
                    </Area>
                </ImgF>
                <Bottom>
                    <Item>
                        <MsgI/>
                        <Text>1:1 채팅</Text>
                    </Item>
                    <Item>
                        <PhoneI/>
                        <Text>통화하기</Text>
                    </Item>
                </Bottom>
            </Frame>
        )
    }
}

const Frame = styled.div`
    min-width: 375px;
    max-width: 414px;
    z-index: 10;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: #95b4bf;
    display: grid;
    grid-template-rows: 5% 83% 12%;
    grid-template-areas: 
        "cancelf"
        "imgf"
        "bottom"
    ;
    z-index: 20;
`

const Cancel = styled.div`
    grid-area: cancelf;
    padding-top: 1%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const CClick = styled.button`
    border: none;
    background-color: transparent;
`

const GridIcons = styled.div`
    display: flex; 
    align-items: center; 
    justify-content: center; 
`

const Icons = styled.div`
    display: flex;
    justify-content: space-around;
    width: 8em;
`

const IOut = styled.div`
    height: 1.3em;
    width: 1.3em;
    border: 1px solid white;
    border-radius: 50%;
    background: transparent;
    display: flex; 
    align-items: center; 
    justify-content: center; 
    padding-bottom: 1%;
    color: white;
`

const ImgF = styled.div`
    grid-area: imgf;
    display: grid;
    padding-bottom: 5vh;
    grid-template-rows: 15vh 15vh 15vh 15vh auto;
    grid-template-areas:
    "."
    "music"
    "."
    "."
    "area"
    ;
`

const MDiv = styled.div`
    grid-area: music;
    display: flex; 
    align-items: center; 
    justify-content: center;
`
const Music = styled.div`
    font-size: small;
    font-weight: 100;
    border: 1px solid;
    border-radius: 2em;
    padding-top: 1.5%;
    padding-bottom: 1.5%;
    padding-left: 3.5%;
    padding-right: 3.5%;
    border-color: rgba(204,204,204,0.5);
    background-color: rgba(204,204,204,0.5);
    opacity: 50%:
`

const Area = styled.div`
    grid-area: area;
    display: inline;
`

const Fphoto = styled.div`
    grid-area: img;
    display: flex; 
    align-items: center; 
    justify-content: center; 
`

const IMG = styled.img`
    width: 5em;
    height: 5em;
    object-fit: cover;
    border-radius: 2em;
    border: 1.5px solid;
    border: none;
    background-color: gray;
`

const Fname = styled.div`   
    grid-area: name;
    display: flex; 
    align-items: center; 
    justify-content: center; 
    color: white;
    padding-top: 2%;
    font-weight: 100;
`

const Fmessage = styled.div`
    display: flex; 
    align-items: center; 
    justify-content: center;  
    color: white;
    padding-top: 2%;
    font-weight: 100;
`

const Bottom = styled.div`
    grid-area: bottom;
    border-top: 1px solid #f2f2f2;
    display: flex; 
    align-items: center; 
    justify-content: space-evenly;
`

const Item = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center; 
    justify-content: center; 
    color: white;
`

const Text = styled.div`
    font-weight: 100;
    font-size: smaller;
    padding-top: 1%;
`

export const MsgI = styled(BsChatFill)`
    font-size: larger;
`
export const PhoneI = styled(ImPhone)`
    font-size: larger;
`
export const Close = styled(AiOutlineClose)`
    font-size: x-large;
    color: white;
`
export const EditI = styled(HiPencil)`
    font-size: small;
    color: gray;
`

export const Gift = styled(AiOutlineGift)`
    font-size: large;
`
export const Change = styled(BsPerson)`
    font-size: large;
`
export const Fav = styled(TiStarOutline)`
    font-size: large;
`

export default Profile;