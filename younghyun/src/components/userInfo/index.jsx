import styled from "styled-components";

function InfoContainer(props) {
  const AvartarSizeRate = props.name === "JAY_Z" ? "15" : "8";

  return (
    <Container>
      <Avartar width={AvartarSizeRate} height={AvartarSizeRate} />
    </Container>
  );
}
export default InfoContainer;

const Container = styled.div`
  width: 80%;
  min-height: 10px;

  padding: 0.8rem 0.5rem;
  border-bottom: 1px solid rgba(247, 203, 0, 0.5);
`;

const Avartar = styled.div`
  width: ${(props) => props.width}%;
  height: ${(props) => props.width}%;
  border: 1px solid rgba(247, 203, 0, 0.5);
  border-radius: 1rem;
`;
