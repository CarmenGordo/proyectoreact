import styled from "styled-components";

const CardsContainer = styled.div`
    width: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
    margin: 30px 30px;
    border-radius: 10px;
    text-align: center;

    .container_card{
        padding: 10px;
        background-color: white;
        border-radius: 10px;
    }

    .img_character{
        width: 100%;
        height: 250px;
        border-radius: 10px 10px 0 0;
    }

    .name_character{
        background-color: #C4C4C4;
        width: 250px;
        height: 90px;
        max-height: 100px;
        border-radius: 0 0 10px 10px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: row wrap;
        margin-top: -5px;

        h3{
            font-family: 'Shlop';
            font-size: 30px;
        }
    }

    // comprobacion de estatus
    .principal{
        border-radius: 10px;
        border: solid 2px #13ADC4;
        
        &:hover{
            filter: drop-shadow(0 0 15px #13ADC4);
        }
    }

    .dead{
       border-radius: 10px;
       border: solid 2px #E4425A;
       
       &:hover{
        filter: drop-shadow(0 0 15px #E4425A);
       }
    }

    .alive{
       border-radius: 10px;
       border: solid 2px #81D145;

       &:hover{
        filter: drop-shadow(0 0 15px #81D145);
       }
    }

    .missing{
       border-radius: 10px;
       border: solid 2px #F8F641;

       &:hover{
        filter: drop-shadow(0 0 15px #F8F641);
       }
    }

`;

export default CardsContainer;