import styled from "styled-components";

function InfoContainer(props) {
    const AvartarSizeRate = props.name === "JAY_Z" ? "10" : "8";

    return (
        <Container width={AvartarSizeRate}>
            <Avartar image={props.image} />
        </Container>
    );
}
export default InfoContainer;

const Container = styled.div`
    width: ${(props) => props.width}%;

    flex-grow: 1;
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
