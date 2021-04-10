import React from "react";
import styled from "styled-components";
import InfoList from './InfoList';
import Ad from "../../Photos/ad.gif";

class Info extends React.Component{
    render(){
        return(
            <Frame>
                <Infos>
                    <Private>
                        <D1>
                            <Name>寅卿</Name>
                            <QR>▒ QR 체크인</QR>
                        </D1>
                        <D2>😆📌 무제한으로 이모티콘 즐기기 ></D2>
                    </Private>
                    <T></T>
                    <Private2>
                        <Pay>💬 Pay  0원</Pay>
                        <PInfo>
                            <div>송금</div>
                            <div>결제</div>
                            <div>자산</div>
                        </PInfo>
                    </Private2>
                    <InfoList/>
                </Infos>
                <Advertisement>
                    <IMG src={Ad}/>
                    <Text>Ad</Text>
                </Advertisement>
            </Frame>
        )
    }
}

const Frame = styled.div`
    grid-area: list;
    display: grid;
    grid-template-rows: 75% 25%;
    grid-template-areas:
        "infos"
        "ad"
    ;
`

const Infos = styled.div`
    grid-area: infos;
    display: grid;
    grid-template-rows: 18% 2% 8% auto;
    grid-template-areas:
        "profile"
        "."
        "."
        "infolist"
    ;
`

const Private = styled.div`
    margin-left: 5%;
    margin-right: 5%;
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 3%;
    padding-bottom: 3%;
    background-color: #ffeb52;
    border-top-left-radius: 1em;
    border-top-right-radius: 1em;
    box-shadow: 0 0 6px rgb(0 0 0 / 16%);
    display: grid;
    grid-template-rows: repeat(2,1fr);
    grid-template-areas:
        "d1"
        "d2"
    ;
`

const D1 = styled.div`
    grid-area: d1;
    display: flex;
    justify-content: space-between;
`

const Name = styled.div`
    
`

const QR = styled.div`
    font-weight: 100;
    width: 4.8em;
    height: 1em;
    font-size: smaller;
    border: 1px solid gray;
    border-radius: 2em;
    padding-top: .5%;
    padding-bottom: 2%;
    padding-left: 3%;
    padding-right: 3%;
    border-color: gray;
    background-color: #fcef9d;
`

const D2 = styled.div`
    padding-left: 3%;
    font-weight: 100;
    grid-area: d2;
    display: flex; 
    align-items: center; 
    justify-content: flex-start; 
    border: 1px solid transparent;
    border-radius: .3em;
    background-color: #fcf6d2;
`

const T = styled.div`
    border-top-left-radius: 1em;
    border-top-right-radius: 1em;
    border-top: 1px solid white;
    box-shadow: 1px -1px 0 rgb(0 0 0 / 16%), -1px 0 0 rgba(0 0 0 / 23%);
`

const Private2 = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 5%;
    margin-right: 5%;
    border-bottom: 1px solid lightgrey;
`

const Pay = styled.div`
    width: 5em;
    height: 1em;
    font-size: smaller;
    border: 1px solid gray;
    border-radius: 2em;
    padding-top: 1%;
    padding-bottom: 3%;
    padding-left: 3%;
    padding-right: 3%;
    border-color: gray;
`

const PInfo = styled.div`
    padding-top: 1%;
    width: 6.5em;
    font-weight: 100;
    display: flex;
    justify-content: space-around;
`

const Advertisement = styled.div`
    background-color: lightgrey;
`

const IMG = styled.img`
    width: 100%;
    height: 115%;
    object=fit: cover;
`

const Text = styled.div`
    z-index: 99;
    position: absolute;
    top: 70.5%;
    left: 93%;
    color: black;
    border: 1px solid lightgray;
    border-radius: .4em;
    background-color: lightgray;
    width: 1em;
    padding-left: 1%;
    padding-right: 1%;
    font-size: smaller;
`

export default Info;

