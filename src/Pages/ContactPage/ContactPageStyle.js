import styled from "styled-components";

const StyleTheme = JSON.parse(localStorage.getItem('name'));
console.log(StyleTheme)
const ContactPageContainer = styled.section `
    min-height: 300px;
    display: flex;
    justify-content: center;
    align-item: center;
    flex-flow: column wrap;
    
    

    .h1_text_cabecera{
        font-family: 'Get Schwifty';
        font-size: 40px;
        color: #13ADC4;
        -webkit-text-stroke: 1px #F8F641;
        background-color: #C4C4C4;
        padding: 30px 0;
        text-align: center;
        margin: 0;
    }

`;


export default ContactPageContainer;