import styled from "styled-components";

export const CharacterDetailsContainer = styled.div`

    .name_character{
        text-align: center;
        // font-family: 'Shlop';
        font-family: 'Rubik Glitch', cursive;
        font-size: 40px;
        color: #13ADC4;

        &:hover{
            -webkit-text-stroke: 0.5px #F8F641;
        }
    }

    .card_character{
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-flow: row wrap;
    }

    .img_character{
        width: 400px;
        height: 450px;
        border-radius: 10px;
    }

    .info_character{
        background-color: #C4D560;
        min-width: 400px;
        border-radius: 10px;
        margin-left: 15px;
        padding: 20px;
        color: white;
        font-family: 'Radio Canada';
        font-size: 20px;
    }

    @media screen and (max-width: 900px) {
        .info_character{
            min-width: 300px;
        }

        .img_character{
            text-align: center;
        }
    }

    @media screen and (max-width: 500px) {
        .info_character{
            min-width: 300px;
            margin-left: 0;
        }

        .img_character{
            text-align: center;
        }
    }


`;