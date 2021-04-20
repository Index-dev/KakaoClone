import { useState } from "react";
import styled from "styled-components";

function NavBar() {
  const [selectedContent] = useState(getSelectedContent);

  return (
    <Container>
      <ContentContainer
        selected={selectedContent === "user"}
        onClick={() => linkTo("user")}
      >
        user
      </ContentContainer>
      <ContentContainer
        selected={selectedContent === "chat"}
        onClick={() => linkTo("chat")}
      >
        chat
      </ContentContainer>
      <ContentContainer
        selected={selectedContent === "issue"}
        onClick={() => linkTo("issue")}
      >
        issue
      </ContentContainer>
      <ContentContainer
        selected={selectedContent === "setting"}
        onClick={() => linkTo("setting")}
      >
        setting
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
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.selected && "#f7cb00"};
  color: ${(props) => props.selected && "black"};
  transition: background-color 0.2s, color 0.2s;
  cursor: pointer;
`;
