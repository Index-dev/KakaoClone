import React, { useState } from 'react';
import styled from 'styled-components';
import useStores from '../../../hooks/useStores';

import Chatting from './chatting/Chatting';
import SearchIcon from '@material-ui/icons/Search';

const ChattingList = () => {
  const { chattingStore } = useStores();
  const chattingList = chattingStore.chattingList;

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  return (
    <ChattingListSection>
      <ChattingListTitle>채팅</ChattingListTitle>
      <ChattingListSearchBar>
        <SearchIcon />
        <input
          type="text"
          placeholder="채팅방 이름, 참여자 검색"
          onChange={handleQueryChange}
        ></input>
      </ChattingListSearchBar>
      <ChattingListBody>
        {chattingList.map(chatting => (
          <Chatting key={chatting.chatId} chatting={chatting} />
        ))}
      </ChattingListBody>
    </ChattingListSection>
  );
};

const ChattingListSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  border-radius: 0 12px 12px 0;
`;

const ChattingListTitle = styled.article`
  align-self: flex-start;
  font-weight: bold;
  font-size: 1rem;
  padding: 14px;
`;

const ChattingListSearchBar = styled.div`
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

const ChattingListBody = styled.section`
  padding-bottom: 15px;

  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;

  width: 100%;
`;

export default ChattingList;
