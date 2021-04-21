import styled from "styled-components";
import HeaderNavSection from "components/layout/paddingSection";
import InfoContainer from "components/userInfo";

function User() {
  return (
    <HeaderNavSection>
      <Container>
        <Title>친구</Title>
        <InfoContainer name="JAY_Z" themeSong="Do you hear the people sing" />
        <InfoContainer>ㄱㄴㄷ</InfoContainer>
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
