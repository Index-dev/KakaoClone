import React from "react";
import styled from "styled-components";
import { GrMailOption } from "react-icons/gr";
import { AiOutlineCalendar, AiOutlineGift } from "react-icons/ai";
import { FiGrid } from "react-icons/fi";
import { RiBearSmileLine } from "react-icons/ri";
import { SiMakerbot } from "react-icons/si";
import { HiOutlineScissors } from "react-icons/hi";
import { GiHanger } from "react-icons/gi";
import { BiStoreAlt } from "react-icons/bi";
import { ImSpoonKnife } from "react-icons/im";
import { MdFace } from "react-icons/md";
import { IoLogOutOutline,IoGameControllerOutline } from "react-icons/io5";

class InfoList extends React.Component{
    Logout = () => {
        window.location.replace("/")
    }

    render(){
        const {
            Logout
        } = this;

        return(
            <Frame>
                <Item>
                    <MailI/>
                    <Text>메일</Text>
                </Item>
                <Item>
                    <CalI/>
                    <Text>캘린더</Text>
                </Item>
                <Item>
                    <MakerI/>
                    <Text>메이커스</Text>
                </Item>
                <Item>
                    <GiftI/>
                    <Text>선물하기</Text>
                </Item>
                <Item>
                    <EmojiI/>
                    <Text>이모티콘</Text>
                </Item>
                <Item>
                    <FriendI/>
                    <Text>프렌즈</Text>
                </Item>
                <Item>
                    <StoreI/>
                    <Text>쇼핑하기</Text>
                </Item>
                <Item>
                    <StyleI/>
                    <Text>스타일</Text>
                </Item>
                <Item>
                    <OrderI/>
                    <Text>주문하기</Text>
                </Item>
                <Item>
                    <GameI/>
                    <Text>게임</Text>
                </Item>
                <Item>
                    <SalonI/>
                    <Text>헤어샵</Text>
                </Item>
                <Item>
                    <GridI/>
                    <Text>전체서비스</Text>
                </Item>
                <Item>
                    <Button onClick={Logout}>
                        <LogoutI/>
                        <Text>로그아웃</Text>
                    </Button>
                </Item>
            </Frame>
        )
    }
}

const Frame = styled.div`
    margin-left: 5%;
    margin-right: 5%;
    grid-area: infolist;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-template-rows: repeat(4,1fr);
    overflow: auto;
`

const Item = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center; 
    justify-content: center; 

    &:hover {
        cursor: pointer;
        background-color: #f5f5f5;
    }
`

const Text = styled.div`
    font-weight: 100;
    font-size: smaller;
`

const Button = styled.button`
    border: none;
    background-color: transparent;
`

export const MailI = styled(GrMailOption)`
    font-size: xx-large;
`

export const CalI = styled(AiOutlineCalendar)`
font-size: xx-large;
`

export const GiftI = styled(AiOutlineGift)`
font-size: xx-large;
`

export const GridI = styled(FiGrid)`
font-size: xx-large;
`

export const StoreI = styled(BiStoreAlt)`
font-size: xx-large;
`

export const OrderI = styled(ImSpoonKnife)`
font-size: xx-large;
`

export const GameI = styled(IoGameControllerOutline)`
font-size: xx-large;
`

export const LogoutI = styled(IoLogOutOutline)`
font-size: xx-large;
`

export const StyleI = styled(GiHanger)`
font-size: xx-large;
`

export const SalonI = styled(HiOutlineScissors)`
font-size: xx-large;
transform: rotate(90deg);
`

export const FriendI = styled(RiBearSmileLine)`
font-size: xx-large;
`

export const EmojiI = styled(MdFace)`
font-size: xx-large;
`

export const MakerI = styled(SiMakerbot)`
font-size: xx-large;
`

export default InfoList;