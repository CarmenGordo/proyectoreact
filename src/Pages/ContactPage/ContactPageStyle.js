import styled from "styled-components";

const ContactPageContainer = styled.section`
    text-align : center;

    .h1_text_cabecera{
        width: 100%;
        font-family: 'Get Schwifty';
        font-size: 40px;
        font-weight: bold;
        color: #13ADC4;
        -webkit-text-stroke: 0.5px #F8F641;
        background-color: #C4C4C4;
        padding: 30px 0;
        text-align: center;
        margin: 0;
    }

    @media screen and (max-width: 900px) {
        
        .h1_text_cabecera{
            font-size: 34px;
        }
    }
`;

export default ContactPageContainer;