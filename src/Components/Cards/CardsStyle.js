import styled from "styled-components";

const CardsContainer = styled.div`
      width: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
    margin: 50px 15px;
    border-radius: 10px;
    text-align: center;


    .img_character{
        widht: 100%;
        max-height: 174px;
        background-color: green;
    }

    .info_character{
        background-color: #C4C4C4;
        width: 250px;
        max-height: 500px;
        border-radius: 0 0 5px 5px;
        text-align: center;
    }

    li{
        text-align: center;
        color: black;
        font-size: 24px;
    }

    // comprobacion de estatus
    
    .dead{
        color: red
    }
    .alive{
        color: blue
    }
    .missing{
        color: yellow
    }

`;

export default CardsContainer;