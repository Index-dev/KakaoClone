import React from 'react';
import Clock from 'react-live-clock';
import styled from "styled-components";
import {IoBatteryFullSharp} from "react-icons/io5";
import { FaSignal } from "react-icons/fa";

class Topbar extends React.Component {
    render(){
        return(
            <Frame>
                <Time>
                    <C format={'HH:mm'} ticking={true} timezone={'Asia/Seoul'} />
                </Time>
                <Grid>
                    <Icons>
                        <Signal><Sig/></Signal>
                        <Net>LTE</Net>
                        <BFrame><Battery/></BFrame>
                    </Icons>
                </Grid>
            </Frame>
        )
    }
}

const Frame = styled.div`
    grid-area: topbar;
    padding-left: 10%;
    padding-right: 5%;
    display: flex;
    justify-content: space-between;
`

const Grid = styled.div`
    display: flex; 
    align-items: center; 
    justify-content: center; 
`

const Icons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 4em;
`

const Signal = styled.div`
    display: flex; 
    align-items: center; 

`

const Net = styled.div`
    display: flex; 
    align-items: center;
`

const Time = styled.div`
    display: flex; 
    align-items: center; 
    justify-content: center; 
`

const BFrame = styled.div`
    display: flex; 
    align-items: center; 
`

export const Battery = styled(IoBatteryFullSharp)`
    font-size: x-large;
`

export const C = styled(Clock)`
    font-size: x-large;
`

export const Sig = styled(FaSignal)`
    font-size: large;
`

export default Topbar;