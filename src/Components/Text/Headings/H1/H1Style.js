import styled from "styled-components";

const H1Container = styled.h1`
    font-family: 'schwifty';
    font-weight: bold;
    font-size: 60px;
    color: #13ADC4;
    -webkit-text-stroke: 2px #F8F641;

    &.h1-cursor{
        z-index: 1;
        position: relative;
        top: 100px
    }
`;

export default H1Container;