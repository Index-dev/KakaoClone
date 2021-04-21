import { useState } from "react";
import styled, { css } from "styled-components";

import SelectedEffect from "components/navbar/selectedEffect";

function NavBar() {
  const [selectedContent] = useState(getSelectedContent);

  return (
    <Container>
      <ContentContainer
        selected={selectedContent === "user"}
        onClick={() => linkTo("user")}
      >
        <TextContainer>user</TextContainer>
        {selectedContent === "user" && <SelectedEffect />}
      </ContentContainer>
      <ContentContainer
        selected={selectedContent === "chat"}
        onClick={() => linkTo("chat")}
      >
        {selectedContent === "chat" && <SelectedEffect />}
        <TextContainer>chat</TextContainer>
      </ContentContainer>
      <ContentContainer
        selected={selectedContent === "issue"}
        onClick={() => linkTo("issue")}
      >
        {selectedContent === "issue" && <SelectedEffect />}
        <TextContainer>issue</TextContainer>
      </ContentContainer>
      <ContentContainer
        selected={selectedContent === "setting"}
        onClick={() => linkTo("setting")}
      >
        {selectedContent === "setting" && <SelectedEffect />}
        <TextContainer>setting</TextContainer>
      </ContentContainer>
    </Container>
  );
}

export default NavBar;

function linkTo(link) {
  window.location.href = `/${link}`;
}

function getSelectedContent() {
  return window.location.pathname.split("/")[1];
}

const Container = styled.div`
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 0;
  display: grid;
  grid-template-rows: repeat(1, 1fr);
  grid-template-columns: repeat(4, 1fr);
  background-color: black;
  color: #f7cb00;

  border-top: 1px solid #212121;
  z-index: 99;
`;

const ContentContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s, color 0.2s;
  cursor: pointer;

  overflow: hidden;
  ${(props) =>
    props.selected &&
    css`
      position: relative;
      background: linear-gradient(-135deg, #f7cb00, #5c5f00);
      color: black;
      z-index: 1;
    `}
`;

const TextContainer = styled.h2`
  z-index: 1;
`;
