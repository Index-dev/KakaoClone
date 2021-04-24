import styled from "styled-components";
import Preview from "components/chat/preview";

function ListContainer(props) {
  return (
    <Container onClick={props.onClick}>
      <AvartarContainer>
        <Avartar image={props.image} />
      </AvartarContainer>
      <PreviewContainer>
        <Preview name={props.name} statusText={props.statusText} />
      </PreviewContainer>
    </Container>
  );
}
export default ListContainer;

const Container = styled.div`
  width: 90%;
  min-height: 10px;

  display: flex;
  justify-content: center;

  color: white;

  padding: 1.3rem 0.2rem;
  cursor: pointer;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
`;

const AvartarContainer = styled.div`
  width: 10%;

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

const PreviewContainer = styled.div`
  flex-grow: 7;
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 0.6em;

  padding: 0.3rem;
  padding-left: 0.8rem;
`;
