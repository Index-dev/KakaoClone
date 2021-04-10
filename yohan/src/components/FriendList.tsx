import React from 'react';
import styled from 'styled-components';

const FriendList = () => {
  return <FriendListSection>친구</FriendListSection>;
};

const FriendListSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px;

  border-radius: 0 12px 12px 0;
  font-weight: bold;
  font-size: 1.2rem;
`;

export default FriendList;
