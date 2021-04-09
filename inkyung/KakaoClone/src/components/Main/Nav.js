import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import {FcMusic, FcAdvertising, FcServices, FcSearch} from "react-icons/fc";

class Nav extends React.Component {
    render(){
        return(
            <Frame>
                <Home>
                    <Link to={"/main"} style={{ textDecoration: "none" }}><Hicon></Hicon></Link>
                </Home>
                <Talk>
                    <Link to={"/chatting"} style={{ textDecoration: "none" }}><Ticon></Ticon></Link>
                </Talk>
                <Search>
                    <Link to={"/search"} style={{ textDecoration: "none" }}><Scicon></Scicon></Link>
                </Search>
                <Setting>
                    <Link to={"/setting"} style={{ textDecoration: "none" }}><Sicon></Sicon></Link>
                </Setting>
            </Frame>
        )
    }
}

const Frame = styled.div`
    background-color: #ffe6e6;
    grid-area: nav;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas: "home talk search setting";
`

const Home = styled.div`
    grid-area: home;
    align-items: center; 
    justify-content: center; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    &:hover{
        background-color: white;
    }
`;

const Talk = styled.div`
    grid-area: talk;
    align-items: center; 
    justify-content: center; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    &:hover{
        background-color: white;
    }
`;

const Search = styled.div`
    grid-area: search;
    align-items: center; 
    justify-content: center;
    display: flex; 
    align-items: center; 
    justify-content: center; 
    &:hover{
        background-color: white;
    }
`;


const Setting = styled.div`
    grid-area: setting;
    align-items: center; 
    justify-content: center;
    display: flex; 
    align-items: center; 
    justify-content: center;
    &:hover{
        background-color: white;
    }
`;

export const Hicon = styled(FcMusic)`
    font-size: xxx-large;
    &:hover{
        background-color: white;
    }
`
export const Ticon = styled(FcAdvertising)`
    font-size: xxx-large;
    &:hover{
        background-color: white;
    }
`
export const Sicon = styled(FcServices)`
    font-size: xxx-large;
    &:hover{
        background-color: white;
    }
`
export const Scicon = styled(FcSearch)`
    font-size: xxx-large;
    &:hover{
        background-color: white;
    }
`

export default Nav;