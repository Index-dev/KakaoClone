import styled from "styled-components";
import HeaderNavSection from "components/layout/paddingSection";
import List from "components/chat/list";

import jayz from "assets/image/jayZLogo.png";
import ryan from "assets/image/ryan.jpg";
import apeach from "assets/image/apeach.jpg";

function User() {
  return (
    <HeaderNavSection>
      <Container>
        <Title>채팅</Title>
        <List
          name="나와의 채팅"
          statusText="두부 1모, 불닭볶음면"
          image={jayz}
          onClick={() => {
            window.location.href = "chat/detail";
          }}
        />
        <List
          name="재수없는 라이언"
          statusText="이젠 내 세상이야"
          image={ryan}
        />
        <List name="피치" statusText="잘자☆" image={apeach} />
      </Container>
    </HeaderNavSection>
  );
}
export default User;

const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 1.7em;
  color: "#f7cb00";
`;

const Title = styled.div`
  width: 80%;
  padding: 0.8rem 0.5rem;
`;
