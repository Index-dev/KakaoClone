import React from 'react';
import Clock from 'react-live-clock';
import styled from "styled-components";
import {FcChargeBattery} from "react-icons/fc";
import {CgSignal} from "react-icons/cg";

class Topbar extends React.Component {
    render(){
        return(
            <Frame>
                <Signal><Sig/></Signal>
                <Time>
                    <C format={'HH:mm'} ticking={true} timezone={'Asia/Seoul'} />
                </Time>
                <BFrame><Battery/></BFrame>
            </Frame>
        )
    }
}

const Frame = styled.div`
    grid-area: topbar;
    padding-left: 5%;
    padding-right: 5%;
    display: grid;
    grid-template-columns: 10% auto 10%;
    grid-template-areas: 'signal time battery';
`

const Signal = styled.div`
    grid-area: signal;
    display: flex; 
    align-items: center; 

`

const Time = styled.div`
    grid-area: time;
    display: flex; 
    align-items: center; 
    justify-content: center; 
`

const BFrame = styled.div`
    grid-area: battery;
    display: flex; 
    align-items: center; 
`

export const Battery = styled(FcChargeBattery)`
    transform: rotate(90deg);
    font-size: xx-large;
`

export const C = styled(Clock)`
    font-size: xx-large;
`

export const Sig = styled(CgSignal)`
    font-size: xx-large;
`

export default Topbar;