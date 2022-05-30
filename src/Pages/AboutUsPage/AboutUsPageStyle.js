import styled from "styled-components";

const AboutUsContainer = styled.section`   

    font-family: 'Radio Canada';
    text-align: center;

    .h1_text_cabecera{
        width: 100%;
        font-family: 'Get Schwifty';
        font-size: 40px;
        font-weight: bold;
        color: #13ADC4;
        -webkit-text-stroke: 0.5px #F8F641;
        background-color: #484845;
        padding: 30px 0;
        text-align: center;
        margin: 0;
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