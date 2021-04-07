import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    max-width: ${(props) => props.maxWidth};
    height: 100%;
`;

function CenterAligner({ children, maxWidth }) {
    return (
        <>
            <Container maxWidth={maxWidth}>{children}</Container>
        </>
    );
}

export default CenterAligner;
