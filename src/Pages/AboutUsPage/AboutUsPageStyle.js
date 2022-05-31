import styled from "styled-components";

const AboutUsContainer = styled.section`   

    // font-family: 'Radio Canada';
    font-family: 'Source Sans Pro', sans-serif  !important;
    text-align: center;
    margin-bottom: 50px ;

    .h1_text_cabecera{
        width: 100%;
        // font-family: 'Get Schwifty';
        font-family: 'Rubik Glitch', cursive;
        font-size: 40px;
        font-weight: bold;
        color: #13ADC4;
        -webkit-text-stroke: 0.5px #F8F641;
        background-color: #484845;
        padding: 30px 0;
        text-align: center;
        margin: 0;
    }

    div{
        text-align: end;
        margin-bottom: 30px;

        .switch{
            margin-top: 10px;
            min-height: 30px;
            background-color: #13ADC4;
            border: none;
            border-radius: 5px;
            cursor: pointer;

            &:hover{
                filter: drop-shadow(0 0 15px #13ADC4);
            }
        }
    }

    .p_text{
        margin: 20px 50px 20px 30px;
        color: black;
        font-size: 20px;

        // comprobar thema 
        span{
            color: #C4D560;
            font-weight: bold
        }
    }
`;

export default AboutUsContainer;