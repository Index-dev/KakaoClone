import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        height: 100vh;
        display: flex;
        justify-content:center;
        align-items:center;
        background-color: #f2f2f2;
        color: white;
        font-family: 'Do Hyeon', sans-serif;
        
        overflow-y: scroll;
    }
    
`;

export default GlobalStyle;
