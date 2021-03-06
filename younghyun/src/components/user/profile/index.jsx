import styled from "styled-components";
function Profile(props) {
  return (
    <Container statusMargin={props.statusText}>
      <Name>{props.name}</Name>
      {props.statusText && <StatusText>{props.statusText}</StatusText>}
    </Container>
  );
}
export default Profile;

const Container = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  ${(props) => (props.statusMargin ? "" : "margin: 0.5rem 0")}
`;
const Name = styled.div``;

const StatusText = styled.div`
  font-size: 0.8em;
  color: rgba(255, 255, 255, 0.4);
  margin-top: 0.2rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
