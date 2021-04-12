import React from 'react'
import BottomMenu from '../../components/Navbar/BottomMenu';
import TopBar from '../../components/Navbar/TopBar';
import TopMenu from '../../components/Navbar/TopMenu';
import Profile from '../../components/Profile/Profile';
import './style.css';
const Main=()=> {
    return (
        <div className="Frame">
            <TopBar/>
            <div className="main__content">
            <TopMenu/>
                <div className="content">
                    <Profile/>
                </div>
            <BottomMenu/>
            </div>
        </div>
    )
}

export default Main
