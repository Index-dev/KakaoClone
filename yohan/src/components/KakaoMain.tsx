import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import MainSection from './MainSection';

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

  width: 500px;
  height: 650px;
  border-radius: 12px;
  background-color: #fff;
`;

export default KakaoMain;
