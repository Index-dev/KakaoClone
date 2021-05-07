import React, { useState } from 'react';
import styled from 'styled-components';
import useStores from '../../../hooks/useStores';

import Friend from './friend/Friend';

import SearchIcon from '@material-ui/icons/Search';

const FriendList = () => {
  const { friendStore } = useStores();
  const friendList = friendStore.friendList;
  const [users, setUsers] = useState(friendList);

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setUsers(friendList.filter(user => user.name.includes(query)));

    if (e.target.value.length === 0) {
      setUsers(friendList);
    }
  };

  return (
    <FriendListSection>
      <FriendListTitle>친구</FriendListTitle>
      <FriendListSearchBar>
        <SearchIcon />
        <input
          type="text"
          placeholder="이름으로 검색"
          onChange={handleQueryChange}
        ></input>
      </FriendListSearchBar>
      <FriendListBody>
        <MyProfile>
          <TitleText>내 기본프로필</TitleText>
          <Friend
            name="요한"
            avatarSettings={{
              avatarWidth: 50,
              avatarHeight: 50,
              borderRadius: 21,
              iconSize: 2.3,
            }}
          />
        </MyProfile>

        <Friends>
          <TitleText style={{ marginTop: '10px' }}>
            친구 {users.length}
          </TitleText>
          {users.map(user => (
            <Friend name={user.name} status={user.intro} key={user.uid} />
          ))}
        </Friends>
      </FriendListBody>
    </FriendListSection>
  );
};

const FriendListSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  border-radius: 0 12px 12px 0;
`;

const FriendListTitle = styled.article`
  align-self: flex-start;
  font-weight: bold;
  font-size: 1rem;
  padding: 14px;
`;

const FriendListSearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f7f7f7;
  width: 95%;
  height: 20px;
  border-radius: 5px;
  margin-top: 8px;

  svg {
    font-size: 1rem;
    margin: 0 6px;
  }

  input {
    background-color: rgba(0, 0, 0, 0);
    border: none;
    width: 100%;
    height: 100%;

    font-size: 0.8rem;
  }
`;

const FriendListBody = styled.section`
  margin-top: 10px;
  padding-top: 15px;
  padding-bottom: 15px;

  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;

  width: 100%;
`;

const MyProfile = styled.article`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
`;

const TitleText = styled.div`
  color: #888;
  font-size: 0.8rem;
  margin-left: 12px;
`;

const Friends = styled.article``;

const FriendsList = styled.div``;

export default FriendList;
