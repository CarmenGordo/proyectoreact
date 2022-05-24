import styled from "styled-components";

const CardsContainer = styled.div`
    width: 180px;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
    margin: 50px 20px;

    .img{
        widht: 100%;
        max-height: 174px;
        background-color: green;
    }

    .info{
        background-color: yellow;
        widht: 100%;
        max-height: 500px;
    }

    h3{
        color: black;
        font-size: 240px;
    }

`;

export default CardsContainer;