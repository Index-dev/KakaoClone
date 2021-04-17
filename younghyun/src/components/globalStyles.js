import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    body {
        display: flex;
        justify-content:center;
        align-items:center;
        background-color: #f2f2f2;

        font-family: 'Do Hyeon', sans-serif;
        color: #070707;
        
        margin: 0;

        -ms-overflow-style: none;
        &::-webkit-scrollbar {
            display: none;
        }

    }
    
`;

export default GlobalStyle;
