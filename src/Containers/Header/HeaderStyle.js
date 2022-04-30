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

    .button-theme{

    }

    @media screen and (max-width: 900px) {
        .link-nav{
            font-weight: bold;
            color: red;
        }
    }

    .link-nav{
        font-size: 26px;
        color: #fff;
        text-decoration: none;
        margin-right: 15px;

        &:hover{
            font-weight: 500;
            color: #13ADC4;
            text-decoration: underline #13ADC4;
        }
    }
`;

export default HeaderContainer;