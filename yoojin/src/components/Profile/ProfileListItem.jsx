import React from 'react'
import user from '../../img/user.png';
import './ProfileListItem.scss'
const ProfileListItem =()=> {
    return (
        <div className="profileListItem__form">
            <div className="profileListItem__image">
                <img src={user} alt=""/>
            </div>
            <div className="profileListItem__name">사용자 이름</div>
            <div className="profileListItem__message">상태메세지</div>
        </div>
    )
}

export default ProfileListItem
