import React from "react";
import styled from "styled-components";
import Ad2 from "../../Photos/Ad2.png";
import Advert from "../../Photos/Ad.mp4";

class Content extends React.Component{
    render(){
        return(
            <Frame>
                <Ad>
                    <Img src={Ad2}/>
                </Ad>
                <Info>정보</Info>
                <Space/>
                <News>뉴스</News>
                <Space/>
                <Live2>
                    <V muted autoPlay loop src={Advert} type="video/mp4">
                    </V>
                </Live2>
                <Space/>
                <Live></Live>
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
`


const Space = styled.div`
    background-color: #f0f0f0;
    height: .5em;
`

const News = styled.div`
    height: 15em;
`

const Live = styled.div`
    background-color: black;
    height: 20em;
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

export default Content;