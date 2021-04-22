import styled from "styled-components";
import Profile from "components/user/profile";
import Melon from "components/user/melon";

function InfoContainer(props) {
  const AvartarSizeRate = props.name === "JAY_Z" ? "15" : "12";

  return (
    <Container onClick={props.onClick}>
      <AvartarContainer width={AvartarSizeRate}>
        <Avartar image={props.image} />
      </AvartarContainer>
      <PrifileContainer>
        <Profile name={props.name} statusText={props.statusText} />
        {props.themeSong && <Melon title={props.themeSong} />}
      </PrifileContainer>
    </Container>
  );
}
export default InfoContainer;

const Container = styled.div`
  width: 90%;
  min-height: 10px;

  display: flex;
  justify-content: center;

  color: white;

  padding: 0.5rem 0.2rem;
  cursor: pointer;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0.3);
`;

const AvartarContainer = styled.div`
  width: ${(props) => props.width}%;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  border-radius: 0.5rem;
`;
const Avartar = styled.div`
  width: 100%;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  padding-bottom: 100%;
`;

const PrifileContainer = styled.div`
  flex-grow: 7;
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 0.6em;

  padding: 0.3rem;
  padding-left: 0.8rem;
`;
