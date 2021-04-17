import React from 'react';
import styled from 'styled-components';

import SearchIcon from '@material-ui/icons/Search';

const ChattingList = () => {
  return (
    <MainSection>
      <SearchBar>
        <SearchIcon />
      </SearchBar>
    </MainSection>
  );
};

const MainSection = styled.section``;

const SearchBar = styled.div`
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
export default ChattingList;
