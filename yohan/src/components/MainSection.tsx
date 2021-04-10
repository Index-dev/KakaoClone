import React from 'react';
import styled from 'styled-components';

import FriendList from './FriendList';

const MainSection = () => {
  return (
    <Section>
      <FriendList />
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 0 12px 12px 0;
`;

export default MainSection;
