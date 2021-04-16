import styled from "styled-components";

function Setting() {
    return <Container>Setting</Container>;
}

export default Setting;

const Container = styled.div`
    width: 100%;
    height: ${window.innerHeight - 20}px;
    max-height: 900px;
    border: 1px solid black;
`;
