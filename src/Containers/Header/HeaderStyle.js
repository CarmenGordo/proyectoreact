import styled from "styled-components";

const HeaderContainer = styled.header`
    width: 100%;
    max-height: 150px;
    padding: 5px 45px;
    background-color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 1px black;
    color: white;

    .link-nav{
        color: #13ADC4;
        font-size: 26px;
        margin-left: 15px;

        &:hover{
            -webkit-text-stroke: 0.5px #F8F641;
        }
    }
`;

export default HeaderContainer;