import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    body {
        height: 100vh;
        display: flex;
        justify-content:center;
        align-items:center;
        background-color: #f2f2f2;

        font-family: 'Do Hyeon', sans-serif;
        color: #070707;
        
        margin: 0;
    }
    
`;

export default GlobalStyle;
