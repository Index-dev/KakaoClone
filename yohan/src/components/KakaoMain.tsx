import React from 'react';
import styled from 'styled-components';
import Sidebar from './sidebar/Sidebar';
import MainSection from './mainSection/MainSection';

const KakaoMain = () => {
  return (
    <MainDiv>
      <Sidebar />
      <MainSection />
    </MainDiv>
  );
};

const MainDiv = styled.div`
  display: flex;
  position: relative;

  width: 500px;
  height: 650px;
  border-radius: 12px;
  background-color: #fff;
`;

export default KakaoMain;
