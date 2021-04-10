import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import NavBG from '../../Photos/NavBG.png'
import Nav1 from '../../Photos/Nav1.png'
import Nav2 from '../../Photos/Nav2.png'
import Nav3 from '../../Photos/Nav3.png'
import Nav4 from '../../Photos/Nav4.png'
import Nav5 from '../../Photos/Nav5.png'

class Nav extends React.Component {
    render(){
        return(
            <Frame>
                <Home>
                <Link to={"/main"} style={{ textDecoration: "none" }}><Icon src={Nav1}/></Link>
                </Home>
                <Talk>
                <Link to={"/chatting"} style={{ textDecoration: "none" }}><Icon src={Nav2}/></Link>
                </Talk>
                <News>
                <Link to={"/"} style={{ textDecoration: "none" }}><Icon src={Nav3}/></Link>
                </News>
                <Search>
                <Link to={"/search"} style={{ textDecoration: "none" }}><Icon src={Nav4}/></Link>
                </Search>
                <Setting>
                <Link to={"/setting"} style={{ textDecoration: "none" }}><Icon src={Nav5}/></Link>
                </Setting>
                

            </Frame>
        )
    }
}

const Frame = styled.div`
    background: url(${NavBG});
    background-repeat: no-repeat;
    background-size: cover;
    grid-area: nav;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-areas: "home talk news search setting";
    padding-top: 5%;
`

const Home = styled.div`
    grid-area: home;
    align-items: center; 
    justify-content: center; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
`;

const Talk = styled.div`
    grid-area: talk;
    align-items: center; 
    justify-content: center; 
    display: flex; 
    align-items: center; 
    justify-content: center; 

`;

const News = styled.div`
    grid-area: news;
    align-items: center; 
    justify-content: center; 
    display: flex; 
    align-items: center; 
    justify-content: center; 

`

const Search = styled.div`
    grid-area: search;
    align-items: center; 
    justify-content: center;
    display: flex; 
    align-items: center; 
    justify-content: center; 

`;


const Setting = styled.div`
    grid-area: setting;
    align-items: center; 
    justify-content: center;
    display: flex; 
    align-items: center; 
    justify-content: center;

`;

const Icon = styled.img`
    width: 2.5em;
    height: 2.5em;
`

export default Nav;