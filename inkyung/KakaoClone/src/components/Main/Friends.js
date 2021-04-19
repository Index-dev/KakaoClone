import React from 'react';
import styled from "styled-components";
import Profile from "../Main/profile";
import { inject, observer } from "mobx-react";
import Card from "./Card/index";
import LCard from "./Card/LCard";

@inject("friendStore")
@observer
class Friends extends React.Component {
    state={
        showProfile: false,
        friends: [],
        fid: '',
        profileF: []
    };

    componentDidMount() {
        const { friendStore } = this.props;
        friendStore.getFriends(0,3);
        this.setState({
            friends: friendStore.returnFriends
        });
    }

    toggleProfile = (e) => {
        const { friendStore } = this.props;
        friendStore.getFriends(e,e+1);
        this.setState({
            showProfile: !this.state.showProfile,
            fid: e,
            profileF: friendStore.returnFriends[0]
        });
      }

    render(){
        const{friends,profileF}=this.state;
        return(
            <Out>
            <Line></Line>
            <FavFrame>
                <FTitle>즐겨찾기</FTitle>
                <FList>
                    {friends.map((item, index) => (
                        <LCard key={index} post={item} onToggle={this.toggleProfile}></LCard> 
                    ))}
                </FList>
            </FavFrame>
            <Line></Line>
            <FTitle>친구 3</FTitle>
            <Frame>
                {friends.map((item, index) => (
                    <Card key={index} post={item} onToggle={this.toggleProfile}></Card> 
                ))}
            </Frame>
            
            {this.state.showProfile?(
                <Profile value={profileF} cancelProfile={this.toggleProfile.bind(this)}/>
            ) : null}
            </Out>
        )
    }
}

const Out = styled.div`
    grid-area: friendlist;
    padding-right: 3%;
`

const FavFrame = styled.div`

`

const FTitle = styled.div`
    font-weight: 100;
`

const FList = styled.div`
    display: grid;
    grid-template-rows: repeat(auto-fill, minmax(50px, 1fr));
    overflow: auto;
`

const Frame = styled.div`
    display: grid;
    grid-template-rows: repeat(auto-fill, minmax(50px, 1fr));
    overflow: auto;
`

const Line = styled.hr`
    border:none;
    width: 98%;
    height: 1px;
    background-color: lightgray;
    margin-left: 0;
`

export default Friends;