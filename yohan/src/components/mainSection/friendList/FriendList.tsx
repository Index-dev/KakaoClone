import React from 'react';
import styled from 'styled-components';

import Friend from './friend/Friend';

import SearchIcon from '@material-ui/icons/Search';

const FriendList = () => {
  return (
    <FriendListSection>
      <FriendListTitle>친구</FriendListTitle>
      <FriendListSearchBar>
        <SearchIcon />
        <input type="text" placeholder="이름으로 검색"></input>
      </FriendListSearchBar>
      <FriendListBody>
        <MyProfile>
          <TitleText>내 기본프로필</TitleText>
          <Friend name="요한" />
        </MyProfile>

        <Friends>
          <TitleText style={{ marginTop: '10px' }}>친구 7</TitleText>
          <Friend name="철수" status="힘들다" />
          <Friend name="영희" status="화이팅 !" />
          <Friend name="짱구" status="안녕하세요" />
          <Friend name="가나" status="아프리카?" />
          <Friend name="다라" status="아이고" />
          <Friend name="마바" status="주말좋아" />
          <Friend name="사자" status="어흥" />
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
  margin-top: 30px;
  display: flex;
  flex-direction: column;

  width: 95%;
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
`;

const Friends = styled.article``;

const FriendsList = styled.div``;

export default FriendList;
