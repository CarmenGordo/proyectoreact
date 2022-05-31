import styled from "styled-components";

const ImgCursorContainer = styled.img`
    width: 70px;
    height: 70px;
    background-color: red;
    border: none;
    z-index: 2;

    &.cursor-rick{
        background-color: green;
        position: relative;
        top: -700px;
        left: -500px;
    }

    &.cursor-morty{
        background-color: brown;
        position: relative;
        top: -700px;
        right: -500px;
    }

    &.cursor-beth{
        background-color: yellow;
        position: relative;
        top: -90px;
        right: 500px;
    }

    &.cursor-summer{
        background-color: orange;
        position: relative;
        top: -90px;
        left: 500px;
    }

    &.cursor-jerry{
        background-color: blue;
        position: relative;
        top: -20px;
    }
    

`;

export default ImgCursorContainer;