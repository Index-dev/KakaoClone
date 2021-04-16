import styled from "styled-components";

function NavBar() {
    return <Container>NavBar</Container>;
}

export default NavBar;

const Container = styled.div`
    width: 100%;
    height: ${window.innerHeight - 20}px;
    max-height: 900px;
    border: 1px solid black;
`;
