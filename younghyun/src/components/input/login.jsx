import styled from "styled-components";

function LoginInputBar({ placeholder }) {
    return (
        <Container>
            <InputBar placeholder={placeholder} />
        </Container>
    );
}

export default LoginInputBar;

const Container = styled.div`
    width: 80%;
    height: 2rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    transition: 0.5s;
    cursor: pointer;

    &:before,
    &:after {
        position: absolute;
        transition: 0.5s;
        content: "";
        z-index: -1;
    }
    &:before {
        width: 0;
        height: 2rem;
        border-bottom: 1px solid red;
    }
    &:after {
        width: 100%;
        height: 2rem;
        border-bottom: 1px solid white;
    }
    &:hover {
        &::before {
            width: 100%;
        }
        &::after {
            width: 0%;
        }
        background-color: rgba(255, 255, 255, 0.3);
    }
`;

const InputBar = styled.input`
    width: 90%;
    background: none;
    outline: none;
    border: none;
    &:focus {
        outline: none;
    }
`;
