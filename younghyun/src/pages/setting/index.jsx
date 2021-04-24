import styled from "styled-components";
import HeaderNavSection from "components/layout/paddingSection";

function Setting() {
  return (
    <HeaderNavSection>
      <Container>
        <Title>Setting</Title>
      </Container>
    </HeaderNavSection>
  );
}
export default Setting;

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
