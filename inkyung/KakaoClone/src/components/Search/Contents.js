import React from "react";
import styled from "styled-components";
import News from "../../components/Search/News"
import Weather from "../../components/Search/Weather"
import Ad2 from "../../Photos/Ad2.png";
import Advert from "../../Photos/Ad.mp4";
import Clock from 'react-live-clock';
import { FiArrowUpCircle} from "react-icons/fi";

class Content extends React.Component{
    goHome = () => {
        window.scrollTo(0,0);
     }

    render(){
        return(
            <Frame>
                <Ad>
                    <Img src={Ad2}/>
                </Ad>
                <Info>
                    <CInfo>
                        <Text>확진환자</Text>
                        <Num>108,945</Num>
                        <Dif>▲677</Dif>
                        <Time><C format={'MM'}/>.<C format={'DD'}/>&nbsp;0시 기준</Time>
                    </CInfo>
                    <QR>▒ QR 체크인</QR>
                </Info>
                <Space/>
                <News></News>
                <Space/>
                <Live2>
                    <V muted autoPlay loop src={Advert} type="video/mp4">
                    </V>
                </Live2>
                <Space/>
                <Weather></Weather>
                <Go>
                    <Up onClick={this.goHome}><FiArrowUpCircle/></Up>
                </Go>
            </Frame>
        )
    }

}


const Frame = styled.div`

`;

const Ad = styled.div`
    background-color: #f0f0f0;
    height: 3.5em;
`

const Img = styled.img`
    display: flex;
    justify-content: center;
    text-align: center;
    width: 100vw;
    height: 100%;
    object-fit: cover;
`

const Info = styled.div`
    height: 3em;
    display: flex; 
    align-items: center; 
    justify-content: space-between; 
    padding-left: 3%;
    padding-right: 3%;

`

const CInfo = styled.div`
    display: flex; 
    flex-direction: row;
    justify-content: space-around;
    font-weight: 100;
    padding-right: 2%;
    width: 70%;
`

const Text = styled.div``

const Num = styled.div``

const Dif = styled.div`
    color: red;
`

const Time = styled.div`
    color: gray;
    font-size: small;
    display: flex; 
    align-items: center; 
    justify-content: center; 

`

const QR = styled.div`
    font-weight: 100;
    width: 22%;
    height: 1em;
    font-size: smaller;
    border: 1px solid #4d83f0;
    color: #4d83f0;
    border-radius: 2em;
    padding-top: .5%;
    padding-bottom: 2%;
    padding-left: 3%;
    padding-right: 3%;
`

const Space = styled.div`
    background-color: #f0f0f0;
    height: .5em;
`

const Go = styled.div`
    height: 3em;
    display: flex; 
    align-items: center; 
    justify-content: center; 
`

const Up= styled.button`
    border: none;
    background: transparent;
    color: gray;
    font-size: xx-large;
`

const Live2 = styled.div`
    background-color: black;
    height: 10em;
`

const V = styled.video`
    display: flex;
    justify-content: center;
    text-align: center;
    width: 100vw;
    height: 10em;
    object-fit: cover;
`


export const C = styled(Clock)`
    
`

export default Content;