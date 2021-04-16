import styled from "styled-components";

function Issue() {
    return <Container>Issue</Container>;
}

export default Issue;

const Container = styled.div`
    width: 100%;
    height: ${window.innerHeight - 20}px;
    max-height: 900px;
    border: 1px solid black;
`;
