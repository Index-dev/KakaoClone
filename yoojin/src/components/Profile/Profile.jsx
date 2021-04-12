import React from 'react'
import user from '../../img/user.png';
import './Profile.scss'
const Profile =()=> {
    return (
        <div className="profile__form">
            <div className="profile__image">
                <img src={user} alt=""/>
            </div>
            <div className="profile__name">이름</div>
            <div className="profile__message">message</div>
        </div>
    )
}

export default Profile
