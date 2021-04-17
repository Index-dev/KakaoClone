import React from 'react';
import styled from 'styled-components';

import FriendList from './friendList/FriendList';
import ChattingList from './chattingList/ChattingList';

const MainSection = () => {
  return (
    <Section>
      <FriendList />
      {false && <ChattingList />}
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  width: 440px;
  height: 100%;
  border-radius: 0 12px 12px 0;
`;

export default MainSection;
