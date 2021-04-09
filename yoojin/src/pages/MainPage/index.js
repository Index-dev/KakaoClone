import React from 'react'
import BottomBar from '../../components/Navbar/BottomBar';
import TopBar from '../../components/Navbar/TopBar';
import Profile from '../../components/Profile/Profile';
import './style.css';
const Main=()=> {
    return (
        <div className="Frame">
            <TopBar/>
            <div className="main__content">
                <div className="content">
                    <Profile/>
                </div>
            <BottomBar/>
            </div>
        </div>
    )
}

export default Main
