import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sixing: border-box;
        font-family: 'Source Sans Pro', sans-serif  !important;
    }

    body{
        font-family: 'Source Sans Pro', sans-serif  !important;

    }
    h1{
        font-family: 'Rubik Glitch', cursive !important;
    }

    img{
        max-width: 100%;
    }

    li{
        list-style: none;
    }

    a{
        text-decoration: none;
    }
`;

export default GlobalStyle;