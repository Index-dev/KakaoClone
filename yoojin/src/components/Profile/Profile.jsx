import React from 'react'
import user from '../../img/user.png';
import './Profile.scss'
const Profile =()=> {
    return (
        <div className="profile__form">
            <div className="profile__image">
                <img src={user} alt=""/>
            </div>
            <div className="profile__name">사용자 이름</div>
            <div className="profile__message">상태메세지</div>
        </div>
    )
}

export default Profile
