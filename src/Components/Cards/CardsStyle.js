import styled from "styled-components";

const CardsContainer = styled.div `
    body{
        background-color: red;
    }

    background-color: ${localStorage.getItem('body')};
    width: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
    margin: 50px 15px;
    border-radius: 10px;
    text-align: center;


    // props que cambia con tema
    // comprobar stado de status para poner el color del borde
    // border: solid 3px #13ADC4;
    // padding: 8px;
    // filter: drop-shadow(0px 4px 4px rgba(19, 173, 196, 0.5)) drop-shadow(0px -4px 10px rgba(19, 173, 196, 0.5));



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

        // comprobacion de estatus
       .
    }
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