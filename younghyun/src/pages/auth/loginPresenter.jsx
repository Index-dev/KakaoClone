import { useRef, useLayoutEffect, useEffect } from "react";
import styled from "styled-components";
import ruinedCity from "assets/image/ruinedCity.jpg";

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    background-color: rgba(0, 0, 0, 1);
    z-index: -1;
`;

const BackgroundImage = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url(${ruinedCity});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    opacity: 70%;
    z-index: -1;
`;

const LoginInfo = styled.div`
    min-width: 320px;
    width: 60vw;
    max-width: 360px;
    min-height: 512px;
    height: 97.08vw;
    max-height: 582px;

    position: absolute;
    top: 38%;
    left: 50%;

    background-color: rgba(0, 0, 0, 0.7);
    transform: translateX(-50%) translateY(-38%);
    z-index: 1;
`;

function LoginPresenter() {
    const containerRef = useRef();
    const divRef = useRef();

    // useEffect(() => {
    //     screenResize();
    // });
    // useLayoutEffect(() => {
    //     window.addEventListener("resize", screenResize);
    // });

    // function screenResize() {
    //     const blockHeight = calcHeight();
    //     const surplusHeight = calcSurplusHeight(blockHeight);
    //     if (divRef !== undefined) {
    //         console.log(surplusHeight, surplusHeight / 2.618);
    //         divRef.current.style.top = `${surplusHeight / 2.618}px`;
    //     }
    // }
    // function calcSurplusHeight(blockHeight) {
    //     let result = 0;
    //     if (containerRef !== undefined) {
    //         result = containerRef.current.clientHeight - blockHeight;
    //     }
    //     return result;
    // }
    // function calcHeight() {
    //     let result = 0;
    //     if (containerRef !== undefined) {
    //         result = containerRef.current.clientWidth * 0.9708;
    //         console.log(containerRef.current.clientHeight / 2);
    //         if (result < 512) return 512;
    //         else if (result > 582) return 582;
    //     }
    //     return result;
    // }

    return (
        <Container ref={containerRef}>
            <BackgroundImage />
            <LoginInfo ref={divRef}></LoginInfo>
        </Container>
    );
}

export default LoginPresenter;
